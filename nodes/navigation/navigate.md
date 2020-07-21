# Navigate

This node is used to perform navigation on a **Navigation Stack**. Take a look at the [Navigation guide](/guides/navigation.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/guides/navigation/main-navigate.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Stack**  
This is the identifier (name) of the stack where the navigation should be performed. _Default_ means the root screen stack. Otherwise it should be a name of a [Navigation Stack](/nodes/navigation/navigation-stack.md) node.

<div class="ndl-images">
    <img src="/guides/navigation/choose-stack.png" class="ndl-image med"></img>   
</div>

**Target**  
This is a component that is the target for the navigation node, i.e. the component that should be created and put on top of the navigation stack. It must be a component with visual nodes.

### Transition

**Transition**  
The type of transition. Can be any of:

- _None_ No transition, the target component is immediately made visible.
- _Push_ The current top of the stack is "pushed away" while the new top enters.
- _Popup_ The current top is not changed. The new top enters with a transition on top of it.

Not all of the parameters below are available for all types of transitions.

**Direction**  
This is the direction the new top component enters from, and also the direction the current top is pushed away in, if the transition is _Push_. It can be any of _Left_, _Right_, _Up_, _Down_ and _In_,_Out_. The latter zooms in vs out.

**Shift Distance**  
This is the distance of the transition in either _%_ or in _px_, i.e. the distance the component is moved in the specified direction.

**Zoom**  
This is available if the _Direction_ is set to _In_ or _Out_ and specifies the amount of zoom the transition should apply.

**Crossfade**  
If enabled the target will fade in and the current top fade out. Only available for _Push_ transitions.

**Face**  
Available for _Popup_ transitions. This indicates if the new top component should fade in our not during the transition.

**Timing**  
This is a timing curve that controls the delay, duration and animation ease of the transition.

<div class="ndl-images">
    <img src="/guides/navigation/transition-params.png" class="ndl-image med"></img>   
</div>

### Parameters

These are the parameters that are passed to the new top component when the navigation is performed. Parameters are passed through a **Component Inputs** node to the target component.

<div class="ndl-images">
    <img src="/guides/navigation/nav-params.png" class="ndl-image small"></img>   
</div>

### Actions

**Navigate**  
A signal input. When a signal is received the navigation will be performed.

## OUTPUTS

This node has no outputs.
