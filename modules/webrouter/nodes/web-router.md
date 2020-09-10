# Web Router

This is the main navigation node for web style navigation, i.e. navigating between pages using URL paths. In essence, the **Web Router** maps different URL paths (Currently the webrouter only supports hash fragments paths [URI Fragment](https://en.wikipedia.org/wiki/URI_fragment)) to different components in Noodl. For example, a **Web Router** could navigate between two pages represented by the URLs, **"#/pages/first"**, and **"#/pages/second"**. 

The actual navigation can triggered through the node [Web Navigate](/modules/webrouter/nodes/webrouternavigate.md), or by the user explicitly requesting the URL, for example entering the URL in a web browser or clicking a hyperlink.

The **Web Router** node can also handle dynamic parameters added to the hash fragment that will be mapped to [Component Inputs](/nodes/standard/component-inputs.md) of the component.

The active component will be inserted as a child to the **Web Router**, replacing any other page that the router has loaded.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-router1.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Name**  
This is the identifier of the **Web Router**. Since there could be several Hash Routers, _Name_ is used to identify the which router to use in the **Web Navigate** node.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-router-name.png" class="ndl-image large"></img>   
</div>

### Pages

**Pages**  
A list of pages that this **Web Router** can navigate between. You can give the page whatever name your want, as they will be mapped to a specific URL and specific component to navigate to.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-router-pages.png" class="ndl-image med"></img>   
</div>

**Default**  
The default page that will be visible when the **Web Router** is initialized.

### Path to component mappings

You map each page entered under _Pages_ to a path pattern and a component that will be loaded and inserted as a child of the **Web Router** when navigated to. The path pattern is specified as "a/b/c", to structure the navigation further. For example, there could be multiple settings pages under the path "settings", for example "settings/network", "settings/account". 

The path pattern could also use wild cards, "\*" to match anything. When a wildcard is used, all values at that location in that path will load the specified component. This could be useful if you want to use several **Web Router** nodes. One **Web Router** could for example catch all requests "settings/\*" and load a component with another router that maps to specific pages.

The path patterns could also include a parameter specified using curled brackets, "{parameter_name}". This parameter will be forwarded to the [Component Inputs](/nodes/standard/component-inputs.md) with a matching name of the component navigated to. For example the hash fragment "/user/{UserId}" can be mapped to load a component and provide the parameter to the component input named "UserId".

<div class="ndl-images">
    <img src="/nodes/navigation/hash-router-param.png" class="ndl-image large"></img>   
</div>

**Component**  
The Noodl component to navigate to, i.e. insert as a child to the **Web Router** node.

**Path**  
The hash fragment path that will map to the component. Can include wildcards (\*) and dynamic parameters using curly brackets as described above.

### Other

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

[filename](../../../nodes/advanced-style.md ':include')

## OUTPUTS

### Other

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
