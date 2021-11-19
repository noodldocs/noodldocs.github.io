<##head##>
# Navigate
You use **Navigate** to navigate between [Pages](/nodes/navigation/page/) in a [Page Router](/nodes/navigation/page-router/). For more information about web style navigation, look at the [Page Router](/nodes/navigation/page-router/) documentation.

## Page Parameters
Using a [Pages Inputs](/nodes/navigation/page-inputs/) node you can pass parameters to the **Page** you are navigating to. Any **Path Parameters** or **Query Paramaters** you add to a **Pages Inputs** node will come up as inputs on the **Navigation** node if you select that **Page** as the **Target Page**.

![](./navigate-page-inputs.png ':class=img-size-l')

<##head##>

## Inputs

### General

**Router**

Here you select which **Page Router** that this **Navigation** node will act on. This input is only available if there are multiple **Page Routers** in the project.

**Target Page**

Her you select the **Page** to navigate to. The pages available are based on which **Page Router** this **Navigation** node is associated with.

### Page Paramaters

Any page parameters set in the [Pages Inputs](/nodes/navigation/page-inputs/) used by the **Page** will be available as inputs on the **Navigate** node.
<span style="display:none"><##input:pm-*##> An input parameter originating from the **Page Inputs** node of the **Target Page**.<##input##></span>

### Actions

**Navigate**

<##input:navigate##>Triggering this action will perform the navigation to the **Target Page**.<##input##>

## Outputs

**Navigated**

<##output:navigated##>This event is triggered when a navigation as been performed.<##output##>



