# Navigate Back

This node is used along with the [Navigate](/nodes/navigation/navigate.md) node. It is used to navigate back, i.e. to pop the stack and transition to the page component underneath the current top. Take a look at the [Navigation guide](/guides/navigation.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/guides/navigation/navigate-back.png" class="ndl-image large"></img>   
</div>

### Passing results
You can also pass data back to the page that performed the navigation. This can be used to e.g. return result from a page, such as it a specific action was confirmed or canceled. You can also return result values, such as if your page has a text input to have the user provide data you can return that data to the page that performed the navigation.

<div class="ndl-images">
    <img src="/nodes/navigation/back-actions.png" class="ndl-image med"></img>   
</div>

When you create **Back Actions** these will become signal inputs on the node and you can use those instead of the **Navigate** signal to trigger the back navigation.

<div class="ndl-images">
    <img src="/nodes/navigation/back-actions-2.png" class="ndl-image large"></img>   
</div>

The **Result** values specified also becomes inputs and you can use those to pass values. The passed result values and back actions will become available as outputs of the **Navigate** node.

<div class="ndl-images">
    <img src="/nodes/navigation/back-actions-3.png" class="ndl-image med"></img>   
</div>

## Inputs

**Results**  
Specify result values that can be passed to the **Navigate** node that performed the navigation, see above for details.

**Back Actions**  
Specify back actions that can be passed as output signals to the **Navigate** node that performed the navigation, see above for details. 

### Actions

**Navigate**  
A signal input. Wshen a signal is received the navigation will be performed. This is used if there are no **Back Actions** specified.

## Outputs

This node has no outputs.
