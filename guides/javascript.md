# Javascript

This guide will cover the functionality of the Javascript node. The Javascript node is a great way to implement logic and calculations that's easier to express in code than in nodes and connections. It's also a great way to get access to useful Javascript APIs in the browser, for example Date for date functionality or Math for advanced math-functionality.

## Overview

A Javascript node works as any other node in Noodl, in the sense that it has inputs and outputs that can be connected to other nodes. All inputs and outputs are available to the developer in their Javascript code. In a Javascript node you can call any Javascript function normally available in a browser environment.

## The Javascript source file
You can either edit the Javascript code directly in the editor in Noodl or you can use an external file. While it's easy to write code snippets in the inline editor, the external file option might be better if you are working on larger files or even multiple files and modules. An external file need to be located in your project folder for Noodl to find it. You can do that by simply dragging the file into the Noodl window.


<div class="ndl-images">
    <img src="/guides/javascript/files.gif" class="ndl-image large"></img>  
</div>



For the source file to work in a Javascript node it needs to follow a specific format outlined below: 
```javascript
script({
	// The input ports of the Javascript node, name of input and type
	inputs:{
	    //...
	},
	
	// The output ports of the Javascript node,
	// name of output and type, including outgoing signals
	outputs:{
	    //...
	},
	
	// functions for handling any incoming signals 
	signals:{
		//...
	},
	
	// Functions will be called when the correspinding input
	// is changed and the new value is provided
	changed:{
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
	run: function (inputs, outputs, changedInputs){
      // ...
	},
	
	// Here you can declare any function that will then be available
	// in this. So you can acces the function below with this.aFunction()
	methods:{
		// ...
	}
})


```

As you can see, the Javascript-source used by the node is a regular Javascript object. Not all parts of the script need to be defined if you don't use them. Most of the time, it will be enough by defining some inputs and outputs and update the outputs when the inputs change.

## Inputs and outputs
The inputs are defined under the `inputs` object. Each input also specifies what type it is. The available types are `number`, `string`, `boolean`, `color` and `array`. Note that there is no signal type for inputs, as the signals are handled under the `signals` object.

The outputs works in the same way as the inputs with the only difference that you have one more type you can use: `signal`. The signal type is used for triggering a pulse on an output rather than outputting a specific value. Below we have added outputs to a Javascript node.

Since the inputs and outputs are members of an object, they should be separated by a comma. Below is an example of a Javascript node with two inputs and one output.

```javascript
script({
	
	inputs:{
	    RangeLow:'number',
	    RangeHigh:'number'
	},
	outputs:{
	    RandomNumber:'number'
	}
})
```

Lets use the two inputs `RangeLow` and `RangeHigh` and use them to generate a random number on the `RandomNumber` output. To execute the code, we will introduce a signal, `Generate`.

## Input Signals
Input signals are mapped to functions in the `signals` object in the Javascript node. The function is called when the signal is triggered. Here's the implementation of the `Generate` signal.

```javascript
script({
	
	inputs:{
	    RangeLow:'number',
	    RangeHigh:'number'
	},
	
	outputs:{
		RandomNumber:'number'
	},

	signals: {
		Generate:function () {
			let randomNumber = Math.random()*(this.inputs.RangeHigh - this.inputs.RangeLow)+this.inputs.RangeLow;
			this.setOutputs ({RandomNumber:randomNumber});
		}
	}
})
```

Let's connect the the inputs, outputs and signals to some nodes.

<div class="ndl-images">
    <img src="/guides/javascript/random1.gif" class="ndl-image large"></img>  
</div>

## Reading inputs and setting outputs
In the Javascript code, the you can read the inputs directly through the members of the `inputs` object, typically `this.inputs.AnInput`. A Javascript-script object have a few functions for setting outputs as well. To set a non-signal output you use the function `setOutputs( object )` which takes an object as a parameter. The object should include all output signals you are setting. You don't have to set all available outputs in the provided object, only the ones you are changing. Finally, if you want to trigger a signal on an output, you use the function `sendSignalOnOutput( signalName )`.
Since all of this is available in the script object you typically reach the using the `this` object: `this.inputs`, `this.setOutputs` and `this.sendSignalOnOutput`. If you are using listeners and callbacks, you may need to pay some attention to what `this` mean in that context.

Now let's add a bit more code to our Javascript example. Instead of the `Generate` signal we will implement a `Start` and `Stop` signal and have the Javascript node generate new numbers continuously. We will start a timer in `Start`, that will trigger after a random time affected by the `Lambda` input. The higher the `Lambda` the shorter the time and the higher the rate of generated numbers. See the <a href="https://en.wikipedia.org/wiki/Poisson_point_process" target="_blank">Poisson process</a> for the math behind it. When the timer is triggered, generate the random number and send a signal to notify that a new number has been generted. Finally restart the timer with a new timeout.
When the `Stop` signal is triggered the timer is stopped.

Below is some simple code that generates the random numbers.

