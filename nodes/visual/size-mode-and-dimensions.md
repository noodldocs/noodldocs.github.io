**Size Mode**  
Controls how the width and height of a **Group** is specified.

<div class="ndl-images">
    <img src="/nodes/visual/dims-1.png" class="ndl-image small"></img>  
</div>

- _Explicit width and height_ - Set the width and height directly in pixels or percentage. Percentage is in relation to the parent, so 100% is the same size as the parent.
- _Explicit height, Content Width_ - The node will calculate the width to fit all of its children. The height is explicitly set.
- _Explicit width, Content Height_ - The node will calculate the height to fit all of its children. The width is explicitly set.
- _Content Size_ - Both the width and the height is calculated to fit all of the node's children.

**Width**  
Specify the width of this node in pixels, percentage of parent's width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this node in pixels, percentage of parent's height or the unit _vw_ which is percentage of the browser window height.