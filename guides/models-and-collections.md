# Models and collections

In the [Variables and Objects](/guides/variables-and-objects.md) guide you learned how to store data in memory. This is useful, but as you might have figured out the data is reset every time you refresh your browser or viewer. Most use cases require persistent data, and this is where **Models** and **Collections** enter the picture.

- **Model** A Model node is an extended Object. It works like an Object where you can Set and Fetch values but it also includes functionality to store in a persistent database.

- **Collection** A collection contains a set of models of a specific type. It can be used to fetch all or some of these models from the persistent storage.

Let's take a closer look at Models and Collections with this example project. It is a static Task app that we will turn into a functional database backed app. You can import the project below.

<div class="ndl-images">
    <img src="/guides/models-and-collections/static-tasks-app.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/models-and-collections/start-project.zip")'></button>
</div>

First check out the **Main** component, this is the actual task list. It contains three static task items that we will replace with dynamic data.

<div class="ndl-images">
    <img src="/guides/models-and-collections/task-items.png" class="ndl-image med"></img>   
</div>

To do this we first need to create a new collection for our Tasks. This is done via the database panel.

<div class="ndl-images">
    <img src="/guides/models-and-collections/database-panel.png" class="ndl-image med"></img>   
</div>

At the bottom of the panel you can create a new **Collection** call it _Tasks_ and make sure you pick _Local Collection_. There are two types of Collections you can create, local and cloud.

- **Local Collection** Local collections will contain static data that will be refreshed everytime you reload the viewer or browser. This might sound strange since we want to do persistent storage but local collections are great when you are testing things, since you can put in a start state that you can easily reset to.

- **Cloud Collection** Cloud collections are stored in the cloud and are persistent in real time between all current users. This is what we will use later. You can switch between the two at any time.

<div class="ndl-images">
    <img src="/guides/models-and-collections/create-collection.png" class="ndl-image med"></img>   
</div>

Now that we have our Collection let's put some test data into it. Create a Model with the attributes _Text_ and _Completed_, the latter should be a boolean (indicating if the task is completed or not). When you add models to a collection you use JSON which is great to [learn](https://www.w3schools.com/js/js_json_intro.asp) if you don't already know it.

<div class="ndl-images">
    <img src="/guides/models-and-collections/add-model.gif" class="ndl-image large"></img>   
</div>

Go ahead and add a few more models to the collection in the same way.

...
