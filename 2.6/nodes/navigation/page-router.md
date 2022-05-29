<##head##>

# Page Router

This node lets you navigate between your <span class="ndl-node">[Page](/nodes/navigation/page)</span> nodes using the <span class="ndl-node">[Navigate](/nodes/navigation/navigate)</span> or <span class="ndl-node">[Navigate To Path](/nodes/navigation/navigate-to-path)</span> nodes. You can also use the <span class="ndl-node">[External Link](/nodes/navigation/external-link)</span> node to navigate to a page outside your app.

Unlike the somewhat similar [Component Stack](/nodes/component-stack/component-stack.md) the **Page Router** is optimized for web type navigation (in contrast to app type) and uses URLs and routing as part of the navigation as well as the browser history.

<div class="ndl-image-with-background">

![](/nodes/navigation/page-router/page-router-1.png)

</div>

Every <span class="ndl-node">Page Router</span> has a <span class="ndl-data">Start Page</span>. The pages are rendered inside of the <span class="ndl-node">Page Router</span>. You can use the <span class="ndl-data">Clip Behavior</span> option to decide how the <span class="ndl-node">Page Router</span> should wrap its content.

<##head##>

## Implementation

The **Page Router** uses standard browser navigation which means that the user can use the browser **Back** button to navigate back in the **Page Router** history.

Note that the **Page Router** only navigates between [Pages](/nodes/navigation/page). **Pages** cannot be created through the Node Picker. You create them using **Create Page** in the component side bar.

<div class="ndl-image-with-background">

![](/nodes/navigation/page-router/create-page.png)

</div>

After creating your **Pages** they are automatically added to your **Page Router** unless you have multiple **Page Routers** in your project. Then you'll have to add them manually to where they belong.

<div class="ndl-image-with-background">

![](/nodes/navigation/page-router/pages-in-router.png)

</div>

## Start Page

When creating and adding pages to your **Page Router** you will have to make one of the pages a starting page by opening the menu on the page item in the **Page Router** properties and selecting _Make Start Page"_.

<div class="ndl-image-with-background">

![](/nodes/navigation/page-router/make-start-page.png)

</div>

## Navigating

### URLs to Page Routers and Pages

Noodl uses a URL to route a **Page Router** to a specific **Page**. A **Page Router** may optionally have a **URL Path**. Each page has also has a **URL Path** that will uniquely identify the URL route to that page.

Generally, the route to a **Page** looks like the following

`<domainname>#/<route1>/<route2>/<route3>...`

where `<domainname` is the domain on where you host the app and each `<route>` points to either a **Page Router** or a **Page** within a **Page Router**. The `<route>` may also include a **Page Parameter** and **Query Parameters** (see below).

For example a **Page Route** with the **URL Path** 'myrouter', with two possible pages with **URL Paths** _page1_ and _page2_, will have two possible routes: _myrouter/page1_ and _#myrouter/page2_. Note the '#' character that is always added in the beginning of a route. If, for example, the Noodl App is deployed on the domain _app.mynoodlapps.com_, entering *https://app.mynoodlapps.com#myrouter/page2* in the browser will take make the **Page Router** with the **URL Path** _myrouter_ navigate to the **Page** with the **URL Path** _page2_.

### Navigating using Navigation node

The most straight forward way of navigating between pages within an app is to use the [Navigate](/nodes/navigation/navigate) node. This node will navigate to the **Page** selected in the **Navigation** node. This will update the URL of the browser to the route pointing to that page. There is also a [Navigate To Path](/nodes/navigation/navigate-to-path) node that allows an explicit path to be set, that could for example perform navigation on multiple **Page Routers** at the same time by simply specifying a full URL path.

## Multiple Page Routers

If needed, you can use multiple **Page Routers** at the same time. This could for example be used if you have multiple navigation flows within a higher level navigation flow. For example, you may have a top level navigation between the pages _Home_ _Settings_ and _Content_ and within each page have sub navigation into specific pages under each section.

![](/nodes/navigation/page-router/multi-router.png)

## Encoding Parameters in the URL

The [Page Inputs](/nodes/navigation/page-inputs) node is used to send parameters between Pages by encoding them in the URL. This is useful for example if you want certain input parameters to be available at a page, no matter the state of the app. The user may for example press __Refresh__ in the browser. Since the parameters are encoded in the URL they will still be available in the **Page** through a **Page Inputs** node.
Another case for encoding parameters in the URL is for users to be able to share a link, with a full route to a specific place in your app, with specific parameters set.

