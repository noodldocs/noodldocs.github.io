
<##head##>
# String

This node contains a <span class="ndl-data">string</span> value (text). It can be provided with static data or be dynamically set from other nodes. The <span class="ndl-node">String</span> node is often used to convert other data types to a <span class="ndl-data">string</span> or to hold string values.

![](./string_node.png ':class=img-size-l')

You can also use the String node connected to a <span class="ndl-node">Component Inputs</span> node. This will make sure the input shows up as a <span class="ndl-data">string</span> input in the Property Panel for instances of this component.

<##head##>

You can use it to provide a static value for input to other nodes. It is local to the component and cannot be accessed anywhere else in the graph.

<div class="ndl-images">
    <img src="/guides/variables-and-objects/local-string.png" class="ndl-image large"></img>
</div>

You can simply connect to the **Value** input to set the value of the node when the connection is updated.

<div class="ndl-images">
    <img src="/nodes/data/string-1.png" class="ndl-image large"></img>
</div>

Using a variable node like above will make the **Text** component input show up as a string in the property editor of all instances of this component.

You can also use the **Set** input to control when the value of the variable node is updated. In the setup below the value is only updated when the **Text Input** node is blurred.

<div class="ndl-images">
    <img src="/nodes/data/string-2.png" class="ndl-image large"></img>
</div>

## Inputs

**Value**
The value to store in the node. The output value will equal this value, unless _Set_
is connected, then the value will be passed to the output when a signal is sent to _Set_.

**Set**
This is used to only update the output when a signal is sent. This will allow you to freeze
the stored value and only allow it to update under certain conditions, e.g. on a Tap.

## Outputs

**Value**
The string (text) stored in the node.

**Length**
The length of the string (text) stored in the node, i.e. the number of characters and spaces.

**Stored**
A signal send when the value is updated via the _Set_ input.

</div>