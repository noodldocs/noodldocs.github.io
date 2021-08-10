# Video

This node represents a video surface.

<div class = "node-inputs">

## Inputs

### Margin

Using the margin gadget you can specify the top, bottom, left and right margins for this node. You can specify them in either pixels or percentage (of the corresponding parent dimension).

<div class="ndl-images">
    <img src="/nodes/visual/margin-only.png" class="ndl-image small"></img>  
</div>

**Margin Left**  
The left margin in pixels or % of parent.

**Margin Right**  
The right margin in pixels or % of parent.

**Margin Top**  
The top margin in pixels or % of parent.

**Margin Bottom**  
The bottom margin in pixels or % of parent.

### Alignment

<div class="ndl-images">
    <img src="/nodes/visual/align-props.png" class="ndl-image small"></img>  
</div>

Use the alignment gadget to specify how this node is aligned to its parent. Important to note is that the horizontal alignment options won't have any effect if the parent's layout is set to _Horizontal_, and similarly the vertical alignments have no effect if the parent's layout is set to _Vertical_.

From left to right, the alignment options are:

- _Align Bottom_ - Align this node to the bottom of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Vertical Center_ - Align this node to the vertical center of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Top_ -Align this node to the top of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Left_ - Align this node to the left side of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.
- _Align Horizontal Center_ Align this node to the horizontal center of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.
- _Align Right_ - Align this node to the right of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.

### Dimensions

**Size Mode**  
Controls how the width and height of this node is specified.

<div class="ndl-images">
    <img src="/nodes/visual/dims-1.png" class="ndl-image small"></img>  
</div>

- _Explicit width and height_ - Set the width and height directly in pixels or percent. Percentage is in relation to the parent, so 100% is the same size as the parent
- _Explicit height, Image Width_ - The image node will have the same width as the image. The height is explicitly set
- _Explicit width, Image Height_ - The image node will have the same height as the image. The width is explicitly set
- _Image Size_ - Both the width and the height will be set to the dimensions of the image

**Width**  
Specify the width of this node in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this node in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

**Image Fit**  
Determines how the source image re-sizes to fit the Image container.

- Fill -This is default. The image is sized to fill the node's content box. If necessary, the image will be stretched or squished to fit.
- Contain -The image is scaled to maintain its aspect ratio while fitting within the node's content box.
- Cover -The image is sized to maintain its aspect ratio while filling the node's entire content box. The image will be clipped to fit.
- None -The image is not resized
- Scale Down -The image is sized as if none or contain were specified (would result in a smaller concrete image size).

### Video

**Source**  
The source of the video. Either a local file in the project folder or an absolute url.

**Poster**  
An image shown when the video is not started. Choose an image in the project folder.

**Autoplay**  
Sets whether the audio/video should start playing as soon as it is loaded.

**Volume**  
The volume of the video when played.

**Muted**  
Sets whether the audio/video is muted or not.

**Loop**  
Indicates whether the video should loop when the end is reached during playback.

### Video Actions

**Play**  
Signal to start playing the video.

**Pause**  
Signal to pause the video.

**Reset**  
Signal to reset the video to the beginning.

### Video Layout

**Video Position X**  
The video's X position within the **Video** node's bounding box.

**Video Position Y**  
The video's Y position within the **Video** node's bounding box.

**Object Fit**  
Specifies how the video will behave when scaled to other size than the default size.

- _Contain_ - The video will be scaled by keeping aspect ratio and making sure the video fits in the bounding box. This may introduce transparent areas within the **Video** node's bounding box.
- _Cover_ - The video will be scaled by keeping aspect ratio and making sure the video fills the entire bounding box. Portions of the video may be clipped.
- _Fill_ - The video will fill the bounding box by scaling without keeping aspect ratio.
- _None_ - The video will not be scaled. May be clipped.

### Style

[filename](./visibility-styles.md ':include')

### Placement

**Pos X**  
The X position of this node. Either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents width.

**Pos Y**  
The Y position of this node. Either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents height.

**Rotation**  
The rotation in degrees.

**Scale**  
Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.

**Transform Origin X**  
Specifies the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.

**Transform Origin Y**  
Specifies the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels.

### Other

**Position**  
Controls how this node is layouted in its parent.

- _In Layout_ - This node is part of the parent layout, it will be stacked with its siblings depending on the parent layout settings.
- _Absolute_ - This node will not be part of the parent layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this node explicitly.

**Block Pointer Events**  
This will cause this node to block all pointer events, e.g. any node that are behind this node will not receive pointer events.

**Pointer Events Mode**  
This specifies how this node will responds to pointer events.

- _Inherit_ - This node will respond to pointer events in the same way as its parent.
- _Explicit_ - This node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

[filename](../advanced-style.md ':include').

</div>

<div class = "node-outputs">

## Outputs

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom **Javascript** nodes and more.

**onCanPlay**  
Signal triggered when the video has loaded and is ready to be played.

**onTimeUpdate**  
Signal triggered when the playing position of the audio/video has changed. Event is invoked both by playing the media as well as when the playback position is being moved (for example when fast forward is being used).

**DOM Element**  
A reference to the DOM Element representing this visual node.

**videoWidth**  
The width of the video source.

**videoHeight**  
The height of the video source.

### Bounding Box

**Screen Position X**  
Where this node is on the screen's X-axis, in pixels.

**Screen Position Y**  
Where this node is on the screen's Y-axis, in pixels.

**Width**  
Current width of this node.

**Height**  
Current height of this node.

### Mounted

**Did Mount**  
Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.

**Will Unmount**  
Signal sent when this node is about to be removed from the visual tree and become hidden.

### Pointer Events

**Click**  
Emitted when the node is clicked or tapped.

**Pointer Down**  
Emitted when the mouse is pressed or finger is down on the node.

**Pointer Up**  
Emitted when the mouse is released or finger is lifted on the node.

**Pointer Enter**  
Emitted when the mouse enters the node.

### Hover Events

**Hover Start**  
Emitted when the mouse enters the node.

**Hover End**  
Emitted when the mouse leaves the node.

</div>
