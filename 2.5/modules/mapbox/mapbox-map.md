<##head##>

# Mapbox Map

This node adds a map to the visual tree, using [Mapbox](https://www.mapbox.com/). The map can be both interactive and static.

<div class="ndl-image-with-background l">

![](mapbox-map.png)

</div>

Markers can be placed on the map by sending an <span class="ndl-data">array</span> of marker <span class="ndl-data">objects</span> containing `Lat`, `Long` and `Color` to the <span class="ndl-data">Markers</span> input. `Color` can be specified as a string, (e.g. "White") or as a hex string (e.g. "#ffffff").

<div class="ndl-image-with-background l">

![](marker-data.png)

</div>

<##head##>

## Inputs

| Data                                      | Description                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Longitude</span>   | Sets the current active longitude.                                                                                         |
| <span class="ndl-data">Latitude</span>    | Sets the current active latitude.                                                                                          |
| <span class="ndl-data">Zoom</span>        | Sets the zoom level of the map.                                                                                            |
| <span class="ndl-data">Markers</span>     | An array of markers on the map. Every marker is defined as an object containing the properties `Lat`, `Lon `, and `Color`. |
| <span class="ndl-data">Type</span>     | Specifies the Marker type. Can be either `Default` or `Image` |
| <span class="ndl-data">Source</span>     | Specifies the source of the Marker image. Only available if the Marker is om `Image` type. |
| <span class="ndl-data">Width</span>     | Specifies the width of the Marker image (in pixels). Only available if the Marker is om `Image` type. |
| <span class="ndl-data">Height</span>     | Specifies the height of the Marker image (in pixels). Only available if the Marker is om `Image` type. |
| <span class="ndl-data">Anchor</span>     | Specifies the the anchor point of the Marker image in relation to the location on the map. Only available if the Marker is om `Image` type. |
| <span class="ndl-data">Interactive</span> | Sets if users can interact with the map or not.                                                                            |
| <span class="ndl-data">Style</span>       | A path to a [Mapbox Style](https://docs.mapbox.com/api/maps/styles/).                                                      |

| Signal                                         | Description                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Center on user</span> | Send a signal to this port to center the map to the current active latitude and longitude. |

## Outputs

| Data                                            | Description                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">(Coordinates) Longitude</span>         | The current active longitude.                                                                    |
| <span class="ndl-data">(Coordinates) Latitude</span>          | The current active latitude.                                                                     |
| <span class="ndl-data">Zoom</span>              | The current zoom level of the map.                                                               |
| <span class="ndl-data">(Map Clicked) Longitude</span>         | The longitude that where the user clicked last. To be used with the Click signal.                                                                    |
| <span class="ndl-data">(Map Clicked) Latitude</span>          | The latitude that where the user clicked last. o be used with the Click signal.                                                                     |
| <span class="ndl-data">Marker Id</span>         | If you have clicked a marker on the map, this port will send the `Id` of the clicked marker.     |
| <span class="ndl-data">Width</span>             | The with of the map container.                                                                   |
| <span class="ndl-data">Height</span>            | The height of the map container.                                                                 |
| <span class="ndl-data">Screen Position X</span> | The amount of pixels between the left side of the window and the left side of the map container. |
| <span class="ndl-data">Screen Position Y</span> | The amount of pixels between the top of the window and the top side of the map container.        |

| Signal                                       | Description                                                                               |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Click</span>        | Sends a signal when the map is clicked.                                                   |
| <span class="ndl-signal">Marker Click</span> | Sends a signal when a marker is cliked.                                                   |
| <span class="ndl-signal">Map Loaded</span>   | Sends a signal when the map has finished loading, after it has been mounted in the app.   |
| <span class="ndl-signal">Map Moved</span>    | Sends a signal after the map in view has been moved.                                      |
| <span class="ndl-signal">Did Mount</span>    | Sends a signal when the map has been rendered in the app, before the map has been loaded. |
| <span class="ndl-signal">Will Unmount</span> | Sends a signal before the map will be removed from the visual tree.                       |
