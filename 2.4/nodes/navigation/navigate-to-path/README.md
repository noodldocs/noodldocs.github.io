<##head##>
# Navigate To Path

![](./navigate-to-path.png ':class=img-size-l')

The **Navigate To Path** node lets you navigate to a specific [Page](/nodes/navigation/page/) in a [Page Router](/nodes/navigation/page/). Compared to the [Navigate](/nodes/navigation/navigate/) node, the **Navigate To Path** is more low level. You don't specify which **Page Router** that should perform the navigation, it will be implicitly resolved using the provided path. For example, if you have a **Page Router** with **URL path** `router1`, with a **Page**with the **URL path** `page1`, which in turn contains an unnamed **Page** with the **URL path** `pageA`, providing the **Path** `/router1/page1/pageA/` will force the two **Page Routers** to navigate to the respective pages.

In a way, **Navigate To Path** is very much like writing a URL directly into the browser address bar. However the node is only used to navigate between **Pages** in the Noodl project. If you want to navigate to an external URL you should instead use the [External Link](/nodes/navigation/external-link/) node.

<##head##>

## Inputs

**Path**

<##input:path##>Use this property to set the path to navigate to. Note that the **Path** should not include the domain but only the route within the Noodl project. The **Path** may include a **Path Parameter** as the final part, that will be forwarded to the receiving **Page**. You can also use `{}` to make part of the **Path** dynamic and expose the part as an input. For example the path `/{a}/{b}/` will expose two new inputs _a_ and _b_.<##input##>

**Query Parameters**
You can add any number of **Query Parameters** that will be forwarded to the receiving [Page](/nodes/navigation/page/) through their [Page](/nodes/navigation/page-inputs/) node.

<span style="display:none"><##input:q-*##>A **Query Parameter** that will be forwarded to the receiving **Page** node through their **Page Inputs** node.<##input##></span>

<span style="display:none"><##input:p-*##>A **Path Parameter** that will be part of the **Path**.<##input##></span>


### Actions

**Navigate**

<##input:navigate##>Triggering this action will perform the navigation according to the provided **Path**.<##input##>