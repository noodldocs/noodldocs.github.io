<##head##>

# Video

This node places a video surface in the visual tree. It features a wide range of design options and settings for playback.

The <span class="ndl-data">source</span> can be set from a URL or a file. You can drag videos from your computer and drop them into Noodl to add them to the project folder. This will make them selectable as the <span class="ndl-data">source</span> in the <span class="ndl-node">Video</span> node Property Panel.

<##head##>

## Inputs

| Signal                                | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| <span class="ndl-signal">Play</span>  | Signal to start playing the video.          |
| <span class="ndl-signal">Pause</span> | Signal to pause the video.                  |
| <span class="ndl-signal">Reset</span> | Signal to reset the video to the beginning. |

| Data                                   | Description                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| <span class="ndl-data">Source</span>   | The source of the video. Either a local file in the project folder or an absolute url. |
| <span class="ndl-data">Poster</span>   | An image shown when the video is not started. Choose an image in the project folder.   |
| <span class="ndl-data">Autoplay</span> | Sets whether the audio/video should start playing as soon as it is loaded.             |
| <span class="ndl-data">Volume</span>   | The volume of the video when played.                                                   |
| <span class="ndl-data">Muted</span>    | Sets whether the audio/video is muted or not.                                          |
| <span class="ndl-data">Loop</span>     | Indicates whether the video should loop when the end is reached during playback.       |

The Video node also has some special Video Layout properties:

| Data                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Video Position X</span> | The video's X position within the **Video** node's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <span class="ndl-data">Video Position Y</span> | The video's Y position within the **Video** node's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <span class="ndl-data">Object Fit</span>       | Specifies how the video will behave when scaled to other size than the default size.<br/><br/>`Contain`: The video will be scaled by keeping aspect ratio and making sure the video fits in the bounding box. This may introduce transparent areas within the **Video** node's bounding box.<br/>`Cover`: The video will be scaled by keeping aspect ratio and making sure the video fills the entire bounding box. Portions of the video may be clipped.<br/>`Fill`: The video will fill the bounding box by scaling without keeping aspect ratio.<br/>`None`: The video will not be scaled. May be clipped. |

This node also supports the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/):

-   [Margin](nodes/ui-elements/visual-input-properties/#margin)
-   [Alignment](nodes/ui-elements/visual-input-properties/#alignment)
-   [Dimensions](nodes/ui-elements/visual-input-properties/#dimensions)
-   [Layout, Position](nodes/ui-elements/visual-input-properties/#-position)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Border Style](nodes/ui-elements/visual-input-properties/#border-style)
-   [Corner Radius](nodes/ui-elements/visual-input-properties/#corner-radius)
-   [Box Shadow](nodes/ui-elements/visual-input-properties/#box-shadow)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Dimension Constraints](nodes/ui-elements/visual-input-properties/#dimension-constraints)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

| Signal                                         | Description                                                                                                                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">On Can Play</span>    | Signal triggered when the video has loaded and is ready to be played.                                                                                                                                                     |
| <span class="ndl-signal">On Time Update</span> | Signal triggered when the playing position of the audio/video has changed. Event is invoked both by playing the media as well as when the playback position is being moved (for example when fast forward is being used). |

| Data                                      | Description                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| <span class="ndl-data">DOM Element</span> | A reference to the DOM Element representing this visual node. |
| <span class="ndl-data">videoWidth</span>  | The width of the video source.                                |
| <span class="ndl-data">videoHeight</span> | The height of the video source.                               |

This node also supports the following [Visual Output Properties](nodes/ui-elements/visual-output-properties/).

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Pointer Events](nodes/ui-elements/visual-output-properties/#pointer-events)
-   [Hover Events](nodes/ui-elements/visual-output-properties/#hover-events)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
