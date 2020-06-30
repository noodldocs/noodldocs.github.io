# States

The **States** node is used to represent logical states visually. You can define your own states and values, each state will then have unique settings for these values and the node will transition between these settings as the state is changed. To learn more take a look at the [States guide](/guides/switch.md).

<div class="ndl-images">
    <img src="/nodes/standard/states.png" class="ndl-image med">
</div>

<div class = "node-inputs">

## INPUTS

**States**  
A **States** node can have as many states as is necessary. Add a new state by clicking on the plus button.

**Values**  
Every state will have its own set of values. All values need to be set for every state that is added.

<div class="ndl-images">
    <img src="/nodes/standard/states-example.png" class="ndl-image small"></img>
</div>

**State**  
This is the starting state for the **States** node when it is created. You can also connect to the input to force the state.

**Toggle**  
Will animate to the next state, or the first state if the current state is the last one.

## Value types

For each value you can specify the type. Default is _Number_.

<div class="ndl-images">
    <img src="/nodes/standard/states-value-types.png" class="ndl-image small"></img>
</div>

## State values

For every state you can specify each of the values. This is the value that they will have when you are at that specific state.

<div class="ndl-images">
    <img src="/nodes/standard/state-values.png" class="ndl-image small"></img>
</div>

## State transition

Here you specify if there should be a transition to the target state. When you switch to the given state it will transition smoothely over time. Each state has a default transition and individual transitions for _Number_ and _Color_ types. Use the curve editor to specify the timing for the transition.

<div class="ndl-images">
    <img src="/guides/states/change-size-curve.gif" class="ndl-image med"></img>
</div>

To learn more take a look at the [States guide](/guides/switch.md).

## To state actions

Each state will have a signal input called _To_ followed by the state name. This can be used to connect a signal that will take the states node to that state when the signal is triggered.

</div>

<div class = "node-outputs">

## OUTPUTS

**State**  
The name of the current state.

**State Changed**  
A signal that is sent when the current state is changed.

**Values**  
All of the values for the current state.

**At "State X"**  
True when the currently selected state is X.

**Has Reached "State X"**  
Signal sent when the state animation to state X is complete.

</div>
