# Making a switch

In this guide we will cover how to create a simple reusable switch component.

![](switch/switch.gif ':class=img-size-s')

It will cover how to use a **States** node for handling transitions and interactions. It will also cover some nice to know things when creating reusable components.

## The visuals
First let's start with the basic visual nodes that make up the switch, this is simply a **Group** and a **Circle** with proper styling. You can copy the nodes below and paste into your project.

<div class="ndl-images">
    <img src="/guides/switch/switch-nodes.png" class="ndl-image med"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"a4ace8fb-60a2-f8e0-f545-ba01235c9949","type":"Group","x":80.54913581321142,"y":69.29866004702447,"parameters":{"backgroundColor":"#FFFFFF","padding":{}},"ports":[],"children":[{"id":"c648be6b-9a6c-1be5-277d-7b1cd053a799","type":"Group","x":100.54913581321142,"y":115.29866004702447,"parameters":{"resize":{"pinLeft":false,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":true,"pinVCenter":false,"sizeWidth":true,"sizeHeight":true,"width":{"value":80,"unit":"px"},"height":{"value":40,"unit":"px"}},"borderRadius":20,"margin":{"marginTop":{"value":20,"unit":"px"}},"padding":{},"backgroundColor":"#F0F0F0"},"ports":[],"children":[{"id":"4846627c-af2a-042a-dfdf-7a2ef905f07a","type":"Circle","x":120.54913581321142,"y":161.29866004702447,"parameters":{"resize":{"pinLeft":true,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":false,"pinVCenter":false,"sizeWidth":true,"sizeHeight":false,"width":{"value":40,"unit":"px"}},"fillColor":"#E8E8E8","strokeEnabled":true,"strokeWidth":2,"strokeColor":"#454545"},"ports":[],"children":[]}]}]}],"connections":[]})'></button>
</div>

Then take a look at the styling of the two nodes. Don't forget that you can hover the nodes in the graph to see their placement in the preview.

<div class="ndl-images">
    <img src="/guides/switch/style-props1.png" class="ndl-image small"></img>
    <img src="/guides/switch/style-props2.png" class="ndl-image small"></img>
</div>

## The states node
A very common pattern is that you want to represent states visually. In this case we want to have two states **On** and **Off** for our switch, and we want it to have different visuals for these states. This is achieved with the **States** node. Start by creating a new States node.

Next you need to create the two states.

<div class="ndl-images">
    <img src="/guides/switch/create-states.gif" class="ndl-image med"></img>
</div>

The State node will be in one of the defined states, it will start at the state specified by the **State** property that shows up when you add states. You can then switch state by connecting a signal (we will do this later).

We will also specify **Values** for each of our state. Just like you added states now also add a single value call it **Knob X**. It doesn't really matter what you call it as long as you know what it is for. In this case it's for moving the knobs (the Circle node) X position to it's correct position for the two states.

<div class="ndl-images">
    <img src="/guides/switch/values-1.png" class="ndl-image med"></img>
</div>

Now you can specify the value for each state. The X position should be **0** when the switch is in the **Off** state and **40** when the Switch is in the **On** state. Enter these values in the States node properties.

<div class="ndl-images">
    <img src="/guides/switch/on-values.png" class="ndl-image med"></img>
    <img src="/guides/switch/off-values.png" class="ndl-image med"></img>
</div>

Finally connect the *Knob X* output of the States to the *Pos X* input of the Circle node. 

<div class="ndl-images">
    <img src="/guides/switch/knob-x-connected.png" class="ndl-image large"></img>
</div>

As you can see the States node will get an output corresponding to each value. This output will transition to the specified values when the states node changes state. An a way to see the different states and transitions is to play with the **State** drop down in the properties panel.

<div class="ndl-images">
    <img src="/guides/switch/change-state.gif" class="ndl-image large"></img>
</div>

You can also see how the output of the States node changes value as it transitions for one state to the other. You are free to connect the outputs of the States node to anything you like, you can also use different types than numbers. Try to add a new **Value** to the States node and give it a **Color** type instead. Then choose two different colors for the two states and connect the output to the **Background Color** of the **Group** node containing the Circle.

<div class="ndl-images">
    <img src="/guides/switch/color-type.png" class="ndl-image med"></img>
</div>

Finally we can make the States node toggle state when the switch Group node is clicked. This is achieved by connecting the **Click** signal from the group to the **Toggle** input of the States node. This will make the States node jump to the next state in the list and when the last one is reached it will jump to the first one again. In this case we only have two so it will toggle between **On** and **Off**.

<div class="ndl-images">
    <img src="/guides/switch/click-toggle.png" class="ndl-image large"></img>
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"c8c55a5e-39ee-a97b-bf4b-ea3e9a1450a0","type":"States","x":-83.83799717887604,"y":114.25835059707853,"parameters":{"states":"On,Off","values":"Knob X,Background Color","type-Background Color":"color","value-On-Background Color":"#BED1BA","value-Off-Background Color":"#E6E6E6","value-Off-Knob X":0,"value-On-Knob X":40,"startState":"Off"},"ports":[],"children":[]},{"id":"b09ad4c4-4751-5431-93bd-08cd0989730d","type":"Group","x":183.12620813498165,"y":48.076321167880366,"parameters":{"backgroundColor":"#FFFFFF","padding":{}},"ports":[],"children":[{"id":"f228fecb-31a9-afee-4941-123903fefdfd","type":"Group","x":203.12620813498165,"y":94.07632116788037,"parameters":{"resize":{"pinLeft":false,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":true,"pinVCenter":false,"sizeWidth":true,"sizeHeight":true,"width":{"value":80,"unit":"px"},"height":{"value":40,"unit":"px"}},"borderRadius":20,"margin":{"marginTop":{"value":20,"unit":"px"}},"padding":{}},"ports":[],"children":[{"id":"883f1b22-1122-a6d8-bbed-d282972dd14d","type":"Circle","x":223.12620813498165,"y":196.07632116788037,"parameters":{"resize":{"pinLeft":true,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":false,"pinVCenter":false,"sizeWidth":true,"sizeHeight":false,"width":{"value":40,"unit":"px"}},"fillColor":"#E8E8E8","strokeEnabled":true,"strokeWidth":2,"strokeColor":"#454545"},"ports":[],"children":[]}]}]}],"connections":[{"fromId":"c8c55a5e-39ee-a97b-bf4b-ea3e9a1450a0","fromProperty":"Knob X","toId":"883f1b22-1122-a6d8-bbed-d282972dd14d","toProperty":"transformX"},{"fromId":"c8c55a5e-39ee-a97b-bf4b-ea3e9a1450a0","fromProperty":"Background Color","toId":"f228fecb-31a9-afee-4941-123903fefdfd","toProperty":"backgroundColor"},{"fromId":"f228fecb-31a9-afee-4941-123903fefdfd","fromProperty":"onClick","toId":"c8c55a5e-39ee-a97b-bf4b-ea3e9a1450a0","toProperty":"toggle"}]})'></button>
</div>

