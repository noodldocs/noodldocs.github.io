# Javascript

This guide will cover the functionality of the **Javascript** node. The **Javascript** node is a great way to implement logic and calculations that are easier to express in code than in nodes and connections. It's also a great way to get access to useful Javascript APIs in the browser, for example Date for date functionality or Math for advanced math-functionality.

## Overview

A **Javascript** node works as any other node in Noodl, in the sense that it has inputs and outputs that can be connected to other nodes. All inputs and outputs are available to the developer in their Javascript code. In a **Javascript** node you can call any Javascript function normally available in a browser environment.

## The Javascript source file

You can either edit the Javascript code directly in the built-in editor in Noodl or you can use an external file with an external editor. While it's easy to write code snippets in the inline editor, the external file option might be better if you are working on larger files or even multiple files and modules. An external file needs to be located in your project folder for Noodl to find it. You can copy a file to your project folder by simply dragging the file into the Noodl window.

<div class="ndl-images">
    <img src="/guides/javascript/files.gif" class="ndl-image large"></img>  
</div>

For the source file to work in a **Javascript** node it needs to follow a specific format outlined below:

```javascript
script({
  // The input ports of the Javascript node, name of input and type
  inputs: {
    //...
  },

  // The output ports of the Javascript node,
  // name of output and type, including outgoing signals
  outputs: {
    //...
  },

  // functions for handling any incoming signals
  signals: {
    //...
  },

  // Functions will be called when the correspinding input
  // is changed and the new value is provided
  changed: {
    // ...
  },

  // A setup function that is called when the Javascript node
  // is created and the inputs have been initialized.
  // Useful for initializing states and set up any listeners.
  setup: function (inputs, outputs) {
    // ...
  },

  // A function that is called every time any input has been changed and
  // the outputs may need to be recalculated.
  // It may also be forced to be called to run by calling this.runNextFrame().
  run: function (inputs, outputs, changedInputs) {
    // ...
  },

  // Here you can declare any function that will then be available
  // in this. So you can acces the function below with this.aFunction()
  methods: {
    // ...
  },
});
```

As you can see, the Javascript-source used by the node is a regular Javascript object. Not all parts of the script need to be defined. Most of the time, it will be enough to define some inputs and outputs and update the outputs when the inputs change.

## Inputs and outputs

The inputs are defined under the `inputs` object. Each input also specifies what type it is. The available types are `number`, `string`, `boolean`, `color` and `array`. Note that there is no signal type for inputs, as the signals are handled under the `signals` object.

The outputs work in the same way as the inputs with the only difference that you have one more type you can use: `signal`. The signal type is used for triggering a pulse on an output rather than outputting a specific value. Below we have added outputs to a **Javascript** node.

Since the inputs and outputs are members of an object, they should be separated by a comma. Below is an example of a **Javascript** node with two inputs and one output.

```javascript
script({
  inputs: {
    RangeLow: 'number',
    RangeHigh: 'number',
  },
  outputs: {
    RandomNumber: 'number',
  },
});
```

Lets use the two inputs `RangeLow` and `RangeHigh` and use them to generate a random number on the `RandomNumber` output. To execute the code, we will introduce a signal, `Generate`.

## Input Signals

Input signals are mapped to functions in the `signals` object in the Javascript node. A signal function is called when the signal with the same name is triggered. Here's the implementation of the `Generate` signal.

```javascript
script({
  inputs: {
    RangeLow: 'number',
    RangeHigh: 'number',
  },

  outputs: {
    RandomNumber: 'number',
  },

  signals: {
    Generate: function () {
      let randomNumber =
        Math.random() * (this.inputs.RangeHigh - this.inputs.RangeLow) +
        this.inputs.RangeLow;
      this.setOutputs({ RandomNumber: randomNumber });
    },
  },
});
```

Let's connect the the inputs, outputs and signals to some nodes.

