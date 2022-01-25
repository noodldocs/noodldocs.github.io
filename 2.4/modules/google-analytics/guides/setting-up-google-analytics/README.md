# Setting up Google Analytics

## What you will learn in this guide

This guide will show you how to add basic tracking with Google Analytics. After this guide you will be able to collect data on how many users that see your app, some of their behaviors and how they move through your application.

## Overview

We will go through the following steps:

-   Set up Google Analytics
-   Set up the Noodl Module
-   Allow tracking
-   Next steps

## Set up Google Analytics

To be able to use Google Analytics you need to have:

1. an Analytics account a _Google Analytics 4 (GA4)_ **Property**
2. with a _Web_ **Data Stream**
3. pointing to the deployed app URL (or a placeholder one, like `example.com`).

If this list is crystal clear, you already know how to do this and can skip along to the [next section](modules/google-analytics/guides/setting-up-google-analytics/?id=set-up-th-noodl-module) of this guide. Otherwise - Google has some handy documentation:

### Beginners guide

If you don't already have a Google Analytics account you need to [create one](https://support.google.com/analytics/answer/9304153#account&zippy=%2Cweb).

After that we need to [set up a **Property**](https://support.google.com/analytics/answer/9304153#property&zippy=%2Cweb), which is Google terminology for "a collection of **Data Streams** that you want to track". Make sure that you are using _Google Analytics 4_ and **NOT** _Universal Analytics_, as this Module only supports _GA4_.

So what is a **Data Stream**? Simply put, it's a connection that will stream data from your app to Google Analytics. You can have multiple **Data Streams** in your **Property**, but in most cases you will only need one.

Let's set up our first **Data Stream**. As Noodl outputs Web Apps, we will need to select the [**Web** option](https://support.google.com/analytics/answer/9304153#stream&zippy=%2Cweb). When asked for the URL of the primary website, this needs to be the URL for your app when it's deployed. `example.com` works for testing purposes as well.

If you want to track more than page views, make sure to enable _Enhanced Measurement_. This will give you a lot of extra tracking [out of the box](https://support.google.com/analytics/answer/9216061).

## Set up th Noodl Module

In the Google Analytics admin panel, go to your newly created **Data Stream** settings and copy the [Measurement ID](https://support.google.com/analytics/answer/9539598#find-G-ID). You will be needing this later.

Open up your Noodl Project and locate your **Root Compoenent**. It's easy to identify, since it has a small house icon in front of it and is called `App` (if you haven't renamed it).

<div class="ndl-image-with-background l">
image of Root component in component list

![](image.png)

</div>

Create a `Google Analytics Root` node and place it in the visual tree, as high up as you can, then paste the **Measurement ID** that you copied earlier into the `Measurement ID` input in the **Property Panel**.

<div class="ndl-image-with-background l">
image of node in visual tree, with pasted ID.

![](image.png)

</div>

## Allow tracking

To be able to track any user interactions we need to check the <span class="ndl-data">Allow Tracking</span> input. This can be done by simply checking the input in the **Property Panel**. In most cases it is recommended that you notify the user of your tracking and only track after having been given the users consent.

This can be done by using a **Button** node and a **Switch** node. Connect the **Switch** nodes <span class="ndl-data">Current State</span> output to the <span class="ndl-data">Allow Tracking</span> input on the **Google Analytics Root** node. Use the **Button** nodes <span class="ndl-signal">Click</span> output to flip the **Switch** to `on`.

<div class="ndl-image-with-background l">
image of how this setup looks.

![](image.png)

</div>

This will initiate the tracking when the user clicks the button. To make sure that everything is correct, we can use the <span class="ndl-signal">Starting Tracking</span> output on the **Google Analytics Root** node.

This will send a <span class="ndl-signal">signal</span> when the Google Analytics tracking code has been activated. This <span class="ndl-signal">signal</span> can also be used to hide the button after consent has been given. Simply use the same "flip the switch" trick we did above, but connect the **Switch** output to the <span class="ndl-data">Mounted</span> input on the **Button**.

<div class="ndl-image-with-background l">
image of how this setup looks.

![](image.png)

</div>

## Next steps

Congratulations! The Google Analytics integration is complete! You should now be able to see real time data in your [Google Analytics Reports](https://support.google.com/analytics/answer/9212670) view.

Google Analytics is very powerful and has a lot a lot of features, and it's highly recommended to learn more if you're new to it. Sadly, we've reached the end of this guide, but there are many learning resources. Google themselves provide free online courses in the [Analytics Academy](https://analytics.google.com/analytics/academy/) that are well worth checking out to learn all ins and outs. Less in-depth information is also available - one Google (or YouTube) search away.

When you feel it's time to go further on your tracking journey in Noodl, check out our guide on [tracking custom events](modules/google-analytics/guides/tracking-custom-events/).