There are two types of parameters **Path Parameters** and **Query Parameters**. There can only be one **Path Parameter** while you can have any number of **Query Parameters**.

### Path Parameter

A **Path Parameter** is added to the route of the page at the end. For example a **Page** with **URL Path** `mypage` with a path parameter defined, will expect the next part of the route to be the value of that parameter. The route `mypage/monkey` will result in the **Path Parameter** of the **Page** to get the value `monkey`. Using **Path Parameter** is a convenient way to encode a specific data entry to be prepopulated in a **Page**. As an example the **Path Parameter** could be the **Id** of a **Record**.

### Query Parameter

A **Query Parameter** are encoded using `?parameter=value;` notation in the URL. You can have any number of **Query Parameters**.

## Visual Appearance

The **Page Router** is a visual node. It will automatically expand to take all space available in the current layout, unless its **Clipping Behavior** is set to **Expand To Content Size** in which case it will have the same size as the **Page** its showing (if available).

## Inputs

| Data                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Name</span>             | <##input:name##>The name of the **Page Router**. If you have multiple **Page Routers** the name will be used to identify them.<##input##>                                                                                                                                                                                                                                                                                                                                                          |
| <span class="ndl-data">URL path</span>         | <##input:urlPath##>An optional path of the **Page Router** when routing a URL towards it.<##input##>                                                                                                                                                                                                                                                                                                                                                                                               |
| <span class="ndl-data">Clip Behavior</span>    | <##input:clip##>This property controls the size and clipping behavior of the **Page Router**. It has three possible values: **Expand To Content Size**, **Scroll** or **Clip Content**.<##input##><br/><br/>`Expand To Content Size`: Changes the size of the **Page Router** to fit the size of the **Page** it's currently showing.<br/>`Scroll`: Makes the **Page Router** take as much space as it can. Any **Page** inside it will be scrollable if it cannot fit inside the **Page Router**. |
| <span class="ndl-data">Background Color</span> | <##input:backgroundColor##>The color that will be shown when there is no **Page** covering the **Page Router** or when the **Page** is transparent.<##input##>                                                                                                                                                                                                                                                                                                                                     |
| <span class="ndl-data">Mounted</span>          | <##input:mounted##>This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.<##input##>                                                                                                                                                                                                                                   |

| Signal                                | Description                                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Reset</span> | <##input:reset##>Triggering this action will reset the **Page Router** making it show the start page.<##input##> |

### Visual

This node also supports the [Advanced Style](../shared-props/inputs/visual-input-properties#advanced-style) gadget from the [Visual Input Properties](../shared-props/inputs/visual-input-properties/).

## Outputs

| Data                                             | Description                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Current Page Title</span> | <##output:current page title##>The title of the page that is currently showing in this **Page Router**.<##output##> |

### Visual

This node supports the following [Visual Output Properties](../shared-props/outputs/visual-output-properties/):

-   [Bounding Box](../shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](../shared-props/outputs/visual-output-properties/#mounted)
-   [Other](../shared-props/outputs/visual-output-properties/#other)

<div class="hidden-props-for-editor">

# Visual Input Properties

All visual nodes feature a plethora of visual properties that can be accessed both in the Property Panel and through inputs. These are documented below. Plese refer to the individual node documentation pages to see which nodes feature what visual properties.

## Margin

Margins are the spacings around the node, outside of the borders. The margins for the node can be set individually in the Spacing Gadget.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/margin.png)

</div>

| Data                                        | Description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| <span class="ndl-data">Margin Left</span>   | The left margin in `px`, or `%` of the parents width.   |
| <span class="ndl-data">Margin Right</span>  | The right margin in `px`, or `%` of the parents width.  |
| <span class="ndl-data">Margin Top</span>    | The top margin in `px` or, `%` of the parents width.    |
| <span class="ndl-data">Margin Bottom</span> | The bottom margin in `px`, or `%` of the parents width. |

## Padding

Paddings are the spacings around the nodes content, inside of the borders. The margins for the node can be set individually in the Spacing Gadget.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/padding.png)

</div>

| Data                                         | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| <span class="ndl-data">Padding Left</span>   | The left padding in `px`, or `%` of the parents width.   |
| <span class="ndl-data">Padding Right</span>  | The right padding in `px`, or `%` of the parents width.  |
| <span class="ndl-data">Padding Top</span>    | The top padding in `px` or, `%` of the parents width.    |
| <span class="ndl-data">Padding Bottom</span> | The bottom padding in `px`, or `%` of the parents width. |

## Alignment

To specify how the node is aligned to its parent you can use the Alignment Gadget.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/alignment.png)

