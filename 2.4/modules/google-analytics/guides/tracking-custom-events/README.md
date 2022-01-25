# Tracking custom events in Google Analytics

## What you will learn in this guide

This guide will take you through the process of setting up and tracking custom events in Google Analytics. It is recommended that you take a look through the [setup guide](modules/google-analytics/guides/setting-up-google-analytics/) before reading this one.

## Overview

We will learn about the following things:

-   Enhanced Measurement
-   Track static data
-   Track dynamic data

## Enhanced Measurement

In the setup guide we touched briefly on the [Enhanced Measurement](https://support.google.com/analytics/answer/9216061) that Google provides out of the box. While not being a part of the custom events tracking described in this guide, it can be well worth looking through the data collected when the _Enhanced Measurement_ is activated for your **Data Stream**. It just might contain the behavior you are trying to track.

## Sending static data

If the event we are trying to track is not included in _Enhanced Measurement_ we can send custom events ourselves using the **Send Google Analytics Data** node.

The **Send Google Analytics Data** node is built on top of Googles own `gtag` function, meaning that all _Google Analytics 4_ documentation you see that uses `gtag` can be directly copied and pasted into the node.

In Googles own documentation on [sending events](https://support.google.com/analytics/answer/11147304) we can find the following code in the section named "Send an event":

<!-- prettier-ignore-start -->
```html
<script>
    gtag("event", "publish", {
        role: "Writer",
    })
</script>
```
<!-- prettier-ignore-end -->

We can copy the data passed to the gtag function and paste it directly into the <span class="ndl-data">Gtag Tracking Data</span> input in the **Property Panel** for the **Send Google Analytics Data** node, like so:

<div class="ndl-image-with-background l">
image of pasted code in the input.

![](image.png)

</div>

We can now submit the data to Google by sending a signal to the nodes <span class="ndl-signal">Do</span> input.

<div class="ndl-image-with-background l">
image of the setup above.

![](image.png)

</div>

We have now successfully tracked our first custom event!

## Sending dynamic data

In some cases we want to provide more in depth data, that might be dependent on specific user input. In this case we can use the **String Format** node.

Let's build a small app that tracks the users favourite type of noodle dish. We'll use a **Text Input** and a **Button** to build a tiny form. When the **Button** is pressed, we will clear the **Text Input**.

<div class="ndl-image-with-background l">
image of the setup above.

![](image.png)

</div>

We are now ready to add the tracking.

Create a **String Format** node and open up it's **Property Panel**. In the <span class="ndl-data">Format</span> input we can now write our custom event.

<!-- prettier-ignore-start -->
```js
    "event", "submitted_dish", {"dish": "{userDish}" }
```
<!-- prettier-ignore-end -->

The `{userDish}` part of this code will create an input named <span class="ndl-data">userDish</span> on this node. We can now send the <span class="ndl-data">Text</span> from **Text Input** to the <span class="ndl-data">userDish</span> input on **String Format**. It is **very important** that the `{userDish}` is in quotation marks if the value is a <span class="ndl-data">string</span>, otherwise the tracking will fail. <span class="ndl-data">numbers</span> can be unquoted.

<div class="ndl-image-with-background l">
image of the setup above.

![](image.png)

</div>

Now we need to send this data to Google. Create a **Send Google Analytics Data** node, and connect the **String Format** <span class="ndl-data">Formatted</span> output to the **Send Google Analytics Data** <span class="ndl-data">Gtag Tracking Data</span> input, and the **Button** <span class="ndl-signal">Click</span> output to the **Send Google Analytics Data** <span class="ndl-signal">Do</span> input.

<div class="ndl-image-with-background l">
image of the setup above.

![](image.png)

</div>
