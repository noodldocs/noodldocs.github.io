<##head##>
# UPLOAD FILE

This node Uploads a file to cloud services. Can be used in combination with a [Model](/nodes/cloud-services/model.md) to link the file to a property of a Model. When retrieving the file reference you can get the **URL** to the file and **Name** of file using a [Cloud File](/nodes/cloud-services/cloud-file.md) node.

![](upload-file.png ':class=img-size-l')
<##head##>
## Inputs

**File**  
<##input:file##>An HTML5 [File](https://developer.mozilla.org/en-US/docs/Web/API/File). The [File Picker](/nodes/utilities/file-picker.md) can be used to open a file dialog picker and generate the **File** from a local file. It's also possible to retrieve the File from external sources, or generate it by code. <##input##>

**Upload**  
<##input:upload##>Triggers the upload to start.<##input##>

## Outputs

### Results
**Cloud File**  
<##output:cloudFile##>A [Cloud File](/nodes/cloud-services/cloud-file.md), which consists of an URL and a file name. Can be connected to a property of a [Model](/nodes/cloud-services/model.md) if the property type is specified as 'File'.<##output##>

### Events

**Success**   
<##output:success##>This event triggers when the file was uploaded successfully.<##output##>

**Failure**  
<##output:failure##>This event triggers if there was en error uploading the file.<##output##>

**Error**   
<##output:error##>The error message as a string, if the upload fails.<##output##>

**Error Status Code**   
<##output:errorStatus##>An [HTTP error code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For example, `413` if the file is too large.<##output##>

**Progress Changed**   
<##output:progressChanged##>This event is used to track the upload progress. It is triggered multiple times during an upload when **Uploaded Bytes** and **Uploaded Percent** are updated.<##output##>

### Progress

**Total Bytes**  
<##output:progressTotalBytes##>The total size of the file in bytes that is being uploaded.<##output##>

**Uploaded Bytes**   
<##output:progressLoadedBytes##>Contains the number of bytes have been uploaded so far. Starts at 0, and moves towards **Total Bytes** after the **Upload** input signal has been triggered. The value is updated each time the **Progress Changed** event is sent.<##output##>

**Uploaded Percent**   
<##output:progressLoadedPercent##>The current percentage of the file that have been uploaded. Starts at 0, and moves towards 100 after the **Upload** input signal has been triggered. The value is updated each time the **Progress Changed** event is sent.<##output##>

