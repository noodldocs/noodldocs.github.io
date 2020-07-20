# Hash Navigate

This node is used in combination with the [Hash Router](/nodes/navigation/hash-router.md) to perform navigation between different pages using URL hash fragments. See [URI Fragment](https://en.wikipedia.org/wiki/URI_fragment) for more info on URL hash fragments.

A _Hash Navigate_ node is be assoicated to a _Hash Router_ and you can select any page to navigate to defined in that router. You can also provide values to any dynamic parameters (specified through curly brackets in the _Hash Router_) related to the page.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-navigate-1.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Router**  
Decides which _Hash Router_ to use for navigation. 


**Page**  
The page to navigate to. The available pages are the ones specified in the related _Hash Router_. 


### Other
**Navigate**
When the signal is triggered the navigation is performed in the _Hash Router_ according to the input _Page_.

### Parameters
If the _Hash Navigation_ has pages that are using parameters in their path, they are available as inputs.

<div class="ndl-images">
    <img src="/nodes/navigation/hash-navigation-parameter.png" class="ndl-image large"></img>   
</div>

