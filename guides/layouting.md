# Layouting

This guide will cover the layouting mechamism. It will be an important concept to master so that you can create responsive, dynamic front ends for your apps with ease.

?> **Download** the example project covered in this tutorial [here](//guides/layout-guide.zip).

The example project contains many small snippets that highlight different aspects of the layouting system. You can take a look at them by using the navigation buttons. We will go through them one by one.

![](layout-guide-screen.png ':class=img-size-s')

## Margin and padding
The core Layout node is the group so that is where we will start. First let's take a look at the **Margin and padding** component in the sample project. You can view the page by clicking on the navigation button on the first screen. 

![](margin-and-padding-screen.png ':class=img-size-s')

Here you will find a very simple node graph.

![](groups.png ':class=img-size-m')

Groups are arranged in a hierarchy as can be seen in the node graph editor. A group controls the layout of its children and there are a number of properties that can be used to specify how the children of the group will be layouted.

?> **Hover** the nodes in the editor and they will be highlighted in the preview window. This is a great way to inspect a component that you are unfamiliar with.

Select one of the nodes to view the properties. In the property panel you can find the *Margin and padding* controls.

![](margin-and-padding-props.png ':class=img-size-m')

Here you can specify the *margin*, i.e. the distance between this node and it's siblings in the layout. You can specify the margins in all four directions. You can also specify the *padding*, this is the distance from the borders of the group to it's children.

The best way to learn is to play around with the three nodes in this simple hierarchy.

## Absolute alignment
Next up let's take a look at the **Absolute alignment** component in the sample project. Don't forget to navigate to the corresponding page in the example.

![](absolute-alignment-screen.png ':class=img-size-s')

Now go ahead and use the hover feature to get an understanding of the node graph.

![](absolute-alignment-nodes.png ':class=img-size-m')

By default children of a group are stacked vertically, however in the alignment section you can switch to **Absolute** positioning which will allow you to specify the alignment directly.

![](absolute-alignment.png ':class=img-size-m')

The alignment is always relative to the borders of the parent group. You can also use the **Position** properties under the Placement section to further move the element from its aligned position.

![](position.png ':class=img-size-m')

Give it a go and play with the groups in this component to get a hang of it.

## Layout direction
Now let's move to the Layout direction example, navigate to it in the viewer and switch to the **Layout direction** component. Take a moment to get to know the node graph by hovering like you did before.

![](layout-direction-screen.png ':class=img-size-s')

This example is pretty straight forward, the group have settings that control which direction its children stack.

![](layout-direction-nodes.png ':class=img-size-m')

The parent node contols the layout of it's children. So if you take a look at the properties of one of the nodes labeled *Horizontal direction* or *Vertical direction* you can find the settions in the layout direction controls.

![](layout-direction-props.png ':class=img-size-m')

This controls if the children are stacked horizontally or vertically. We will take a closer look at wrapping later but now let's go to relative alignment.

## Relative alignment
Go to the Relative alignment page and the corresponding **Relative Alignment** component. This component is very similar to the previous one, it also has a vertical and horizontal stack.

This example shows how to use the relative alignment properties of the group nodes to align them to the borders of the parent and within their row or column.

![](relative-alignment-props.png ':class=img-size-m')

There is one more thing to cover on stacked layouts and that is wrap and scrolling.

 ## Wrapping
Take a look at the Wrap and scrolling page of the example and dive into the corresponding **Wrap and Scrolling** component.

As you can see this node contains a lot of groups of different shapes and sizes and a parent group that is the scrolling group. Let's take a look at the properties of that group.

![](wrap-group.png ':class=img-size-m')

First check out the section on **Layout direction**

![](wrap-props.png ':class=img-size-m')

Here you can see that it has a horizontal stacking direction and that the **Wrap** mode is activated. This implies that as the child groups are stacked horizontally (left to right) and extends beyond the right border of the group they will wrap to the next row.

## Scrolling
The group also has the scrolling property activated.

![](scroll-props.png ':class=img-size-m')

You can choose from two scrolling modes, as well as turning off scrolling which is the default. The two scroll modes are:

**Native** scrolling, this uses the browsers scrolling behaviour which makes it suitable for web style front ends.
**Noodl** scrolling is a custom scrolling that will mimic a mobile style of scrolling, it also has more features such as snapping. It can be used to achieve very similar scrolling across device types.

## Content size modes

There is one more page in this example that we have not yet covered and that is the Content size modes, navigate to that page and switch to the component **Content size modes**.

So far all groups have had explicit size modes, which is the default. This means that the size is explicitly specified for instance as a fixed number of pixels or as a % of the parent.

![](explicit-size-mode.png ':class=img-size-m')

However you can set the **Size mode** property to force the group to get its size from the total size of its children.
    
![](content-height-size-mode.png ':class=img-size-m')

It can either be **Content Height** or **Content Width** where the other dimension can be specified explicitly. Or **Content Size** where both width and height are computed from the children sizes.

Play around with the example to learn more about how the content size modes work. Try copy and pasting more circles and see how they expand their parent group.



