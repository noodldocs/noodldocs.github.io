# Deploying Noodl applications
Using the built in Noodl cloud services is great for quickly getting your application up and sharing it with users. When you are ready to take the next step you can deploy your application to virtually any cloud provider. Here we provide a guide series for how to get it up and running on Google Cloud Platform (GCP) or Amazon Web Services (AWS).

A Noodl application consists of three parts:

* **The database** All Noodl applications must be backed by a database, you can use either a MongoDB or Postgres compatible database.

* **The backend service** Noodl applications natively support the [Parse Platform](https://parseplatform.org) which is a great choice for a backend service. A solid open source project with an active foundation supporting many of the critical functions needed.

* **Static frontend hosting** Noodl applications are SPAs (Single Page Applications) and need a place that serves the application frontend created when you deploy your application from Noodl.

## The Database
You can choose any MongoDB or Postgres compatible database, for this guide we recommend using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as it provides a free tier and you can choose to host it on GCP or AWS. You should always try to host your database using the same cloud provider as the backend service and preferably in the same region.

Follow the instructions to setup your account and spin up your database cluster. Once your database is up and running you need to get the connection details for the next step. In your cluster dashboard choose *Connect* and then you need to perform a few steps:

* Make sure your database can be reached from any IP. You can choose the option in the connection popup or add the IP *0.0.0.0/0* to the whitelist.

* Create a new database user that will be used to connect to the database. Give it a username and password and note these as you will use them later. (If you follow the instructions in the connection popup you will create an admin user, that's good it will be needed by the backend service. But make sure you keep the credentials safe.)

Then you can move on to choosing the type of connection.

![](deploy-noodl-apps/mongodb-atlas-connect.png ':class=img-size-l')

In the next step you need to find the database connection URI, it will look something like this, replace username and password with the ones you choose above:

```bash
mongodb+srv://<username>:<password>@cluster0.xxxxxxx.mongodb.net/myNoodlDatabase?retryWrites=true&w=majority
```

Make sure you keep this URI safe as it includes everything you need to read and write to your database.

## The backend service
Next up we will deploy an instance of the [Parse](https://parseplatform.org) backend service that we will point our Noodl application to. For this we will need to install a few components first.

**Node.js**  
You will need *Node.js* and *Npm* installed on your system, you can find the latest versions here <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">npm</a>

**Docker**  
We will be packaging our backend into a container image before we deploy it to GCP or AWS, for that we will be using [Docker](https://www.docker.com/). Make sure to install the desktop tool and to sign up for the *Docker Hub* as that will be needed later.

Ok, great now we are ready to setup and build the backend service. Start by creating a new folder, e.g. *my-noodl-server*, in the folder you need to create a file called *package.json* with the following content.

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

This will download and install everything you need to run the backend service. Now it's time to package it all up into a container image. For this you need an additional file called *Dockerfile* with the following content.

```bash
FROM node:14-slim
RUN mkdir -p /noodl-server
WORKDIR /noodl-server
COPY . /noodl-server
RUN npm install
EXPOSE 1337
CMD ["npm","start"]
```

After you have created this file in the *my-noodl-server* folder (or what you ended up calling it) the backend service is ready to be deployed to your cloud provider.

* **Google Cloud Platform** If you want to deploy with GCP and you have the database cluster ready in GCP [Read here](guides/deploy-noodl-apps/deploy-backend-gcp).

* **Amazon Web Services** If tou want to deploy with AWS and you have the database cluster up and running in AWS [Read here](guides/deploy-noodl-apps/deploy-backend-aws).

## Hooking the backend up to your application

With your brand spanking new backend service up and running you can give it a quick test with the follow command (if you are on Mac or Linux):

```bash
curl https://<your-endpoint-for-the-backend-service>/parse/health
```

It should reply with the following if everything is up and running as it should be (it might take a short while the first time you call this endpoint as it spins up the container on demand):

```bash
{"status":"ok"}
```

Now let's connect it to our Noodl application. If you open up your Noodl application and then open the cloud services popup, you can choose to create an new backend and then choose *External*. This will give you the option to provide the details of the backend from above.

![](deploy-noodl-apps/noodl-external-backend.png ':class=img-size-l')

After you have created the backend, now you can make it the default backend for your project. Click *Use as project backend*

![](deploy-noodl-apps/noodl-use-backend.png ':class=img-size-l')

Now it will work just like the built in Noodl backends, you can open the dashboard and manage the data in the backend just like you are used to but the data is kept in your new database and the backend service is managed and scaled by your cloud provider.

## Static frontend hosting
Now with the backend in place and connected to your application the last step is to deploy the frontend of the application. Here you have two options:

**Deploy to a \*.noodl.app domain**  
You can deploy your application to a **noodl.app** domain for free. You deploy your application from the deploy popup in the editor (under the deploy to cloud section).

![](deploy-noodl-apps/noodl-deploy-to-cloud.png ':class=img-size-l')

You need to pick your domain prefix, this must be unique among all Noodl users. Then enter a short description and hit **Deploy**. Once the deploy is completed you will be able to access the application at the new URL.

**Deploy to your own hosting**  
If you want to use your own custom domain, or if you want features like faster globalized delivery via CDNs etc, you may want to host your frontend somewhere else. For this you will first deploy it locally and then upload it to your hosting provider of choice.

![](deploy-noodl-apps/noodl-deploy-to-folder.png ':class=img-size-l')

By using the *deploy to folder* section Noodl will save a version of your frontend to a folder on your local machine, this folder will contain everything needed and you can simply upload the content to your hosting service.

* **Google Cloud Platform** If you would like use GCP to host the frontend you can follow this [guide](https://cloud.google.com/storage/docs/hosting-static-website). There you will create a bucket, a load balancer and a CDN.

* **Amazon Web Services** If you prefer to use AWS you can watch this [video](https://www.youtube.com/watch?v=BpFKnPae1oY&ab_channel=AmazonWebServices) it will explain how to create an S3 bucket and how to route traffic using the AWS DNS service, Route 53.












