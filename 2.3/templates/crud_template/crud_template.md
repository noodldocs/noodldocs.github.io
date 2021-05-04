# CRUD Template

The CRUD (Create, read, update, delete) template gives a starting point for working with data from a database and display it in a classic table view. You can import this template to build on top of, or just learn how to create some of the basic patterns for creating, displaying, updating, and deleting data from a database.

<div style="padding:62.5% 0 0 0;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/It3xuo-np0c" style="position:absolute;top:0;left:0; frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<div class="ndl-images">
    <!--<img src="templates/crud_template/images/crud_interface.png" class=".ndl-image.large "> -->
    <button class="ndl-import-button no-content" onClick='importIntoNoodl("2.3/templates/crud_template/crud_template-1-0.zip", {name: "CRUD Template", cf:"2.3/templates/crud_template/crud-template-cs-formation.json", thumb:"2.3/templates/crud_template/images/crud_interface.png"})'>OPEN IN NOODL</button>
</div>

## Import & Setup
1. Make sure Noodl is running, and no existing projects are open.
2. Click the "OPEN IN NOODL" button above, to launch the template. 
3. Confirm the the browser message that asks to open Noodl. This will open a modal inside Noodl to setup the template.
4. Give your project a name, and choose to create a new cloud service.

## Get Started 

This template is built around three parts:
- The **table** that gets populated with data from Noodl's cloud service
- A **form component** used to fill in data when creating and editing items in the table
- A **Sidebar menu** used to create the navigation. 
Watch the video below to get a walkthrough of the project and how the different parts are structured. 

<div style="padding:62.5% 0 0 0;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/zRgttswG9vY" style="position:absolute;top:0;left:0; frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

Before you start working with the template we recommend you to take a look at the following resources: 

[Models and Collections](guides/models-and-collections.md) are essential nodes in this project, so we recommend you to see our guide to learn how to work with these nodes together with Noodl's backend service. These are used to both set and extract data from the backend, and display it in the table. 

[The Navigation Stack](nodes/navigation/navigation-stack.md) is used to create navigation and setup different pages, which is used to make the sidebar panel. 

[The Validation module](modules/validation/validate.md), which is used to set up form validation rules for different inputs in the form component.
