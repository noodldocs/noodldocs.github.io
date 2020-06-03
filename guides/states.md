# States

A common concept in Noodl is the use of different visual states. In this guide we will cover this with an example of how to create a simple reusable switch component.

![](states/switch.gif ':class=img-size-s')

It will cover how to use a **States** node for handling transitions and interactions. 

## The visuals
First let's start with the basic visual nodes that make up the switch, this is simply a **Group** and a **Circle** with proper styling. You can copy the nodes below and paste into your project.

<div class="ndl-images">
    <img src="/guides/states/switch-nodes.png" class="ndl-image med"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"beeb6388-461b-f1fe-d64e-be798e4b1b4d","type":"Group","x":441.71346128847347,"y":300.98375737190554,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"9677d929-9a49-7fc5-ae14-27a1b48e883f","type":"Group","x":461.71346128847347,"y":346.98375737190554,"parameters":{"width":{"value":80,"unit":"px"},"height":{"value":40,"unit":"px"},"backgroundColor":"#F0F0F0","borderRadius":20,"alignX":"center","marginTop":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"aeda33bf-10cb-1e76-07b2-4a368140ca65","type":"Circle","x":481.71346128847347,"y":392.98375737190554,"parameters":{"fillColor":"#E8E8E8","size":40,"strokeWidth":2,"strokeColor":"#454545","strokeEnabled":true},"ports":[],"children":[]}]}]}],"connections":[]})'></button>
</div>

Then take a look at the styling of the two nodes. Don't forget that you can hover the nodes in the graph to see their placement in the preview.

<div class="ndl-images">
    <img src="/guides/states/style-props1.png" class="ndl-image small"></img>
    <img src="/guides/states/style-props2.png" class="ndl-image small"></img>
</div>

## The states node
A very common pattern is that you want to represent states visually. In this case we want to have two states **On** and **Off** for our switch, and we want it to have different visuals for these states. This is achieved with the **States** node. Start by creating a new States node.

Next you need to create the two states.

<div class="ndl-images">
    <img src="/guides/states/create-states.gif" class="ndl-image med"></img>
</div>

The State node will be in one of the defined states, it will start at the state specified by the **State** property that shows up when you add states. You can then switch state by connecting a signal (we will do this later).

We will also specify **Values** for each of our state. Just like you added states now also add a single value call it **Knob X**. It doesn't really matter what you call it as long as you know what it is for. In this case it's for moving the knobs (the Circle node) X position to it's correct position for the two states.

<div class="ndl-images">
    <img src="/guides/states/values-1.png" class="ndl-image med"></img>
</div>

Now you can specify the value for each state. The X position should be **0** when the switch is in the **Off** state and **40** when the Switch is in the **On** state. Enter these values in the States node properties.

<div class="ndl-images">
    <img src="/guides/states/on-values.png" class="ndl-image med"></img>
    <img src="/guides/states/off-values.png" class="ndl-image med"></img>
</div>

Finally connect the *Knob X* output of the States to the *Pos X* input of the Circle node. 

<div class="ndl-images">
    <img src="/guides/states/knob-x-connected.png" class="ndl-image large"></img>
</div>

As you can see the States node will get an output corresponding to each value. This output will transition to the specified values when the states node changes state. An a way to see the different states and transitions is to play with the **State** drop down in the properties panel.

<div class="ndl-images">
    <img src="/guides/states/change-state.gif" class="ndl-image large"></img>
</div>

You can also see how the output of the States node changes value as it transitions for one state to the other. You are free to connect the outputs of the States node to anything you like, you can also use different types than numbers. Try to add a new **Value** to the States node and give it a **Color** type instead. Then choose two different colors for the two states and connect the output to the **Background Color** of the **Group** node containing the Circle.

<div class="ndl-images">
    <img src="/guides/states/color-type.png" class="ndl-image med"></img>
</div>

Finally we can make the States node toggle state when the switch Group node is clicked. This is achieved by connecting the **Click** signal from the group to the **Toggle** input of the States node. This will make the States node jump to the next state in the list and when the last one is reached it will jump to the first one again. In this case we only have two so it will toggle between **On** and **Off**.

<div class="ndl-images">
    <img src="/guides/states/click-toggle.png" class="ndl-image large"></img>
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"f0d8169f-90ca-9cd9-bc88-af4c2ed631d0","type":"Group","x":441.71346128847347,"y":300.98375737190554,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"f2461a9d-49c6-f184-1ac1-a75450a7c856","type":"Group","x":461.71346128847347,"y":346.98375737190554,"parameters":{"width":{"value":80,"unit":"px"},"height":{"value":40,"unit":"px"},"backgroundColor":"#F0F0F0","borderRadius":20,"alignX":"center","marginTop":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"c66997cc-19d2-630c-692e-0caafdf37dd7","type":"Circle","x":481.71346128847347,"y":448.98375737190554,"parameters":{"fillColor":"#E8E8E8","size":40,"strokeWidth":2,"strokeColor":"#454545","strokeEnabled":true},"ports":[],"children":[]}]}]},{"id":"5d631656-dea2-b5d7-f5ee-ee27e220463b","type":"States","x":232.07664638676232,"y":376.3848345864951,"parameters":{"states":"On,Off","values":"Knob X,Background Color","type-Background Color":"color","value-On-Knob X":40,"value-Off-Knob X":0,"value-Off-Background Color":"#F0F0F0","value-On-Background Color":"#CCE6CE","startState":"Off"},"ports":[],"children":[]}],"connections":[{"fromId":"5d631656-dea2-b5d7-f5ee-ee27e220463b","fromProperty":"Knob X","toId":"c66997cc-19d2-630c-692e-0caafdf37dd7","toProperty":"transformX"},{"fromId":"5d631656-dea2-b5d7-f5ee-ee27e220463b","fromProperty":"Background Color","toId":"f2461a9d-49c6-f184-1ac1-a75450a7c856","toProperty":"backgroundColor"},{"fromId":"f2461a9d-49c6-f184-1ac1-a75450a7c856","fromProperty":"onClick","toId":"5d631656-dea2-b5d7-f5ee-ee27e220463b","toProperty":"toggle"}]})'></button>
</div>