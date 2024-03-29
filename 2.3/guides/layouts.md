# Layout

This guide will cover how to lay out visual elements. It's an important concept for creating responsive, dynamic interfaces for your apps.

The central node for defining a layout in Noodl is the [Group](nodes/visual/group) node. This guide will walk through the most important Group properties for defining a layout.

**Group** nodes are arranged in a hierarchy. A **Group** controls the layout of its children and there are a number of properties that can be used to specify how the children of a **Group** node will be laid out.

<div class="ndl-images">
    <img src="/guides/layouts/groups.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"5a81ad6d-b8eb-16f8-e2b3-3533c0a05462","type":"Group","label":"Group","x":176,"y":140.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"999f7f8b-6678-ed24-5ea9-08b25e1b394e","type":"Group","x":196,"y":186.5,"parameters":{"marginTop":{"value":20,"unit":"px"},"marginLeft":{"value":20,"unit":"px"},"marginRight":{"value":20,"unit":"px"},"marginBottom":{"value":20,"unit":"px"},"paddingTop":{"value":50,"unit":"px"},"paddingLeft":{"value":50,"unit":"px"},"paddingRight":{"value":50,"unit":"px"},"paddingBottom":{"value":50,"unit":"px"},"backgroundColor":"#DBDBDB"},"ports":[],"children":[{"id":"ddde9610-f9a6-03bd-bb46-4a67d56a2180","type":"Group","x":216,"y":232.5,"parameters":{"backgroundColor":"#B5B5B5"},"ports":[],"children":[]}]}]}],"connections":[]})'></button>
</div>

?> Hovering on a node in Noodl with the mouse cursor will highlight the corresponding visual element in the preview window

<div class="ndl-images">
    <img src="/guides/layouts/hover.gif" class="ndl-image med"></img>
</div>

## Layout direction

By default the **Group** node will stack its children vertically. You can change the layout direction by editing the **Layout** property:

<div class="ndl-images">
    <img src="/guides/layouts/layout-prop.png" class="ndl-image med"></img>  
</div>

- `Vertical` Children are stacked vertically.
- `Horizontal` Children are stacked horizontally.
- `None` Children are _not_ stacked.

Here's an example you can copy into Noodl. Click the "Copy nodes" button next to the image and press Ctrl+V (Windows) or Cmd+V (macOS) to paste them into Noodl. Make sure you have a project open.

Change the **Layout** of the top level node to see how the direction of the child nodes change.

<div class="ndl-images">
    <img src="/guides/layouts/layout-dir.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"9f88e7d6-959c-7946-f66d-3db6257d522b","type":"Group","label":"Layout node","x":290,"y":395,"parameters":{"sizeMode":"explicit","backgroundColor":"#E6E6E6"},"ports":[],"children":[{"id":"8a0b2c8c-c534-bdcc-102d-2905b48d8885","type":"Group","x":310,"y":456,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]},{"id":"bcfa83ad-f05f-d7ff-13a4-f82ac19bd664","type":"Group","x":310,"y":502,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]},{"id":"35c2039f-5f12-3dab-bc94-a7c630aa9698","type":"Group","x":310,"y":548,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]}]}],"connections":[]})'></button>
</div>

You control how a layout affects a node by setting its **Position** property:

- `In Layout` - This node is part of the parent node's layout. It will be stacked with its siblings depending on the parent node's layout settings.
- `Absolute` - Removes a node from the flow of a layout. Use margins and alignment to set the position.
- `Sticky` - Behaves like `In Layout`, except when the node is about the be scrolled outside the parent. It'll stick to an edge of the parent instead of scrolling away. Which edge can be controlled with the _Alignment_ input.

<div class="ndl-images">
    <img src="/guides/layouts/layout-absolute.png" class="ndl-image med"></img>  
</div>

## Dimensions

The dimensions section control how the size of a **Group** will be calculated.

<div class="ndl-images">
    <img src="/guides/layouts/dims-1.png" class="ndl-image med"></img>  
</div>

