# Variable
Use this node to store a single data variable that will be globally accessible throughout the node graph.

![](variable.png ':class=img-size-m')

## INPUTS

**Name**
The name of the variable. All variable nodes with the same name will share data. 

**Value**
The value that you want the variable to get when you trigger the **Set** signal. You will connect to this input.

**Set**
A signal input, when received it will store the current value on the **Value** input in the variable and all other **Variable** nodes will receive the stored value.

## OUTPUTS

**Value**
The current value of the variable, this will only update when the **Set** signal is triggered on this or any other node with the same name.

**Stored**
Signal when the **Set** is complete and the data is stored.

**Changed**
Signal when the Value of this variable have changed.

**Name**
The name of the variable.

