<##head##>
# Cloud File

Represents a file that has been uploaded to the Noodl Cloud Services and stored as a file property in a **Record**.

![](cloud-file.png ':class=img-size-l')

**Cloud File** is typically used in combination with the [Open File Picker](/nodes/utilities/open-file-picker.md) and the [Upload File](/nodes/cloud-services/upload-file.md) to upload a file and store a reference to it in the database. Then **Cloud File** is used to retrieve the reference and get the URL or Name of the file.

![](/upload-file.png ':class=img-size-l')
<##head##>

## Inputs

**Cloud File**  
<##input:cloud file##>A file that has been stored in the Noodl Cloud Services. Often used in combination with a **Record** to retrieve the **Name** and **URL** of a file.<##input##>

## Outputs

**URL**  
<##output:url##>The URL of the file.<##output##>

**Name**  
<##output:name##>The Name of the file.<##output##>
