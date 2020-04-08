# States

States is an important and powerful concept in Noodl. Although very versatile, States are primarily used for two tasks.

![](states/switch.gif ':class=img-size-s')

**User interaction states** is when you need to manage states as part of a user interaction, e.g. a switch that can be on and off. There is an example of that in the **Switch** component in this lesson.

States can also be used to **present data** by specifying different visual representations for the states. This is also included in the example where the state of the switch is visualized.

Let's dive deeper into the States nodes of this guide. First you can download and open the project that we will be reviewing below.

?> **Download** the example project covered in this guide [here](//guides/states/states-guide.zip).

## The switch
When you have downloaded and opened the project let's look at the <strong>Switch</strong> component. The node graph is quite simple. 

![](states/switch-nodes.png ':class=img-size-m')

Here a **States** node is controlling the states **On** and **Off** for the switch. First let's take a look at the properties for the States node.

The top part of the States properties contains the states list. Here you can create new states and rename or remove existing states. When you create a new states node this list is empty, but in this example we have created two states; one for when the switch is **On** and one for when it is **Off**.

![](states/states-props-1.png ':class=img-size-m')

By changing the **Start at** property you can see how the switch is turned on and off. The property is used to specify which state should be the starting state.

The following section of the properties contain the state values. These values will become outputs of the *States* node and can be given specific values for the different states the node can assume.

![](states/states-props-2.png ':class=img-size-m')

This is the core concept of the *States* node. For each state, these values will be different, so when we make the node change state the value outputs will change to their corresponding state values.

## The state values
Next follows a section where you can specify the actual values for the different states. As you can see the first header of this section contains the value of **X**for the **On** state. The **X** value is the horizontal position of the switch group, so we want it to be 0 when the switch is turned on.

![](states/states-props-3.png ':class=img-size-m')

The section titled **On Transition** specifies how the value will transition smoothly to the specified state value from whatever the value currently is. You can specify transition easing and timing here.

The final section specifies the **X** value for the **Off** state as well as the transition to that state.

![](states/states-props-4.png ':class=img-size-m')

As you can see in the node graph the **X** output of the States node is connected to the **X** position of the group visual for the actual Switch, and the **Click** signal of the parent group is connected to the Toggle action of the States node. This will make the States node toggle between the states.

![](states/switch-nodes.png ':class=img-size-m')

## Presenting data with states

Next let's take a look at how you can present data with states. If you take a look at the **Main** component, in the sample project, you will see that the state of the Switch, that can be either **On** or **Off** is connected to another states node.

![](states/main-graph-1.png ':class=img-size-m')

The connection goes to **Current State** of the states node, this means that when the switch is flipped the states node will automatically switch to that state.

Now let's take a look at the different ways the States node is used to visualize the **On** and **Off** states as you can see when flipping the switch.

![](states/switch.gif ':class=img-size-m')

## Color blend

A color blend node is used to smoothly blend between two colors that is then connected to the color of the circle.

![](states/color-blend.png ':class=img-size-m')

If you take a look at the States node and specifically the values of Blend you can see that it is **1** for the **On** state and **0** for the **Off** state. This will correspond to the colors of the color Blend node. Open the properties panel for the Color Blend node to see and edit the colors.

![](states/color-blend-props.png ':class=img-size-m')

The States node will smoothly transition the Blend output based on the specified transition properties, and the Blend node will use the value between 0 and 1 to interpolate a color between the two specified colors.

## String Selector

The label **DAY** and **NIGHT** is produced by first connecting the Blend output to an expression that uses a math function called **round** to round the value to the nearest integer, that is 0 or 1.

![](states/string-selector-1.png ':class=img-size-m')

The integer value is then connected to the **String Selector** node that produces the label based on the **Index** input.

If you look at the properties of the String Selector node you will see the two labels for the corresponding index.

![](states/string-selector-props.png ':class=img-size-m')

Finally the output is connected to the text label.

![](states/string-selector-2.png ':class=img-size-m')

## String Mapper

Another way you can achieve the same thing is by using the **String Mapper** node. Instead of mapping an index to a string this maps one string to another. So you can use the **Current State** and map it to something else.

![](states/string-mapper-1.png ':class=img-size-m')

In this case the state is mapped to a filename that is used by the image to display the **Moon** or **Sun** icons. You can see the mappings by editing the properties of the String Mapper node.

![](states/string-mapper-props.png ':class=img-size-m')



