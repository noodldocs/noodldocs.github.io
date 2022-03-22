<##head##>

# Navigate

This node is used to navigate between <span class="ndl-node">[Page](/nodes/navigation/page)</span> nodes set up in a <span class="ndl-node">[Page Router](/nodes/navigation/page-router)</span>.

<div class="ndl-image-with-background l">

![](/nodes/navigation/navigate/navigate-page-inputs.png)

</div>

You can use a [Page Inputs](/nodes/navigation/page-inputs) node to pass parameters to the <span class="ndl-node">Page</span> you are navigating to. Any <span class="ndl-data">Path Parameters</span> or <span class="ndl-data">Query Parameters</span> you add will show up as inputs to the <span class="ndl-node">Navigate</span> node if you select that <span class="ndl-node">Page</span> as the <span class="ndl-data">Target Page</span>.

<##head##>

## Inputs

| Data                                      | Description                                                                                                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Router</span>      | Here you select which **Page Router** that this **Navigation** node will act on. This input is only available if there are multiple **Page Routers** in the project. |
| <span class="ndl-data">Target Page</span> | Here you select the **Page** to navigate to. The pages available are based on which **Page Router** this **Navigation** node is associated with.                     |

| Signal                                   | Description                                                                                                       |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Navigate</span> | <##input:navigate##>Sending a signal to this input will perform the navigation to the **Target Page**.<##input##> |

| Mixed               | Description                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Page Parameters** | Any page parameters set in the [Pages Inputs](/nodes/navigation/page-inputs) used by the **Page** will be available as inputs on the **Navigate** node. |

<span class="hidden-props-for-editor"><##input:pm-\*##> An input parameter originating from the **Page Inputs** node of the **Target Page**.<##input##></span>

## Outputs

| Signal                                    | Description                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Navigated</span> | <##output:navigated##>This event is triggered when a navigation as been performed.<##output##> |