<div class="ndl-images">
    <img src="/guides/javascript/random1.gif" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"20f652fc-ce99-5fc9-4a08-934ba04d5b3c","type":"Javascript2","x":537.504702575142,"y":930.209560898081,"parameters":{"code":"script({\n\tinputs:{\n\t    RangeLow:\"number\",\n\t    RangeHigh:\"number\"\n\t},\n\t\n\toutputs:{\n\t\tRandomNumber:\"number\"\n\t},\n\n\tsignals: {\n\t\tGenerate:function () {\n\t\t\tlet randomNumber = Math.random()*(this.inputs.RangeHigh - this.inputs.RangeLow)+this.inputs.RangeLow;\n\t\t\tthis.setOutputs ({RandomNumber:randomNumber});\n\t\t}\n\t}\n})","RangeLow":0},"ports":[],"children":[]},{"id":"c643e1c5-afee-ed64-e64f-6ad0c661e63f","type":"Group","x":761.2019249441017,"y":867.191643768211,"parameters":{"backgroundColor":"#FFFFFF","paddingTop":{"value":20,"unit":"px"},"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"12a9fe2b-7b27-057e-36de-86819f803faa","type":"Group","x":781.2019249441017,"y":913.191643768211,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"9b3e26cb-1eeb-f2b4-213a-11d7eb8dbe51","type":"Text","label":"Click Text","x":801.2019249441017,"y":959.191643768211,"parameters":{"text":"Click here to generate number","fontSize":{"value":15,"unit":"px"},"alignY":"bottom","sizeMode":"contentSize"},"ports":[],"children":[]}]},{"id":"0e90e1d9-8483-4382-10c6-eda7e36fb8ac","type":"Group","label":"Arena","x":781.2019249441017,"y":1056.191643768211,"parameters":{"borderStyle":"solid","borderWidth":{"value":2,"unit":"px"},"marginBottom":{"value":0,"unit":"px"},"flexDirection":"column","sizeMode":"explicit","height":{"value":35,"unit":"px"}},"ports":[],"children":[{"id":"d7ca794a-f353-7b58-56b7-4b1dd285f359","type":"Circle","x":801.2019249441017,"y":1153.191643768211,"parameters":{"size":30,"position":"absolute"},"ports":[],"children":[]}]}]},{"id":"b049505a-b9bc-b769-6ec0-3d0f7aa0fa17","type":"Expression","label":"arenawidth-circlewidth","x":535.5781783349295,"y":1043.0755233525776,"parameters":{"expression":"arenawidth-circlewidth"},"ports":[],"children":[]}],"connections":[{"fromId":"0e90e1d9-8483-4382-10c6-eda7e36fb8ac","fromProperty":"boundingWidth","toId":"b049505a-b9bc-b769-6ec0-3d0f7aa0fa17","toProperty":"arenawidth"},{"fromId":"d7ca794a-f353-7b58-56b7-4b1dd285f359","fromProperty":"boundingWidth","toId":"b049505a-b9bc-b769-6ec0-3d0f7aa0fa17","toProperty":"circlewidth"},{"fromId":"b049505a-b9bc-b769-6ec0-3d0f7aa0fa17","fromProperty":"result","toId":"20f652fc-ce99-5fc9-4a08-934ba04d5b3c","toProperty":"RangeHigh"},{"fromId":"20f652fc-ce99-5fc9-4a08-934ba04d5b3c","fromProperty":"RandomNumber","toId":"d7ca794a-f353-7b58-56b7-4b1dd285f359","toProperty":"transformX"},{"fromId":"9b3e26cb-1eeb-f2b4-213a-11d7eb8dbe51","fromProperty":"onClick","toId":"20f652fc-ce99-5fc9-4a08-934ba04d5b3c","toProperty":"Generate"}]})'></button> 
</div>

## Reading inputs and setting outputs

In the Javascript code, the you can read the inputs directly through the members of the `inputs` object, typically `this.inputs.AnInput`. You should never set the outputs directly. Instead the Javascript-script object has functions for setting outputs and output signals. To set a non-signal output you use the function `setOutputs( object )` which takes an object as a parameter. The object should include all output signals you are setting. You don't have to set all available outputs in the provided object, only the ones you are changing. Finally, if you want to trigger a signal on an output, you use the function `sendSignalOnOutput( signalName )`.  
Since all of this is available in the script object you typically reach these members using the `this` object: `this.inputs`, `this.setOutputs` and `this.sendSignalOnOutput`. If you are using listeners and callbacks in your code, you may need to pay some attention to what `this` means in that context.

Now let's add a bit more code to our Javascript example. Instead of the `Generate` signal we will implement a `Start` and `Stop` signal and have the **Javascript** node generate new numbers continuously. We will start a timer in `Start`, that will trigger after a random time, influenced by the `Lambda` input. The higher the `Lambda` the shorter the time and the higher the rate of generated numbers. See the <a href="https://en.wikipedia.org/wiki/Poisson_point_process" target="_blank">Poisson process</a> for the math behind generating a random number using a Poisson distribution. When the timer is triggered, a random number is generated based on the ranges provided to the node. Finally a signal to notify that a new number has been generated is sent and the timer is restarted with a new timeout.
When the `Stop` signal is triggered the timer is stopped.

Below is some simple code that generates the random numbers with a Poisson distributed time in between them.

```javascript
script({
  inputs: {
    Lambda: 'number',
    RangeLow: 'number',
    RangeHigh: 'number',
  },

  outputs: {
    Trigger: 'signal',
    RandomNumber: 'number',
  },

  timer: {},

  signals: {
    Start: function () {
      console.log('Start');
      let timeOutFunction = () => {
        // generate the random number
        let randNum = this.generateRandNum(
          this.inputs.RangeLow,
          this.inputs.RangeHigh
        );
        // set it on the output "RandomNumber"
        this.setOutputs({ RandomNumber: randNum });
        // Trigger the signal "Trigger"
        this.sendSignalOnOutput('Trigger');
        // restart the timer at a new interval
        this.timer = setTimeout(
          timeOutFunction,
          this.calculateIntervalMs(this.inputs.Lambda)
        );
      };

      // start the first timer
      let interval = this.calculateIntervalMs(this.inputs.Lambda);

      this.timer = setTimeout(timeOutFunction, interval);
    },
    Stop: function () {
      clearTimeout(this.timer);
      this.timer = {};
    },
  },

  methods: {
    generateRandNum: function (rangeLow, rangeHigh) {
      return Math.random() * (rangeHigh - rangeLow) + rangeLow;
    },
    calculateIntervalMs: function (lambda) {
      let interval = -Math.log(1.0 - Math.random()) / lambda;
      // translate from seconds to milliseconds
      return interval * 1000;
    },
  },
});
```

A few things to note. There is an additional member attribute in the script object, `timer`, to keep track of the ongoing timer between function calls. You can add any number of private attributes like this. Also, as you can see, the outputs are set through calls to `this.setOutputs` and the signal is triggered through `this.sendSignalOnOutput`. To make sure that `this` points to the correct object in the function `timeOutFunction` it is declared using the `() => {}` pattern (Javascript arrow function). Read more about it <a href="https://www.w3schools.com/js/js_arrow_function.asp" target="_blank">here</a>. Finally, there are two private methods declared in the `methods` object.

## Changed inputs

In some cases you may need to react in your Javascript when an input is changed. In this particular case, when the `Lambda` input of the random number generator is changed, the timer interval should be immediately updated to avoid that you have to wait for the next timer to time out for the change to take effect. To handle a case like this, a function with the same name as the input, `Lambda`, is added in the `changed` object. An additional state variable, `started`, is added to make sure that changing the value when the timer is stopped won't cause it to start.

```javascript
	changed:{
		Lambda:function(value) {
		    if (this.started === true) {
		        clearTimeout (this.timer);
		        this.startTimer();
		    }
		}
	}
```

## The final code

After some small refactoring the final code looks as below:

```javascript
script({
  inputs: {
    Lambda: 'number',
    RangeLow: 'number',
    RangeHigh: 'number',
  },

  outputs: {
    Trigger: 'signal',
    RandomNumber: 'number',
  },

  timer: {},
  started: false,

  signals: {
    Start: function () {
      this.started = true;
      this.startTimer();
    },
    Stop: function () {
      clearTimeout(this.timer);
      this.timer = {};
      this.started = false;
    },
  },

  changed: {
    Lambda: function (value) {
      if (this.started === true) {
        clearTimeout(this.timer);
        this.startTimer();
      }
    },
  },

  methods: {
    generateRandNum: function (rangeLow, rangeHigh) {
      return Math.random() * (rangeHigh - rangeLow) + rangeLow;
    },
    calculateIntervalMs: function (lambda) {
      let interval = -Math.log(1.0 - Math.random()) / lambda;
      // translate from seconds to milliseconds
      return interval * 1000;
    },
    startTimer: function () {
      let timeOutFunction = () => {
        // generate the random number
        let randNum = this.generateRandNum(
          this.inputs.RangeLow,
          this.inputs.RangeHigh
        );
        // set it on the output "RandomNumber"
        this.setOutputs({ RandomNumber: randNum });
        // Trigger the signal "Trigger"
        this.sendSignalOnOutput('Trigger');
        // restart the timer at a new interval
        this.timer = setTimeout(
          timeOutFunction,
          this.calculateIntervalMs(this.inputs.Lambda)
        );
      };

      // start the first timer
      let interval = this.calculateIntervalMs(this.inputs.Lambda);

      this.timer = setTimeout(timeOutFunction, interval);
    },
  },
});
```

## Using Javascript nodes

Connecting to the the inputs and outputs, the **Javascript** nodes can be used as any other nodes in Noodl. As an example, the Random Generator **Javascript** node has been combined with a simple UI to control the inputs. The output of the random generator is used to move a circle on the screen and trigger state changes. We have also copy/pasted the **Javascript** node and use it two times. This works great, but remember that the Javascript code is cloned if you are using an inline source so changing the code in one **Javascript** node does not affect the other. Hence, it's often a good idea to encapsulate a reusable **Javascript** node in a Noodl component.

<div class="ndl-images">
    <img src="/guides/javascript/random3.gif" class="ndl-image large"></img>
    <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"a62515bf-c609-c55b-f700-29c4a35fc82d","type":"Group","x":134.90064237974536,"y":-409.9352605910343,"parameters":{"backgroundColor":"#FFFFFF","paddingTop":{"value":20,"unit":"px"},"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"2ff1bea9-8007-130e-6e2e-87832fc7bd3a","type":"Group","x":154.90064237974536,"y":-363.9352605910343,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"24455c76-9554-06f0-cb60-2899d46951bb","type":"Text","label":"Rate controller text","x":174.90064237974536,"y":-317.9352605910343,"parameters":{"text":"Random generator is","fontSize":{"value":15,"unit":"px"},"alignY":"bottom","sizeMode":"contentSize"},"ports":[],"children":[]},{"id":"65df88b3-b900-072e-52a1-a0768247e02d","type":"Group","label":"On/Off Spinner","x":174.90064237974536,"y":-256.9352605910343,"parameters":{"sizeMode":"explicit","height":{"value":20,"unit":"px"},"clip":true,"alignY":"bottom","marginLeft":{"value":10,"unit":"px"},"flexDirection":"none","width":{"value":30,"unit":"px"}},"ports":[],"children":[{"id":"88f9e360-703a-3d80-25ee-f8c051d044d6","type":"Text","label":"Off","x":194.90064237974536,"y":-159.9352605910343,"parameters":{"text":"Off","color":"#006394","fontSize":{"value":15,"unit":"px"},"sizeMode":"contentSize","alignY":"bottom"},"ports":[],"children":[]},{"id":"c9823337-7a72-5030-b8c8-158185bd56a1","type":"Text","label":"On","x":194.90064237974536,"y":-62.93526059103431,"parameters":{"text":"On","fontSize":{"value":15,"unit":"px"},"color":"#006394","sizeMode":"contentSize","alignY":"bottom"},"ports":[],"children":[]}]}]},{"id":"084eb903-b7a9-033a-9f3c-fbf9f392b049","type":"Group","label":"Text and Rate controller","x":154.90064237974536,"y":34.06473940896569,"parameters":{"flexDirection":"row","sizeMode":"contentHeight","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[{"id":"3e19991a-0d3f-3e5e-573c-355755aa61fa","type":"Text","label":"Set rate","x":174.90064237974536,"y":95.06473940896569,"parameters":{"text":"Set rate","fontSize":{"value":15,"unit":"px"},"alignY":"center","sizeMode":"contentSize","marginRight":{"value":20,"unit":"px"}},"ports":[],"children":[]},{"id":"905130f1-2421-da25-ede9-9c613565f0c8","type":"Group","label":"Rate Controller","x":174.90064237974536,"y":156.0647394089657,"parameters":{"sizeMode":"explicit","height":{"value":30,"unit":"px"},"flexDirection":"none","width":{"value":200,"unit":"px"}},"ports":[],"children":[{"id":"f273e720-ed75-309d-60dc-200cfa410ba0","type":"Group","label":"Rate controller Bg","x":194.90064237974536,"y":217.0647394089657,"parameters":{"height":{"value":20,"unit":"px"},"backgroundColor":"#C6C6C6","borderRadius":{"value":10,"unit":"px"},"alignY":"center"},"ports":[],"children":[]},{"id":"32a8d79e-a617-e113-3498-04f9ea67d47c","type":"Drag","x":194.90064237974536,"y":314.0647394089657,"parameters":{},"ports":[],"children":[{"id":"8c73cd5b-0f9d-d61a-0b32-c3f7c7847280","type":"Group","label":"Drag handle","x":214.90064237974536,"y":396.0647394089657,"parameters":{"height":{"value":20,"unit":"px"},"width":{"value":5,"unit":"px"},"backgroundColor":"#434B53","paddingLeft":{"value":0,"unit":"px"},"marginLeft":{"value":10,"unit":"px"},"marginRight":{"value":10,"unit":"px"},"borderRadius":{"value":2,"unit":"px"},"alignY":"center"},"ports":[],"children":[]}]}]}]},{"id":"3975dcfb-75f5-2d5b-eea9-53f3545a1825","type":"Group","label":"Arena","x":154.90064237974536,"y":457.0647394089657,"parameters":{"borderStyle":"solid","borderWidth":{"value":2,"unit":"px"},"marginBottom":{"value":10,"unit":"px"},"flexDirection":"none"},"ports":[],"children":[{"id":"3d459c33-17b0-a515-2b03-1cabe308a68d","type":"Circle","x":174.90064237974536,"y":554.0647394089657,"parameters":{"size":30,"position":"absolute"},"ports":[],"children":[]}]}]},{"id":"853b5f08-32bb-ef4c-c596-5f87714c3586","type":"States","x":-256.94960545430297,"y":-270.21084800377696,"parameters":{"states":"Off,On","values":"Off y position,On y Position","value-Off-Off y position":0,"value-On-Off y position":-20,"value-Off-On y Position":20,"value-On-On y Position":0},"ports":[],"children":[]},{"id":"300ca6a2-bbe3-c771-b763-9f014eb5d122","type":"Javascript2","label":"Poisson Process","x":-55.03810167445786,"y":-2.306217936313402,"parameters":{"code":"script({\n\tinputs:{\n\t    Lambda:\"number\",\n\t    RangeLow:\"number\",\n\t    RangeHigh:\"number\"\n\t},\n\t\n\toutputs:{\n\t    Trigger:\"signal\",\n\t    RandomNumber:\"number\"\n\t},\n\t\n\ttimer:{},\n\tstarted:false,\n\t\n\tsignals:{\n\t\tStart:function() {\n\t\t    this.started = true;\n\t\t    this.startTimer();\n\t\t}, \n\t\tStop:function() {\n\t\t    clearTimeout (this.timer);\n\t\t    this.timer = {};\n\t        this.started = false;\n\t\t}\n\t},\n\t\n\tchanged:{\n\t\tLambda:function(value) {\n\t\t    if (this.started === true) {\n\t\t        clearTimeout (this.timer);\n\t\t        this.startTimer();\n\t\t    }\n\t\t}\n\t},\n\t\n\tmethods:{\n\t    generateRandNum:function (rangeLow, rangeHigh){\n\t        return Math.random() * (rangeHigh-rangeLow) + rangeLow;\n\t    },\n\t\tcalculateIntervalMs:function(lambda) {\n\t\t    let interval = -Math.log(1.0 - Math.random()) / lambda;\n\t\t    // translate from seconds to milliseconds\n\t\t    return interval * 1000;\n\t\t},\n\t\tstartTimer:function () {\n\t\t    let timeOutFunction = () => {\n\t\t        // generate the random number\n\t\t        let randNum = this.generateRandNum (this.inputs.RangeLow, this.inputs.RangeHigh);\n\t\t        // set it on the output \"RandomNumber\"\n\t\t        this.setOutputs ({RandomNumber:randNum});\n\t\t        // Trigger the signal \"Trigger\"\n\t\t        this.sendSignalOnOutput (\"Trigger\");\n\t\t        // restart the timer at a new interval\n\t\t        this.timer = setTimeout(timeOutFunction, this.calculateIntervalMs (this.inputs.Lambda));\n\t\t    };\n\t\t    \n\t\t    // start the first timer\n\t\t    let interval = this.calculateIntervalMs (this.inputs.Lambda);\n\t\t    \n\t\t    this.timer = setTimeout(timeOutFunction, interval);\n\t\t}\n\t}\n})\n","Lambda":2,"RangeLow":0},"ports":[],"children":[]},{"id":"9646e886-d5ac-2675-4697-394430e34eb7","type":"Expression","label":"Lambda value","x":527.8030259859698,"y":44.11459167321408,"parameters":{"expression":"xpos/(DrageAreaWidth - 25)*3 + 0.1"},"ports":[],"children":[]},{"id":"38936327-4f3a-045c-79ec-4af5d2f0bf89","type":"Expression","x":-118.57325237443678,"y":328.7877023563966,"parameters":{"expression":"ArenaWidth - CircleRadius"},"ports":[],"children":[]},{"id":"4b03bda0-80f3-9592-2487-9d90788dd322","type":"Transition","x":-143.69920631720163,"y":563.0403213079157,"parameters":{},"ports":[],"children":[]},{"id":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","type":"Javascript2","label":"Poisson Process","x":557.3922776369136,"y":532.3158607614845,"parameters":{"code":"script({\n\tinputs:{\n\t    Lambda:\"number\",\n\t    RangeLow:\"number\",\n\t    RangeHigh:\"number\"\n\t},\n\t\n\toutputs:{\n\t    Trigger:\"signal\",\n\t    RandomNumber:\"number\"\n\t},\n\t\n\ttimer:{},\n\tstarted:false,\n\t\n\tsignals:{\n\t\tStart:function() {\n\t\t    this.started = true;\n\t\t    this.startTimer();\n\t\t}, \n\t\tStop:function() {\n\t\t    clearTimeout (this.timer);\n\t\t    this.timer = {};\n\t        this.started = false;\n\t\t}\n\t},\n\t\n\tchanged:{\n\t\tLambda:function(value) {\n\t\t    if (this.started === true) {\n\t\t        clearTimeout (this.timer);\n\t\t        this.startTimer();\n\t\t    }\n\t\t}\n\t},\n\t\n\tmethods:{\n\t    generateRandNum:function (rangeLow, rangeHigh){\n\t        return Math.random() * (rangeHigh-rangeLow) + rangeLow;\n\t    },\n\t\tcalculateIntervalMs:function(lambda) {\n\t\t    let interval = -Math.log(1.0 - Math.random()) / lambda;\n\t\t    // translate from seconds to milliseconds\n\t\t    return interval * 1000;\n\t\t},\n\t\tstartTimer:function () {\n\t\t    let timeOutFunction = () => {\n\t\t        // generate the random number\n\t\t        let randNum = this.generateRandNum (this.inputs.RangeLow, this.inputs.RangeHigh);\n\t\t        // set it on the output \"RandomNumber\"\n\t\t        this.setOutputs ({RandomNumber:randNum});\n\t\t        // Trigger the signal \"Trigger\"\n\t\t        this.sendSignalOnOutput (\"Trigger\");\n\t\t        // restart the timer at a new interval\n\t\t        this.timer = setTimeout(timeOutFunction, this.calculateIntervalMs (this.inputs.Lambda));\n\t\t    };\n\t\t    \n\t\t    // start the first timer\n\t\t    let interval = this.calculateIntervalMs (this.inputs.Lambda);\n\t\t    \n\t\t    this.timer = setTimeout(timeOutFunction, interval);\n\t\t}\n\t}\n})\n","Lambda":2,"RangeLow":0},"ports":[],"children":[]},{"id":"07e74639-2e6b-0853-5fba-f0680c348d10","type":"Expression","x":536.9117327943505,"y":769.3131780303646,"parameters":{"expression":"ArenaHeight-CircleRadius"},"ports":[],"children":[]},{"id":"cec6ebb4-4fad-7928-1608-f55f4eb57b20","type":"Transition","x":494.42308275345283,"y":343.9016094045404,"parameters":{},"ports":[],"children":[]},{"id":"f2dde575-b78c-5da2-14a8-67a635d56861","type":"States","label":"Circle Color","x":-124.35783803343134,"y":694.965332940877,"parameters":{"states":"Color 1,Color 2,Color 3,Color 4","values":"Circle Color","type-Circle Color":"color","value-Color 1-Circle Color":"#A92952","value-Color 2-Circle Color":"#F0BF56","value-Color 3-Circle Color":"#006394","value-Color 4-Circle Color":"#5E4275"},"ports":[],"children":[]},{"id":"9f50b84d-5da9-d3ec-ceea-c80efc065e1a","type":"States","x":243.65389663833355,"y":821.5366244439626,"parameters":{"states":"Small,Big","values":"Radius","value-Small-Radius":30,"value-Big-Radius":50},"ports":[],"children":[]}],"connections":[{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"Off y position","toId":"88f9e360-703a-3d80-25ee-f8c051d044d6","toProperty":"transformY"},{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"On y Position","toId":"c9823337-7a72-5030-b8c8-158185bd56a1","toProperty":"transformY"},{"fromId":"65df88b3-b900-072e-52a1-a0768247e02d","fromProperty":"onClick","toId":"853b5f08-32bb-ef4c-c596-5f87714c3586","toProperty":"toggle"},{"fromId":"32a8d79e-a617-e113-3498-04f9ea67d47c","fromProperty":"positionX","toId":"9646e886-d5ac-2675-4697-394430e34eb7","toProperty":"xpos"},{"fromId":"f273e720-ed75-309d-60dc-200cfa410ba0","fromProperty":"boundingWidth","toId":"9646e886-d5ac-2675-4697-394430e34eb7","toProperty":"DrageAreaWidth"},{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"reached-On","toId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","toProperty":"Start"},{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"reached-Off","toId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","toProperty":"Stop"},{"fromId":"9646e886-d5ac-2675-4697-394430e34eb7","fromProperty":"result","toId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","toProperty":"Lambda"},{"fromId":"3d459c33-17b0-a515-2b03-1cabe308a68d","fromProperty":"boundingWidth","toId":"38936327-4f3a-045c-79ec-4af5d2f0bf89","toProperty":"CircleRadius"},{"fromId":"38936327-4f3a-045c-79ec-4af5d2f0bf89","fromProperty":"result","toId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","toProperty":"RangeHigh"},{"fromId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","fromProperty":"RandomNumber","toId":"4b03bda0-80f3-9592-2487-9d90788dd322","toProperty":"targetValue"},{"fromId":"4b03bda0-80f3-9592-2487-9d90788dd322","fromProperty":"currentValue","toId":"3d459c33-17b0-a515-2b03-1cabe308a68d","toProperty":"transformX"},{"fromId":"9646e886-d5ac-2675-4697-394430e34eb7","fromProperty":"result","toId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","toProperty":"Lambda"},{"fromId":"3975dcfb-75f5-2d5b-eea9-53f3545a1825","fromProperty":"boundingWidth","toId":"38936327-4f3a-045c-79ec-4af5d2f0bf89","toProperty":"ArenaWidth"},{"fromId":"3975dcfb-75f5-2d5b-eea9-53f3545a1825","fromProperty":"boundingHeight","toId":"07e74639-2e6b-0853-5fba-f0680c348d10","toProperty":"ArenaHeight"},{"fromId":"3d459c33-17b0-a515-2b03-1cabe308a68d","fromProperty":"boundingHeight","toId":"07e74639-2e6b-0853-5fba-f0680c348d10","toProperty":"CircleRadius"},{"fromId":"07e74639-2e6b-0853-5fba-f0680c348d10","fromProperty":"result","toId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","toProperty":"RangeHigh"},{"fromId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","fromProperty":"RandomNumber","toId":"cec6ebb4-4fad-7928-1608-f55f4eb57b20","toProperty":"targetValue"},{"fromId":"cec6ebb4-4fad-7928-1608-f55f4eb57b20","fromProperty":"currentValue","toId":"3d459c33-17b0-a515-2b03-1cabe308a68d","toProperty":"transformY"},{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"reached-Off","toId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","toProperty":"Stop"},{"fromId":"853b5f08-32bb-ef4c-c596-5f87714c3586","fromProperty":"reached-On","toId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","toProperty":"Start"},{"fromId":"f2dde575-b78c-5da2-14a8-67a635d56861","fromProperty":"Circle Color","toId":"3d459c33-17b0-a515-2b03-1cabe308a68d","toProperty":"fillColor"},{"fromId":"300ca6a2-bbe3-c771-b763-9f014eb5d122","fromProperty":"Trigger","toId":"f2dde575-b78c-5da2-14a8-67a635d56861","toProperty":"toggle"},{"fromId":"54e94f20-b0a7-5fc2-283d-ec5c48a9a09d","fromProperty":"Trigger","toId":"9f50b84d-5da9-d3ec-ceea-c80efc065e1a","toProperty":"toggle"},{"fromId":"9f50b84d-5da9-d3ec-ceea-c80efc065e1a","fromProperty":"Radius","toId":"3d459c33-17b0-a515-2b03-1cabe308a68d","toProperty":"size"}]})'></button> 
</div>

## Debugging

As with any coding, you will sooner or later make a mistake in your **Javascript** nodes. If Noodl cannot parse your Javascript source, or if a runtime error occurs, the **Javascript** node will be visually dashed and you can find the error in the debug section.

<div class="ndl-images">
    <img src="/guides/javascript/Javascript_error.gif" class="ndl-image large"></img>  
</div>

You can also use logging functionality, for example `console.log("")` to log debug printouts. They will be found in the console window of the web debugger.

<div class="ndl-images">
    <img src="/guides/javascript/Javascript_console.gif" class="ndl-image large"></img>  
</div>
