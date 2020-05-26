# Animation

![](animation.png)

## Properties
**Duration (ms)**  
The duration of the animation in milliseconds

**Easing Curve**  
Selects the curvature of the animation. There are four supported curves, and one that can be customized.

* Ease in
* Ease out
* Ease in ease out
* Linear
* Cubic Bezier

**Cubic Bezier**  
This curve is controlled by two points, P1 and P2. These two points define a cubic bezier curve that controls the animation. It mirrors the functionality of *cubic-bezier(P1X, P1Y, P2X, P2Y)* in CSS.

## Subanimations
**Start Mode**
Controls the mode of the start value of a subanimation

* **Implicit** - Sets the start value to the current value of the animated property
* **Explicit** - Set the start value of a subanimation to a specific number

**End Value**  
The number the subanimation should end at.

## Actions
Actions will play all subanimations of an animation.

**Play to End**  
Plays the animation from the current values of the animated properties to the end values of the subanimations.

**Play From Start To End**  
Plays the animation from the start values of the subanimation to the end values. Subanimations with _implicit_ start value will work just as _Play To End_ and will start from the animated properties current value.

**Play to Start**  
Plays the animation from the current values of the animated properties to the start values of the subanimation. Animations with _implicit_ start mode will end at the value the animated property had before it was animated.

**Play From End To Start**  
Plays the animation from the end values of the subanimation to the start values. Animations with _implicit_ start mode will animate to the value the animated property had before it was animated.

**Jump To Start**  
Instantly set the animation to its start values

**Jump To End**  
Instantly set the animation to its end values

## Outputs

### Signals
**Has Reached Start**  
This signal fires when an animation has played to start.

**Has Reached end**  
This signal fires when an animation has played to end.

### Animation Values
Each subanimation creates an output that will show up in the *Animation Values* list.

