# Javascript

This guide will cover the functionality of the **Script** node. The **Script** node is a great way to implement logic and calculations that are easier to express in code than in nodes and connections. It's also a great way to get access to useful Javascript APIs in the browser, for example `Date` for date functionality or `Math` for advanced math-functionality.

## Overview

A **Script** node works as any other node in Noodl, in the sense that it has inputs and outputs that can be connected to other nodes. All inputs and outputs are available to the developer in their Javascript code. In a **Script** node you can call any Javascript function normally available in a browser environment.

## The Javascript source file

You can either edit the Javascript code directly in the built-in editor in Noodl or you can use an external file with an external editor. While it's easy to write code snippets in the inline editor, the external file option might be better if you are working on larger files or even multiple files and modules. 

<div class="ndl-images">
    <img src="/guides/javascript/script-inline-code.png" class="ndl-image large"></img>  
</div>

An external file needs to be located in your project folder for Noodl to find it. You can copy a file to your project folder by dragging the file onto the Noodl window.

<div class="ndl-images">
    <img src="/guides/javascript/script-pick-file.png" class="ndl-image large"></img>  
</div>

The source code provided for the **Script** is executed as soon as the node is created. In order to specify inputs, outputs and receive and send signals from the node the `Node` object must be used.

## Inputs and outputs

There are a number of ways to specify the inputs and outputs of the **Script** node. One way is to use the property panel and explicitly add them there. You can also provide the type.

<div class="ndl-images">
    <img src="/nodes/javascript/function-3.png" class="ndl-image med"></img>  
</div>

Another way is to specify them programmatically in the source code. The inputs are defined in the `Node.Inputs` object. Each input also specifies what type it is. The available types are:
- `number`
- `string`
- `boolean`
- `color`
- `object`
- `array`. This is for Noodl Arrays, not Javascript arrays.
- `reference`. A reference to a Noodl node, accessible through the _This_ output of visual nodes.
- `cloudfile`

Note that there is no signal type for inputs, as the signals are handled by using the `Node.Signals` object (more on that later).

The outputs work in the same way as the inputs except that there's one more type you can use: `signal`. The signal type is used for triggering a pulse on an output rather than outputting a specific value. Below we have added outputs to a **Script** node.

Since the inputs and outputs are members of an object, they should be separated by a comma. Below is an example of a **Script** node with two inputs and one output.

```javascript
Node.Inputs = {
    RangeLow: 'number',
    RangeHigh: 'number',
}

Node.Outputs = {
    RandomNumber: 'number',
}
```

Lets use the two inputs `RangeLow` and `RangeHigh`  to generate a random number on the `RandomNumber` output. To execute the code, we will introduce a signal, `Generate`.

## Input signals

Input signals are mapped to functions in the `Node.Signals` object in the Javascript node. A signal function is called when the signal with the same name is triggered. Here's the implementation of the `Generate` signal. You can copy this code and add it to the **Script** source code.

```javascript
Node.Signals.Generate = function() {
  let randomNumber = Math.random() * (Node.Inputs.RangeHigh - Node.Inputs.RangeLow) + Node.Inputs.RangeLow;
  Node.Outputs.RandomNumber = randomNumber;
}
```

Let's connect the the inputs, outputs and signals to some nodes.

