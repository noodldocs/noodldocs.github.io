# Setting up the Google Sheets Module

## What you will learn in this guide
This guide will show you how to include the Google Sheets module in a project and how to get data from a Google Sheet into your Noodl project.

## Overview
In this guide we will build a small application where we display a list of US National Parks. We will get the data for the parks from a public Google Sheet. 

<div class="ndl-image-with-background s">

![](parks-list-filled.png)

</div>

We will go though the following steps:
* Install the Google Sheets Module in a Noodl Project.
* Set up a Query Sheets node to pull data from a public Google Sheet
* Create a small list based on the data from the Google Sheet



## Install the Google Sheets Module
The easiest way to get started with the Google Sheets Module is to use the "GSheets" template when creating a new project in Noodl. In that template, the Google Sheets module is already included.

However, if you have an existing project, or want to start from a different template, it's easy to get started as well. Just follow these instructions.

When in the project, open the "Library" tab to the left. Find the "GSheet" module and click "Add".

<div class="ndl-image-with-background s">

![](module-1.png)

</div>

After the module is imported, you should now be able to find the [Query Sheet](/modules/gsheets/node-docs/query-sheet/), [Query Sheet Aggregate](/modules/gsheets/node-docs/query-sheet-aggregate/) and [Sheet Row](/modules/gsheets/node-docs/sheet-row/) nodes in the node picker. Right click in the node editor area to bring up the node picker. Look under "External libraries" to find the **Google Sheets** nodes.

<div class="ndl-image-with-background s">

![](nodepicker-1.png)

</div>

## Getting data from a Query Sheet
In this guide we will start building from the Hello World template. 

<div class="ndl-image-with-background s">

![](hello-world.png)

</div>

Go ahead and delete the text node and you should end up just having a Group node as in the image below:

<div class="ndl-image-with-background l">

![](hello-world-deleted.png)

</div>

Then style your group like this:
<div class="ndl-image-with-background l">

![](group-props.png)

</div>


Before we build out our simple list UI, let's have a look at the Google Sheet that contains our data. You will find the document [here.](https://docs.google.com/spreadsheets/d/1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ/) 

<div class="ndl-image-with-background l">

![](google-sheet-1.png)

</div>

The document contains three different sheets, but we are only interested in the sheet named Parks. 

<div class="ndl-image-with-background l">

![](google-sheet-sheetnames.png)

</div>

To get all the data from the Parks sheet into our Noodl project we will use a Query Sheets node, so let's add that and have a look at the properties. 

<div class="ndl-image-with-background ">

![](query-sheet-node.png)

</div>

The Document Id property takes the id of the Google Sheet document, and we get that from this part of the Google Sheet URL (1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ):

<div class="ndl-image-with-background l">

![](google-sheet-id.png)

</div>

Let's also fill in the name of the sheet we are interested wich is Parks. After you have done this, the properies of the Google Sheet node should look like this:

<div class="ndl-image-with-background ">

![](query-sheet-node-filled-in.png)

</div>

We will leave the Use Column For Id property set to Unique id, but you can select a column that will become the Id of the Noodl Objects that will represent each row. It's important that the values in this column are unique. Since we have chosen Unique Id, Noodl will generate it's own id's for us.

We can now get the data from the Query Sheet on the Items output, so let's create an Array node and give it the Id Parks and connect it like this:

<div class="ndl-image-with-background l">

![](items-to-array.png)

</div>

Now that we have all of the parks in an Array node, let's build out our list.

## Creating the Park List component
First let's create a new visual component that we will call Park List. 

<div class="ndl-image-with-background ">

![](create-scroll-list.png)

</div>

The Park List component will be pretty simple. First let's enable scroll on the Group, by setting the following property.

<div class="ndl-image-with-background ">

![](scroll-list.png)

</div>

Next we will add a [Repeater](/nodes/ui-elements/repeater/) node as a child to our Group. The [Repeater](/nodes/ui-elements/repeater/) node is used to generate one component for each row in the Parks Array so let's also add an Array node and give it the Parks id.

<div class="ndl-image-with-background l">

![](array-parks-id.png)

</div>

Then we connect it to the Repeater node like this. 

<div class="ndl-image-with-background l">

![](array-to-repeater.png)

</div>

Now let's jump back to our App component and add a Group that we will call List Container.

<div class="ndl-image-with-background l">

![](main-app-list-container.png)

</div>

