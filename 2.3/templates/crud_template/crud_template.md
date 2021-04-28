


## CRUD Template

The CRUD (Create, read, update, delete) template gives a starting point for working with data from a database and display it in a classic table view. You can import this template to build on top of, or just learn how to create some of the basic patterns for creating, displaying, updating, and deleting data from a database.

<div style="padding:62.5% 0 0 0;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/AUaUlncVzQI" style="position:absolute;top:0;left:0; frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</iframe></div>

<br>

<div class="ndl-images">
    <!--<img src="templates/crud_template/images/crud_interface.png" class=".ndl-image.large "> -->
    <button class="ndl-import-button no-content" onClick='importIntoNoodl("2.3/templates/crud_template/crud_template-1-0.zip", {name: "CRUD Template", cf:"2.3/templates/crud_template/crud-template-cs-formation.json", thumb:"2.3/templates/crud_template/images/crud_interface.png"})'>OPEN IN NOODL</button>
</div>

### Import & Setup
1. Make sure Noodl is running in the background, and no existing projects are open.
2. Click the "OPEN IN NOODL" button above, to launch the template. 
3. Confirm the the browser messeage that asks to open Noodl. This will open a modal inside Noodl to setup the template.
4. Give your project a name, and choose to create a new cloud service.

### Get Started 

Watch the video bellow to get a walkthrough of the project and how the different parts are structured. The main parts of this template is a **table** to display data, a **form component** to edit data from the table as well as creating new items for the table, and a **sidebar menu** for navigation that easily can be expanded. 

Before you start working with the template we recommend you to take a look at the following resources: 

[Models, Collections](guides/models-and-collections.md) are essential nodes in this project, so we recommend you to see our guide to learn how to work with these nodes together with Noodl's backend service. These are used to both set and extract data from the backend, and display it in the table. 

[Navigation Stack]



This template is mainly built around the two following parts: A table that gets populated with data from the backend, and a form component used to fill in data when creating and editing data items in the table. 

Watch the walkthrough video below to get introduced to the project and its structure:


### The Table
The table is mainly made out of Table Header Item, Table Body Item, and Table Cell. The Table Cell component is a simple group with an input control to adjust the Min-width property. This is a way to easily adjust the size and design of a cell across the whole table. Some data points might require more space than others, and here we can adjust the min-width on each cell accordingly.

The Table Body Item Component is an entire row in the table, and uses the Table Cell component to divide the data into sections. 


The Table Header component holds all the Table Header Items, wh

The important detail here is that the amount of table cell components and their sizes are equal between the Table Header component and the Table Body component. 
