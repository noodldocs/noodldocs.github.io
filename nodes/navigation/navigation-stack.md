# Navigation Stack

The navigation stack is used to create a surface for navigation, that is showing pages and navigating between pages. It operates like a stack, where you push new pages onto the top of the stack and you can "pop" the stack, i.e. navigate back to the previous page in the stack. You can learn more about the navigation stack in the [Navigation](/guides/navigation.md) guide.

You place it anywhere in your application visuals where you want navigation to occur. It will consume the entire space of it's parent.

<div class="ndl-images">
    <img src="/guides/navigation/navigation-stack.png" class="ndl-image med"></img>   
</div>

It's good to specify a name for your **Navigation Stack** which will be used later by **Navigate** nodes to reference which stack is to be used. By default the stack will have the name **Main**.

<div class="ndl-images">
    <img src="/nodes/navigation/stack-name.png" class="ndl-image med"></img>   
</div>

### Pages
First you need to create the pages that you want to be able to navigate between. This is done in the properties of the **Navigation Stack** node, click the "+" icon and give your page a name (so you can refer to it when navigation). Next you need to specify the visual component that will be cloned and displayed when navigating to the page.

<div class="ndl-images">
    <img src="/guides/navigation/stack-pages.png" class="ndl-image med"></img>   
</div>

You can also choose the starting page that will be shown before any navigation has occured.

<div class="ndl-images">
    <img src="/nodes/navigation/stack-startpage.png" class="ndl-image med"></img>   
</div>

### Routes
By default when you navigate the URL in the browser will not update to reflect which page is currently visible and deep links is not supported. You can enable this by choosing to enable **Use Routes**.

<div class="ndl-images">
    <img src="/nodes/navigation/stack-use-routes.png" class="ndl-image med"></img>   
</div>

This will allow you to specify the URL slug for each page in the **Pages** list. You may also specify parameters in the URL using the **{...}** syntax as shown in the example below. This will use that section of the URL as a parameter and map it to the **Component Input** with the same name in the page component.

<div class="ndl-images">
    <img src="/nodes/navigation/stack-use-routes-2.png" class="ndl-image med"></img>   
</div>

If the page is navigated to, the URL in the browser will be updated. And if the URL in the browser is changed manually, or if a link is followed to your application that **Navigaton Stack** will show the matching page.


## INPUTS

### General

**Name**  
The name of this stack. This is the identifier used by [Navigate](/nodes/navigation/navigate.md) and [Navigate Back](/nodes/navigation/navigate-back.md) nodes.

**Use Routes**  
If enabled the stack will change the URL when navigation is performed, and if the URL is changed the matching page will be shown.

**Start Page**  
The page that is shown when the stack is created and no navigation has been performed.

### Pages
Create and manage pages as shown above.

### Style

**Background Color**  
The color behind the bottom component if it has transparent regions. The backgroud may also be shown briefly during transitions. Default is transparent.

### Other

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

[filename](../../../nodes/advanced-style.md ':include')

## OUTPUTS

### Other

**Top Page Name**  
The name of the Page component that's currently on top of the stack. E.g. `Details`. 

**Stack depth**  
How many pages there currently are in the stack. The [Navigate](/modules/webappnavigation/navigate.md) node will add one page to the stack, and [Navigate Back](/modules/webappnavigation/navigate-back.md) removes the top page from the stack.

**Child Index**  
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom **Javascript** nodes and more.

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
