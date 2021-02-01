# Navigate

This node is used to perform navigation on a **Navigation Stack**. Take a look at the [Navigation guide](/guides/navigation.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/guides/navigation/main-navigate.png" class="ndl-image med"></img>   
</div>

Choose the target **Navigation Stack** where the navigation should occur and the **Target Page** that is the page that will be navigated to.

<div class="ndl-images">
    <img src="/nodes/navigation/navigate-1.png" class="ndl-image med"></img>   
</div>

The target page can have **Back Actions** and **Results** that are passed back and in that case are available as outputs of the **Navigate** node. See [Navigate Back](/nodes/navigation/navigate-back.md) for more details.

<div class="ndl-images">
    <img src="/nodes/navigation/back-actions-3.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Stack**  
This is the identifier (name) of the stack where the navigation should be performed. It should be a name of a [Navigation Stack](/nodes/navigation/navigation-stack.md) node.

<div class="ndl-images">
    <img src="/guides/navigation/choose-stack.png" class="ndl-image med"></img>   
</div>

**Mode**  
This specifies the navigation mode, default is **Push**.

- **Push** The target page will be added to the top of the stack.
- **Replace** The target page will replace all content on the stack, so after the navigation it will be the only page on the stack.

**Target**  
This is the page that is the target for the navigation node, i.e. the page which component should be created and put on top of the navigation stack. 

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

**Dark Overlay**  
Adds a overlay to the current top with the color #000000. Only available for _Push_ transitions.

**Dark Overlay Amount**  
The maximum opacity of the overlay. It starts at `0` and animates to this value. `0` disables it, and `1` makes the overlay animate to 100% opacity. Only available for _Push_ transitions.

**Fade In**  
Available for _Popup_ transitions. This indicates if the new top component should fade in ou not during the transition.

**Timing**  
This is a timing curve that controls the delay, duration and animation ease of the transition.

<div class="ndl-images">
    <img src="/guides/navigation/transition-params.png" class="ndl-image large"></img>   
</div>

### Parameters

The **Navigate** node will automatically get inputs for all **Component Inputs** of the target page component. You can use these to pass values to the new page that will be forwarded to the corresponding inputs at the time of navigation.

### Actions

**Navigate**  
A signal input. When a signal is received the navigation will be performed.

## OUTPUTS

**Navigated**  
Signaled when the navigation is performed.