```javascript
script({
	inputs:{
	    Lambda:'number',
	    RangeLow:'number',
	    RangeHigh:'number'
	},
	
	outputs:{
	    Trigger:'signal',
	    RandomNumber:'number'
	},
	
	timer:{},
	
	signals:{
		Start:function() {
		    console.log("Start");
		    let timeOutFunction = () => {
		        // generate the random number
		        let randNum = this.generateRandNum (this.inputs.RangeLow, this.inputs.RangeHigh);
		        // set it on the output "RandomNumber"
		        this.setOutputs ({RandomNumber:randNum});
		        // Trigger the signal "Trigger"
		        this.sendSignalOnOutput ("Trigger");
		        // restart the timer at a new interval
		        this.timer = setTimeout(timeOutFunction, this.calculateIntervalMs (this.inputs.Lambda));
		    };
		    
		    // start the first timer
		    let interval = this.calculateIntervalMs (this.inputs.Lambda);
		    
		    this.timer = setTimeout(timeOutFunction, this.calculateIntervalMs (this.inputs.Lambda));
		}, 
		Stop:function() {
		    clearTimeout (this.timer);
		    this.timer = {};
		}
	},
	

	methods:{
	    generateRandNum:function (rangeLow, rangeHigh){
	        return Math.random() * (rangeHigh-rangeLow) + rangeLow;
	    },
		calculateIntervalMs:function(lambda) {
		    let interval = -Math.log(1.0 - Math.random()) / lambda;
		    // translate from seconds to milliseconds
		    return interval * 1000;
		}
	}
})
```

A few things to note. There is an additional member attribute inte script object, `timer`, to keep track of the current timer between functions. You can add any number of private attributes like this. As you also can see, the outputs are set through calls to `this.setOutputs` and the signal is triggered through `this.sendSignalOnOutput`. To make sure that `this` point to the correct object in the function `timeOutFunction` it is declared using the `() => {}` pattern. Read more about it <a href="https://www.w3schools.com/js/js_arrow_function.asp" target="_blank">here</a>. Finally, there are two private methods declared in the `methods` object.

## Changed inputs
In some cases you may need to react in your Javascript when an input is changed. In this particular case, when the `Lambda` input of the random number generator is changed, the timer interval should be immediately updated to avoid that you have to wait for the next timer to time out for the change to take effect. To handle that a function called the same as the input, `Lambda`, is added in the `changed` object. An additional state variable, `started` was added to make sure that changing the value when the timer was stopped wouldn't cause it to start.

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
	inputs:{
	    Lambda:'number',
	    RangeLow:'number',
	    RangeHigh:'number'
	},
	
	outputs:{
	    Trigger:'signal',
	    RandomNumber:'number'
	},
	
	timer:{},
	started:false,
	
	signals:{
		Start:function() {
		    this.started = true;
		    this.startTimer();
		}, 
		Stop:function() {
		    clearTimeout (this.timer);
		    this.timer = {};
	        this.started = false;
		}
	},
	
	changed:{
		Lambda:function(value) {
		    if (this.started === true) {
		        clearTimeout (this.timer);
		        this.startTimer();
		    }
		}
	},
	
	methods:{
	    generateRandNum:function (rangeLow, rangeHigh){
	        return Math.random() * (rangeHigh - rangeLow) + rangeLow;
	    },
		calculateIntervalMs:function(lambda) {
		    let interval = -Math.log(1.0 - Math.random()) / lambda;
		    // translate from seconds to milliseconds
		    return interval * 1000;
		},
		startTimer:function () {
		    let timeOutFunction = () => {
		        // generate the random number
		        let randNum = this.generateRandNum (this.inputs.RangeLow, this.inputs.RangeHigh);
		        // set it on the output "RandomNumber"
		        this.setOutputs ({RandomNumber:randNum});
		        // Trigger the signal "Trigger"
		        this.sendSignalOnOutput ("Trigger");
		        // restart the timer at a new interval
		        this.timer = setTimeout (timeOutFunction, this.calculateIntervalMs (this.inputs.Lambda));
		    };
		    
		    // start the first timer
		    let interval = this.calculateIntervalMs (this.inputs.Lambda);
		    
		    this.timer = setTimeout (timeOutFunction, interval);
		}
	}
})
```

## Using Javascript nodes
Connecting to the the inputs and outputs, the Javascript nodes can be used as any other nodes in Noodl. As an example, the Random Generator Javascript node has been combined with a simple UI to control the inputs. The output of the random generator is used to move a circle on the screen and trigger state changes. We have also copy/pasted the Javascript node and used it two times. This works great, but remember that the Javascript code is cloned if you are using an inline source so changing the code in one Javascript node does not affect the other. Hence it's often a good idea to encapsulate a reusable Javascript node in a Noodl component.

<div class="ndl-images">
    <img src="/guides/javascript/random3.gif" class="ndl-image large"></img>  
</div>

## Debugging
If Noodl cannot parse your Javascript source, if a runtime error occurs, the Javascript node will be visually dashed and you can find the error in the debug section.
<div class="ndl-images">
    <img src="/guides/javascript/Javascript_error.gif" class="ndl-image large"></img>  
</div>

You can also use logging functionality, for example `console.log("")` to log debug printouts. They will be found in the console window of the web debugger.

<div class="ndl-images">
    <img src="/guides/javascript/Javascript_console.gif" class="ndl-image large"></img>  
</div>


