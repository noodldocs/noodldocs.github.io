# Function

This is the easiest way to add a bit of Javascript to your Noodl applications. You simply create a **Function** node and you can edit the source by opening the properties for the node and editing the **Script** property. Learn more about Javascript and Noodl in the [guide](/guides/javascript.md).

![](function-1.png ':class=img-size-l')

The most basic way to use the node is as an expression, any time the inputs are changed the script is run and the outputs are updated. E.g. the example above can be used as shown below.

![](function-2.png ':class=img-size-l')

In your function script you can use the **Inputs** and **Outputs** object and any properties of these objects that you use in your script will automatically create input and outputs ports. So the following script:

```javascript
Outputs.FullName = Inputs.FirstName + ' ' + Inputs.LastName
```

Will create the output **FullName** and the inputs **FirstName** and **LastName**. Another option is to explicitly specify the inputs and outputs in the properties of the node. This will allow you to explicitly specify the types of the inputs and outputs. This can be especially useful if the node is connected to **Component Inputs** or **Component Outputs**.

![](function-3.png ':class=img-size-m')

Normally the script is run when any of the inputs change, i.e. receive new data via connections, but you can also control when the function is run with the **Run** signal input. If this input has a connection the script will only run when a signal is received.

![](function-4.png ':class=img-size-l')

## INPUTS

### Script Inputs
Here you can list inputs to the function and specify types for the inputs as described above. For each input specified or simply used in the function code an input to the node will be created.

### Script Oputputs
Here you can list outputs to the function and specify types for the outputs as described above. For each output specified or simply used in the function code an input to the node will be created.

### Actions

**Run**  
Send a signal here to run the function. If this input has a connection the function script will not run when inputs are changed.

## OUTPUTS

The outputs from the function script.



