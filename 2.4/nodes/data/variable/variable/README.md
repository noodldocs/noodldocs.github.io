<##head##>
# Variable

Use this node to store a single data variable that will be globally accessible throughout the application. **Variable** works in a similar way as [Object](/nodes/data/object/object/) but can only store one value.

## Storing a value
Give the Variable a name with the **Name** input and simply connect to **Value**, whenever the input connection is updated the value will be stored in the variable. You can also use the [Set Variable](/nodes/data/variable/set-variable/) node to update tha value of a **Variable**. In this case, you control when the value is stored by sending a signal to the <span class=”ndl-signal”>Do</span> action.

![](variable-1.png ':class=img-size-m')

## Use a stored value
When a value is stored in a variable you can use it somewhere else in your application simply be creating a new node and giving it the same **Name** and connecting the **Value** property.
<##head##>

## Inputs

**Name**
<##input:name##>The name of the **Variable**. All **Variable** nodes with the same name will share the same data.<##input##>
**Value**  
<##input:value##>The value that you want the **Variable** to get. You will connect your data to this input. The value of the **Variable** will change when the data changes. If you want to control more precisely when the value should be updated, you should use the [Set Variable](/nodes/data/variable/set-variable/) node.<##input##>

### Actions
**Fetch**  
<##input:fetch##>Normally the value output of the node is updated once the **Name** input is set and if there is a change in the data from somewhere in the graph. However, if this signal has a connection it will wait until it gets a signal on **Fetch** before it updates.<##input##>

## Outputs

**Value**  
<##output:value##>The current value of this **Variable** node.<##output##>


**Name**  
<##output:name##>The name of the **Variable**.<##output##>

### Events
**Changed** 
<##output:changed##>This signal is sent when the **Value** of this **Variable** has changed. Note: The signal triggers when any **Variable** with the same **Name** is changed, i.e. it triggers when the underlying data has changed.<##output##>

**Fetched**  
<##output:fetched##>Signal when the data of this **Variable** node has been fetched and updated, either as a response to the **Fetch** input signal (when it has completed and the output **Value** is updated), or when the **Name** of the variable have changed.<##output##>

