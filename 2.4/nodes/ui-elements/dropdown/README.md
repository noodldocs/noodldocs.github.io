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

| Data                                | Description                                                                                                                                                                                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Items</span> | <##input:item##>This input takes an **Array** of **Objects** that will populate the **Dropdown**. You should make sure that they have the two properties `Label` and `Value` set as they are used to represent the item in the **Dropdown**.<##input##> |
| <span class="ndl-data">Value</span> | <##input:value##>Setting this input will force the **Dropdown** to select the item with the same value set in its `Value` property.<##input##>                                                                                                          |

User interaction can be enabled and disabled:

[filename](../shared-props/inputs/general/enabled.md ':include')

### Visual

This node supports the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/):

-   [Margin](nodes/ui-elements/visual-input-properties/#margin)
-   [Alignment](nodes/ui-elements/visual-input-properties/#alignment)
-   [Dimensions](nodes/ui-elements/visual-input-properties/#dimensions)
-   [Layout, Position](nodes/ui-elements/visual-input-properties/#-position)
-   [Text Style](nodes/ui-elements/visual-input-properties/#text-style)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Border Style](nodes/ui-elements/visual-input-properties/#border-style)
-   [Corner Radius](nodes/ui-elements/visual-input-properties/#corner-radius)
-   [Box Shadow](nodes/ui-elements/visual-input-properties/#box-shadow)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

The main output is the following:

| Data                                | Description                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span> | <##output:value##>This output holds the value, i.e. what is in the property `Value` in the currently selected **Object** in the Dropdown.<##output##> |

| Signal                                | Description                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Changed</span> | <##output:changed##>This signal signal is emitted when the selection of the **Dropdown** changes.<##output##> |

It also features a set of more in depth <span class="ndl-signal">signals</span>:

[filename](../shared-props/outputs/control-events/README.md ':include')

### States

Apart from triggering <span class="ndl-signal">signals</span> the Dropdown node also notifies of its state through <span class="ndl-data">data</span> outputs:

[filename](../shared-props/outputs/control-states/README.md ':include')

### Visual

This node supports the following [Visual Output Properties](nodes/ui-elements/visual-output-properties/):

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
