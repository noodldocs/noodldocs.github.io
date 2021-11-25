<##head##>

# Set Object Properties

You can use this node to set properties on an [Object](/nodes/data/object/object/). You must identify the **Object** with it's **Id** (see full docs for details)

![](./set-object-properties.png ':class=img-size-l')

You can then specify which properties you want to set on the Object in the property panel.

![](./prop-panel.png ':class=ndl-image small')

Finally, send a signal to **Do** to perform the action.

<##head##>

## Inputs

**Id Source**
An Id of a record is needed to perform the action of this node. The **Id Source** property specifies how this Id is retrieved, the options are:

-   **Specify explicitly** This means you need to specify the Id of the record explicitly through e.g. a connection to the **Id** input.
-   **From repeater** This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.

**Id**
<##input:id##>On this input you provide the **Id** of the object where you will set the properties.<##input##>

**Do**
<##input:do##>Send a signal on this input to perform the action and set the properties.<##input##>

[filename](../properties.md ':include')

## Outputs

**Id**
<##output:id##>The **Id** of the Object where you will / have set the properties. This is simply a mirror of the **Id** input.<##output##>

**Done**
<##output:done##>A signal is sent on this output when the action is performed. You can use this to trigger other actions that needs to run after the properties have been set.<##output##>
