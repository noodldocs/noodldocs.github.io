<##head##>

# Function

This node enables you to add simpler custom JavaScript to your application. Any time the inputs are changed the function is run and the outputs are updated.

![](function-1.png ':class=img-size-l')

The code runs from top to bottom. For more complex custom JavaScript with multiple executon paths and extended control you should use the <span class="ndl-node">Script</span> node.

<##head##>

The most basic way to use the node is as an expression, any time the inputs are changed the script is run and the outputs are updated. E.g. the example above can be used as shown below.

![](function-2.png ':class=img-size-l')

## Custom inputs and outputs

In your function script you can use the **Inputs** and **Outputs** object and any properties of these objects that you use in your script will automatically create input and outputs ports. So the following script:

```javascript
Outputs.FullName = Inputs.FirstName + ' ' + Inputs.LastName
```

Will create the output **FullName** and the inputs **FirstName** and **LastName**. Another option is to explicitly specify the inputs and outputs in the properties of the node. This will allow you to explicitly specify the types of the inputs and outputs. This can be especially useful if the node is connected to **Component Inputs** or **Component Outputs**.

![](function-3.png ':class=img-size-m')

## Signal outputs

If you want to send a signal from your **Function** script you can use an output as a function instead of assigning it a value.

```javascript
if (Inputs.Test === true) {
    Outputs.TestIsTrue()
} else {
    Outputs.TestIsFalse()
}
```

The code above will automatically create two outputs **TestIsTrue** and **TestIsFalse** that are signals. When the inputs are changed and the code is run the node will send a signal on either depending on the content of the **Test** input.

## Controlled execution

Normally the script is run when any of the inputs change, i.e. receive new data via connections, but you can also control when the function is run with the **Run** signal input. If this input has a connection the script will only run when a signal is received.

![](function-4.png ':class=img-size-l')

## Inputs

### Script Inputs

Here you can list inputs to the function and specify types for the inputs as described above. For each input specified or simply used in the function code an input to the node will be created.

### Script Oputputs

Here you can list outputs to the function and specify types for the outputs as described above. For each output specified or simply used in the function code an input to the node will be created.

### Actions

**Run**
Send a signal here to run the function. If this input has a connection the function script will not run when inputs are changed.

## Outputs

The outputs from the function script.
