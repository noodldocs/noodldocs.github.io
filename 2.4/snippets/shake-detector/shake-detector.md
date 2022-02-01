# Shake Detector

This is an example of how to use the [Script](/nodes/javascript/script/) node to implement a "Shake detector". <span class="ndl-import" onclick="importIntoNoodl('snippets/shake-detector/shake-detector-1.0.1.zip')">Import into Noodl</span>

<div class="ndl-image-with-background">
    <img src="snippets/shake-detector/preview.png">
    <button class="ndl-import-button" onClick='importIntoNoodl("snippets/shake-detector/shake-detector-1.0.1.zip")'></button>
</div>

## Inputs
| Data           | Description                                                  |
| -------------- | -------------------------------------------------------------|
| <span class="ndl-data">Timeout</span>        | The minimum time between two shakes                          |
| <span class="ndl-data">Threshold</span>      | How much the phone has to be moved until a shake is detected |

| Signal                                             | Description                |
| -------------------------------------------------- | ---------------------------|
| <span class="ndl-signal">Request Permission</span> | Some systems, mainly iOS, requires the user to give the web app permission to use the sensors. This signal will open a popup that allows the users to grant permission. |

## Outputs
| Data           | Description                                                  |
| -------------- | -------------------------------------------------------------|
| <span class="ndl-data">Needs Permission</span>        | **True** if permission is required for accessing the device sensors. Usually **true** on iOS, and **false** on other systems. Will also be **false** on iOS after permission has been granted                          |

| Signal                                         | Description                |
| ---------------------------------------------- | ---------------------------|
| <span class="ndl-signal">Shake Detected</span> | A shake has been detected! |

