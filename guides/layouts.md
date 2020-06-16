# Layouting

This guide will cover the layouting mechanism. It is an important concept to master in order to easily create responsive, dynamic front ends for your apps.

## Margin and padding

At the center of layouting is the **Group** node. **Group** nodes are arranged in a hierarchy as can be seen in the node graph below. A **Group** controls the layout of its children and there are a number of properties that can be used to specify how the children of a **Group** node will be layouted.

<div class="ndl-images">
    <img src="/guides/layouts/groups.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"5a81ad6d-b8eb-16f8-e2b3-3533c0a05462","type":"Group","label":"Group","x":176,"y":140.5,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"999f7f8b-6678-ed24-5ea9-08b25e1b394e","type":"Group","x":196,"y":186.5,"parameters":{"marginTop":{"value":20,"unit":"px"},"marginLeft":{"value":20,"unit":"px"},"marginRight":{"value":20,"unit":"px"},"marginBottom":{"value":20,"unit":"px"},"paddingTop":{"value":50,"unit":"px"},"paddingLeft":{"value":50,"unit":"px"},"paddingRight":{"value":50,"unit":"px"},"paddingBottom":{"value":50,"unit":"px"},"backgroundColor":"#DBDBDB"},"ports":[],"children":[{"id":"ddde9610-f9a6-03bd-bb46-4a67d56a2180","type":"Group","x":216,"y":232.5,"parameters":{"backgroundColor":"#B5B5B5"},"ports":[],"children":[]}]}]}],"connections":[]})'></button>
</div>

?> **Hover** the nodes in the Noodl editor and they will highlight in the preview window. This is a great way to inspect a node that you are unfamiliar with.

<div class="ndl-images">
    <img src="/guides/layouts/hover.gif" class="ndl-image med"></img>
</div>

Select one of the nodes to view it's properties. In the property panel you can find the _Margin and padding_ controls.

<div class="ndl-images">
    <img src="/guides/layouts/margin-and-padding-props.png" class="ndl-image small"></img>
</div>

Here you can specify the _margin_, i.e. the distance between this node and its siblings in the layout. You can specify the margins in all four directions. You can also specify the _padding_, which is the distance from the borders of the **Group** to it's children.

The best way to learn is to play around with the three nodes in this simple hierarchy.

## Layout direction

By default the **Group** node will stack it's children vertically. You can change the layout direction by editing the **Layout** property. You can change the layout between:

- **Vertical** Children are stacked vertically.
- **Horizontal** Children are stacked horizontally.
- **None** Children are _not_ stacked.

<div class="ndl-images">
    <img src="/guides/layouts/layout-prop.png" class="ndl-image med"></img>  
</div>

Check out the small node graph below. Copy these nodes and paste them into an empty component in your Noodl editor, and then change the **Layout** of the top level node to see how the direction of the child nodes change.

<div class="ndl-images">
    <img src="/guides/layouts/layout-dir.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"9f88e7d6-959c-7946-f66d-3db6257d522b","type":"Group","label":"Layout node","x":290,"y":395,"parameters":{"sizeMode":"explicit","backgroundColor":"#E6E6E6"},"ports":[],"children":[{"id":"8a0b2c8c-c534-bdcc-102d-2905b48d8885","type":"Group","x":310,"y":456,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]},{"id":"bcfa83ad-f05f-d7ff-13a4-f82ac19bd664","type":"Group","x":310,"y":502,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]},{"id":"35c2039f-5f12-3dab-bc94-a7c630aa9698","type":"Group","x":310,"y":548,"parameters":{"marginTop":{"value":5,"unit":"px"},"marginLeft":{"value":5,"unit":"px"},"marginRight":{"value":5,"unit":"px"},"marginBottom":{"value":5,"unit":"px"},"backgroundColor":"#C2C2C2","width":{"value":100,"unit":"px"},"height":{"value":100,"unit":"px"}},"ports":[],"children":[]}]}],"connections":[]})'></button>
</div>

## Dimensions

The dimensions section of the properties cover how the size of a **Group** is derived. The default is that both _Width_ and _Height_ is explicitly specified in either pixels (**px**), percentage of parent (**%**), or as a percentage of the viewport size (**vw** and **vh**).

<div class="ndl-images">
    <img src="/guides/layouts/dims-1.png" class="ndl-image med"></img>  
</div>

A **Group** can also get its dimensions from the size of its children. You use the icons at the top to change between the four modes (from right):

- **Explicit width and height** Specify both width and height explicitly.
- **Explicit width, Content height** Specify the width explicitly but the height will be the total of the children heights and margins (depending on layout).
- **Explicit height, Content width** Specify the height explicitly but the width will be the total of the children widths and margins (depending on layout).
- **Content width and height** The size of this group will be the total width and height of the children based on the layout.

