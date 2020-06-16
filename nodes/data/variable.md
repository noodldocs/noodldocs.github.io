# Variable

Use this node to store a single data variable that will be globally accessible throughout the node graph.

![](variable.png ':class=img-size-m')

## INPUTS

**Name**  
The name of the Variable. All Variable nodes with the same name will share the same data.

**Value**  
The value that you want the Variable to get when you trigger the **Set** signal. You will connect your data to this input.

**Set**  
A signal input. When a signal is received on this input, it will store the current value on the **Value** input in the Variable and all other Variable nodes will receive the stored value.

**Fetch**  
Normally the value output of the node is updated once the **Name** input is set and if there is a change in the data from somewhere in the graph. However, if this signal has a connection it will wait until it gets a signal on fetch before it updates.

## OUTPUTS

**Value**  
The current value of this Variable node. This will only update when the **Set** signal is triggered on this or any other Variable node with the same name.

**Stored**  
Signal when the **Set** is complete and the data is stored.

**Changed**  
Signal when the Value of this Variable has changed.

**Fetched**  
Signal when the data of this Variable node has been fetched and updated.

**Name**  
The name of the Variable.
