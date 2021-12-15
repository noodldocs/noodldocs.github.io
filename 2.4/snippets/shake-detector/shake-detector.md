# Shake Detector

This is an example of how to use the [Script](/nodes/javascript/script/) node to implement a "Shake detector".

<div class="ndl-image-with-background">
    <img src="snippets/shake-detector/preview.png">
    <button class="ndl-import-button" onClick='importIntoNoodl("snippets/shake-detector-1.0.0.zip")'></button>
</div>

## Inputs
| Data           | Description                                                  |
| -------------- | -------------------------------------------------------------|
| Timeout        | The minimum time between two shakes                          |
| Threshold      | How much the phone has to be moved until a shake is detected |

## Outputs
| Signal                                         | Description                |
| ---------------------------------------------- | ---------------------------|
| <span class="ndl-signal">Shake Detected</span> | A shake has been detected! |