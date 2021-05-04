# Variable

Use this node to store a single data variable that will be globally accessible throughout the application.

## Store a value
Give the Variable a name with the **Name** input and simply connect to **Value**, whenever the input connection is updated the value will be stored in the variable.

![](variable-1.png ':class=img-size-m')

## Use a stored value
When a value is stored in a variable you can use it somewhere else in your application simply be creating a new node and giving it the same **Name**.

![](variable-3.png ':class=img-size-m')

## Controlled store
By connecting to **Set** you can control when the value is stored to the variable. Now the **Value** input is only saved in the variable when a signal is received on **Set**.

![](variable-2.png ':class=img-size-m')

## INPUTS

**Name**  
The name of the **Variable**. All **Variable** nodes with the same name will share the same data.

**Value**  
The value that you want the **Variable** to get when you trigger the _Set_ signal. You will connect your data to this input.

**Set**  
A signal input. When this input has a connection and a signal is received on this input, it will store the current value on the _Value_ input in the **Variable** and all other **Variable** nodes will receive the stored value. If this input does not have a connection the node will store as soon as it receives a new value on the **Value** input.

**Fetch**  
Normally the value output of the node is updated once the _Name_ input is set and if there is a change in the data from somewhere in the graph. However, if this signal has a connection it will wait until it gets a signal on fetch before it updates.

## OUTPUTS

**Value**  
The current value of this Variable node. This will only update when the _Set_ signal is triggered on this or any other **Variable** node with the same _Name_.

**Stored**  
Signal when the _Set_ is complete and the data is stored.

**Changed**  
Signal when the _Value_ of this **Variable** has changed.

**Fetched**  
Signal when the data of this **Variable** node has been fetched and updated, either as a response to the **Fetch** input signal (when it has completed and the output **Value** is updated), or when the **Name** of the variable have changed.

**Name**  
The name of the **Variable**.