Let's set this List Container to be 400 px in width and then let's add the Park List component as a child.

<div class="ndl-image-with-background s">

![](list-container-props.png)

</div>

<div class="ndl-image-with-background l">

![](app-with-parks-list.png)

</div>

Now let's jump back to the Park List component and look at the Repeater properties. We need to tell the Repeater node which component it should generate, so before we fill this in, let's create our list items.

<div class="ndl-image-with-background ">

![](repeater-comp.png)

</div>

## Building the list items
Let's create the visuals for our list items first by creating a new Visual Component that we call List Item. 

<div class="ndl-image-with-background ">

![](create-list-item-1.png)

</div>

<div class="ndl-image-with-background ">

![](create-list-item-2.png)

</div>

The list items shouldn't be too tall so let's set an explicit height to 100 pixels and let's add some padding and change the Layout to Horizontal. We also want a nice bottom border.

<div class="ndl-image-with-background ">

![](list-item-group-props.png)

</div>

<div class="ndl-image-with-background ">

![](list-item-group-border.png)

</div>

The items should all show an image as well as the park name and which state the park is located, so let's add nodes so that we get the following node tree:

<div class="ndl-image-with-background ">

![](list-item-tree.png)

</div>

Now set the Image properties like in the image below.

<div class="ndl-image-with-background ">

![](list-item-image-props.png)

</div>

The Group that holds the two Text nodes is using all the default settings so we don't need to change anything there, but set the properties of the Park Name Text node to:

<div class="ndl-image-with-background ">

![](list-item-park-name-props-1.png)

</div>

<div class="ndl-image-with-background ">

![](list-item-park-name-props-2.png)

</div>

The State Text node should have the following properties:

<div class="ndl-image-with-background ">

![](list-item-state-props.png)

</div>

Now that we have visuals for our list items, we can tell the Repeater node in the Park List component to use this as the template so let's do that:

<div class="ndl-image-with-background ">

![](repeater-filled-props.png)

</div>

If you reload your project now you should see the following in the preview window.

<div class="ndl-image-with-background ">

![](halfway-preview.png)

</div>

This is great, now let's make sure each list item displays the correct data.

## Using the Sheet Row node in our List Items
Let's go back to our List Item component and add a Sheet Row node.

<div class="ndl-image-with-background ">

![](list-item-sheet-row.png)

</div>

The Sheet Row node can point to a specific row in the Google Sheet, but we need to tell it which row by providing an Id. That Id we will get from a [Repeater Item](/nodes/ui-elements/repeater-item/) node. This all works exactly the same as it does when you are working with the Noodl Query Records and Record nodes, and you can read more about that in this [guide.](/guides/working-with-data/cloud-data/querying-records/)

Connect the Repeater Item and Sheet row like below

<div class="ndl-image-with-background l">

![](repeater-item.png)

</div>

Now, the Sheet Row node should have a bunch of new outputs. Let's hook them up like this:

<div class="ndl-image-with-background l">

![](sheet-row-hook-up.png)

</div>

You should now see something like this in your preview window, and you should be able to scroll your list.

<div class="ndl-image-with-background l">

![](parks-list-filled.png)

</div>

Before we finish, let's add a little bit of logic to highlight which List Item is selected. Create a States node and set it up like this:

<div class="ndl-image-with-background ">

![](states-node.png)

</div>

Let's also add an Expression node and set it up like this:
<div class="ndl-image-with-background l">

![](expression-node.png)

</div>

Finally we will add a Variable node with the name SelectedRowId, a Set Variable node, and a Condition node. Then we will hook it all up like this:
<div class="ndl-image-with-background l">

![](final-item-node.png)

</div>

Now when you click on an item in the list it should become highlighted.

<div class="ndl-image-with-background l">

![](final-result.png)

</div>

## Summary
In this guide we built a list of National Parks using data from a Google Sheet. If you want to import the final project, click the "Import" button below and follow the instructions.

<div class="ndl-image-with-background l">
    <img src="modules/gsheets/guides/setting-up/parks-final.gif" class="ndl-image small"></img>
<button class="ndl-import-button" onClick='importIntoNoodl("modules/gsheets/guides/setting-up/gsheets-part1-1-2.zip",{name:"Google Sheets Getting Started",thumb:"modules/gsheets/guides/setting-up/final-result.png"})'></button>
</div>

In the next guide, we will create a details view for our parks, and in the final guide we will look at how we can filter the data we get in the Query Sheet node.