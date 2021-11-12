<##head##>
# CLOUD FILE

Represents a file that has been uploaded to Noodl's cloud services and stored as a reference in the database.

![](cloud-file.png ':class=img-size-l')

**Cloud File** is typically used in combination with the [Open File Picker](/nodes/utilities/open-file-picker.md) and the [Upload File](/nodes/cloud-services/upload-file.md) to upload a file and store a reference to it in the database. Then **Cloud File** is used to retrieve the reference and get the URL or Name of the file.

![](/upload-file.png ':class=img-size-l')
<##head##>
## Inputs

**File**  
<##input:file##>A file that has been stored in the cloud services. Often used in combination with a [Model](/nodes/cloud-services/model.md) to retrieve the **name** and **URL** of a file.<##input##>

## Outputs

**URL**  
<##output:url##>The URL of the file.<##output##>

**Name**  
<##output:name##>The Name of the file.<##output##>
