# Design Systems

This guide will take you through a set of best practice patterns when creating design systems in Noodl. Design systems include many important concepts for working smart and componentized. They collect fonts, colors and UI components that work well together to construct building blocks for the UI in your applications.

They're useful when building single application and are even more important when creating many applications that should look and feel similar. 

It's a good idea to keep a separate sheet for your design system. One example is the [Simple Design System](/modules/sds-v3/) that you can import as a module into your own project. You can use that as a basis for your own design system, or you can create one from scratch.

We have created another design system for this guide. You can import it into your existing project or create a new project from this template using the import button below. This will make it easier to follow along in this guide.

![](design-systems/design-system-screen.png ':class=img-size-l')

<div class="ndl-images">
    <button class="ndl-import-button no-content" onClick='importIntoNoodl("2.3/guides/design-systems/ds-project-1-3.zip", {name: "Design System Guide", thumb:"2.3/guides/design-systems/ds-project-thumb.png"})'>OPEN IN NOODL</button>
</div>

## Colors & Typography

A common place to start is to align the colors and typography (fonts and sizes) that you intend to use in your application. In Noodl this is done by specifying **Color styles** and **Text styles**. You find the styles for the project in the styles panel. First you can create colors styles for the important colors that you will use throughout your application.

![](design-systems/color-styles.png ':class=img-size-m')

Same goes for **Text Styles** here you create a style by giving it a name and providing the font, size and line height.

![](design-systems/text-styles.png ':class=img-size-m')

Finally it's a good idea to provide overview components that showcase your colors and fonts in a nice way. This is good to get an overview of your design system, it also makes it easier to copy and paste when working on your app. Here is an example of a colors overview.

![](design-systems/colors-overview.png ':class=img-size-l')

A similar overview for the typography, simply showcasing all the **Text Styles**. This makes it easier to select which one to use, and you can also use the overview to copy and paste when building your application.

![](design-systems/typography-overview.png ':class=img-size-l')

Let's dive into the meat of building the UI controls of the design system. Most UI controls follow the same pattern, you will use one of the built in controls ([Button](/nodes/visual/button), [Text Input](/nodes/visual/text-input), [Checkbox](/nodes/visual/checkbox), [Radio Button](/nodes/visual/radiobutton), [Range](/nodes/visual/range) or [Options](/nodes/visual/options)) and you will add styling, chrome and states.

## Input Fields

First let's take a look at the input field. Input fields may have more requirements than simply letting the user type text, passwords and numbers. They may need to indicate statuses such as warnings and errors, and handle states such as focused / blurred.

![](design-systems/input-field.png ':class=img-size-m')

![](design-systems/input-field-typed.png ':class=img-size-m')

The input field in this guide looks as shown in the images above. It has one appearance for when it is empty and one for when it contains text. Let's take a look at the basics first. Bring up the component **Input Field** in the **Design System** sheet if you want to follow along. As you can see it has a **Text Input** node, this is the critical part that let's the user input text. Please refer to the [Text Input](/nodes/visual/text-input) reference documentation for more details.

![](design-systems/input-field-nodes-1.png ':class=img-size-l')

You also need to provide **Component Inputs** so the component can be used to connect to logic in your application. As a bare minimum it is a good idea to expose **Text** both as an input and output. Inputs such as **Type** is also nice to have, as well as outputs like the events **Blurred** and **On Enter**. It's really up to you to decide what needs to be exposed and you can always add new stuff when it's required. 

![](design-systems/input-field-nodes-2.png ':class=img-size-l')

As mentioned before this input field has two states, one when it is focused or has content and one when it is empty. This is achieved with the two nodes highlighted above. 

All UI control nodes such as the **Text Input** have state outputs both as events when states are changed and as values for the current state. In this case we are using the **Focused** state (true or false) combined with the current content of the **Text Input** to select a state, this is done in the **Function** node with the following small script, it outputs the string **"High"** if focused is *true* of if there is something in the *Text* input.

```javascript
if((Inputs.Text !== undefined && Inputs.Text !== "") || Inputs.Focused)
    Outputs.State = "High"
else
    Outputs.State = "Low"
```