## Making it reusable
If you have not checked out the video on components, you might want to do that now. To turn this switch into a reusable component we simply need to add the **Component Inputs** and **Component Outputs** nodes. You can basically choose yourself which inputs and outputs you prefer but here is an example.

<div class="ndl-images">
    <img src="/guides/switch/inputs-and-outputs.png" class="ndl-image large"></img>
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"d6d301f2-1f96-6ea2-e780-687111e0b99d","type":"States","x":826.7326048418613,"y":406.91129221262827,"parameters":{"states":"On,Off","values":"Knob X,Background Color","type-Background Color":"color","value-On-Background Color":"#BED1BA","value-Off-Background Color":"#E6E6E6","value-Off-Knob X":0,"value-On-Knob X":40,"startState":"Off"},"ports":[],"children":[]},{"id":"b1c35c02-ef64-d53e-591e-05696993d856","type":"Group","x":1113.696810155719,"y":386.7292627834301,"parameters":{"resize":{"pinLeft":false,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":true,"pinVCenter":false,"sizeWidth":true,"sizeHeight":true,"width":{"value":80,"unit":"px"},"height":{"value":40,"unit":"px"}},"borderRadius":20,"margin":{},"padding":{}},"ports":[],"children":[{"id":"86477d5c-bb6e-1c22-1646-239c6d0ca671","type":"Circle","x":1133.696810155719,"y":528.7292627834302,"parameters":{"resize":{"pinLeft":true,"pinRight":false,"pinTop":true,"pinBottom":false,"pinHCenter":false,"pinVCenter":false,"sizeWidth":true,"sizeHeight":false,"width":{"value":40,"unit":"px"}},"fillColor":"#E8E8E8","strokeEnabled":true,"strokeWidth":2,"strokeColor":"#454545"},"ports":[],"children":[]}]},{"id":"a1a9c2eb-c94f-97de-bf0b-364ed0111d3b","type":"Boolean To String","x":585.4713345508217,"y":455.7358186796131,"parameters":{"trueString":"On","falseString":"Off"},"ports":[],"children":[]},{"id":"45eec334-2c5c-907a-5aeb-e793ba119d5f","type":"Component Outputs","x":1113.4145782156565,"y":261.0000777909123,"parameters":{},"ports":[{"name":"State","plug":"input","type":{"name":"*"},"index":1},{"name":"Click","plug":"input","type":{"name":"*"},"index":2}],"children":[]},{"id":"4014ad0e-d4d3-4764-e718-f3a380e7965a","type":"Component Inputs","x":713.8556750528911,"y":263.84766451215614,"parameters":{},"ports":[{"name":"State","plug":"output","type":{"name":"*"},"index":1},{"name":"Sizing","plug":"output","type":{"name":"*"},"index":2},{"name":"Margins","plug":"output","type":{"name":"*"},"index":3}],"children":[]}],"connections":[{"fromId":"d6d301f2-1f96-6ea2-e780-687111e0b99d","fromProperty":"Knob X","toId":"86477d5c-bb6e-1c22-1646-239c6d0ca671","toProperty":"transformX"},{"fromId":"d6d301f2-1f96-6ea2-e780-687111e0b99d","fromProperty":"Background Color","toId":"b1c35c02-ef64-d53e-591e-05696993d856","toProperty":"backgroundColor"},{"fromId":"b1c35c02-ef64-d53e-591e-05696993d856","fromProperty":"onClick","toId":"d6d301f2-1f96-6ea2-e780-687111e0b99d","toProperty":"toggle"},{"fromId":"d6d301f2-1f96-6ea2-e780-687111e0b99d","fromProperty":"at-On","toId":"45eec334-2c5c-907a-5aeb-e793ba119d5f","toProperty":"State"},{"fromId":"b1c35c02-ef64-d53e-591e-05696993d856","fromProperty":"onClick","toId":"45eec334-2c5c-907a-5aeb-e793ba119d5f","toProperty":"Click"},{"fromId":"a1a9c2eb-c94f-97de-bf0b-364ed0111d3b","fromProperty":"currentValue","toId":"d6d301f2-1f96-6ea2-e780-687111e0b99d","toProperty":"currentState"},{"fromId":"4014ad0e-d4d3-4764-e718-f3a380e7965a","fromProperty":"Margins","toId":"b1c35c02-ef64-d53e-591e-05696993d856","toProperty":"margin"},{"fromId":"4014ad0e-d4d3-4764-e718-f3a380e7965a","fromProperty":"Sizing","toId":"b1c35c02-ef64-d53e-591e-05696993d856","toProperty":"resize"},{"fromId":"4014ad0e-d4d3-4764-e718-f3a380e7965a","fromProperty":"State","toId":"a1a9c2eb-c94f-97de-bf0b-364ed0111d3b","toProperty":"input"}]})'></button>
</div>

A few notes on the inputs:

* **Sizing** this is the pinning, and width/height sizing, i.e. the dimensions part.
* **Margins** these are the margins of the component, it's nice to have when others are using your component so they can place it where they want.

When you have these two inputs connected you will get the margins and sizing properties when you create instances of this component.

<div class="ndl-images">
    <img src="/guides/switch/dims-and-margin.png" class="ndl-image small"></img>
</div>

The last input might need some further explanation. We want a nice checkbox on the input properties panel of the component and we also want to be able to connect it to data models that have a boolean output in the future. So we cannot connect directly to the **State** input of the States node since that input is a string type, the names of the states. But we can use a handy node called the **Boolean To String** node that will take a boolean input and convert it into one of two strings.

<div class="ndl-images">
    <img src="/guides/switch/bool-to-string-1.png" class="ndl-image small"></img>
    <img src="/guides/switch/bool-to-string-2.png" class="ndl-image small"></img>
</div>

So we simply put in the state names for **true** which is **On** and for **false** which is **Off**.

