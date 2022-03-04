# MQTT <!-- {docsify-ignore-all} -->

In this guide we will create a small MQTT communication example using the _Send Message_ and _Receive Message_ nodes available in the MQTT module.

## Overview

MQTT is a very popular communication protocol between IoT devices. It's based on a simple publisher/subscriber architecture where all messages pass through an MQTT broker, who directs messages from publishers to subscribers. As a subscriber, you subscribe to _topics_, which are typically made up of different subpaths. As a publisher of messages, you publish your messages to these topics. A message can contain a _payload_, i.e. a data object with one or more pieces of data.

As an example, an IoT thermometer, called "thermometer1", may publish temperature and pressure data to "/thermometer1/thermometer" topic with a payload containing a time, a temperature and a pressure reading.

MQTT is a very capable protocol and we will only cover parts of it in this guide. You can read more about it [here](https://en.wikipedia.org/wiki/MQTT);

## Using the the MQTT module

First, let's create a new project using the minimal "Hello" template. Give the project a name, for example "MQTT Messaging".
Since the MQTT nodes are not part of the default node set in Noodl, we need to enable the MQTT module. Find the module tab in the sidebar and add the "MQTT" module.

Now two more nodes are available in your project, the [**Send Message**](modules/mqtt/send-message.md) and [**Receive Message**](modules/mqtt/receive-message.md) nodes.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide1.png" class="ndl-image medium"></img>  
</div>

Try adding a **Send Message** and **Receive Message** node to the project, to see that they are now available.

## Connecting to an MQTT broker

For the MQTT messaging to work, we need to connect to an MQTT broker. Setting up and hosting a commercial, secure MQTT broker is a bit of a hassle. So for this guide we will instead use the open MQTT broker "Shiftr". It's being hosted in the cloud so we don't need to worry about hosting it. Another good alternative is the open source broker [Mosquitto](https://mosquitto.org/) that you can run locally or host yourself.

Go to [shiftr.io](http://shiftr.io) and sign up for an account if you don't already have one. Also create a new "Name space" and a "Token" for the namespace. In the end you should have created an MQTT endpoint to use, similar to the one below.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide2.png" class="ndl-image medium"></img>  
</div>

Now go into your project settings and paste in the URL (beginning with "mqtt:") into the "Broker URL" field.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide3.png" class="ndl-image medium"></img>  
</div>

## Testing our MQTT broker

Ok, now we have everything to get started to send MQTT messages. Let's try it!

Start by adding a "Send Message" node. Set its topic to "mytopic" and add a payload called "myvalue".

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide4.png" class="ndl-image medium"></img>  
</div>

Now let's send our first message to the topic "mytopic". So we assign a value to the input "myvalue", using a **Number** node and connect the _Send_ signal to the click event of the background **Group**. Any value is fine, we just want to see if it's working.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide5.png" class="ndl-image medium"></img> 
</div>

When you start clicking the background rectangle, you should now be sending messages to the MQTT broker. If you bring up you web browser with your Shiftr name space topology you should be seeing some events entering the system everytime you click. Again, remember that the MQTT messages are being sent to a router hosted somewhere in the cloud, which means that any device with an internet connection can now connect to your Noodl app, or vice versa, by sending messages to the router.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide6.gif" class="ndl-image medium"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"3b093066-8241-2d44-8430-07b7e37b6977","type":"Group","x":177,"y":141.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"ada2b412-3417-a23c-b4c2-86a5dfa1d480","type":"Text","x":197,"y":223.5,"parameters":{"sizeMode":"contentSize","alignX":"center","alignY":"center","text":"Hello","color":"#171717","fontFamily":"Arial","position":"absolute","fontSize":{"value":30,"unit":"px"}},"ports":[],"children":[]}]},{"id":"f95cf4c6-2ad9-c84b-882d-865d015193c0","type":"Send Message","x":-30.5,"y":139,"parameters":{"topic":"mytopic","payload":"myvalue"},"ports":[],"children":[]},{"id":"fb4aa28a-06fc-6b1b-128c-78cb989e1455","type":"Number","x":191.5,"y":298,"parameters":{"value":25},"ports":[],"children":[]}],"connections":[{"fromId":"3b093066-8241-2d44-8430-07b7e37b6977","fromProperty":"onClick","toId":"f95cf4c6-2ad9-c84b-882d-865d015193c0","toProperty":"Send"},{"fromId":"fb4aa28a-06fc-6b1b-128c-78cb989e1455","fromProperty":"savedValue","toId":"f95cf4c6-2ad9-c84b-882d-865d015193c0","toProperty":"payload-myvalue"}]})'></button>
</div>

You can inspect the messages in Shiftr and see the payload that's being sent. Also try opening a few browser windows running your simple Noodl app. As you can see, there are now multiple clients in Shiftr that can publish messages to the "mytopic" topic. Each browser window is a publisher in the broker, as well as your Noodl Editor.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide7.png" class="ndl-image medium"></img>  
</div>

Now let's change things up slightly as we are going to receive messages as well. We are going to assign each client a random color. When you click the background, that color will be sent out to all subscribers of the topic "mytopic". A circle in the middle of the screen will present any received value.

The random color is generated using a **Color Blend** node with 5 different base colors. By generating a random number, between 0 and 5, we randomly pick a color on that color scale. Each client will have their own random number and respective color.

The color is published once the background is clicked, or rather, the random number is published. When you receive a message which will include the random number, that number is translated back to a color through a **Color Blend** node with the same colors as before.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide8.png" class="ndl-image medium"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"6643149e-ba94-b26f-bc40-80b79bfc01cf","type":"Group","x":177,"y":141.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"daadd5d9-073e-c3e7-0d4d-f5ec6ddcf190","type":"Circle","x":197,"y":243.5,"parameters":{"size":200,"position":"absolute","alignY":"center","alignX":"center","strokeEnabled":true,"strokeWidth":5,"strokeColor":"#FFFFFF"},"ports":[],"children":[]}]},{"id":"6c0a2207-03bd-835f-83a3-834b5a9548eb","type":"Send Message","x":-39.46794686634766,"y":12.167608604511884,"parameters":{"topic":"mytopic","payload":"myvalue"},"ports":[],"children":[]},{"id":"00f5506c-2a41-7c97-d1ec-4c1f17f83542","type":"Expression","x":334.05517426052154,"y":-157.0598440470801,"parameters":{"expression":"random()*5"},"ports":[],"children":[]},{"id":"00f617a2-baf5-5e99-e1ac-714af2f765cf","type":"Receive Message","x":366.07566421792484,"y":486.0503305263981,"parameters":{"topic":"mytopic","payload":"myvalue"},"ports":[],"children":[]},{"id":"9888cd86-341e-cc47-62d0-aa18095daa2a","type":"Color Blend","x":399.4325313988179,"y":17.225848316195083,"parameters":{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},"ports":[],"children":[]},{"id":"f82c3bf5-127e-6eba-20f1-397c8fd0b114","type":"Color Blend","x":387.8845576559488,"y":321.32249021174806,"parameters":{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},"ports":[],"children":[]}],"connections":[{"fromId":"6643149e-ba94-b26f-bc40-80b79bfc01cf","fromProperty":"onClick","toId":"6c0a2207-03bd-835f-83a3-834b5a9548eb","toProperty":"Send"},{"fromId":"00f5506c-2a41-7c97-d1ec-4c1f17f83542","fromProperty":"result","toId":"6c0a2207-03bd-835f-83a3-834b5a9548eb","toProperty":"payload-myvalue"},{"fromId":"00f5506c-2a41-7c97-d1ec-4c1f17f83542","fromProperty":"result","toId":"9888cd86-341e-cc47-62d0-aa18095daa2a","toProperty":"blendValue"},{"fromId":"9888cd86-341e-cc47-62d0-aa18095daa2a","fromProperty":"result","toId":"6643149e-ba94-b26f-bc40-80b79bfc01cf","toProperty":"backgroundColor"},{"fromId":"00f617a2-baf5-5e99-e1ac-714af2f765cf","fromProperty":"payload-myvalue","toId":"f82c3bf5-127e-6eba-20f1-397c8fd0b114","toProperty":"blendValue"},{"fromId":"f82c3bf5-127e-6eba-20f1-397c8fd0b114","fromProperty":"result","toId":"daadd5d9-073e-c3e7-0d4d-f5ec6ddcf190","toProperty":"fillColor"}]})'></button>
</div>

Let's load a couple of browser windows running your app, and maybe your mobile phone as well, and click around in the different windows. If everything works as expected you should see that the inner circles in all clients will change color to the background you just clicked.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide9.gif" class="ndl-image medium"></img>  
</div>

## Dynamic Topic names

We have now published and subscribed to messages on one single topic, basically broadcasting messages to all clients. You may want to identify yourself as a publisher, or be more selective on what messages you subscribe to. So let's divide the clients into five groups. You belong to a specific group (Group_1 - Group_5) depending on a random number (0-0.999... belong to first group, 1-1.999... to second, etc). We use some neat nodes, i.e. [**Expressions**](nodes/standard/expression.md),[**String Formats**](nodes/standard/string-format.md) and [**Index To String**](nodes/standard/index-to-string.md) to create the group names and determine which group you belong to.

Each group gets its own topic which is dynamically created using a _{}_ construct. Note that you have to be a bit careful when naming topics. For example, avoid whitespaces, hence we call the groups "Group_X".

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide10.png" class="ndl-image medium"></img>  
</div>

There is also a **Receive Message** node that each group uses to subscribe to only its group messages. When they receive a message a [**Transiton**](nodes/animation/transition.md) node triggers an animation of the opacity of the **Text** node, causing it to flash in the circle.

 <div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide11.png" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc","type":"Group","x":177,"y":141.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"986da408-b8ff-c64c-efd1-2931f14e31e1","type":"Text","x":197,"y":243.5,"parameters":{"sizeMode":"contentSize","alignX":"center","fontSize":{"value":20,"unit":"px"},"fontFamily":"Helvetica","color":"#FFFFFF","marginTop":{"value":10,"unit":"px"}},"ports":[],"children":[]},{"id":"d6edd70a-aab6-bfa4-ff82-00878a4db77f","type":"Circle","x":197,"y":325.5,"parameters":{"size":200,"position":"absolute","alignY":"center","alignX":"center","strokeEnabled":true,"strokeWidth":5,"strokeColor":"#FFFFFF"},"ports":[],"children":[]},{"id":"1d1686ca-4d5f-b37c-6a22-400bffc1e179","type":"Text","label":"Text","x":197,"y":407.5,"parameters":{"position":"absolute","sizeMode":"contentSize","alignX":"center","alignY":"center","text":"","fontFamily":"Helvetica","fontSize":{"value":20,"unit":"px"},"color":"#FFFFFF"},"ports":[],"children":[]}]},{"id":"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad","type":"Send Message","x":-99.46151025686125,"y":153.3218874905391,"parameters":{"topic":"mytopic","payload":"myvalue"},"ports":[],"children":[]},{"id":"b540b1ea-05a8-7977-2373-8904630a69e3","type":"Expression","x":258.55835369159354,"y":-85.4680314386139,"parameters":{"expression":"random()*5"},"ports":[],"children":[]},{"id":"0058cac0-940e-9b2a-481d-6cb26d8d2a24","type":"Receive Message","x":588.2558620795669,"y":323.1620374217247,"parameters":{"topic":"mytopic","payload":"myvalue","enabled":true},"ports":[],"children":[]},{"id":"c428146e-5701-dc82-551c-eae4971cd0a1","type":"Color Blend","x":399.4325313988179,"y":17.225848316195083,"parameters":{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},"ports":[],"children":[]},{"id":"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01","type":"Color Blend","x":399.0706330517986,"y":331.88202000987104,"parameters":{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},"ports":[],"children":[]},{"id":"5c4cc0ea-720a-e042-9214-28a4fd4e343a","type":"Receive Message","x":-102.71153493076321,"y":289.6270849236503,"parameters":{"topic":"{mygroup}/message","payload":"text"},"ports":[],"children":[]},{"id":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","type":"String Selector","x":-107.85891325999646,"y":-340.16310128056824,"parameters":{"input 0":"Group_1","input 1":"Group_2","input 2":"Group_3","input 3":"Group_4","input 4":"Group_5"},"ports":[],"children":[]},{"id":"b298ebae-1c7a-427d-76ee-5811dd697dd7","type":"Expression","x":387.0563061618897,"y":-256.65160955180494,"parameters":{"expression":"floor(x)"},"ports":[],"children":[]},{"id":"f2ae905b-d3f8-684e-5047-f9e756ba2c83","type":"Send Message","x":-101.5613422950648,"y":-88.57450240625224,"parameters":{"topic":"{mygroup}/message","payload":"text"},"ports":[],"children":[]},{"id":"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a","type":"Transition","x":-99.76801957568031,"y":450.15483129178,"parameters":{"targetValue":0,"overrideCurrentValue.value":1,"duration":2000},"ports":[],"children":[]},{"id":"3a17439c-2747-cad3-69df-cb71063a8c40","type":"String Format","x":-418.01393979063266,"y":-88.14376143188795,"parameters":{"format":"{x} rulez!"},"ports":[],"children":[]}],"connections":[{"fromId":"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc","fromProperty":"onClick","toId":"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad","toProperty":"Send"},{"fromId":"b540b1ea-05a8-7977-2373-8904630a69e3","fromProperty":"result","toId":"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad","toProperty":"payload-myvalue"},{"fromId":"b540b1ea-05a8-7977-2373-8904630a69e3","fromProperty":"result","toId":"c428146e-5701-dc82-551c-eae4971cd0a1","toProperty":"blendValue"},{"fromId":"c428146e-5701-dc82-551c-eae4971cd0a1","fromProperty":"result","toId":"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc","toProperty":"backgroundColor"},{"fromId":"0058cac0-940e-9b2a-481d-6cb26d8d2a24","fromProperty":"payload-myvalue","toId":"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01","toProperty":"blendValue"},{"fromId":"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01","fromProperty":"result","toId":"d6edd70a-aab6-bfa4-ff82-00878a4db77f","toProperty":"fillColor"},{"fromId":"5c4cc0ea-720a-e042-9214-28a4fd4e343a","fromProperty":"payload-text","toId":"1d1686ca-4d5f-b37c-6a22-400bffc1e179","toProperty":"text"},{"fromId":"b540b1ea-05a8-7977-2373-8904630a69e3","fromProperty":"result","toId":"b298ebae-1c7a-427d-76ee-5811dd697dd7","toProperty":"x"},{"fromId":"b298ebae-1c7a-427d-76ee-5811dd697dd7","fromProperty":"result","toId":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","toProperty":"index"},{"fromId":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","fromProperty":"currentValue","toId":"986da408-b8ff-c64c-efd1-2931f14e31e1","toProperty":"text"},{"fromId":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","fromProperty":"currentValue","toId":"5c4cc0ea-720a-e042-9214-28a4fd4e343a","toProperty":"topic-mygroup"},{"fromId":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","fromProperty":"currentValue","toId":"f2ae905b-d3f8-684e-5047-f9e756ba2c83","toProperty":"topic-mygroup"},{"fromId":"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc","fromProperty":"onClick","toId":"f2ae905b-d3f8-684e-5047-f9e756ba2c83","toProperty":"Send"},{"fromId":"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a","fromProperty":"currentValue","toId":"1d1686ca-4d5f-b37c-6a22-400bffc1e179","toProperty":"opacity"},{"fromId":"5c4cc0ea-720a-e042-9214-28a4fd4e343a","fromProperty":"messageReceived","toId":"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a","toProperty":"overrideCurrentValue.do"},{"fromId":"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5","fromProperty":"currentValue","toId":"3a17439c-2747-cad3-69df-cb71063a8c40","toProperty":"x"},{"fromId":"3a17439c-2747-cad3-69df-cb71063a8c40","fromProperty":"formatted","toId":"f2ae905b-d3f8-684e-5047-f9e756ba2c83","toProperty":"payload-text"}]})'></button>
</div>

You can see that the new topics start popping up in the Shiftr topology once you start sending messages between the browser windows.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide12.png" class="ndl-image medium"></img>  
</div>

As you click around you in your browser windows you can see that messages are only sent within a group.

<div class="ndl-images">
    <img src="/modules/mqtt/mqtt-guide-img/mqtt-guide13.gif" class="ndl-image medium"></img>  
</div>

Now you know how to publish and subscribe to topics and how to connect to an MQTT broker. This can for example be used to connect to an Arduino or a Raspberry Pi, etc, if you want to play with some hardware. Find some software that can connect to an MQTT broker and start publishing and subscribing to messages. Best of luck!
