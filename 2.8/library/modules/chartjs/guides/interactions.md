---
title: Chart.js Interactions
hide_title: true
---

# Interactions

This guide is based on the documentation from Chart.js, which can be found [here](https://www.chartjs.org/docs/latest/configuration/interactions.html).

## Converting Events to Data Values

A common occurrence is taking an event, such as a click, and finding the data coordinates on the chart where the event occurred. Chart.js provides helpers that make this a straightforward process.

<div className="ndl-image-with-background l">

![](/library/modules/chartjs/guides/interactions-click.png)

</div>

In this screenshot, we connect the "Click", "Data" and "Helpers" outputs to a function node to be able to process the chart data.

With this code in the Function node, we can start by getting the values on the X and Y axis.
```js
const data = Inputs.data;
const helpers = Inputs.helpers;

const canvasPosition = helpers.getRelativePosition(data, data.chart);

// Substitute the appropriate scale IDs
const dataX = data.chart.scales.x.getValueForPixel(canvasPosition.x);
const dataY = data.chart.scales.y.getValueForPixel(canvasPosition.y);
```

Now with `dataX` and `dataY` we know what values the user clicked on.

To continue from here, you can follow [Chart.js guides](https://www.chartjs.org/docs/latest/configuration/interactions.html).

There are for examples [getPixelForValue](https://www.chartjs.org/docs/latest/api/classes/Scale.html#getpixelforvalue), that returns the location of the given data point. 
