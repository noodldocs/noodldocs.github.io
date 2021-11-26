<##head##>
# Dropdown

This node places a dropdown input field in the visual tree. The input can for example be used to capture information from a user.

![](./dropdown_visual.png ':class=img-size-l')

The dropdown takes an array of options as an input, which will be shown in the dropdown for the user to pick from.

![](./dropdown_node.png ':class=img-size-l')

## The Incoming Items Format

The incoming items should be an [Array](/nodes/data/array/array/) of [Objects](/nodes/data/object/object/), for example coming from a [Static Array](/nodes/data/array/static-array/) or [Static Array](/nodes/data/cloud-data/query-records/) node.

The **Object** should have two mandatory properties: `Label`, `Value` (note that the case matters, `value` would not work). The `Label` property should contain the string to be shown in the **Dropdown**. The `Value` property will be set on the output **Value** on the **Dropdown**.

![](./dropdown-2.png ':class=img-size-l')

Depending on how you original data looks, it may be necessary to use the [Array Map](/nodes/data/array/array-map/) node to re-map values in the original data towards `Label` and `Value`. One useful pattern is to map the `id` of an **Object** to the `Value` property in teh **Array Map** to easily access the selected **Object**. The mapping can be achieved through `Value:function (object){return object.id}`.

![](./dropdown-mapping.png ':class=img-size-l')

<##head##>

## Inputs

### General

[filename](../shared-props/inputs/general/enabled.md ':include')

**Items**

<##input:item##>This input takes an **Array** of **Objects** that will populate the **Dropdown**. You should make sure that they have the two properties `Label` and `Value` set as they are used to represent the item in the **Dropdown**.<##input##>

<##input:value##>Setting this input will force the **Dropdown** to select the item with the same value set in its `Value` property.<##input##>

[filename](../shared-props/inputs/margin-only/README.md ':include')

[filename](../shared-props/inputs/alignment/README.md ':include')

[filename](../shared-props/inputs/dimensions-and-size-mode/README.md ':include')

### Text

### Text Style
[filename](../shared-props/inputs/text-styles/README.md ':include')

### Actions
**Set**
Sets the text field value to the text in the _Text_ input.

**Clear**
Clears the text

**Focus**
Focuses the text field.

_Note_: Some browsers, most notably Safari, only allow focus if it originates from a user event, like a click. So using a Timer or other method might not work.

**Blur**
Removes the keyboard focus.

### Layout

[filename](../shared-props/inputs/position/README.md ':include')

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')

[filename](../shared-props/inputs/placement-styles/README.md ':include')

[filename](../shared-props/inputs/other/README.md ':include')

[filename](../shared-props/inputs/advanced-style/README.md ':include')

</div>

<div class = "node-outputs">

## Outputs

### Other

**Child Index**
<##output:childIndex##>The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.<##output##>

**This**
<##output:this##>A reference to this node. Used in custom **Javascript** nodes and more.<##output##>

[filename](../shared-props/outputs/bounding-box/README.md ':include')

[filename](../shared-props/outputs/mounted/README.md ':include')

[filename](../shared-props/inputs/text-styles/README.md ':include')

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')

[filename](../shared-props/inputs/placement-styles/README.md ':include')

[filename](../shared-props/inputs/other/README.md ':include')

### States

**Value**

<##output:value##>This output holds the value, i.e. what is in the property `Value` in the currently selected **Object** in the Dropdown.<##output##>

[filename](../shared-props/outputs/control-states/README.md ':include')

### Value

**Text**
<##output:text##>The current text string.



### Focus

**Focused**
Signal that is emitted when the Text Input node gets input focus.

**Blurred**
Signal that is emitted when the Text Input node loses input focus.

### Actions

**Changed**
<##output:changed##>This signal signal is emitted when the selection of the **Dropdown** changes.<##output##>

[filename](../shared-props/outputs/control-events/README.md ':include')

</div>