</div>

From left to right, the alignment options are:

| Data                                                  | Description                                             |
| ----------------------------------------------------- | ------------------------------------------------------- |
| <span class="ndl-data">Align Bottom</span>            | Align this node to the bottom of its parent.            |
| <span class="ndl-data">Align Vertical Center</span>   | Align this node to the bottom of its parent.            |
| <span class="ndl-data">Align Top</span>               | Align this node to the top of its parent.               |
| <span class="ndl-data">Align Left</span>              | Align this node to the left side of its parent.         |
| <span class="ndl-data">Align Horizontal Center</span> | Align this node to the horizontal center of its parent. |
| <span class="ndl-data">Align Right</span>             | Align this node to the right of its parent.             |

## Dimensions

Controling the width and height of the node is done with the Dimension Gadget.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/dimensions.png)

</div>

The first four controls the **Size Mode** of the node. It decides how the width and height of the node is specified. From left to right, the options are:

| Data                                                         | Description                                                                                                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Explicit width and height</span>      | Set the width and height directly in pixels or percentage. Percentage is in relation to the parent, so 100% is the same size as the parent. |
| <span class="ndl-data">Explicit height, Content Width</span> | The node will calculate the width to fit all of its children. The height is explicitly set.                                                 |
| <span class="ndl-data">Explicit width, Content Height</span> | The node will calculate the height to fit all of its children. The width is explicitly set.                                                 |
| <span class="ndl-data">Content Size</span>                   | Both the width and the height is calculated to fit all of the node's children.                                                              |

The other properties are:

| Data                                 | Description                                                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Width</span>  | Specify the width of this node in pixels, percentage of parent's width or the unit `vw` which is percentage of the browser window width.                                                                                                                                                                            |
| <span class="ndl-data">Height</span> | Specify the height of this node in pixels, percentage of parent's height or the unit `vw` which is percentage of the browser window height.                                                                                                                                                                         |
| <span class="ndl-data">Fixed</span>  | Controls if an element will try to resize and share space with siblings without going outside of the bounds of the parent. <br/> <br/>If _Fixed_ is enabled, the element will be the exact specified size. If it is disabled, the element will resize to fill up empty space, or shrink to make space for siblings. |

You can use the [Dimension Contstraints Gadget](#dimension-constraints) to set a min and/or a max size for the node.

## Layout

The supported properties of the Layout Gadget can be very different depending on the node. All possible properties are listed below.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/layout.png)

</div>

### • Position

Controls the layout of this node is in its parent group.

| Option                                  | Description                                                                                                                                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">In Layout</span> | This node is part of the parent group layout, it will be stacked with its siblings depending on the parent group layout settings.                                                                                                 |
| <span class="ndl-data">Absolute</span>  | This node will not be part of the parent group layout, instead you are free to use the `Pos X` and `Pos Y` to place this node explicitly.                                                                                         |
| <span class="ndl-data">Sticky</span>    | Behaves like _In Layout_, except when the node is about the be scrolled outside the parent. It'll stick to an edge of the parent instead of scrolling away. The edge it sticks to can be controlled with the **Alignment** input. |

### • Layout Direction

By default all children are stacked. This property specifies the stacking direction.

| Data                                     | Description                        |
| ---------------------------------------- | ---------------------------------- |
| <span class="ndl-data">Vertical</span>   | Children are stacked vertically.   |
| <span class="ndl-data">Horizontal</span> | Children are stacked horizontally. |
| <span class="ndl-data">None</span>       | Children are not stacked.          |

### • Multi Line Wrap

This property specifies what happens with children that are stacked outside of the border of the node.

| Data                                     | Description                                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Off</span>        | Children are stacked beyond the boundaries of the node. If _Clip_ is enabled they will not be visible. |
| <span class="ndl-data">On</span>         | Children are wrapped to the next row or column (depending on layout direction).                        |
| <span class="ndl-data">On Reverse</span> | Same as _On_ but opposite layout direction.                                                            |

