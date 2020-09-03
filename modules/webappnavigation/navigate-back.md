# Navigate Back

!> Note, this node is part of the _Mobile Web App Navigation_ module. You need to install that module to be able to use this node.

This node is used along with the [Navigate](/modules/webappnavigation/navigate.md) node. It is used to navigate back, i.e. to pop the stack and transition to the component underneath the current top. Take a look at the [Navigation guide](/modules/webappnavigation/nav-guide.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/navigate-back.png" class="ndl-image med"></img>   
</div>

## INPUTS

**Stack**  
This is the identifier (name) of the stack where the navigation should be performed. _Default_ means the root screen stack. Otherwise it should be a name of a [Navigation Stack](/modules/webappnavigation/navigation-stack.md) node.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/choose-stack.png" class="ndl-image med"></img>   
</div>

### Actions

**Navigate**  
A signal input. Wshen a signal is received the navigation will be performed.

## OUTPUTS

This node has no outputs.
