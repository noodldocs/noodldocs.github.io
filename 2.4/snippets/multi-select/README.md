# Multi Select

This is a small snippet containing a multi select drop down with checkboxes as shown below:

<div class="ndl-image-with-background">
    <img src="snippets/multi-select/multi-select.png">
    <button class="ndl-import-button" onClick='importIntoNoodl("/snippets/multi-select/multi-select-0-2.zip")'></button>
</div>

When importing the snippet into your project make sure you choose the three components **Multi Select**, **Multi Select Option** and **Multi Select Pill**. Then you can go ahead and use the multi select component as follows.

<div class="ndl-image">
    <img src="snippets/multi-select/multi-select-nodes.png">
</div>

As input it requires two arrays, one containing all possible options, the **Options** input. This array should contains objects with at least a **Value** property and optionally a **Label** property if you do not want to display the value as the label. The other array should contain only the current selection, this should be objects with just the **Value** property (corresponding to the values in the **Options**) array.

The component will output an array of the selected objects (each an object with a **Value** property) as well as a signal output called **Selection Changed** that will be triggered when the selection has changed (duh).

You can easily hook it up to data stored in the cloud database via a **Record** as shown below:

<div class="ndl-image">
    <img src="snippets/multi-select/multi-select-nodes-data.png">
</div>

Make sure you create a property on your record class with the type **Array** then you can go ahead and store the selection using the **Set Record Properties** node.