### • Clip content

This property controls if elements that are too big to fit inside the node will be clipped.

If disabled, a group will always expand to contain all of its children. So if the children are taller than the size of the group, the group will expand and be larger than its specified size.

## Align and justify content

This Gadget controls how children are aligned and justified by default. Children can override these settings with their **Alignment** input.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/align_and_justify.png)

</div>

The first set of options control cross-axis alignment, meaning vertical alignment for horizontal layouts, and horizontal alignment for vertical layouts. From left to right, the options are:

| Option                                           | Description                                       |
| ------------------------------------------------ | ------------------------------------------------- |
| <span class="ndl-data">Align items start</span>  | Children are stacked at the start of the parent.  |
| <span class="ndl-data">Align items center</span> | Children are stacked at the center of the parent. |
| <span class="ndl-data">Align items end</span>    | Children are stacked at the end of the parent.    |

The second set of options control alignment in the same direction as the layout. From left to right, the options are:

| Option                                                      | Description                                                                                         |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Justify content start</span>         | Children are stacked at the start of the parent.                                                    |
| <span class="ndl-data">Justify content center</span>        | Children are stacked at the center of the parent.                                                   |
| <span class="ndl-data">Justify content end</span>           | Children are stacked at the end of the parent.                                                      |
| <span class="ndl-data">Justify content space between</span> | Children are evenly distributed. No space is added between the parent and the first and last child. |
| <span class="ndl-data">Justify content space around</span>  | Children are evenly distributed. Space is added between the parent and the first and last child.    |
| <span class="ndl-data">Justify content space evenly</span>  | Children are evenly distributed with equal space between them.                                      |

## Scroll

This Gadget controls how scrolling should be handled within the node.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/scroll.png)

</div>

| Data                                        | Description                                                                                                                                                                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Enable Scroll</span> | This specifies if the node should have scrolling enabled for children that overflow outside of the nodes boundaries. Scrolling direction is determined by the nodes [Layout](#layout) direction. Enabling this will show the scrolling properties below. |

| Data                                                 | Description                                                                                                                                                                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Native Platform Scroll</span> | When enabled, uses the web's native scrolling dependent on the platform. Uses custom Noodl scrolling when disabled. The custom Noodl scrolling is platform independent and has both touch and mouse support. |
| <span class="ndl-data">Show Scrollbar</span>         | Only available if _Native Platform Scroll_ is disabled. Toggles the visibility of the scrollbar.                                                                                                             |
| <span class="ndl-data">Bounce at boundaries</span>   | Only available if _Native Platform Scroll_ is disabled. Toggles if scrolling bounces when you are at top or bottom of list.                                                                                  |
| <span class="ndl-data">Snap</span>                   | Only available if _Native Platform Scroll_ is disabled. Enabling this will snap the scrolling between every screen.                                                                                          |
| <span class="ndl-data">Snap To Every Item</span>     | Only available if _Snap_ is enabled. Enabling this will force the scrolling to snap to individual items.                                                                                                     |

## Text Style

| Data                                         | Description                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Text Style</span>     | Set an existing text style to this node, or create a new text style from the current properties.                                                                                                                                                                                                                               |
| <span class="ndl-data">Font Family</span>    | The font family of the text to display. Choose a font in the project folder or type font name.                                                                                                                                                                                                                                 |
| <span class="ndl-data">Font Size</span>      | The size of the font of the text to be displayed, in `px`.                                                                                                                                                                                                                                                                     |
| <span class="ndl-data">Color</span>          | The color of the text to be displayed.                                                                                                                                                                                                                                                                                         |
| <span class="ndl-data">Letter spacing</span> | The distance between letters in the string to be displayed. Can be specified in the following units: <br/><br/>`px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display<br/>`em`: Relative to the font size. 1em is the same as the current font size                                    |
| <span class="ndl-data">Line height</span>    | The line height of the string, if the string is on multiple lines. Can be specified in the following units: <br/><br/> `No unit`: Relative to the current font size. Preferred way to set line height <br/>`px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display <br/>`%`: Percentage |
| <span class="ndl-data">Case</span>           | Control how to capitalize the text: <br/><br/>`None`: Characters are unmodified<br/>`Uppercase`: All characters will be uppercase<br/>`Lowercase`: All characters will be lowercase<br/>`Capitalize`: The first letter of each word will be converted to uppercase                                                             |

## Style

This Gadget controls basic styling of the node.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/style.png)

