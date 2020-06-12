# Variables and Objects

You encountered **Object** nodes briefly in the [For Each](/guides/for-each.md) guide. In this guide we will take a closer look at **Object** and its simpler relative **Variable**.

## Variables

**Variable** nodes are used to store and read data to and from memory in Noodl. Let's start with a simple example: How to use the **Variable** node.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/variable-nodes.png" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"51f3e79e-6c11-643a-7e0b-6d334e8a2c37","type":"Group","x":201,"y":-2.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"25d28826-a193-a508-ff67-19a18c848114","type":"Text","x":221,"y":43.5,"parameters":{"sizeMode":"contentSize","alignX":"center","alignY":"center","text":"Hello","color":"#171717","fontFamily":"Arial","fontSize":{"value":30,"unit":"px"}},"ports":[],"children":[]},{"id":"957abb6a-f84c-ba11-040c-b8798961d0fe","type":"Text","x":221,"y":89.5,"parameters":{"fontFamily":"Arial","sizeMode":"contentSize","alignX":"center","color":"#636363"},"ports":[],"children":[]},{"id":"b07f7eb5-cb3c-7a26-9fd9-b547694a7d8a","type":"Text Input","x":221,"y":171.5,"parameters":{"sizeMode":"explicit","height":{"value":45,"unit":"px"},"marginLeft":{"value":20,"unit":"px"},"marginRight":{"value":20,"unit":"px"},"fontFamily":"Arial","fontSize":{"value":18,"unit":"px"}},"ports":[],"children":[]},{"id":"3e82caf1-413a-007c-e583-27326bfc009b","type":"Group","x":221,"y":253.5,"parameters":{"height":{"value":40,"unit":"px"},"backgroundColor":"#262626","marginLeft":{"value":20,"unit":"px"},"marginRight":{"value":20,"unit":"px"},"flexDirection":"none"},"ports":[],"children":[{"id":"44885899-9b5e-90cc-68bb-a175e783ebac","type":"Text","x":241,"y":335.5,"parameters":{"alignY":"center","alignX":"center","sizeMode":"contentSize","text":"CLICK","color":"#FFFFFF","fontFamily":"Arial","fontSize":{"value":20,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"17e2fe64-e2bc-1bb5-e0fb-f067b77bf4a7","type":"Variable","x":-55.238741214216645,"y":191.53647310028322,"parameters":{"name":"My Name"},"ports":[],"children":[]},{"id":"7e72cdaa-6b5a-cadf-59a8-c9c1884f300c","type":"Variable","x":-54.99080995633136,"y":58.8096482500311,"parameters":{"name":"My Name"},"ports":[],"children":[]}],"connections":[{"fromId":"b07f7eb5-cb3c-7a26-9fd9-b547694a7d8a","fromProperty":"onTextChanged","toId":"17e2fe64-e2bc-1bb5-e0fb-f067b77bf4a7","toProperty":"value"},{"fromId":"3e82caf1-413a-007c-e583-27326bfc009b","fromProperty":"onClick","toId":"17e2fe64-e2bc-1bb5-e0fb-f067b77bf4a7","toProperty":"store"},{"fromId":"7e72cdaa-6b5a-cadf-59a8-c9c1884f300c","fromProperty":"value","toId":"957abb6a-f84c-ba11-040c-b8798961d0fe","toProperty":"text"}]})'></button>
</div>

The **Variable** node takes a single input value and when you send a signal to the **Set** input it will store that input value and update its output. As you might have figured out from the graph above, all **Variable** nodes that share the same **Name** will also share the same data value. When one is updated all others will be updated as well. You can pick any Name for your Variable. Simply type it in the properties or pick a previously used name.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/pick-variable-name.gif" class="ndl-image large"></img>
</div>

The example graph above let's you type your name in the **Text Input** node and when you click the button it will update the **Variable** node.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/variable-screen1.png" class="ndl-image med"></img>
</div>

Sometimes you want to control when **Variable** nodes are updated. You can use the **Fetch** input signal to achieve this. If you have a connection to the **Fetch** input, the **Variable** node will not automatically update the output value. Instead it will wait until you send a signal to fetch the value of the **Variable** node. Try making this update in the example above. Now you need to click the text label for it to update after you have stored a new value in the variable **My Name**.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/variable-fetch.png" class="ndl-image large"></img>
</div>

Check out the reference documentation for [Variable](/nodes/data/variable.md) for more details.

## Objects

**Object** nodes work very much like the **Variable** nodes but they can contain many values. You can create and name any number of properties on an **Object** node and then use it just like you would use a **Variable** node. You simply edit the properties of the **Object** node and create and name new ones as you like.

<div class="ndl-images">
    <img src="/guides/for-each/object-props.gif" class="ndl-image med"></img>  
</div>

Connect to the properties you specify and use the node with **Set**, **Fetch** and the other signals that are available on the **Object** node.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/object-node.png" class="ndl-image large"></img>  
</div>

The **Object** node has a few more inputs and outputs to detect changes on individual properties etc. Take a look at the [Object](/nodes/data/object.md) reference documentation for more details.

Another difference between **Object** and **Variable** nodes, is that the **Object** node identifier is called **Id** instead of **Name** as in the **Variable** node. **Id** is used in the same way though as the **Name**.

## Local values

Sometimes you simply want to put a value into a **Variable** or **Object** node. To do this use the following nodes: [**String**](/nodes/data/string.md), [**Boolean**](/nodes/data/boolean.md), [**Number**](/nodes/data/number.md) and [**Color**](/nodes/data/color.md). These nodes can be used as input to other nodes when you just want to provide a static value.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/local-string.png" class="ndl-image large"></img>  
</div>

These value nodes only exist at this specific point in the graph, they don't have an **Id** or **Name** so you can't reference them somewhere else. In the example above the variable **My Name** will get the value _Hello there_ when it receives the **Set** signal.
