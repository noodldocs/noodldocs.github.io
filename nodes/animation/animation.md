# Animation

There are several ways to create animations in your Noodl apps. They all work by changing outputs continiously over time that you in turn can connect to the inputs that you want to animate. For most state based animations take a look at the [States](/nodes/animation/states.md) node, for transitions where you want to move smoothly from one value to another check out [Transition](/nodes/animation/transition.md). The animation node can be used to create simple *from* *to* animations.

![](animation.gif ':class=img-size-l')

First you need to create animation outputs, you can name them whatever you like. These will all be of **number** type.

![](animation-1.png ':class=img-size-m')

After that you will have outputs on the node with corresponding names. Now you can use the properties to setup the animations, and use signals as described below to trigger the animation.

<div class = "node-inputs">

## Inputs

**Duration (ms)**  
The duration of the animation in milliseconds.

**Easing Curve**  
Selects the curvature of the animation. There are four supported curves, and one that can be customized:

- Ease in
- Ease out
- Ease in ease out
- Linear
- Cubic Bezier

**Cubic Bezier**  
This curve is controlled by two points, P1 and P2. These two points define a cubic bezier curve that controls the animation. It mirrors the functionality of _cubic-bezier(P1X, P1Y, P2X, P2Y)_ in CSS.

## Subanimations

**+ Port**  
Click the _+Port_ button to add a new subanimation (new value to animate). When you create a subanimation and give it a name, a new output port with the same name will also be created.

**Start Mode**  
Controls the mode of the start value of a subanimation:

- **Implicit** - Sets the start value to the current value of the animated property, meaning for example if the currently connected value is 7, the animation will start from 7. If it is 100 it will start from 100 and so on.
- **Explicit** - Set the start value of a subanimation to a specific number that you specify in the node propeties.

**Start Value**  
The number the subanimation should start at. Only available if Start Mode is set to _Explicit_.

**End Value**  
The number the subanimation should end at.

## Actions

Actions will play all subanimations of an **Animation** node.

**Play to End**  
Plays the Animation from the current values of the subanimations to the end values of the subanimations.

**Play From Start To End**  
Plays the animation from the _Start Values_ of the subanimation to the _End Values_. Subanimations with _Implicit_ _Start Mode_ will work just as _Play To End_ and will start from the subanimations current value.

**Play to Start**  
Plays the animation from the current values of the subaniamtions to the _Start Values_ of the subanimations. Subanimations with _Implicit_ _Start Mode_ will end at the value the subanimation had before it was animated.

**Play From End To Start**  
Plays the animation from the _End Values_ of the subanimations to the _Start Values_. Subanimations with _Implicit_ _Start Mode_ will animate to the value the subanimation had before it was animated.

**Jump To Start**  
Instantly set the subanimations to their _Start Values_.

**Jump To End**  
Instantly set the subanimations to their _End Values_.

<div class = "node-outputs">

## Outputs

### Signals

**Has Reached Start**  
This signal fires when the subanimations have played to start (reached their _Start Values_).

**Has Reached End**  
This signal fires when the subanimations have played to end (reached their _End Values_).

### Animation Values

Each subanimation creates an output that will show up in the _Animation Values_ list.