</div>

| Data                                           | Description                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Opacity</span>          | The opacity of the node. 0 is completely transparent and invisible. 1 is completely solid and opaque.                                                                                                                                                                                                  |
| <span class="ndl-data">Background Color</span> | Specifies the background color for this node.                                                                                                                                                                                                                                                          |
| <span class="ndl-data">Visible</span>          | Toggle the visibility of this node on and off.                                                                                                                                                                                                                                                         |
| <span class="ndl-data">zIndex</span>           | The depth index for this node, this can be any number.                                                                                                                                                                                                                                                 |
| <span class="ndl-data">Blend Mode</span>       | Controls how this element should blend with the elements behind it. The blend mode can be set to one of the following: `Multiply` `Normal` `Screen` `Overlay` `Darken` `Lighten` `Color Dodge` `Color Burn` `Hard Light` `Soft Light` `Difference` `Exclusion` `Hue` `Saturation` `Color` `Luminosity` |

## Border Style

The Border Style Gadget is used to style the borders.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/border_style.png)

</div>

You can select to style all borders at once, or only style individual borders. The styling for the individual borders will override the all-borders option.

| Data                                       | Description                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Border Style</span> | Specifies whether this node should have a border and what it should look like. The options are `None`, `Solid`, `Dotted` and `Dashed`. |
| <span class="ndl-data">Border Width</span> | The width of the border. Only available if _Border Style_ is set to have a border.                                                     |
| <span class="ndl-data">Border Color</span> | The color of the border. Only available if _Border Style_ is set to have a border.                                                     |

## Corner Radius

The Corner Radius Gadget is used to round the corners of the node.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/corner_radius.png)

</div>

You can select to set the corner radius all corners at once, or only style individual corners. The styling for the individual corners will override the all-corners option.

The corner radius is specified in `px` or `%` of the nodes width.

## Box Shadow

You use the Box Shadow Gadget to set the shadow behind or inside of the node.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/box_shadow.png)

</div>

| Data                                         | Description                                                                                                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Shadow Enabled</span> | Enables and disables the shadow.                                                                                                                                    |
| <span class="ndl-data">Offset X</span>       | The horizontal offset of the shadow. A positive value puts the shadow on the right side of the node, a negative value puts the shadow on the left side of the node. |
| <span class="ndl-data">Offset Y</span>       | The vertical offset of the shadow. A positive value puts the shadow below the node, a negative value puts the shadow above node.                                    |
| <span class="ndl-data">Blur Radius</span>    | The blur radius. The higher the number, the blurrier the shadow will be.                                                                                            |
| <span class="ndl-data">Spread Radius</span>  | The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.                                            |
| <span class="ndl-data">Inset</span>          | Changes the shadow from an outer shadow (outset) to an inner shadow.                                                                                                |
| <span class="ndl-data">Shadow Color</span>   | The color of the shadow.                                                                                                                                            |

## Placement

The Placement Gadget lets you offset, rotate and scale the node. It uses CSS Transforms under the hood, meaning that the nod will still take up the original size and position in the visual tree.

<div class="ndl-image-with-background">

![](/nodes/ui-elements/placement.png)

</div>

| Data                                             | Description                                                                                                                                                                                                                                              |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Pos X</span>              | The X position of the node. Either relative to its parent top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's width.                                  |
| <span class="ndl-data">Pos Y</span>              | The Y position of the node either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's height.                                |
| <span class="ndl-data">Rotation</span>           | The rotation in degrees.                                                                                                                                                                                                                                 |
| <span class="ndl-data">Scale</span>              | Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.                                                   |
| <span class="ndl-data">Transform Origin X</span> | Specifies the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.  |
| <span class="ndl-data">Transform Origin Y</span> | Specifies the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels. |

## Dimension Constraints