This is forwarded to a **States** node that then provides a **Size** for the label font and a setting for the **Margin Top** of the text input based on the state. This is a common pattern when creating UI controls like this, you will use the state outputs of the UI control nodes and hook them up to state nodes that alter the appearance of your control.

Another important node is the **Label** node, this should be used for labels where you can. This is important for accessibility tools such as screen readers. 

![](design-systems/input-field-nodes-3.png ':class=img-size-l')

It is also important that you connect the **Control Id** output of the UI Control node to the **For** input of the label, this will make sure the label is connected to the control it is referring to. Besides this the **Label** node will work just like a normal **Text** node.

![](design-systems/input-field-nodes-4.png ':class=img-size-l')

The same pattern where we use the **Focused** state output from the **Text Input** UI Control node to drive a **States** node is reused for making sure the line at the bottom of the input field changes color when the input field is focused. This time a simple expression will suffice.

![](design-systems/input-field-nodes-5.png ':class=img-size-l')

The last little feature in the Input Field is the possibility to set it's status to **Normal**, **Warning** and **Error**. This will change the color of the bottom line. Again we use a **States** node to manage the different states and we simply expose the state input as an input of the component. Finally we make sure that the bottom line with the status indicator is not shown when it is in the **Normal** state.

## Selectors

Next up we will take a look at a Selector component, this component will look very much like the Input Field component above. It will have a little *chevron* icon to indicate that it is a selector component and when clicked it will bring up the default selector input mechanism of the browser.

![](design-systems/selector.png ':class=img-size-m')

![](design-systems/selector-selected.png ':class=img-size-m')

We will not cover all the details so please take a look at the section above for Input Fields as much is the same. Also for details on the **Options** node please refer to the reference documentation for [Options](/nodes/visual/options).

![](design-systems/selector-nodes-1.png ':class=img-size-l')

The core UI Control node for selectors is the **Options** node. Make sure to expose the **Value** and **Items** as **Component Inputs**, and at the very least the **Value** and **Changed** as outputs. In this component we also expose the label and margins.

The same patter as in the Input Field is seen here, the **Options** node is surrounded by a **Label** and a bottom line, it also has an **Image** with the small *chevron* icon indicating that it is a selector. It also uses the **Focused** state and the **Value** of the **Options** via **Function** and **Expression** nodes and **States** nodes to visually present the component in different states.

## Checkboxes

Checkboxes can have many different forms but they all work in the same very simple way, you click/tap it to check / uncheck it.

![](design-systems/checkbox.png ':class=img-size-xs')

![](design-systems/checkbox-checked.png ':class=img-size-xs')

The core Noodl node used for checkboxes are not surprisingly the [Checkbox](/nodes/visual/checkbox) node. Just like the other control nodes the **Checkbox** can be styled and the logic can be used to control other visual nodes. In the example below the **Checked** status output (true/false) is used to drive a **States** node to control the color, and to show/hide an image containing the check mark.

![](design-systems/checkbox-nodes.png ':class=img-size-l')

Also, don't forget to provide inputs and outputs to your component. A bare minimum is the **Checked** input and output, also the **Changed** output is very useful.

The **Label** node is used in the same way here as the previous controls we covered. You might wonder why you would need a special control node for something as simple as a checkbox. One reason is that accessibility tools such as screen readers and keyboards will work with these controls out of the box.

Checkboxes can take many different forms. Another common pattern when using the Noodl control nodes is to hide them completely, for instance by setting **Opacity** to zero and just using the logic to drive other visual nodes. An example is the *Toggle* button bellow.

![](design-systems/toggle.png ':class=img-size-xs')

![](design-systems/toggled.png ':class=img-size-xs')

## Radio Buttons

Radio buttons work very much like checkboxes, except that they are grouped and only one radio button in a group can be checked. There are two nodes used when creating radio buttons, the [Radio Button Group](/nodes/visual/radiobuttongroup) is used to, as the name implies, group a set of radio buttons. This node also has the value for the currently selected radio button as an input / output.

