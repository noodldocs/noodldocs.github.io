<##head##>

# Push Component To Stack

The **Push Component To Stack** node is used together with a [Component Stack](/nodes/component-stack/component-stack/) to navigate to a new component (i.e. "push on the stack"). It is typically used when creating app style navigation. For more information on how **Component Stack** navigation work, check out the [Component Stack](/nodes/component-stack/component-stack/) documentation.

![](push-component.png ':class=img-size-m')
<##head##>

## Inputs

| Data                                      | Description                                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Stack</span>       | <##input:stack##>This property defines which **Component Stack** that the push will act on. The **Component Stack** is referred to by its name. <##input##>                                                                                                                                            |
| <span class="ndl-data">Mode</span>        | <##input:mode##>This property selects whether the previous components will be kept in the stack, beneath the new top component, (**Push**) or if all components will be replaced by the new top component (**Replace**), in which case the new component will be the only one on the stack.<##input##> |
| <span class="ndl-data">Target Page</span> | <##input:target##>Here you select the target component to push on the **Component Stack**. The component need to be one of the component entries defined in the **Component Stack** to show up as an option here.<##input##>                                                                           |

| Signal                                   | Description                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Navigate</span> | <##input:navigate##>Sending a signal to this input will push the **Target Page** on the **Component Stack**.<##input##> |

| Mixed                | Description                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Component Inputs** | Any **Component Inputs** that the target component have will be available as inputs on the **Push Component To Stack** node. |

<span style="display:none"><##input:pm-\*##>A parameter input originating from a **Component Input** in the **Target** component. It's value will be forwarded to the component.<##input##></span>

### Transition

| Data                                              | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Transition</span>          | The type of transition. Can be any of:<br/><br/>`None`: No transition, the target component is immediately made visible.<br/>`Push`: The current top of the stack is "pushed away" while the new top enters.<br/>`Popup`: The current top is not changed. The new top enters with a transition on top of it.<br/><br/>Not all of the parameters below are available for all types of transitions. |
| <span class="ndl-data">Direction</span>           | <##input:tr-direction##>This is the direction the new top component enters from, and also the direction the current top is pushed away in, if the transition is _Push_. It can be any of _Left_, _Right_, _Up_, _Down_ and _In_,_Out_. The latter zooms in vs out.<##input##>                                                                                                                     |
| <span class="ndl-data">Shift Distance</span>      | <##input:tr-shift##>This is the distance of the transition in either _%_ or in _px_, i.e. the distance the component is moved in the specified direction.<##input##>                                                                                                                                                                                                                              |
| <span class="ndl-data">Zoom</span>                | <##input:tr-zoom##>This is available if the _Direction_ is set to _In_ or _Out_ and specifies the amount of zoom the transition should apply.<##input##>                                                                                                                                                                                                                                          |
| <span class="ndl-data">Crossfade</span>           | <##input:tr-crossfade##>If enabled the target will fade in and the current top fade out. Only available for _Push_ transitions.<##input##>                                                                                                                                                                                                                                                        |
| <span class="ndl-data">Dark Overlay</span>        | <##input:tr-darkoverlay##>Adds a overlay to the current top with the color #000000. Only available for _Push_ transitions.<##input##>                                                                                                                                                                                                                                                             |
| <span class="ndl-data">Dark Overlay Amount</span> | <##input:tr-darkoverlayamount##>The maximum opacity of the overlay. It starts at `0` and animates to this value. `0` disables it, and `1` makes the overlay animate to 100% opacity. Only available for _Push_ transitions.<##input##>                                                                                                                                                            |
| <span class="ndl-data">Fade In</span>             | <##input:tr-fadein##>Available for _Popup_ transitions. This indicates if the new top component should fade in ou not during the transition.<##input##>                                                                                                                                                                                                                                           |
| <span class="ndl-data">Timing</span>              | <##input:tr-timing##>This is a timing curve that controls the delay, duration and animation ease of the transition.<##input##>                                                                                                                                                                                                                                                                    |

<div class="ndl-images">
    <img src="/guides/navigation/transition-params.png" class="ndl-image large"></img>
</div>

<div style="display: none">

<##input:transition##>The type of transition. Can be any of:

-   _None_ No transition, the target component is immediately made visible.
-   _Push_ The current top of the stack is "pushed away" while the new top enters.
-   _Popup_ The current top is not changed. The new top enters with a transition on top of it.

Not all of the parameters below are available for all types of transitions.<##input##>

</div>

## Outputs

| Signal                                    | Description                                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Navigated</span> | <##output:navigated##>This signal is triggered when the **Target Component** has been pushed on the **Component Stack**.<##output##> |

| Mixed                     | Description                                                                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Back Actions, Results** | If the **Target Component** contains a [Pop Component Stack](/nodes/component-stack/pop-component/) with **Back Actions** and **Results** they will appear as outputs on the related **Push Component**. |

<span style="display:none"><##output:backAction-\*##>An output signal originating from the **Back Actions** of the [Pop Component Stack](/nodes/component-stack/pop-component/) node of the **Target Component**.<##output##></span>

<span style="display:none"><##output:backResult-\*##>A result output originating from the **Result** of the [Pop Component Stack](/nodes/component-stack/pop-component/) node of the **Target Component**.<##output##></span>
