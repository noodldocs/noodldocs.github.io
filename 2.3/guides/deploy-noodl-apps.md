# Deploying Noodl applications
Using the built in Noodl cloud services is great for quickly getting your application up and sharing it with users. When you are ready to take the next step you can deploy your application to any cloud provider. In this guide we describe how to get it up and running on Google Cloud Platform (GCP).

A Noodl application consists of three parts:

* **The database** All Noodl applications must be backed by a database, you can use either a MongoDB or Postgres compatible database.

* **The backend platform** Noodl applications natively support the [Parse Platform](https://parseplatform.org) which is a great choice for a backend platform. A solid open source project with an active foundation supporting many of the critical functions needed.

* **Static frontend hosting** Noodl applications are SPAs (Single Page Applications) and need a place that serves the application frontend created when you deploy your application from Noodl.

## The Database
You can choose any MongoDB or Postgres compatible database, for this guide we recommend using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as it provides a free tier and you can choose to host it on GCP. You should always try to host your database using the same cloud provider and preferably in the same region.

Follow the instructions to setup your account and spin up your database cluster. Once your database is up and running you need to get the connection details for the next step. In your cluster dashboard choose *Connect* and then you need to perform a few steps:

* Make sure your database can be reached from any IP. You can choose the option in the connection popup or add the IP *0.0.0.0/0* to the whitelist.

* Create a new database user that will be used to connect to the database. Give it a username and password and note these as you will use them later.

Then you can move on to choosing the type of connection.

![](deploy-noodl-apps/mongodb-atlas-connect.png ':class=img-size-l')

In the next step you need to find the database connection URI, it will look something like this, replace username and password with the ones you choose above:

```bash
mongodb+srv://<username>:<password>@cluster0.fgfgf.mongodb.net/myNoodlDatabase?retryWrites=true&w=majority
```

Make sure you keep this URI safe as it includes everything you need to read and write to your database.

## The backend platform
Next up we will deploy an instance of the [Parse](https://parseplatform.org) backend platform that we will point our Noodl application to. For this we will need to install a few components first.

**Node.js**  
You will need *Node.js* and *Npm* installed on your system, you can find the latest versions here <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">npm</a>

**Docker**  
We will be packaging our backend into a container image before we deploy it to GCP, for that we will be using [Docker](https://www.docker.com/). Make sure to install the desktop tool and to sign up for the *Docker Hub* as that will be needed later.

**Google Cloud Platform**  
Finally you need to sign up for GCP, here you will need to provide your credit card details but Google provides a chunk of free credits that will be more that enough to get you started. You will also need to install the command line tool for GCP you can find the instructions [here](https://cloud.google.com/sdk/docs/install). After you have installed it make sure you authenticate with your google account. Run the following in a console.

```bash
gcloud auth login
```

Ok, great now we are ready to setup and build the backend platform. Start by creating a new folder, e.g. *my-noodl-server*, in the folder you need to create a file called *package.json* with the following content.

```javascript
{
  "name": "my-noodl-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node ./node_modules/.bin/parse-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
  }
}
```

When you have the *package.json* file in place you will run the following command in the folder.

```bash
npm install parse-server --save
```

This will download and install everything you need to run the backend server. Now it's time to package it all up into a container image. For this you need an additional file called *Dockerfile* with the following content.

```bash
FROM node:14-slim
RUN mkdir -p /noodl-server
WORKDIR /noodl-server
COPY . /noodl-server
RUN npm install
EXPOSE 1337
CMD ["npm","start"]
```

After you have created this file in the *my-noodl-server* folder (or what you ended up calling it) you can use Google Cloud Build to build the container.

Make sure you find the *project id* for your project in GCP. You can find it in the GCP dashboard of your project.

![](deploy-noodl-apps/gcp-project-id.png ':class=img-size-m')

When you have the *project id* at hand you can build the container image in the cloud and it will be available to spin up a web service in GCP.

```bash
gcloud builds submit --tag gcr.io/PROJECT-ID/my-noodl-server
```

When the build is complete you can deploy a web service with the following command (don't forget to replace *PROJECT-ID* as above, and the environment variables as described below):

```bash
gcloud run deploy --image gcr.io/PROJECT-ID/my-noodl-server --set-env-vars "PARSE_SERVER_APPLICATION_ID=my-noodl-server" --set-env-vars "PARSE_SERVER_MASTER_KEY=secret" --set-env-vars "PARSE_SERVER_DATABASE_URI=the-uri-from-mongodb"
```

In the command above you specify three environment variables for your new web services, these are important and are as follows:

* **PARSE_SERVER_APPLICATION_ID** needs to be an id for your application, you can really choose any but keep it simple. You will provide this in Noodl later to connect to your backend.

* **PARSE_SERVER_MASTER_KEY** is a secret key (password) that will give you full admin access to your backend and database. Keep it safe. You will need it when connecting to your backend from Noodl and use the dashboard. A string of random characters is generally a good choice.

* **PARSE_SERVER_DATABASE_URI** this is the URI you fetched from the MongoDB cluster above. 

After you run the command you will be prompted to provide the following information:

* The name of the service (just press enter to accept *my-noodl-server*)

* The region, make sure it's the same as where your database cluster.

* Make sure you answer **y** to **allow unauthenticated invocations**.

After a few minutes it will complete and you will have the URL for a working Noodl backend! Wohoo! With this URL and your application id you can connect to your backend from Noodl.

You can give it a quick test with the follow command (if you are on Mac or Linux):

```bash
curl https://<your-gcp-endpoint-from-above>/parse/health
```

It should reply with the following if everything is up and running as it should be (it might take a short while the first time you call this endpoint as it spins up the container on demand):

```bash
{"status":"ok"}
```

Now that you have a brand new backend up and running we can connect it to our Noodl application. If you open up your Noodl application and then open the cloud services popup, you can choose to create an new backend and then choose *External*. This will give you the option to provide the details of the backend from above.

![](deploy-noodl-apps/noodl-external-backend.png ':class=img-size-l')

After you have created the backend, now you can make it the default backend for your project. Click *Use as project backend*

![](deploy-noodl-apps/noodl-use-backend.png ':class=img-size-l')

Now it will work just like the built in Noodl backends, you can open the dashboard and manage the data in the backend just like you are used to.












