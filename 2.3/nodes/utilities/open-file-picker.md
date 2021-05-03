# OPEN FILE PICKER

Opens a file picker. Noodl uses the system file picker dialog, which will look different across different operating systems.

![](open-file-picker.png ':class=img-size-l')

## Inputs

**Open**  
A signal that opens the file picker.

**Accepted file types**  
A comma separated list of file types that the user can select. Leave blank to accept any file type.

The file type can be specified as a filename extension, starting with a period. E.g. `.png`, `.json` or `.png, .jpg`.

The type can also be specified as a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types). E.g. `image/*`, `image/png` or `video/mp4`.


## Outputs

### File
**File**  
A [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object. This can be used uploaded via [Upload File](/nodes/cloud-services/upload-file.md), sent as a part of a [REST](/nodes/data/rest.md) call, processed in a [Function](/nodes/javascript/function.md) node, used together with modules, or other tasks.

### Metadata
**Path**  
The local path to the file.

**Name**  
Name of the file, without the path.

**Size in bytes**  
Total size of the file in bytes

**Type**  
The file type


### Signals
**Success**  
Triggered when the user has selected a file