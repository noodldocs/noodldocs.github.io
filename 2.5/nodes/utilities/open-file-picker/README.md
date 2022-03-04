<##head##>

# Open File Picker

This node opens a file picker dialog. Noodl uses the system file picker dialog, meaning it works seamlessly with the users native device experience.

<div class="ndl-image-with-background l">

![](open-file-picker.png)

</div>

You can define what file types are allowed to be uploaded. This is done by entering a <span class="ndl-data">string</span> of file types: each item needs to start with a period (`.`) and be separated by a comma (`,`). Leave the list blank if you want to accept any file type.

<##head##>

## Inputs

| Signal                               | Description                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------- |
| <span class="ndl-signal">Open</span> | <##input:open##>Send a signal to this input to open the file picker.<##input##> |

| Data                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Accepted file types</span> | <##input:accepted file types##>A comma separated list of file types that the user can select. Leave blank to accept any file type.<##input##><br/><br/>The file type can be specified as a filename extension, starting with a period. E.g. `.png`, `.json` or `.png, .jpg`.<br/><br/>The type can also be specified as a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types). E.g. `image/*`, `image/png` or `video/mp4`. |

## Outputs

| Data                               | Description                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">File</span> | <##output:file##>A web file API Object.<##output##> A [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object. This can be used uploaded via [Upload File](/nodes/cloud-services/upload-file.md), sent as a part of a [REST](/nodes/data/rest.md) call, processed in a [Function](/nodes/javascript/function.md) node, used together with modules, or other tasks. |

### Metadata

| Data                                        | Description                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| <span class="ndl-data">Path</span>          | <##output:path##>The local path to the file.<##output##>               |
| <span class="ndl-data">Name</span>          | <##output:name##>Name of the file, without the path.<##output##>       |
| <span class="ndl-data">Size in bytes</span> | <##output:size in bytes##>Total size of the file in bytes.<##output##> |
| <span class="ndl-data">Type</span>          | <##output:type##>The file type<##output##>                             |

| Signal                                  | Description                                                                 |
| --------------------------------------- | --------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>Triggered when the user has selected a file<##output##> |
