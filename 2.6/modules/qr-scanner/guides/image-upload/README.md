# Scanning for QR Codes in uploaded images

This example enables you to scan uploaded images for Quick Response (QR) Codes and fetch the resulting data in the QR Code. To scan for QR Codes via a camera feed, see the documentation on the [Camera QR Scanner](/modules/qr-scanner/guides/camera-feed). 

**The Image QR Scanner** node works in conjunction with the **Open File Picker** node, which is used to upload an image that will be scanned for QR Codes. You can read more about the **File Picker** node [here](/nodes/utilities/open-file-picker). In the image below you can see how such a node tree might look.

## A simple example setup

In the example below, we use a [Button Node](/nodes/ui-controls/button) to open the **File Picker**. Once a file has been successfully uploaded and sent to the QR Node, the <span class="ndl-data">Scan Result</span> is returned to the [Text Node](/nodes/basic-elements/text) where the data contained in the QR Code will be displayed. 

import ImportButton from '/src/components/importbutton'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div class="ndl-image-with-background l">
    <img src={useBaseUrl("/modules/qr-scanner/guides/image-upload/qr-image-upload.png")} class="ndl-image large"></img>
    <ImportButton zip="qr-image-upload.zip" name="Camera QR Scanner" thumb="qr_noodlnet.png"/>
</div>

Note that In this particular example, no text will be shown if QR Code can’t be found or read from the uploaded image. You can use the <span class="ndl-signal">Scan Success/Scan Failed</span> signals of the **Image QR Scanner** node to include error handling, but this is not shown in this simple setup.
