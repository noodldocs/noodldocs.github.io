# Script Downloader

Script Downloader allows you load external Javascript libraries. This is useful for integrating third party libraries in your Javascript nodes.

![](script-downloader.png)

<div class = "node-inputs">

## Inputs

### Content

**Script 0..N**  
The scripts to be loaded. They are loaded in order so scripts can use definitions from earlier scripts.

</div>

<div class = "node-outputs">

## Outputs

**Loaded**

A signal that is sent when all scripts are loaded.

</div>