The Dimension Constraints Gadget allows you to clamp the values of the [Dimensions Gadget](#dimensions).

<div class="ndl-image-with-background">

![](/nodes/ui-elements/dimension_constraints.png)

</div>

| Data                                     | Description                                                                                                                                               |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Min Width</span>  | The minimum width that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vw_ which is percentage of window width.   |
| <span class="ndl-data">Max Width</span>  | The maximum width that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vw_ which is percentage of window width.   |
| <span class="ndl-data">Min Height</span> | The minimum height that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vh_ which is percentage of window height. |
| <span class="ndl-data">Max Height</span> | The maximum height that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vh_ which is percentage of window height. |

## Focus

| Signal                                | Description                                                                                                                             |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Focus</span> | Focuses this node. Will trigger the _Focused_ signal output on this node, as well as _Focused Lost_ on other nodes that now lost focus. |

## Other

| Data                                                 | Description                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Pointer Events Mode</span>    | This specifies how this node responds to pointer events.<br/><br/>`Inherit` sets the node to respond to pointer events in the same way as its parent.<br/>`Explicit` sets the node to respond to pointer events as specified by _Pointer Events Enabled_. |
| <span class="ndl-data">Pointer Events Enabled</span> | This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.                                           |
| <span class="ndl-data">Block Pointer Events</span>   | This will cause this node to block all pointer events, e.g. any node that is behind this node will not receive pointer events.                                                                                                                            |
| <span class="ndl-data">Mounted</span>                | This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the visual tree. It differs from the _Visible_ property where the node is still part of the visual tree but invisible.        |

## Advanced Style

| Data                                    | Description                                                             |
| --------------------------------------- | ----------------------------------------------------------------------- |
| <span class="ndl-data">CSS Class</span> | <##input:cssClass##>Specify a CSS class this node will have.<##input##> |
| **CSS Style**                           | Use this property to specify your custom CSS.                           |

# Visual Output Properties

## Scrolling

| Data                                          | Description                                  |
| --------------------------------------------- | -------------------------------------------- |
| <span class="ndl-data">Scroll Position</span> | The current position of scrolling in pixels. |

| Signal                                       | Description                           |
| -------------------------------------------- | ------------------------------------- |
| <span class="ndl-signal">Scroll Start</span> | Signal emitted when scrolling starts. |
| <span class="ndl-signal">Scroll End</span>   | Signal emitted when scrolling ends.   |

## Bounding Box

| Data                                            | Description                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Screen Position X</span> | <##output:screenPositionX##>Where this node is on the screen's X-axis, in `px`.<##output##> |
| <span class="ndl-data">Screen Position Y</span> | <##output:screenPositionY##>Where this node is on the screen's Y-axis, in `px`.<##output##> |
| <span class="ndl-data">Width</span>             | <##output:width##>Current width of this node.<##output##>                                   |
| <span class="ndl-data">Height</span>            | <##output:height##>Current height of this node.<##output##>                                 |

## Mounted

| Signal                                       | Description                                                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Did Mount</span>    | <##output:didMount##>Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.<##output##> |
| <span class="ndl-signal">Will Unmount</span> | <##output:willUnmount##>Signal sent when this node is about to be removed from the visual tree and become hidden.<##output##>         |

## Pointer Events

| Signal                                        | Description                                                           |
| --------------------------------------------- | --------------------------------------------------------------------- |
| <span class="ndl-signal">Click</span>         | Triggered when the node is clicked or tapped.                         |
| <span class="ndl-signal">Pointer Down</span>  | Triggered when the mouse is pressed or finger is down on the node.    |
| <span class="ndl-signal">Pointer Up</span>    | Triggered when the mouse is released or finger is lifted on the node. |
| <span class="ndl-signal">Pointer Enter</span> | Triggered when the mouse enters the node.                             |

## Hover Events

| Signal                                      | Description                               |
| ------------------------------------------- | ----------------------------------------- |
| <span class="ndl-signal">Hover Start</span> | Triggered when the mouse enters the node. |
| <span class="ndl-signal">Hover End</span>   | Triggered when the mouse leaves the node. |

## Focus

| Signal                                  | Description                                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Focused</span> | Triggered when the node, or one if its descendants, is clicked, or if the _Focused_ input is triggered.                           |
| <span class="ndl-signal">Blurred</span> | Triggered when this node had focus and another node gained focus. Focus is only lost if the new focused node is not a descendant. |

## Other

| Data                                      | Description                                                                                                                                                                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Child Index</span> | <##output:childIndex##>The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ `0`, the second child will have _Child Index_ `1`, and so on.<##output##> |
| <span class="ndl-data">This</span>        | <##output:this##>A reference to this node. Used in custom **JavaScript** nodes and more.<##output##>                                                                                                                                     |


</div>