<div class="ndl-images">
    <img src="/guides/javascript/random1.gif" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"2bc16c7b-a4b5-81a5-5a32-1a4fbc30f5cd","type":"Javascript2","x":-151.0843055740657,"y":27.017917129870057,"parameters":{"code":"Node.Inputs = {\n    RangeLow: \"number\",\n    RangeHigh: \"number\",\n}\n\nNode.Outputs = {\n    RandomNumber: \"number\",\n}\n\nNode.Signals.Generate = function() {\n  let randomNumber = Math.random() * (Node.Inputs.RangeHigh - Node.Inputs.RangeLow) + Node.Inputs.RangeLow;\n  Node.Outputs.RandomNumber = randomNumber;\n}\n","RangeLow":0},"ports":[],"children":[]},{"id":"3cec81dc-5730-5b18-6bd7-59408b7f526e","type":"Group","x":72.61291679489403,"y":-36,"parameters":{"backgroundColor":"#FFFFFF","paddingTop":{"value":20,"unit":"px"},"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"2bc6aacc-db4c-b4e5-5d96-878d5e0d88db","type":"Group","x":92.61291679489403,"y":10,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"02d10e30-bd9a-4971-258f-53ce3eaa3930","type":"Text","label":"Click Text","x":112.61291679489403,"y":56,"parameters":{"text":"Click here to generate number","fontSize":{"value":15,"unit":"px"},"alignY":"bottom","sizeMode":"contentSize"},"ports":[],"children":[]}]},{"id":"186a8d2b-fc4d-44b0-fbdc-9dadffe4d4f3","type":"Group","label":"Arena","x":92.61291679489403,"y":151,"parameters":{"borderStyle":"solid","borderWidth":{"value":2,"unit":"px"},"marginBottom":{"value":0,"unit":"px"},"flexDirection":"column","sizeMode":"explicit","height":{"value":35,"unit":"px"}},"ports":[],"children":[{"id":"24a61391-aade-0bb4-fa73-181af03641ac","type":"Circle","x":112.61291679489403,"y":246,"parameters":{"size":30,"position":"absolute"},"ports":[],"children":[]}]}]},{"id":"cd37fadd-a5ab-aae4-08d3-7d421580ab1e","type":"Expression","label":"arenawidth-circlewidth","x":-153.01082981427822,"y":139.8838795843667,"parameters":{"expression":"arenawidth-circlewidth"},"ports":[],"children":[]}],"connections":[{"fromId":"186a8d2b-fc4d-44b0-fbdc-9dadffe4d4f3","fromProperty":"boundingWidth","toId":"cd37fadd-a5ab-aae4-08d3-7d421580ab1e","toProperty":"arenawidth"},{"fromId":"24a61391-aade-0bb4-fa73-181af03641ac","fromProperty":"boundingWidth","toId":"cd37fadd-a5ab-aae4-08d3-7d421580ab1e","toProperty":"circlewidth"},{"fromId":"cd37fadd-a5ab-aae4-08d3-7d421580ab1e","fromProperty":"result","toId":"2bc16c7b-a4b5-81a5-5a32-1a4fbc30f5cd","toProperty":"RangeHigh"},{"fromId":"2bc16c7b-a4b5-81a5-5a32-1a4fbc30f5cd","fromProperty":"RandomNumber","toId":"24a61391-aade-0bb4-fa73-181af03641ac","toProperty":"transformX"},{"fromId":"02d10e30-bd9a-4971-258f-53ce3eaa3930","fromProperty":"onClick","toId":"2bc16c7b-a4b5-81a5-5a32-1a4fbc30f5cd","toProperty":"Generate"}]})'></button> 
</div>

## Reading inputs and setting outputs

You can read the inputs directly through the members of the `Node.Inputs` object, typically `Node.Inputs.AnInput`. 

There are two ways to set the outputs. Set the value by setting the appropriate property of the `Node.Outputs` object:

```javascript
Node.Outputs.RandomNumber = randomNumber;
```

Set many outputs at the same time using the `Node.setOutputs` function: 

```javascript
Node.setOutputs({
  One:1,
  Two:2
})
```

This is useful when you have an object that contains multiple values you want to send at once.

Finally if you want to send a signal on an output you need to use the output as a function, calling it when you want to send the signal.

```javascript
Node.Outputs.MySignalOutput()
```

Now let's add a bit more code to our Javascript example. Instead of the `Generate` signal we will implement `Start` and `Stop` signals and have the **Javascript** node generate new numbers continuously. We will start a timer in `Start` that will trigger after a random time, influenced by the `Lambda` input. The higher the `Lambda` the shorter the time and the higher the rate of generated numbers. 

?> See the <a href="https://en.wikipedia.org/wiki/Poisson_point_process" target="_blank">Poisson process</a> for the math behind generating a random number using a Poisson distribution.

When the timer is triggered, a random number is generated based on the ranges provided to the node. Finally a signal to notify that a new number has been generated is sent and the timer is restarted with a new timeout.
When the `Stop` signal is triggered the timer is stopped.

Here's the code that generates the random numbers with a Poisson distributed time in between them.

```javascript
Node.Inputs = {
    Lambda: 'number',
    RangeLow: 'number',
    RangeHigh: 'number',
 }

 Node.Outputs = {
    Trigger: 'signal',
    RandomNumber: 'number',
 }

var timer

function generateRandNum(rangeLow, rangeHigh) {
    return Math.random() * (rangeHigh - rangeLow) + rangeLow;
}

function calculateIntervalMs(lambda) {
  let interval = -Math.log(1.0 - Math.random()) / lambda;
  // translate from seconds to milliseconds
  return interval * 1000;
}

Node.Signals.Start = function () {
  console.log('Start');
  let timeOutFunction = () => {
    // generate the random number
    let randNum = generateRandNum(
      Node.Inputs.RangeLow,
      Node.Inputs.RangeHigh
    );
    // set it on the output "RandomNumber"
    Node.setOutputs({ RandomNumber: randNum });
    // Trigger the signal "Trigger"
    Node.Outputs.Trigger()
    // restart the timer at a new interval
    timer = setTimeout(
      timeOutFunction,
      calculateIntervalMs(Node.Inputs.Lambda)
    );
  };

  // start the first timer
  let interval = calculateIntervalMs(Node.Inputs.Lambda);

  timer = setTimeout(timeOutFunction, interval);
}
    
Node.Signals.Stop = function () {
  clearTimeout(timer);
  timer = undefined;
}
```

## Changed inputs

You can run code whenever an input is changed. In this particular case, when the `Lambda` input of the random number generator is changed, the timer interval should be updated to avoid waiting for the next timer to time out for the change to take effect. To handle a case like this, a function with the same name as the input, `Lambda`, is added in the `Node.Setters` object. An additional state variable, `started`, is added to make sure that changing the value when the timer is stopped won't cause it to start.

```javascript
var started = false;
Node.Setters.Lambda = function(value) {
    if (started === true) {
        clearTimeout (timer);
        startTimer();
    }
}
```

## The final code

After some small refactoring the final code looks as below:

```javascript
Node.Inputs = {
  Lambda: 'number',
  RangeLow: 'number',
  RangeHigh: 'number',
}

Node.Outputs = {
  Trigger: 'signal',
  RandomNumber: 'number',
}

var timer;
var started = false;

function generateRandNum(rangeLow, rangeHigh) {
  return Math.random() * (rangeHigh - rangeLow) + rangeLow;
}

function calculateIntervalMs(lambda) {
  let interval = -Math.log(1.0 - Math.random()) / lambda;
  // translate from seconds to milliseconds
  return interval * 1000;
}

function startTimer() {
  let timeOutFunction = () => {
    // generate the random number
    let randNum = generateRandNum(
      Node.Inputs.RangeLow,
      Node.Inputs.RangeHigh
    );
    // set it on the output "RandomNumber"
    Node.setOutputs({ RandomNumber: randNum });
    // Trigger the signal "Trigger"
    Node.Outputs.Trigger()
    // restart the timer at a new interval
    timer = setTimeout(
      timeOutFunction,
      calculateIntervalMs(Node.Inputs.Lambda)
    );
  };

  // start the first timer
  let interval = calculateIntervalMs(Node.Inputs.Lambda);

  timer = setTimeout(timeOutFunction, interval);
}

Node.Signals = {
  Start() {
    started = true;
    startTimer();
  },
  Stop() {
    clearTimeout(timer);
    started = false;
  }
}

Node.Setters.Lambda = function (value) {
  if (started === true) {
    clearTimeout(timer);
    startTimer();
  }
}
```

## Using script nodes

Connecting to the the inputs and outputs, the **Script** nodes can be used as any other nodes in Noodl. As an example, the Random Generator **Script** node has been combined with a simple UI to control the inputs. The output of the random generator is used to move a circle on the screen and trigger state changes. We have also copy & pasted the **Script** node and use it two times. This works great, but remember that the Javascript code is cloned if you are using an inline source so changing the code in one **Script** node does not affect the other. It's often a good idea to encapsulate a reusable **Script** node in a Noodl component.

<div class="ndl-images">
    <img src="/guides/javascript/random3.gif" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"3fa8c312-6da7-2291-7aa2-9b734f0abbfb","type":"Group","x":229.85024783404833,"y":-121.99999999999997,"parameters":{"backgroundColor":"#FFFFFF","paddingTop":{"value":20,"unit":"px"},"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"e64650a6-61b9-2bbe-4b38-c9956d535633","type":"Group","x":249.85024783404833,"y":-75.99999999999997,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"ce06cbb5-31df-3924-5e2d-10eef190fcf9","type":"Text","label":"Rate controller text","x":269.85024783404833,"y":-29.99999999999997,"parameters":{"text":"Random generator is","fontSize":{"value":15,"unit":"px"},"alignY":"bottom","sizeMode":"contentSize"},"ports":[],"children":[]},{"id":"d2da663d-7d2a-def7-b332-81544209a137","type":"Group","label":"On/Off Spinner","x":269.85024783404833,"y":29.00000000000003,"parameters":{"sizeMode":"explicit","height":{"value":20,"unit":"px"},"clip":true,"alignY":"bottom","marginLeft":{"value":10,"unit":"px"},"flexDirection":"none","width":{"value":30,"unit":"px"}},"ports":[],"children":[{"id":"ae41d579-4f46-8fb4-008b-d4125080e4dd","type":"Text","label":"Off","x":289.85024783404833,"y":124.00000000000003,"parameters":{"text":"Off","color":"#006394","fontSize":{"value":15,"unit":"px"},"sizeMode":"contentSize","alignY":"bottom"},"ports":[],"children":[]},{"id":"26db486f-e2ee-36d2-2265-5f9295eda87d","type":"Text","label":"On","x":289.85024783404833,"y":219.00000000000003,"parameters":{"text":"On","fontSize":{"value":15,"unit":"px"},"color":"#006394","sizeMode":"contentSize","alignY":"bottom"},"ports":[],"children":[]}]}]},{"id":"4c27aafc-d25b-719d-c510-e80b617d193f","type":"Group","label":"Text and Rate controller","x":249.85024783404833,"y":314,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"14de304e-6590-fd37-e548-9ea7a4d06cd9","type":"Text","label":"Set rate","x":269.85024783404833,"y":387,"parameters":{"text":"Set rate","fontSize":{"value":15,"unit":"px"},"alignY":"center","sizeMode":"contentSize","marginRight":{"value":20,"unit":"px"}},"ports":[],"children":[]},{"id":"7a9a2eac-c8a7-d509-965a-612b73d938c6","type":"Group","label":"Rate Controller","x":269.85024783404833,"y":446,"parameters":{"sizeMode":"explicit","height":{"value":30,"unit":"px"},"flexDirection":"none","width":{"value":200,"unit":"px"}},"ports":[],"children":[{"id":"3ff698db-8722-081e-fde4-3bcf511b7d2c","type":"Group","label":"Rate controller Bg","x":289.85024783404833,"y":505,"parameters":{"height":{"value":20,"unit":"px"},"backgroundColor":"#C6C6C6","borderRadius":{"value":10,"unit":"px"},"alignY":"center"},"ports":[],"children":[]},{"id":"7bec8df2-fd13-7e0c-f8e4-e5bb53df4124","type":"Drag","x":289.85024783404833,"y":600,"parameters":{},"ports":[],"children":[{"id":"30c37eb0-a110-e34f-439d-e3f08810fa56","type":"Group","label":"Drag handle","x":309.85024783404833,"y":682,"parameters":{"height":{"value":20,"unit":"px"},"width":{"value":5,"unit":"px"},"backgroundColor":"#434B53","paddingLeft":{"value":0,"unit":"px"},"marginLeft":{"value":10,"unit":"px"},"marginRight":{"value":10,"unit":"px"},"borderRadius":{"value":2,"unit":"px"},"alignY":"center"},"ports":[],"children":[]}]}]}]},{"id":"20a22d04-5020-bdd5-fb99-6e0382517ada","type":"Group","label":"Arena","x":249.85024783404833,"y":741,"parameters":{"borderStyle":"solid","borderWidth":{"value":2,"unit":"px"},"marginBottom":{"value":10,"unit":"px"},"flexDirection":"none"},"ports":[],"children":[{"id":"9e71f320-1955-8612-3e10-9f78edff314c","type":"Circle","x":269.85024783404833,"y":836,"parameters":{"size":30,"position":"absolute"},"ports":[],"children":[]}]}]},{"id":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","type":"States","x":-210.29636051844176,"y":54.95285715355624,"parameters":{"states":"Off,On","values":"Off y position,On y Position","value-Off-Off y position":0,"value-On-Off y position":-20,"value-Off-On y Position":20,"value-On-On y Position":0},"ports":[],"children":[]},{"id":"7b345fa9-3709-adaf-444d-181759102820","type":"Javascript2","label":"Poisson Process","x":39.911503779845106,"y":285.62904265472093,"parameters":{"code":"Node.Inputs = {\n  Lambda: \"number\",\n  RangeLow: \"number\",\n  RangeHigh: \"number\",\n}\n\nNode.Outputs = {\n  Trigger: \"signal\",\n  RandomNumber: \"number\",\n}\n\nvar timer;\nvar started = false;\n\nfunction generateRandNum(rangeLow, rangeHigh) {\n  return Math.random() * (rangeHigh - rangeLow) + rangeLow;\n}\n\nfunction calculateIntervalMs(lambda) {\n  let interval = -Math.log(1.0 - Math.random()) / lambda;\n  // translate from seconds to milliseconds\n  return interval * 1000;\n}\n\nfunction startTimer() {\n  let timeOutFunction = () => {\n    // generate the random number\n    let randNum = generateRandNum(\n      Node.Inputs.RangeLow,\n      Node.Inputs.RangeHigh\n    );\n    // set it on the output \"RandomNumber\"\n    Node.setOutputs({ RandomNumber: randNum });\n    // Trigger the signal \"Trigger\"\n    Node.Outputs.Trigger()\n    // restart the timer at a new interval\n    timer = setTimeout(\n      timeOutFunction,\n      calculateIntervalMs(Node.Inputs.Lambda)\n    );\n  };\n\n  // start the first timer\n  let interval = calculateIntervalMs(Node.Inputs.Lambda);\n\n  timer = setTimeout(timeOutFunction, interval);\n}\n\nNode.Signals = {\n  Start() {\n    started = true;\n    startTimer();\n  },\n  Stop() {\n    clearTimeout(timer);\n    started = false;\n  }\n}\n\nNode.Setters.Lambda = function (value) {\n  if (started === true) {\n    clearTimeout(timer);\n    startTimer();\n  }\n}\n","Lambda":2,"RangeLow":0},"ports":[],"children":[]},{"id":"cbd82e55-3afe-5231-8de1-da1bdef2827b","type":"Expression","label":"Lambda value","x":622.7526314402728,"y":332.04985226424844,"parameters":{"expression":"xpos/(DrageAreaWidth - 25)*3 + 0.1"},"ports":[],"children":[]},{"id":"32bcd871-5474-774e-29f7-9f5e2151d525","type":"Expression","x":-23.623646920133808,"y":616.7229629474309,"parameters":{"expression":"ArenaWidth - CircleRadius"},"ports":[],"children":[]},{"id":"e80c6a25-e28d-e351-cb24-b833800b40f1","type":"Transition","x":-48.74960086289866,"y":850.97558189895,"parameters":{},"ports":[],"children":[]},{"id":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","type":"Javascript2","label":"Poisson Process","x":652.3418830912166,"y":820.2511213525188,"parameters":{"code":"Node.Inputs = {\n  Lambda: \"number\",\n  RangeLow: \"number\",\n  RangeHigh: \"number\",\n}\n\nNode.Outputs = {\n  Trigger: \"signal\",\n  RandomNumber: \"number\",\n}\n\nvar timer;\nvar started = false;\n\nfunction generateRandNum(rangeLow, rangeHigh) {\n  return Math.random() * (rangeHigh - rangeLow) + rangeLow;\n}\n\nfunction calculateIntervalMs(lambda) {\n  let interval = -Math.log(1.0 - Math.random()) / lambda;\n  // translate from seconds to milliseconds\n  return interval * 1000;\n}\n\nfunction startTimer() {\n  let timeOutFunction = () => {\n    // generate the random number\n    let randNum = generateRandNum(\n      Node.Inputs.RangeLow,\n      Node.Inputs.RangeHigh\n    );\n    // set it on the output \"RandomNumber\"\n    Node.setOutputs({ RandomNumber: randNum });\n    // Trigger the signal \"Trigger\"\n    Node.Outputs.Trigger()\n    // restart the timer at a new interval\n    timer = setTimeout(\n      timeOutFunction,\n      calculateIntervalMs(Node.Inputs.Lambda)\n    );\n  };\n\n  // start the first timer\n  let interval = calculateIntervalMs(Node.Inputs.Lambda);\n\n  timer = setTimeout(timeOutFunction, interval);\n}\n\nNode.Signals = {\n  Start() {\n    started = true;\n    startTimer();\n  },\n  Stop() {\n    clearTimeout(timer);\n    started = false;\n  }\n}\n\nNode.Setters.Lambda = function (value) {\n  if (started === true) {\n    clearTimeout(timer);\n    startTimer();\n  }\n}\n","Lambda":2,"RangeLow":0},"ports":[],"children":[]},{"id":"bb59172c-4d8a-ed68-d85b-4da3ea9eaffa","type":"Expression","x":631.8613382486535,"y":1057.248438621399,"parameters":{"expression":"ArenaHeight-CircleRadius"},"ports":[],"children":[]},{"id":"9fe36b6d-8738-5837-f2bc-2206c26d7585","type":"Transition","x":589.3726882077558,"y":631.8368699955747,"parameters":{},"ports":[],"children":[]},{"id":"85fb226a-c175-b8f8-9e3b-e7ec9e8521cf","type":"States","label":"Circle Color","x":-29.408232579128367,"y":982.9005935319115,"parameters":{"states":"Color 1,Color 2,Color 3,Color 4","values":"Circle Color","type-Circle Color":"color","value-Color 1-Circle Color":"#A92952","value-Color 2-Circle Color":"#F0BF56","value-Color 3-Circle Color":"#006394","value-Color 4-Circle Color":"#5E4275"},"ports":[],"children":[]},{"id":"f66976c2-8c80-ec5f-be85-b40f92954120","type":"States","x":338.6035020926365,"y":1109.4718850349968,"parameters":{"states":"Small,Big","values":"Radius","value-Small-Radius":30,"value-Big-Radius":50},"ports":[],"children":[]}],"connections":[{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"Off y position","toId":"ae41d579-4f46-8fb4-008b-d4125080e4dd","toProperty":"transformY"},{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"On y Position","toId":"26db486f-e2ee-36d2-2265-5f9295eda87d","toProperty":"transformY"},{"fromId":"d2da663d-7d2a-def7-b332-81544209a137","fromProperty":"onClick","toId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","toProperty":"toggle"},{"fromId":"7bec8df2-fd13-7e0c-f8e4-e5bb53df4124","fromProperty":"positionX","toId":"cbd82e55-3afe-5231-8de1-da1bdef2827b","toProperty":"xpos"},{"fromId":"3ff698db-8722-081e-fde4-3bcf511b7d2c","fromProperty":"boundingWidth","toId":"cbd82e55-3afe-5231-8de1-da1bdef2827b","toProperty":"DrageAreaWidth"},{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"reached-On","toId":"7b345fa9-3709-adaf-444d-181759102820","toProperty":"Start"},{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"reached-Off","toId":"7b345fa9-3709-adaf-444d-181759102820","toProperty":"Stop"},{"fromId":"cbd82e55-3afe-5231-8de1-da1bdef2827b","fromProperty":"result","toId":"7b345fa9-3709-adaf-444d-181759102820","toProperty":"Lambda"},{"fromId":"9e71f320-1955-8612-3e10-9f78edff314c","fromProperty":"boundingWidth","toId":"32bcd871-5474-774e-29f7-9f5e2151d525","toProperty":"CircleRadius"},{"fromId":"32bcd871-5474-774e-29f7-9f5e2151d525","fromProperty":"result","toId":"7b345fa9-3709-adaf-444d-181759102820","toProperty":"RangeHigh"},{"fromId":"7b345fa9-3709-adaf-444d-181759102820","fromProperty":"RandomNumber","toId":"e80c6a25-e28d-e351-cb24-b833800b40f1","toProperty":"targetValue"},{"fromId":"e80c6a25-e28d-e351-cb24-b833800b40f1","fromProperty":"currentValue","toId":"9e71f320-1955-8612-3e10-9f78edff314c","toProperty":"transformX"},{"fromId":"cbd82e55-3afe-5231-8de1-da1bdef2827b","fromProperty":"result","toId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","toProperty":"Lambda"},{"fromId":"20a22d04-5020-bdd5-fb99-6e0382517ada","fromProperty":"boundingWidth","toId":"32bcd871-5474-774e-29f7-9f5e2151d525","toProperty":"ArenaWidth"},{"fromId":"20a22d04-5020-bdd5-fb99-6e0382517ada","fromProperty":"boundingHeight","toId":"bb59172c-4d8a-ed68-d85b-4da3ea9eaffa","toProperty":"ArenaHeight"},{"fromId":"9e71f320-1955-8612-3e10-9f78edff314c","fromProperty":"boundingHeight","toId":"bb59172c-4d8a-ed68-d85b-4da3ea9eaffa","toProperty":"CircleRadius"},{"fromId":"bb59172c-4d8a-ed68-d85b-4da3ea9eaffa","fromProperty":"result","toId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","toProperty":"RangeHigh"},{"fromId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","fromProperty":"RandomNumber","toId":"9fe36b6d-8738-5837-f2bc-2206c26d7585","toProperty":"targetValue"},{"fromId":"9fe36b6d-8738-5837-f2bc-2206c26d7585","fromProperty":"currentValue","toId":"9e71f320-1955-8612-3e10-9f78edff314c","toProperty":"transformY"},{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"reached-Off","toId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","toProperty":"Stop"},{"fromId":"20890c24-ebbc-ef2c-4763-9cbc2093d6db","fromProperty":"reached-On","toId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","toProperty":"Start"},{"fromId":"85fb226a-c175-b8f8-9e3b-e7ec9e8521cf","fromProperty":"Circle Color","toId":"9e71f320-1955-8612-3e10-9f78edff314c","toProperty":"fillColor"},{"fromId":"7b345fa9-3709-adaf-444d-181759102820","fromProperty":"Trigger","toId":"85fb226a-c175-b8f8-9e3b-e7ec9e8521cf","toProperty":"toggle"},{"fromId":"9d5d12fa-4731-e27f-ed16-a358fbc61b45","fromProperty":"Trigger","toId":"f66976c2-8c80-ec5f-be85-b40f92954120","toProperty":"toggle"},{"fromId":"f66976c2-8c80-ec5f-be85-b40f92954120","fromProperty":"Radius","toId":"9e71f320-1955-8612-3e10-9f78edff314c","toProperty":"size"}]})'></button> 
</div>

## Debugging

As with any coding, you will sooner or later make a mistake in your code. Noodl will catch both syntax errors and runtime errors and highlight the **Script** node causing the error. You can also find errors in the warnings popup.

<div class="ndl-images">
    <img src="/guides/javascript/script-error.png" class="ndl-image large" />
</div>

As seen in the image above, syntax errors in the code can cause inputs and outputs of the node to becomes invalid. Fixing the syntax error will restore the connections.

To debug your javascript you can launch the web debugger from the viewer window by clicking the bug icon.

<div class="ndl-images">
    <img src="/guides/javascript/open-debugger.png" class="ndl-image large" />
</div>

In the web debugger you can find any external source files that your are using in your script nodes, but if you want to set a breakpoint in an internal file you can use the `debugger` command. Here's an example:

```javascript
Node.Signals.Stop = function () {
  debugger // This will cause the debugger to break here when running
  clearTimeout(timer);
  timer = undefined;
}
```

### Running code when a Script node is created or destroyed
A Script node is created when the Noodl component that it belongs to is created. Components are created when the app is first launched, when navigation happens, and when a [For Each](/nodes/data/for-each.md) node creates items. The `Node.OnInit` function is automatically called by Noodl when the Script node is created.

Components can be destroyed when doing navigation or when removing items from a list used by a For Each node. This will run the `Node.OnDestroy` function.

Here's an example that sets up an event listener on the `body` element and removes it when the node is destroyed to avoid memory leaks.

```js
function setPosition(e) {
    Node.Outputs.PointerX = e.clientX;
    Node.Outputs.PointerY = e.clientY;
}

Node.OnInit = function() {
    document.body.addEventListener("mousemove", setPosition);
	  document.body.addEventListener("mousedown", setPosition);
}

Node.OnDestroy = function() {
	  document.body.removeEventListener("mousedown", setPosition);
	  document.body.removeEventListener("mousemove", setPosition);    
}
```
