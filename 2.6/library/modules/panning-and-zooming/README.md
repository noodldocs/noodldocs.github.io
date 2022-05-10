---
title: Panning and Zooming Control
hide_title: true
---
# Panning and Zooming Control

This module contains a component that enables you to zoom in and out of an image as well as panning around in the image. The component supports both mouse wheel scrolling and pinch zooming. You can also control the zoom level by connecting it to **Buttons**.

The module also contains a small example.

The sizing of the control is best controlled by putting it in a **Group** node with the relevant dimension setting applied, as the **Panning Control** will always try to fill its parent.

## The Panning Control

## Inputs

| Data                                                | Description                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Zoom Level</span>       | A number that sets the current Zoom Level of the image as a scale. For example `1` means it's the natural size of the image, `0.5` means zoomed out to half the size, `2.0` means zoomed in to double the size. Note that the <span className="ndl-data">Max Zoom Level</span> and <span className="ndl-data">Min Zoom Level</span> will adjust the zoom level so it matches the limits.                                                                                                                                                                                                                                          |
| <span className="ndl-data">Max Zoom Level</span>        | The maximum allowed zoom level.                                                                                                                                                                                                                                                                |
|  <span className="ndl-data">Min Zoom Level</span>  | The minimum allowed zoom level.                                                                                   |
| <span className="ndl-data">Enable Pinch Zooming</span>         | If `true` enables pinch zooming on the image.                                                                                   |
| <span className="ndl-data">Enable Scroll Wheel Zooming</span>             | If `true` enables scroll wheel or track pad zooming.                                                                                          |
| <span className="ndl-data">Image</span>              | A source to an image that should be displayed by the Panning Control. |
| <span className="ndl-data">Enable Clip</span>            | If set to `true` will enable clipping on the Panning Control, meaning it will clip any parts of the zoomed image sticking out outside the control. |
| <span className="ndl-data">Constraint to Container</span>            | Set to `true` this will ensure that it's not possible to scroll or zoom to a position where there is empty space between the image and the **Panning Control**. |                                                                                  |

| Signal                                 | Description                                                                                                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Zoom In</span> | This signal will trigger a Zoom In into the image. |
| <span className="ndl-signal">Zoom Out</span> | This signal will trigger a Zoom Out of the image. |

## Outputs

| Data                                            | Description                                                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">X pos</span>         | The x position (in image coordinates) of the top left corner of what's visible of the image in the **Panning Control**. If <span className="ndl-data">Constraint to Container</span> is set to `false` this can be a negative number, if there is empty space to the left of the image. |
| <span className="ndl-data">Y pos</span>         | The y position (in image coordinates) of the top left corner of what's visible of the image in the **Panning Control**. If <span className="ndl-data">Constraint to Container</span> is set to `false` this can be a negative number, if there is empty space to the top of the image.   |
| <span className="ndl-data">Height</span> | The height (in image coordinates) of the visible rectangle of the image in the **Panning Control**. Note that if <span className="ndl-data">Constraint to Container</span> is set to `false` this height can be larger than the natural image height, i.e. when there is empty space to the bottom of the image. |
| <span className="ndl-data">Width</span> | The width (in image coordinates) of the visible rectangle of the image in the **Panning Control**. Note that if <span className="ndl-data">Constraint to Container</span> is set to `false` this width can be larger than the natural image width, i.e. when there is empty space to the right of the image. |
| <span className="ndl-data">Current Zoom Level</span> | The current Zoom Level applied to the **Panning Control** |

| Signal                                      | Description                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">View Updated</span> | This signal is sent whenever a new area is visible of the image, e.g. when the user have panned or zoomed. |
