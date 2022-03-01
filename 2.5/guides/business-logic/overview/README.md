# Building business logic in Noodl

A typical web app consists of three parts:
* The Frontend - This is the UI and the front end logic of your app. Buttons, pages, images and also the logic that decides how it's all UI is stitched together. What will happen when a certain button is clicked, etc.
* The Database - The persistent storage of your app data.
* The Business logic - The logic attached to the backend. This is sometimes also referred to as "Backend Logic". This is logic that's not directly connected to the flow and UI of the app or for other reasons are not fit to be executed on the client. Typical examples could be API calls to other services (an email service, location APIs) or logic to set up new relations in the database as new items are created or deleted.

The frontend logic is relatively straight forward to build in Noodl for example using [Navigation nodes](guides/navigation/web-navigation/basic-navigation/), [States](/nodes/animation/states.md) and [Condition](/nodes/utilities/logic/condition/) nodes.

Business logic has to be done in a different way. The two main ways of implementing business logic are to either write it in code using the [Parse Platform SDK](https://parseplatform.org/). To do this you need to set up your own external backend and database. This is described in [this guide](guides/deploy-noodl-apps/using-external-backend.md). This is by far the most flexible solution but also requires good coding knowledge since Parse SDK is based on Javascript and NodeJS.

If your Business Logic is connecting to external services and API:s, a much simpler, and often flexible enough, way of building Business Logic is to use [Zapier](https://zapier.com). This has another advantage - you can take advantage of the whole ecosystem of Zaps available on Zapier. Almost all popular services are available. You want to build a music app? Use the Spotify Zap, you want to be able to send text messages? Use the Twilio Zap.

Learn how to use Zapier from Noodl in [this](guides/business-logic/zapier/) guide.

