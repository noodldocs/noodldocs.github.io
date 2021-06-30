# Deploying the backend service to GCP 
First you need to [sign up for GCP](https://cloud.google.com/), here you will need to provide your credit card details but Google provides a chunk of free credits that will be more that enough to get you started. You will also need to install the command line tool for GCP you can find the instructions [here](https://cloud.google.com/sdk/docs/install). After you have installed it make sure you authenticate with your google account. Run the following in a console.

```bash
gcloud auth login
```

Make sure you find the *project id* for your project in GCP. You can find it in the GCP dashboard of your project.

![](gcp-project-id.png ':class=img-size-m')

When you have the *project id* at hand you can build the container image in the cloud and it will be available to spin up a web service in GCP. Run the following command in your *my-noodl-server* folder.

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

* **PARSE_SERVER_DATABASE_URI** this is the URI you fetched from the MongoDB cluster you spun up before. 

After you run the command you will be prompted to provide the following information:

* The name of the service (just press enter to accept *my-noodl-server*)

* The region, make sure it's the same as where your database cluster.

* Make sure you answer **y** to **allow unauthenticated invocations**.

After a few minutes it will complete and you will have the URL for a working Noodl backend! Wohoo! With this URL and your application id you can connect to your backend from Noodl. 

You will get a generated URL from the Google Run service, if you prefer you can hook it up to your own custom domain by following [this](https://cloud.google.com/run/docs/mapping-custom-domains) guide.

Now [Head back](guides/deploy-noodl-apps?id=hooking-the-backend-up-to-your-application) to the deploy guide to hook up your application to your new backend.