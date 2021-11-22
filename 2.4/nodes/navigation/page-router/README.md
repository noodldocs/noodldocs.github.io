<##head##>
# Page Router

This node lets you navigate between your <span class="ndl-node">[Page](/nodes/navigation/page/)</span> nodes using the <span class="ndl-node">[Navigate](/nodes/navigation/navigate/)</span> or <span class="ndl-node">[Navigate To Path](/nodes/navigation/navigate-to-path/)</span> nodes. You can also use the <span class="ndl-node">[External Link](/nodes/navigation/external-link/)</span> node to navigate to a page outside your app.

Unlike the somewhat similar [Component Stack](/nodes/component-stack/component-stack/) the **Page Router** is optimized for web type navigation (in contrast to app type) and uses URLs and routing as part of the navigation as well as the browser history.

![](./page-router-1.png ':class=img-size-m')

Every <span class="ndl-node">Page Router</span> has a <span class="ndl-data">Start Page</span>. The pages are rendered inside of the <span class="ndl-node">Page Router</span>. You can use the <span class="ndl-data">Clip Behavior</span> option to decide how the <span class="ndl-node">Page Router</span> should wrap its content. 

<##head##>
## Implementation

The **Page Router** uses standard browser navigation which means that the user can use the browser __Back__ button to navigate back in the **Page Router** history.

Note that the **Page Router** only navigates between [Pages](/nodes/navigation/page/). **Pages** cannot be created through the Node Picker. You create them using __Create Page__ in the component side bar.

![](./create-page.png ':class=img-size-m')

After creating your **Pages** they are automatically added to your **Page Router** unless you have multiple **Page Routers** in your project. Then you'll have to add them manually to where they belong.

![](./pages-in-router.png ':class=img-size-m')

## Start Page

When creating and adding pages to your **Page Router** you will have to make one of the pages a starting page by opening the menu on the page item in the **Page Router** properties and selecting *Make Start Page"*.

![](./make-start-page.png ':class=img-size-m')

## Navigating

### URLs to Page Routers and Pages

Noodl uses a URL to route a **Page Router** to a specific **Page**. A **Page Router** may optionally have a **URL Path**. Each page has also has a **URL Path** that will uniquely identify the URL route to that page.

Generally, the route to a **Page** looks like the following

`<domainname>#/<route1>/<route2>/<route3>...`

where `<domainname` is the domain on where you host the app and each `<route>` points to either a **Page Router** or a **Page** within a **Page Router**. The `<route>` may also include a **Page Parameter** and **Query Parameters** (see below).

For example a **Page Route** with the **URL Path** 'myrouter', with two possible pages with **URL Paths** *page1* and *page2*, will have two possible routes: *myrouter/page1* and *#myrouter/page2*. Note the '#' character that is always added in the beginning of a route. If, for example, the Noodl App is deployed on the domain *app.mynoodlapps.com*, entering *https://app.mynoodlapps.com#myrouter/page2* in the browser will take make the **Page Router** with the **URL Path** *myrouter* navigate to the **Page** with the **URL Path** *page2*.

### Navigating using Navigation node
The most straight forward way of navigating between pages within an app is to use the [Navigation](/nodes/navigation/navigation/) node. This node will navigate to the **Page** selected in the **Navigation** node. This will update the URL of the browser to the route pointing to that page. There is also a [Navigate To Path](/nodes/navigation/navigation/) node that allows an explicit path to be set, that could for example perform navigation on multiple **Page Routers** at the same time by simply specifying a full URL path.

## Multiple Page Routers

If needed, you can use multiple **Page Routers** at the same time. This could for example be used if you have multiple navigation flows within a higher level navigation flow. For example, you may have a top level navigation between the pages *Home* *Settings* and *Content* and within each page have sub navigation into specific pages under each section.

![](./multi-router.png ':class=img-size-l')


[filename](../common-navigation/page-inputs/README.md ':include')

## Visual Appearance

The **Page Router** is a visual node. It will automatically expand to take all space available in the current layout, unless its **Clipping Behavior** is set to **Expand To Content Size** in which case it will have the same size as the **Page** its showing (if available).

## Inputs

### General

**Name**
<##input:name##>The name of the **Page Router**. If you have multiple **Page Routers** the name will be used to identify them.<##input##>

**URL path**
<##input:urlPath##>An optional path of the **Page Router** when routing a URL towards it.<##input##>

### Layout ###

**Clip Behavior**

<##input:clip##>This property controls the size and clipping behavior of the **Page Router**. It has three possible values: **Expand To Content Size**, **Scroll** or **Clip Content**.<##input##>

- **Expand To Content Size** will change the size of the **Page Router** to fit the size of the **Page** it's currently showing.

- **Scroll** will make the **Page Router** take as much space as it can. Any **Page** inside it will be scrollable if it cannot fit inside the **Page Router**.

- **Clip Content** will make the **Page Router** take as much space as it can. Any **Page** inside it will be clipped if it cannot fit inside the **Page Router**.

### Style

**Background Color**
<##input:backgroundColor##>The color that will be shown when there is no **Page** covering the **Page Router** or when the **Page** is transparent.<##input##>

### Other

**Mounted**

<##input:mounted##>This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.<##input##>

[filename](../../ui-elements/shared-props/inputs/advanced-style/README.md ':include')

### Actions
**Reset**
<##input:reset##>Triggering this action will reset the **Page Router** making it show the start page.<##input##>

## Outputs

[filename](../../ui-elements/shared-props/outputs/other/README.md ':include')

[filename](../../ui-elements/shared-props/outputs/bounding-box/README.md ':include')

[filename](../../ui-elements/shared-props/outputs/mounted/README.md ':include')