You can copy the nodes below to an empty component in your Noodl editor. The result is shown to the right. These nodes each use a different setting for the **Dimensions** icons.

<div class="ndl-images">
    <img src="/guides/layouts/content-size-nodes.png" class="ndl-image small"></img>  
     <img src="/guides/layouts/content-size-example.png" class="ndl-image small"></img> 
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"3aad82a0-9636-d391-b31c-06f66be77bdc","type":"Group","x":243,"y":178,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"61757927-9c6c-3afb-a964-1492a5ff5a90","type":"Group","label":"Content height","x":263,"y":224,"parameters":{"sizeMode":"contentHeight","backgroundColor":"#D6D6D6","marginBottom":{"value":20,"unit":"px"},"width":{"value":100,"unit":"px"}},"ports":[],"children":[{"id":"cefc770e-47c0-ddfd-0caa-b88831ce8e8f","type":"Circle","x":283,"y":285,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]},{"id":"ccdbfc6b-8138-cc99-6ffc-aaf6b5c4b56e","type":"Group","label":"Content size","x":263,"y":331,"parameters":{"sizeMode":"contentSize","backgroundColor":"#D6D6D6","marginBottom":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"cef82662-86c6-43d7-5221-fa47869a5043","type":"Circle","x":283,"y":392,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]},{"id":"000843d3-fdf9-7638-67e3-42617b66bf4f","type":"Group","label":"Content width","x":263,"y":438,"parameters":{"sizeMode":"contentWidth","backgroundColor":"#D6D6D6","height":{"value":100,"unit":"px"}},"ports":[],"children":[{"id":"f94a589b-b042-9f9e-1d2f-0599a5fe2f41","type":"Circle","x":283,"y":499,"parameters":{"fillColor":"#858585","size":50},"ports":[],"children":[]}]}]}],"connections":[]})'></button> 
</div>

## Alignment

The Alignment controls can be used to specify how a child **Group** (or other visual node) is aligned relative to its parent.

<div class="ndl-images">
    <img src="/guides/layouts/align-props.png" class="ndl-image med"></img>  
</div>

If the parent **Group** has its **Layout** property set to **None** you can use the alignment controls to pin the child visual node to a corner. You can then use the margins or padding to offset it from that corner.

<div class="ndl-images">
    <img src="/guides/layouts/align.gif" class="ndl-image large"></img>  
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"8a968ff3-9099-fc23-eaef-b3f3c2f8a271","type":"Group","label":"Layout None","x":-124.8300537163023,"y":231.19983547495616,"parameters":{"backgroundColor":"#FFFFFF","flexDirection":"none"},"ports":[],"children":[{"id":"6c2df5ce-7596-06da-a5c5-335275501d64","type":"Circle","x":-104.8300537163023,"y":292.19983547495616,"parameters":{"fillColor":"#C9C9C9","alignY":"top","alignX":"left"},"ports":[],"children":[]}]}],"connections":[]})'></button> 
</div>

If you have a **Layout** set for the parent node, such as **Vertical** (default) or **Horizontal** one of the alignments will not have any effect as that dimension is controlled by the layout. In the example below the two circles are kept in a vertical layout so the vertical alignment will not have any effect.

<div class="ndl-images">
    <img src="/guides/layouts/align-layout.gif" class="ndl-image large"></img>  
      <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"fc4dde47-5159-5610-72b3-0c0517a85016","type":"Group","label":"Vertical Layout","x":246.88905579077777,"y":242.63152555189907,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"1e1508ee-6e28-41b2-a7f5-ac05004bc51a","type":"Circle","x":266.8890557907778,"y":303.6315255518991,"parameters":{"fillColor":"#C9C9C9","alignY":"bottom","alignX":"left"},"ports":[],"children":[]},{"id":"71baf6a9-3de0-8ea8-538d-c6ae02119c0a","type":"Circle","x":266.8890557907778,"y":349.6315255518991,"parameters":{"fillColor":"#C9C9C9","alignY":"top","alignX":"left"},"ports":[],"children":[]}]}],"connections":[]})'></button> 
</div>

## Wrapping

If the layouted child nodes extend beyond the border of the parent you have a couple of options to control the behaviour, wrapping or scrolling. This section will explain the wrapping options that are available.

Wrapping is controlled by the **Multi Line Wrap** option in the properties.

<div class="ndl-images">
    <img src="/guides/layouts/wrap.png" class="ndl-image med"></img>  
</div>

You can choose any of these options:

- **Off** The children will simply extend beyond the borders of the parent node (default).
- **On** The children will wrap onto a new line when they extend beyond the border of their parent.
- **On Reverse** The children will wrap but in the reverse direction.

## Scrolling

If you don't want the children to wrap but instead want scrolling you need to enable it via the **Enable Scroll** property of the **Group** node.

<div class="ndl-images">
    <img src="/guides/layouts/scroll-props.png" class="ndl-image med"></img>  
</div>
