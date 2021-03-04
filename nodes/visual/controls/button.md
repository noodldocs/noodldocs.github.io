# Button

This node places a simple core button in the visual tree. The button has a **Click** signal that you can trigger actions with.

<div class="ndl-images">
    <img src="/nodes/visual/controls/button.png" class="ndl-image large"></img>  
</div>

The core button has a very simple visual appearance and is most often used in other components as part of a design system, where it is styled or simply used as the control logic. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own button component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

<div class="ndl-images">
    <img src="/nodes/visual/controls/button-1.png" class="ndl-image small"></img>  
</div>

## INPUTS

[filename](../margin-and-padding.md ':include')

### General

**Enabled**  
Specifies if the control is **Enabled** (true) or **Disabled** (false). A disabled control will not respond to any user interaction.

**Label**  
A text string that will be shown as the label on the button.

**Type**  
The type of button, can be one of:

- **Button** A default button, when clicked it emitts the **Click** output signal.
- **Submit** A submit button, when placed in a form it will trigger the **Submit** signal on the form when clicked. This is also important for accessibility.

[filename](../alignment.md ':include')

[filename](../size-mode-and-dimensions.md ':include')

### Layout

[filename](../position.md ':include')

### Text

**Text**  
The text string to display.

**Font Family**  
The font family of the text to display. Choose a font in the project folder or type font name.

**Font Size**  
The size of the font of the text to be displayed, in pixels.

**Color**  
The color of the text to be displayed.

### Style

**Background Color**  
The background color of the button.

[filename](../visibility-styles.md ':include')

[filename](../bg-and-border-styles.md ':include')

## Box Shadow

[filename](../box-shadow-styles.md ':include')

## Placement  

[filename](../placement-styles.md ':include')


### Other

[filename](../pointer-events-and-mounted.md ':include')


[filename](../../advanced-style.md ':include')


## OUTPUTS

### Other  
[filename](../child-index-and-this-outputs.md ':include')

[filename](../bounding-box-outputs.md ':include')

[filename](../mounted-outputs.md ':include')

### General  
[filename](./control-id-output.md ':include')

### States   

[filename](./control-states-outputs.md ':include')

### Events

**Click**  
A signal is sent on this output when the button is clicked.

[filename](./control-events-outputs.md ':include')

