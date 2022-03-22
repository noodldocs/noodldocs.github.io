<##head##>

# Set Parent Component Object Properties

With this node you can set properties on the closed parent **Component Object**. You can access properties of the closet parent **Component Object** with the [Parent Component Object](/nodes/component-utilities/parent-component-object) node.

<div class="ndl-image-with-background l">

![](/nodes/component-utilities/set-parent-component-object-properties/set-parent-component-object-properties.png)

</div>

<##head##>

## Inputs

| Signal                             | Description                                                                                                                                                                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Do</span> | <##input:do##>Stores any properties that are typed in the property panel or connected. All **Component Object** nodes in the same component, as well as any [Parent Component Object](/nodes/component-utilities/parent-component-object) nodes, will be updated. <##input##> |

| Data                                            | Description                                                                                                                                     |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Custom Properties</span> | <##input:prop-\*##>A property to set in the **Component Object**. You can list the properties you want to set in the property panel.<##input##> |

## Outputs

| Signal                               | Description                                                                                    |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Done</span> | <##output:done##>A signal is sent on this output when the set action is completed.<##output##> |
