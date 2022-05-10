---
title: Image Cropper
hide_title: true
---
# Image Cropper

This module contains a simple Image Cropper component, along with an example of how to use it. It's mainly intended to crop images for e.g. profile pictures. The cropper takes a **File** containing an image as an input (typically coming from an [Open File Picker](/nodes/utilities/open-file-picker) node). It then lets the user pan and zoom in the image to find the area to crop out. The Image Cropper provides a URL to the image and the file object to the area that's currently being cropped out.
This file is typically passed to a [Upload File](/nodes/data/cloud-data/upload-file) node.

## How to use

The component itself is relatively simple. It shows the provided picture and a mask on top. The area in the mask is what will be cropped out. The user can pan around and Zoom using the scroll wheel. You can also zoom in and zoom out by triggering signals (e.g. coming from **Buttons**). The mask can be customized to fit the style of your app.

Each time the user pans or zooms to a new area the cropped version of the image is generated. The component outputs both the **File** and a URL to the image (which will be a local blob file). Below is an example of how it can be used. (The example is also provided as part of the module).

<div className="ndl-image-with-background l">

![](/library/modules/image-cropper/how-to-use-1.png)

</div>

<div className="ndl-image-with-background">

![](/library/modules/image-cropper/how-to-use-2.png)

</div>

When you import the module you will get a new sheet called `Image Cropper`. This will include a folder called `Example Usage` with a simple example using it in a popup. The main component is the `Image Cropper`.

## Example Usage in 'Sign Up Template'

It's very easy to try out the Image Cropper in the Sign Up Template. Start a new project using that template. Then in the page `Profile`. Then change up the part where the profile picture is saved as the image below.

<div className="ndl-image-with-background xl">

![](/library/modules/image-cropper/how-to-use-3.png)

</div>

Use the popup provided in the `Usage Example` called `Cropper Popup`.

## The Image Cropper Node

## Inputs

| Data                                                | Description                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Circluar Mask</span>       | A <span className="ndl-data"> boolean </span> that decides whether tha mask should be circular or rectangular. Note that unless the ratio of the mask sides is 1:1 the mask will not be truly circular.                                                                                                                                                                                                                                                      |
| <span className="ndl-data">Mask Ratio Height</span>        | The ratio between height and width of the mask to use. For example 1:1 will produce a square mask.                                                                                                                                                                                                                                                                |
| <span className="ndl-data">Mask Ratio Width</span> | The ratio between height and width of the mask to use. For example 1:1 will produce a square mask.                                                                                   |
| <span className="ndl-data">Mounted</span>         | Controls whether the control is mounted or not.                                                                                   |
| <span className="ndl-data">Target Resolution</span>             | The target resolution of the cropped area on it's longest dimension, in pixels. For example, if the ratio between height and width is 2:1, and the target resolution is set to 500 pixels .then the resulting crop will have a height of 500 pixels and width of 250 pixels. However, this resolution cannot exceed the source resolution and if the source resolution is lower, it will use the source resolution.                                                                                          |
| <span className="ndl-data">Mask Color</span>              | The color of the mask. You should probably use a semi-transparent color if you want the user to see what its cropping. |
| <span className="ndl-data">Mask Border Style</span>            | The border style of the mask, `Solid`, `Dotted`, `Dashed` or `None`.                                                                                                                                                                                                                                    |
| <span className="ndl-data">Mask Border Color</span>            | The border color of the mask. Only applicable if a border style has been set.                                                                                                                                                                                                                                    |
| <span className="ndl-data">Mask Border Width</span>            | The border width. Only applicable if a border style has been set.                                                                                                                                                                                                                                     |
| <span className="ndl-data">Image File</span>            | The image file to be cropped. The should be a Javascript `File`, for example coming from a **Open File Picker** node.                                                                                                                                                                                                                                     |

| Signal                                 | Description                                                                                                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Zoom In</span> | This signal will trigger a Zoom In into the image. |
| <span className="ndl-signal">Zoom Out</span> | This signal will trigger a Zoom Out of the image. |

## Outputs

| Data                                            | Description                                                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Cropped File</span>         | A file containing the area that have been cropped. This can for example be inputted into a **Upload Cloud File** node to be stored in the cloud.|
| <span className="ndl-data">Preview Url</span>         | A URL to a local image. This can be fed into an **Image** node to render the area that's cropped.                                                                                                                                                                                                           |
| <span className="ndl-data">Cropped File Size</span> | The size of the image that's cropped in bytes..                                                                                                                                                                                          |

| Signal                                      | Description                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">New Area Selected</span> | This signal is sent whenever a new area have been selected by the user. When the signal is sent there is a new `Cropped File` and `Preview Url` available on the output.                                             |



