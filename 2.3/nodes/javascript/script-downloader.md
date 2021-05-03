# Script Downloader

Script Downloader allows you load external Javascript libraries. This is useful for integrating third party libraries in your Javascript nodes.

![](script-downloader-1.png ':class=img-size-m')

You simply specify the path to the script that are to be loaded. When they are loaded and sources a signal will be sent on the **Loaded** output.

![](script-downloader-2.png ':class=img-size-m')

## Inputs

### General

**Load on start**  
If enabled the scripts are loaded on start. If not you need to explicitly send a signal to **Load**.

### External Scripts

**Script 0..N**  
The scripts to be loaded. They are loaded in order so scripts can use definitions from earlier scripts.

### Actions

**Load**  
If **Load on start** is disabled you need to explicitly send a signal here to load the scripts.

## Outputs

**Loaded**  
A signal that is sent when all scripts are loaded.
