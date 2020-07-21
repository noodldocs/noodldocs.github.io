# Hash Navigate

This node is used in combination with the [Hash Router](/nodes/navigation/hash-router.md) to perform navigation between different pages using URL hash fragments. See [URI Fragment](https://en.wikipedia.org/wiki/URI_fragment) for more info on URL hash fragments.

A **Hash Navigate** node is be assoicated to a **Hash Router** and you can select any page to navigate to defined in that router. You can also provide values to any dynamic parameters (specified through curly brackets in the **Hash Router**) related to the page.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-navigate-1.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Router**  
Decides which **Hash Router** to use for navigation.

**Page**  
The page to navigate to. The available pages are the ones specified in the related **Hash Router**.

### Other

**Navigate**
When the signal is triggered the navigation is performed in the **Hash Router** according to the input _Page_.

### Parameters

If the **Hash Navigation** has pages that are using parameters in their path, they are available as inputs.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-navigation-parameter.png" class="ndl-image large"></img>   
</div>
