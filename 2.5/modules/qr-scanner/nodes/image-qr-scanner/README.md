# Image QR Scanner

The **Image QR Scanner** node is used to scane an image for a QR code. It's typically used in conjunction with the [Open File Picker](/nodes/utilities/open-file-picker/) node, to allow the user to upload a file.

<div class="ndl-image-with-background l">

![](image-qr-scanner.png)

</div>

When a QR code has been successfully identified, the node will send a <span class="ndl-signal">Scan Successful</span> event and the decoded string, otherwise <span class="ndl-signal">Scan Failed</span>.

## Inputs

| Data                                      | Description                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Image File</span>   | The image file to look for the QR code in. Typically provided through an **Open File Picker** node. The input should be of type [File](https://developer.mozilla.org/en-US/docs/Web/API/File)   |


| Signal                                         | Description                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Scan</span> | Triggers a QR code scan in the file provided in the **Image File** input. |

## Outputs

| Data                                            | Description                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Scan Result</span>         | This output contains the decoded string when a QR code has been found and decoded. If no QR code is found this string will be empty.            |
| <span class="ndl-data">Valid Scan</span>          | A **boolean** that is **true** if the last scan was valid, otherwise **false**.   |

| Signal                                       | Description                                                                               |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Scan Successful</span>        | Sends a signal when a successful scan was done. The resulting scan is on the **Scan Result** output. |
| <span class="ndl-signal">Scan Failed</span> | Sends a signal when the latest scan failed, i.e. no QR code was found. |

