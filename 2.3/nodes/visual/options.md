# Options

This node places a simple core select / options (dropdown) in the visual tree. The options has a **Items** input that need to be provided with an **Array** containing the options.

![](./options.png ':class=img-size-l')

Each object in the array can have the following properties:

- **Label**  The label that will be shown in the options popup / dropdown.
- **Value**  (required) The value for the option that will be outputted on the **Value** output.
- **Disabled** Set this to "true" to disable an option.

When an option is selected the corresponding value will be sent on the **Value** output and the **Changed** signal will be sent. Use this to connect to data sources as shown above.

If there is no option selected and if there is no value provided on the **Value** input, or if the value provided on the **Value** input doesn't match any of the items in the **Items** array, the options control will be empty. Also setting the input **Value** to an empty string will clear the selected option.

The core options control has a very simple visual appearance and is most often used in other components as part of a design system, where it is styled or simply used as the control logic. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own options component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

![](./options-1.png ':class=img-size-m')

## Inputs

[filename](./margin-and-padding.md ':include')

### General

**Enabled**  
Specifies if the control is **Enabled** (true) or **Disabled** (false). A disabled control will not respond to any user interaction.

**Value**  
The current selected value of the options control. By changing this the control will show the label corresponding to the value.

[filename](./size-mode-and-dimensions.md ':include')

### Layout

[filename](./position.md ':include')

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
The background color of the options control.

[filename](./visibility-styles.md ':include')

[filename](./bg-and-border-styles.md ':include')

### Box Shadow

[filename](./box-shadow-styles.md ':include')

### Placement  

[filename](./placement-styles.md ':include')

[filename](./dimension-constraints.md ':include')

### Other

[filename](./pointer-events-and-mounted.md ':include')


[filename](../advanced-style.md ':include')

## Outputs

### Other  
[filename](./child-index-and-this-outputs.md ':include')

[filename](./bounding-box-outputs.md ':include')

[filename](./mounted-outputs.md ':include')

### General  
[filename](./control-id-output.md ':include')

### States   

**Value**  
The currently choosen value 

[filename](./control-states-outputs.md ':include')

### Events

[filename](./control-events-outputs.md ':include')

