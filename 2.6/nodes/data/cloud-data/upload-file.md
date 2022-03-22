<##head##>

# Upload File

This node uploads a file to the Noodl Cloud Services. Can be used in combination with a **Record** to link the file to a property. When retrieving the file reference you can get the **URL** to the file and **Name** of file using a [Cloud File](/nodes/data/cloud-data/cloud-file.md) node.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/upload-file/upload-file.png)

</div>
<##head##>

## Inputs

| Data                               | Description                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">File</span> | <##input:file##>An HTML5 [File](https://developer.mozilla.org/en-US/docs/Web/API/File). The [File Picker](/nodes/utilities/open-file-picker.md) can be used to open a file dialog picker and generate the **File** from a local file. It's also possible to retrieve the File from external sources, or generate it by code. <##input##> |

| Signal                                 | Description                                                |
| -------------------------------------- | ---------------------------------------------------------- |
| <span class="ndl-signal">Upload</span> | <##input:upload##>Triggers the upload to start.<##input##> |

## Outputs

| Data                                            | Description                                                                                                                                                                                                                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Cloud File</span>        | <##output:cloudFile##>A [Cloud File](/nodes/data/cloud-data/cloud-file.md), which consists of an URL and a file name. Can be connected to a property of a [Record](/nodes/data/cloud-data/record) if the property type is specified as 'File'.<##output##>                      |
| <span class="ndl-data">Total Bytes</span>       | <##output:progressTotalBytes##>The total size of the file in bytes that is being uploaded.<##output##>                                                                                                                                                                          |
| <span class="ndl-data">Uploaded Bytes</span>    | <##output:progressLoadedBytes##>Contains the number of bytes have been uploaded so far. Starts at 0, and moves towards **Total Bytes** after the **Upload** input signal has been triggered. The value is updated each time the **Progress Changed** event is sent.<##output##> |
| <span class="ndl-data">Uploaded Percent</span>  | <##output:progressLoadedPercent##>The current percentage of the file that have been uploaded. Starts at 0, and moves towards 100 after the **Upload** input signal has been triggered. The value is updated each time the **Progress Changed** event is sent.<##output##>       |
| <span class="ndl-data">Error</span>             | <##output:error##>The error message as a string, if the upload fails.<##output##>                                                                                                                                                                                               |
| <span class="ndl-data">Error Status Code</span> | <##output:errorStatus##>An [HTTP error code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For example, `413` if the file is too large.<##output##>                                                                                                                |

| Signal                                           | Description                                                                                                                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Progress Changed</span> | <##output:progressChanged##>This event is used to track the upload progress. It is triggered multiple times during an upload when **Uploaded Bytes** and **Uploaded Percent** are updated.<##output##> |
| <span class="ndl-signal">Success</span>          | <##output:success##>This event triggers when the file was uploaded successfully.<##output##>                                                                                                           |
| <span class="ndl-signal">Failure</span>          | <##output:failure##>This event triggers if there was en error uploading the file.<##output##>                                                                                                          |