A **Group** can also get its dimensions from the size of its children. You use the icons at the top to change between the four modes (from right):

- **Explicit width & height** Specify both width and height explicitly in  pixels (`px`), percentage of parent (`%`), or as a percentage of the viewport size (`vw` and `vh`).
- **Explicit width & content height** Specify the width explicitly but the height will be the total of the children heights and margins.
- **Explicit height & content width** Specify the height explicitly but the width will be the total of the children widths and margins.
- **Content width & height** The size of this group will be the total width and height of the children based on the layout.

You can copy the nodes below to an empty component in Noodl. The result is shown to the right. These nodes each use a different setting for the **Dimensions** icons.

<div class="ndl-images">
    <img src="/guides/layouts/content-size-nodes.png" class="ndl-image small"></img>  
     <img src="/guides/layouts/content-size-example.png" class="ndl-image small"></img> 
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"3aad82a0-9636-d391-b31c-06f66be77bdc","type":"Group","x":243,"y":178,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"61757927-9c6c-3afb-a964-1492a5ff5a90","type":"Group","label":"Content height","x":263,"y":224,"parameters":{"sizeMode":"contentHeight","backgroundColor":"#D6D6D6","marginBottom":{"value":20,"unit":"px"},"width":{"value":100,"unit":"px"}},"ports":[],"children":[{"id":"cefc770e-47c0-ddfd-0caa-b88831ce8e8f","type":"Circle","x":283,"y":285,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]},{"id":"ccdbfc6b-8138-cc99-6ffc-aaf6b5c4b56e","type":"Group","label":"Content size","x":263,"y":331,"parameters":{"sizeMode":"contentSize","backgroundColor":"#D6D6D6","marginBottom":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"cef82662-86c6-43d7-5221-fa47869a5043","type":"Circle","x":283,"y":392,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]},{"id":"000843d3-fdf9-7638-67e3-42617b66bf4f","type":"Group","label":"Content width","x":263,"y":438,"parameters":{"sizeMode":"contentWidth","backgroundColor":"#D6D6D6","height":{"value":100,"unit":"px"}},"ports":[],"children":[{"id":"f94a589b-b042-9f9e-1d2f-0599a5fe2f41","type":"Circle","x":283,"y":499,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]}]}],"connections":[]})'></button> 
</div>

### Fixed dimension

Sizes specified in `%` enables an additional set of dynamic size rules. 
- The group will expand to fill the parent. Space is shared with siblings and the `%` value controls how much of the remaining space each node will get.
- If the content of a Group is larger than the Group itself, it'll expand to contain the children.

This dynamic sizing can be disabled by enabling _Fixed_.

Here's an example with two Groups, both set to 100% height. With _Fixed_ disabled they will both try to grow to the same size as the parent. As the rules above implied, the Groups final size will be 50% to make sure that both Groups have equal space and are shown on the screen.

Enabling _Fixed_ will force a Group to be exactly the size that's specified and disable dynamic sizing. With _Fixed_ enabled the first Group will cover the entire screen, and there will be no space left for the second Group that'll be pushed outside the screen.

![](layouts/fixed-height.gif ':class=img-size-m')

### Clip content

A Group with dimensions set in `%` will expand to make sure it at least the same size as all of its content.
This can be changed be either enabling `Fixed` or as in this example, enable `Clip content`. 

![](layouts/clip.gif ':class=img-size-l')

## Alignment

You can use the alignment controls to pin the children to a specific edge, or how the remaining space should be distributed among the children. The padding of a group determines where that edge is.

A Group can control the alignment of its children using the _Align and justify content_ property.

<div class="ndl-images">
    <img src="guides/layouts/alignment.gif" class="ndl-image large">
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"6bede195-ea0c-d5ca-a315-500079267560","type":"Group","x":198.0,"y":196,"parameters":{"backgroundColor":"#D6D6D6"},"children":[{"id":"b5beb893-c7ae-9467-da03-0032b8221ab6","type":"Circle","x":218.0,"y":242,"parameters":{"fillColor":"#858585"}},{"id":"0404c68a-525c-f975-60d3-8d0f7143abb7","type":"Circle","x":218.0,"y":288,"parameters":{"fillColor":"#858585"}},{"id":"b2b85213-f75e-7d0b-050e-dbee3c312fd7","type":"Circle","x":218.0,"y":334,"parameters":{"fillColor":"#858585"}}]}]})'></button> 
</div>

