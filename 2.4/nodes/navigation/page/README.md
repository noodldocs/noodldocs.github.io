<##head##>
# Page
The **Page** node is a basic building block when creating web type navigation using a [Page Router](/nodes/navigation/page-router/). Note: **Page** nodes cannot be created throught the node picker, it can only be created by adding a new **Page** in the component list.

**Pages** are typically used together with a [Page Inputs](/nodes/navigation/page-inputs/) node to be able to provide parameters to the **Page**.

![](../page-router/create-page.png ':class=img-size-m')

<##head##>

## Inputs

### General

**Title**
<##input:title##>This property controls the title of the **Page** i.e. what the title of the browser window will be say when the **Page** is active.<##input##>

**URL path**

<##input:urlPath##>This property controls the URL route to this **Page** in relation to its [Page Router](/nodes/navigation/page-router/).<##input##>
See documentation for [Page Router](/nodes/navigation/page-router/) for more details on how routing works.

[filename](../../ui-elements/shared-props/inputs/margin-and-padding/README.md ':include')

Note that **Page** only supports padding.

[filename](../../ui-elements/shared-props/inputs/advanced-style/README.md ':include')

## Outputs

[filename](../../ui-elements/shared-props/outputs/other/README.md ':include')

[filename](../../ui-elements/shared-props/outputs/bounding-box/README.md ':include')

[filename](../../ui-elements/shared-props/outputs/mounted/README.md ':include')