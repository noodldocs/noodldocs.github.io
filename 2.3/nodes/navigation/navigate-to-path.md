# Navigate To Path
This node is to peform navigation by navigating to a specified browser URL path.

<div class="ndl-images">
    <img src="/nodes/navigation/navigate-to-path-1.png" class="ndl-image med"></img>   
</div>

You specify that destination URL and you can optionally provide Query parameters as well. These will become inputs to the **Navigate To Path** node so you can pass values via connections. 

<div class="ndl-images">
    <img src="/nodes/navigation/navigate-to-path-2.png" class="ndl-image large"></img>   
</div>

Send a signal to the **Navigate** input to perform the actual navigation.

## Inputs

### General

**Path**  
The destination path to navigate to.

### Actions

**Navigate**  
Send a signal there to perform the navigation.

### Query
You can add query attributes and these will become inputs to the node where you can provide values via connections. These will be added to the query of the URL when the navigation is performed.

## Outputs

This node does not have any outputs.
