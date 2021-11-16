<##head##>
# States

This node is used to switch between logical states. Each state holds values that can be transitioned between. You can define as many states and values as needed.

![](./states_visual.gif ':class=img-size-l')

The <span class="ndl-node">State</span> node is often used to create animations on user interactions, and create state machines. Learn more in the State Node Guide.

![](./states_node.gif ':class=img-size-l')

<##head##>

To learn more take a look at the [States guide](/guides/states.md).

## Inputs

**States**
A **States** node can have as many states as is necessary. Add a new state by clicking on the plus button.


**Values**
Every state will have its own set of values. All values need to be set for every state that is added.

<div class="ndl-images">
    <img src="/nodes/animation/states-example.png" class="ndl-image small"></img>
</div>


**State**
<##input:state##>This input controls the current state. By setting this input to the same name as one of the available states, **State** node will change to that state.<##input##>

**Use Transitions**
Setting this to <span class=”ndl-data”>true</span> will turn on transitions when moving between states, while  <span class=”ndl-data”>false</span> will turn them off. <##input##>

### Actions
**Toggle**
<##input:toggle##>Triggering this signal will force the **State** node to move to the next state in its state list, or the first state if the current state is the last one.<##input##>

### General

**Use Transitions**
<##input:useTransitions##>This property is used to enable and disable transitions between states for the specified values. By default it is **enabled**, this means that any color or number values will transition smoothly when switching states.<##input##>

## Value types

For each value you can specify the type. Default is **Number**.

<div class="ndl-images">
    <img src="/nodes/animation/states-value-types.png" class="ndl-image small"></img>
</div>

## State values

For every state you can specify each of the values. This is the value that they will have when you are at that specific state. You can also set the values for each state by connecting them to other nodes.

<span style="display:none"><##input:value-*##>The value of a property for a specific state.<##input##></span>

<div class="ndl-images">
    <img src="/nodes/animation/state-values.png" class="ndl-image small"></img>
</div>

## State transition

Here you specify if there should be a transition to the target state. When you switch to the given state it will transition smoothely over time. Each state has a default transition and individual transitions for **Number** and **Color** types. Use the curve editor to specify the timing for the transition.

<div class="ndl-images">
    <img src="/guides/states/change-size-curve.gif" class="ndl-image med"></img>
</div>

To learn more take a look at the [States guide](/guides/states.md).

## To state actions

Each state will have a signal input called **To** followed by the state name. This can be used to connect a signal that will take the states node to that state when the signal is triggered.

<span style="display:none"><##input:to-*##>Triggers the **State** node to move to this state.<##input##></span>

## Outputs

**State**
<##output:state##>The name of the current state.<##output##>

**Values**
All of the values for the current state and for any transitions that is active.

<span style="display:none"><##output:value-*##>The value of the property, given the current state and transition.<##output##></span>

### Events
**State Changed**
<##output:stateChanged##>A signal that is sent when the current state is changed.<##output##>

**At "State X"**
True when the currently selected state is X. For example, if the *State* node has a state _Started_, it will have an output signal called _AtStarted_.
<span style="display:none"><##output:at-*##>This value is <span class=”ndl-data”>true</span> when this state is active, otherwise <span class=”ndl-data”>false</span>.<##output##></span>

**Has Reached "State X"**
Signal sent when the state animation to state X is complete.
<span style="display:none"><##output:reached-*##>This signal is sent when the specific state has been reached.<##output##></span>