Children can use the _alignment_ controls to override the parent's alignment settings.

<div class="ndl-images">
    <img src="/guides/layouts/align-props.png" class="ndl-image med"></img>  
</div>

Children can use margins to offset the position from how it's aligned.

<div class="ndl-images">
    <img src="/guides/layouts/align.gif" class="ndl-image large">
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"8a968ff3-9099-fc23-eaef-b3f3c2f8a271","type":"Group","label":"Layout None","x":-124.8300537163023,"y":231.19983547495616,"parameters":{"backgroundColor":"#FFFFFF","flexDirection":"none"},"ports":[],"children":[{"id":"6c2df5ce-7596-06da-a5c5-335275501d64","type":"Circle","x":-104.8300537163023,"y":292.19983547495616,"parameters":{"fillColor":"#C9C9C9","alignY":"top","alignX":"left"},"ports":[],"children":[]}]}],"connections":[]})'></button> 
</div>

## Margin and padding

Clicking on a node will select it and open the property panel. This panel has controls for setting the margin and padding.

<div class="ndl-images">
    <img src="/guides/layouts/margin-and-padding-props.png" class="ndl-image small"></img>
</div>

Here you can specify the _margin_, i.e. the distance between this node and its siblings in the layout. You can specify the margins in all four directions. You can also specify the _padding_, which is the distance from the borders of the **Group** to its children.

A good way to learn these concepts is to adjust and tweak the three nodes in this simple hierarchy. Try modifying the padding and margins and note the difference between them.

## Multiple lines

If the child nodes extend beyond the border of the parent you have a couple of options to control the behavior, wrapping or scrolling. This section will explain the wrapping options that are available.

Wrapping is controlled by the **Multi Line Wrap** option in the properties.

<div class="ndl-images">
    <img src="/guides/layouts/wrap.png" class="ndl-image med"></img>  
</div>

You can choose any of these options:

- `Off` Children will extend beyond the borders of the parent node (default).
- `On` Children will be placed on multiple lines
- `On Reverse` The children will wrap but in the reverse direction.

Here's an example of a horizontal layout with **Multi Line Wrap** set to `On`.

<div class="ndl-images">
    <img src="guides/layouts/multi-line.gif" class="ndl-image large">
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"4ea33114-1bd2-d35a-79b6-9c6daf4ba473","type":"Group","x":198.0,"y":196.0,"parameters":{"backgroundColor":"#D6D6D6","flexDirection":"row","flexWrap":"wrap"},"children":[{"id":"beeb24c5-2bf0-ca33-62ce-b448a10f1b09","type":"Circle","x":218.0,"y":242.0,"parameters":{"fillColor":"#858585"}},{"id":"1742b597-6ee5-dd00-0781-ec3c368b9bdc","type":"Circle","x":218.0,"y":288.0,"parameters":{"fillColor":"#858585"}},{"id":"e4fc4976-3c13-4a5d-701c-ef3a72eb17b5","type":"Circle","x":218.0,"y":334.0,"parameters":{"fillColor":"#858585"}},{"id":"37441ff4-81ac-47ac-2882-8d3f5a4151b4","type":"Circle","x":251.53808416795107,"y":210.45256017010956,"parameters":{"fillColor":"#858585"}},{"id":"4d7a3378-7b80-1f6d-c0cd-285360f291f6","type":"Circle","x":251.53808416795107,"y":256.45256017010956,"parameters":{"fillColor":"#858585"}},{"id":"b1a7b659-7519-e8ea-f4f5-96bba6954b81","type":"Circle","x":251.53808416795107,"y":302.45256017010956,"parameters":{"fillColor":"#858585"}}]}]})'></button> 
</div>