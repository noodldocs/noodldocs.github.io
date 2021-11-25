<##head##>
# Component Stack
The **Component Stack** node is used to navigate between components in an area on the screen. It is typically used together with the navigation nodes [Push Component To Stack](/nodes/component-stack/push-component/) and [Pop Component Stack](/nodes/component-stack/pop-component/).

![](component-stack1.png ':class=img-size-m')

Unlike the somewhat similar [Page Router](/nodes/navigation/page-router/) the **Component Stack** is optimized for app type navigation (in contrast to web type) and does not use URLs and routing as part of the navigation.

The **Component Stack** works as a regular stack, meaning you can _Push_ (put a component at the top of the stack) and _Pop_ (remove the topmost component from the stack). You can also chose to _replace_ all components with the a new component (see [Push Component To Stack](/nodes/component-stack/push-component/).

When pushing the **Component Stack** will create a new instance of the component. Only the top component will be shown. This means that you can have multiple instances of the same component on the stack at the same time. You can use the **Reset** action to clear the stack.

## Adding Component Entries to Push and Pop
A Component Stack should have a number of _component entries_ that it can push or pop. You add components entries by clicking on _Add Component_ button, giving the entry a name and select a component. These entries will then be available in the [Push Component To Stack](/nodes/component-stack/push-component/) and [Pop Component Stack](/nodes/component-stack/pop-component) nodes.

## Visual Layout
With the **clip** property set to <span class="ndl-data">false</span>, the **Component Stack** will automatically take up as much space as available and expand beyond that if its component currently showing is larger. If the **clip** property is set to <span class="ndl-data">true</span> it fill up any available space in its parent container and clip its components if they are larger than that.

If you want to control the size of the **Component Stack** beyond that, you should put it as a child in a [Group](/nodes/ui-elements/group/) node.

<##head##>

## Inputs

### General
**Name**

<##input:name##>This is the name of the **Component Stack**. If you have multiple **Component Stacks** in your project you use the name to identify it in the [Push Component To Stack](/nodes/component-stack/push-component/) and [Pop Component Stack](/nodes/component-stack/pop-component) nodes. <##input##>

**Use Routes**

<##input:useRoutes##>**This Property is deprecated and should not be used.**<##input##>

**Start Page**

The Component which will be shown by **Component Stack** at the start.

### Layout
**Clip Content**

<##input:clip##>If this property is set to <span class="ndl-data">true</span> the **Component Stack** will clip any component that is extending beyond its size. If set to <span class="ndl-data">false</span> the size of the **Component Stack** will grow if needed to fit its component.<##input##>

### Style
**Background Color**

<##input:backgroundColor##>The color that will be shown when there is no component covering the **Component Stack** or when the component is transparent.<##input##>

### Other
**Mounted**

<##input:mounted##>This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.<##input##>


[filename](../../ui-elements/shared-props/inputs/advanced-style/README.md ':include')

### Actions

<##input:reset##>Triggering this action resets the **Component Stack** meaning all components on the stack will be removed and only the **Start Page** will be on the stack.<##input##>

## Outputs

[filename](../../ui-elements/shared-props/outputs/other/README.md ':include')

**Top Component Name**

<##output:topPageName##>This property holds the name of the current component that is on the top of the stack.<##output##>

**Stack Depth**
<##output:stackDepth##>This property equals to the number of components that are currently on the **Component Stack**.<##output##>

[filename](../../ui-elements/shared-props/outputs/bounding-box/README.md ':include')

[filename](../../ui-elements/shared-props/outputs/mounted/README.md ':include')