Here we will take a closer look at how to use the [Radio Button](/nodes/visual/radiobutton) in your own components in your design system.

![](design-systems/radiobutton.png ':class=img-size-xs')

![](design-systems/radiobutton-checked.png ':class=img-size-xs')

These are also very simple, you can either use the **Radio Button** node by styling it as you please or if you cannot achieve the look you want you can simply use the node logic to drive other visual nodes. In the example below the **Radio Button** is styled, but also the **Checked** property is used to choose a **Border Color** using a **States** node.

![](design-systems/radiobutton-nodes.png ':class=img-size-l')

## Sliders

Sliders are commonly used to choose a numeric value on a range. For this you will use the [Range](/nodes/visual/range) node that in itself is a simple slider, but it also contains logic and accessability features that you can use when designing your own. Here is the slider we created for this design system.

![](design-systems/slider.gif ':class=img-size-m')

Besides the visual cues like shading the range track the slider is also presenting the currently selected value while the user is manipulating the slider. We start off with the [Range](/nodes/visual/range) node as the core and make sure we provide component inputs for **Value**, **Min** and **Max** as well as **Step**. For component outputs we will stick with the basic ones **Value** and **Changed**. 

![](design-systems/range-nodes.png ':class=img-size-l')

We have removed the track that comes with the **Range** node and replaced if with two **Groups**, a light grey background and a dark grey used as visual cue for the range. The **Value Percent** output of the **Range** node is useful for things like this, it can be connected to a node with **Width** unit set to **%**.

![](design-systems/range-nodes-track.png ':class=img-size-l')

Finally we have the visual nodes that make up the small *badge* showing the current value while the user is manipulating the slider. It is using the **Pressed** state output of the **Range** node to control the visibility and the **Value** connected to a **Text** node. It is also using an **Expression** using the **Width** of the slider component and the current **Value** to compute the position of the **Group** containing the badge.

![](design-systems/range-nodes-badge.png ':class=img-size-l')

## Buttons

Next up let's take a look at buttons. These generally come in a couple of different forms, styles and types depending on what the needs are for your design system.

![](design-systems/buttons.png ':class=img-size-l')

But they all use the same basic pattern. It includes the [Button](/nodes/visual/button) control node. Most basic buttons can contain only that node, which can be styled. 

![](design-systems/button-nodes.png ':class=img-size-l')

The button in this example design system also supports a few other common features on UI Control. The first one we will take a look at is **Enabled**, by setting enabled to *false* the control node will not respond to any user input. The following nodes is used to make sure we get a different look for disabled buttons.

![](design-systems/button-nodes-disabled.png ':class=img-size-l')

The **Enabled** state output of the button (which simply mirrors the **Enabled** input) is used to drive the state of a **States** node that will use different background colors depending on if the state is **Yes** (enabled) or **No** (disabled). In the disabled state it uses a fixed grey color, in the enabled state it gets it's color from a **Color Blend** node. 

Let's take a closer look at that part, first this component provides the option to choose between a few predefined styles and this is achieved by exposing a **States** node as component input. The states node contains a color for each "state" which corresponds to the chosen style.

![](design-systems/button-nodes-styles.png ':class=img-size-l')

Now we have a base color to use for the button. The next set of nodes handles the **Hover** state of the button, this also drives a **States** node that in turn connects to a **Color Blend** node. This is a useful pattern if you want use a base color and make it lighter/darker, the **Color Blend** node will blend between the provided base color and white and the hover **States** node is providing the different blend values based on the hover state.

![](design-systems/button-nodes-hover.png ':class=img-size-l')

As you might have realized the [States](/nodes/animation/states) node is a very versatile node that is used in many patterns, it's a good idea to get to know it. There is a dedicated guide to just the **States** node, find it [here](/guides/states)

Some buttons needs other content than the simple text label provided in the button control. You can use buttons as containers just like a **Group** node. So you could create an icon button using an image and exposing the **Source** of the image via the component inputs.

![](design-systems/button-nodes-icon.png ':class=img-size-l')





