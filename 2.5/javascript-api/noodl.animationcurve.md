# Noodl.AnimationCurve

Access Noodls built in animation curve functions from JavaScript. These are useful for interpolating values e.g when animating.

The easing functions use the following pattern:
`function(startValue, endValue, t)`, where `t` is assumed to be [0:1].

## Default curves

There are three default curves defined for your convenience:

* `AnimationCurve.easeIn` - Same as `AnimationCurve.easeInCubic`
* `AnimationCurve.easeOut` - Same as `AnimationCurve.easeOutCubic`
* `AnimationCurve.easeInOut` - Same as `AnimationCurve.easeInOutCubic`

## All curves

* `AnimationCurve.linear` - Blend from `start` to `end` using linear interpolation

* `AnimationCurve.easeInQuadratic` - Blend from `start` to `end` using quadratic ease-in interpolation
* `AnimationCurve.easeInCubic` - Blend from `start` to `end` using cubic ease-in interpolation
* `AnimationCurve.easeInQuartic` - Blend from `start` to `end` using quartic ease-in interpolation

* `AnimationCurve.easeOutQuadratic` - Blend from `start` to `end` using quadratic ease-out interpolation
* `AnimationCurve.easeOutCubic` - Blend from `start` to `end` using cubic ease-out interpolation
* `AnimationCurve.easeOutQuartic` - Blend from `start` to `end` using quartic ease-out interpolation

* `AnimationCurve.easeInOutQuadratic` - Blend from `start` to `end` using quadratic ease-in-out interpolation
* `AnimationCurve.easeInOutCubic` - Blend from `start` to `end` using cubic ease-in-out interpolation
* `AnimationCurve.easeInOutQuartic` - Blend from `start` to `end` using quartic ease-in-out interpolation