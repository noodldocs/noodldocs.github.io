<##head##>
# Navigate
This node is used to navigate between <span class="ndl-node">[Page](/nodes/navigation/page/)</span> nodes set up in a <span class="ndl-node">[Page Router](/nodes/navigation/page-router/)</span>. 

![](./navigate-page-inputs.png ':class=img-size-l')

You can use a [Page Inputs](/nodes/navigation/page-inputs/) node to pass parameters to the <span class="ndl-node">Page</span> you are navigating to. Any <span class="ndl-data">Path Parameters</span> or <span class="ndl-data">Query Parameters</span> you add to a <span class="ndl-node">Page Inputs</span> node will show up as inputs on the <span class="ndl-node">Navigation</span> node if you select that <span class="ndl-node">Page</span> as the <span class="ndl-data">Target Page</span>.

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



