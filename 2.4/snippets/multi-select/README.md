# Multi Select

This is an example of how to build a multi select drop down with checkboxes as shown below.

<div class="ndl-image-with-background">
    <img src="snippets/multi-select/multi-select.png">
    <button class="ndl-import-button" onClick='importIntoNoodl("/snippets/multi-select/multi-select-0-1.zip")'></button>
</div>

When importing the snippet into your project make sure you choose the three components **Multi Select**, **Multi Select Option** and **Multi Select Pill**. Then you can go ahead and use the multi select component as follows.

<div class="ndl-image">
    <img src="snippets/multi-select/multi-select-nodes.png">
</div>

As input it requires and array of possible choices, these are objects with a **Label** property (and they can include other properties if needed). The component will output an array of the selected objects as well as a signal output called **Selection Changed** that will be triggered when the selection has changed (duh).
