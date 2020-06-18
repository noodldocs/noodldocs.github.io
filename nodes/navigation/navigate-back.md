# Navigate Back

This node is used along with the [Navigate](/nodes/navigation/navigate.md) node. It can be used to navigate back, i.e. to pop the stack and transition to the component underneith the current top. Take a look at the [Navigation guide](/guides/navigation.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/guides/navigation/navigate-back.png" class="ndl-image med"></img>   
</div>

## INPUTS

**Stack**  
This is the identifier (name) or the stack where the navigation should be performed. *Default* means the root screen stack. Otherwise it should be a name of a [Navigation Stack](/nodes/navigation/navigation-stack.md) node.

<div class="ndl-images">
    <img src="/guides/navigation/choose-stack.png" class="ndl-image med"></img>   
</div>

### Actions

**Navigate**  
A signal input, when a signal is received the navigation will be performed.

## OUTPUTS