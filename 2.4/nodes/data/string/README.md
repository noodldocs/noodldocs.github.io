<##head##>

# String

A node that contains a string value. It is local to the component and cannot be accessed anywhere else in the graph.

You can use it to provide a static value for input to other nodes. You can also use it to store string value.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/local-string.png" class="ndl-image large"></img>
</div>

You can simply connect to the **Value** input to set the value of the **String** node when the connection is updated.

<div class="ndl-images">
    <img src="/nodes/data/string/string-1.png" class="ndl-image large"></img>
</div>

Using a variable node like above will make the **Text** component input show up as a string in the property editor of all instances of this component.
<##head##>

You can also use the **Set** input to control when the value of the **String** node is updated. In the setup below the value is only updated when the **Text Input** node is blurred.

<div class="ndl-images">
    <img src="/nodes/data/string/string-2.png" class="ndl-image large"></img>
</div>

## Inputs

**Value**

<##input:value##>The value to store in the node. The output value will immediately be equal this value, unless the **Set** signal is connected, then the value will be passed to the output when a signal triggers **Set**. <##input##>

**Set**

<##input:set##>This signal is used to only update the output when this signal is triggered. This will allow you to control exactly when the stored value is updated.<##input##>

## Outputs

**Value**

<##output:value##>This output will be set to the string stored in the node.<##output##>

**Length**

<##output:length##>The length of the string stored in the node, i.e. the number of characters and spaces.<##output##>

**Stored**

<##output:stored##>A signal send when the value is updated via the **Set** signal.<##output##>
