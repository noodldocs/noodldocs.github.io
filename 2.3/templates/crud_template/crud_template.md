## CRUD Template

The CRUD (Create, read, update, delete) template gives a starting point for working with data from a database and display it in a classic table view. You can import this template to build on top of, or just learn how to create some of the basic patterns for creating, displaying, updating, and deleting data from a database. 

<div class="ndl-images">
    <img src="templates/crud_template/images/crud_interface.png" class=".ndl-image.large ">
    <button class="ndl-import-button" onClick='importIntoNoodl("templates/crud_template/crud_template.zip")'></button>
</div>

### Import & Setup
Open the template in Noodl by Clicking the "Import" button above.  
The browser whole project in your clipboard.
Enable Noodl's backend service, to attach a database to the project

### Get Started 
Models and Collections are essential nodes in this project, so we recommend you to see our guide to learn how to work with these nodes and Noodl's backend services: 
https://docs.noodl.net/#/guides/models-and-collections

This template is mainly built around the two following parts: A table that gets populated with data from the backend, and a form component used to fill in data when creating and editing data items in the table. 

Watch the walkthrough video below to get introduced to the project and its structure:


### The Table
The table is mainly made out of Table Header Item, Table Body Item, and Table Cell. The Table Cell component is a simple group with an input control to adjust the Min-width property. This is a way to easily adjust the size and design of a cell across the whole table. Some data points might require more space than others, and here we can adjust the min-width on each cell accordingly.

The Table Body Item Component is an entire row in the table, and uses the Table Cell component to divide the data into sections. 


The Table Header component holds all the Table Header Items, wh

The important detail here is that the amount of table cell components and their sizes are equal between the Table Header component and the Table Body component. 
