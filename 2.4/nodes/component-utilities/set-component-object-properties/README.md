<##head##>
# Set Component Object Properties

**Component Object** is a shared set of properties that can be accessed from a component as well as from any child components. This node is used to set properties on the **Component Object** these properties can be accessed via the [Component Object](/nodes/component-utilities/component-object/) or the [Parent Component Object](/nodes/component-utilities/parent-component-object/).

![](set-component-object-properties.png ':class=img-size-m')

<##head##>

## INPUTS

**Do**  
<##input:do##>Stores any properties that are typed in the property panel or connected. All **Component Object** nodes in the same component, as well as any [Parent Component Object](/nodes/component-utilities/parent-component-object/) nodes, will be updated. <##input##>

## Properties
<##input:prop-*##>A property to set in the **Component Object**. You can list the properties you want to set in the property panel.<##input##>

## OUTPUTS

**Done**  
<##output:done##>An event is triggered on this output when the set action is completed.<##output##>
