# Models and collections

In the [Variables and Objects](/guides/variables-and-objects.md) guide you learned how to store data in memory. This is useful, but as you might have figured out the data is reset every time you refresh your browser or viewer. Most use cases require persistent data, and this is where **Models** and **Collections** enter the picture. With these we can store data in the cloud so it can persist and you can create multi user apps.

- **Model** A model typically represents an item that you want to store, e.g. a Task item in a task app, or a Shopping Item in a shopping cart. It is accessed via the model node. A Model node is an extended Object. It works like an Object where you can Set and Fetch values but it also includes functionality to save to the cloud.

- **Collection** A collection contains a set of models of a specific type. When you create a collection you typically name it after the type you want it to contain. You can access the models of a collection with the _Query Collection_ node.

Let's take a closer look at Models and Collections with this example project. It is a static Task app that we will turn into a functional database backed app. You can import the project below.

<div class="ndl-images">
    <img src="/guides/models-and-collections/static-tasks-screen.png" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/models-and-collections/start-project-v3.zip")'></button>
</div>

After importing you should have a number of components in your project. You should be able to see them in the canvas view, there should be the different screens we will conver as well as a number of parts that make them up.

<div class="ndl-images">
    <img src="/guides/models-and-collections/sheet.png" class="ndl-image large"></img>   
</div>

There should be one folder called **Parts** this folder contains the diffent UI components used in the screens. The other folder is called **Screens** and contains the three screens of the app.

- _Tasks Screen_ This is the main screen, a list of all the tasks.
- _New Task Screen_ This is the screen used to create new tasks.
- _Edit Task Screen_ The screen where the user can edit a task.

First we will take a look at the **Tasks Screen** component. It contains three static task items that we will replace with dynamic data.

<div class="ndl-images">
    <img src="/guides/models-and-collections/task-items.png" class="ndl-image large"></img>   
</div>

We are going to use collections to store the data in the cloud. But to make collections available in this project we need to enable cloud services. This needs to be done in every project that uses any of the cloud features. More on this later, but for now simply open the cloud services popup and hit _enable_. You can find the cloud services popup at the top right of the editor.

<div class="ndl-images">
    <img src="/guides/models-and-collections/cloudservices.png" class="ndl-image large"></img>  
</div>

Now you can open the dashboard for the cloud services that this project uses with the button in the cloud services popup. In the dashboard you will be able to view and edit the data in your models and collections.

<div class="ndl-images">
    <img src="/guides/models-and-collections/open-dashboard.png" class="ndl-image large"></img>   
</div>

Now you can create a new **Collection** by first clicking the *Create a class* button. The term *Class* and *Collection* generally refer to the same thing, all models in a collection have the same *class* that is they model the same type of data.

<div class="ndl-images">
    <img src="/guides/models-and-collections/create-class.png" class="ndl-image med"></img>   
</div>

In this case we are going to create a *Tasks* model, so simply give it the name *Tasks*. You can use any name you want but typically choose one that is descriptive of the type of data you intend to store in the models. Finally click *Create class*.

<div class="ndl-images">
    <img src="/guides/models-and-collections/create-class-2.png" class="ndl-image med"></img>   
</div>

Now we have created our first Collection, you can think of a Collection as a spreadsheet and the models are the rows of the sheet. Now we need to specify the columns and for each column we must specify a type. The columns of the sheet will become the properties of the *Models*. Out _Tasks_ models will have two properties, a _Text_ with the task content and a _Completed_ that will store if the task is done or not. First find the *Add a new column* button and click it.

<div class="ndl-images">
    <img src="/guides/models-and-collections/add-column.png" class="ndl-image med"></img>   
</div>

You need to specify a type and a name for the column. The type should be **String** and the name should be **Text**. When completed hit the *Add column* button.

<div class="ndl-images">
    <img src="/guides/models-and-collections/add-column-2.png" class="ndl-image med"></img>   
</div>

Repeat this for the *Completed* column as well, this column should have the *Boolean* type. 

With the two columns in place lets go ahead and add some test data. Use the *Add row* button to create a new row / model, or the small *plus* icon at the bottom under the last row. Go ahead and add a few more models to the collection in the same way.

<div class="ndl-images">
    <img src="/guides/models-and-collections/example-tasks.png" class="ndl-image large"></img>   
</div>

Next we are going to dive back into the **Tasks Screen** component. We will replace the static **Task Item** components with dynamically created ones, just like in the [For Each](/guides/for-each.md) guide. The setup below is what you want:

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-and-for-each.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"8de8b190-a16b-8b69-36e4-8b713096c8c3","type":"Group","x":-61.842898249714494,"y":106.85295677441763,"parameters":{},"ports":[],"children":[{"id":"b78b6399-a350-a9ae-3d67-b67ee25a29e7","type":"Group","x":-41.842898249714494,"y":188.85295677441763,"parameters":{"backgroundColor":"#FFFFFF","paddingLeft":{"value":5,"unit":"px"},"paddingRight":{"value":5,"unit":"px"},"paddingTop":{"value":20,"unit":"px"},"paddingBottom":{"value":20,"unit":"px"},"position":"absolute"},"ports":[],"children":[{"id":"8efa95d4-7b99-a3ea-f92b-9767da1e8f63","type":"Text","x":-21.842898249714494,"y":234.85295677441763,"parameters":{"fontFamily":"OpenSans-Regular.ttf","text":"My Tasks","fontSize":{"value":30,"unit":"px"},"marginLeft":{"value":31,"unit":"px"}},"ports":[],"children":[]},{"id":"f0ec6395-ed97-77b3-9851-0de4b02c6b59","type":"Group","x":-21.842898249714494,"y":280.85295677441763,"parameters":{"marginTop":{"value":20,"unit":"px"},"clip":true,"marginBottom":{"value":20,"unit":"px"},"scrollEnabled":true,"nativeScroll":true},"ports":[],"children":[{"id":"73ca24ba-99e0-d180-a6f2-7ff08daef1b5","type":"For Each","x":-1.8428982497144943,"y":326.85295677441763,"parameters":{"template":"/Parts/Task Item"},"ports":[],"children":[]}]},{"id":"fc8f2537-615d-80d9-9061-35594303c256","type":"/Parts/Add Button","x":-21.842898249714494,"y":408.85295677441763,"parameters":{"Align X":"right","Align Y":"bottom","Margin Right":{"value":10,"unit":"px"},"Margin Bottom":{"value":10,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"57c816c4-6aa3-2ff3-adf1-3c15535353a6","type":"PageStackNavigate","x":245.32607086946143,"y":448.12918550774725,"parameters":{"stack":"App","target":"haev","tr-direction":"Up"},"ports":[],"children":[]},{"id":"424ae5ca-0642-33f5-f6a1-fc1528819758","type":"DbCollection","x":-296.9254310213774,"y":254.776588294644,"parameters":{"collectionName":"Tasks"},"ports":[],"children":[]}],"connections":[{"fromId":"fc8f2537-615d-80d9-9061-35594303c256","fromProperty":"Click","toId":"57c816c4-6aa3-2ff3-adf1-3c15535353a6","toProperty":"navigate"},{"fromId":"8de8b190-a16b-8b69-36e4-8b713096c8c3","fromProperty":"didMount","toId":"424ae5ca-0642-33f5-f6a1-fc1528819758","toProperty":"storageFetch"},{"fromId":"424ae5ca-0642-33f5-f6a1-fc1528819758","fromProperty":"items","toId":"73ca24ba-99e0-d180-a6f2-7ff08daef1b5","toProperty":"items"}]})'></button>      
</div>

- Create a **Query Collection** node and set the _Collection Name_ property to _Tasks_. This property is used to select which collection this node will access. If you create more collections they will show up here. This node is used to return all or some of the models in the collection.

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-name.png" class="ndl-image med"></img>   
</div>

- Next, create a **For Each** and replace the three **Task Item** components with that single node. Make sure you select the _Task Item_ component as the template component.

<div class="ndl-images">
    <img src="/guides/models-and-collections/for-each-template.png" class="ndl-image med"></img>   
</div>

- Connect the **Did mount** output of the top group to the **Fetch** input of the _Query Collection_ node. The _Did mount_ signal is triggered when these nodes become visible and when that happens we want the _Query Collection_ to fetch all models of the collection from the cloud storage. We need to send the _Fetch_ signal when we want to retrieve the content of the collection it is not done automatically just by setting the collection name.

- Finally connect the **Result** output of the **Query Collection** node to the **Items** input of the **For Each**. This will have the _For Each_ node replicate the _Task Item_ component once for every model in the Tasks collection.

You will need to refresh in order for the **Did mount** signal to be sent so that the **Query Collection** node will fetch the models. This will result in one **Task Item** for every model in the collection, the _Text_ you put in your data items should show up in the list.

<div class="ndl-images">
    <img src="/guides/models-and-collections/connected-tasks.png" class="ndl-image med"></img>   
</div>

Let's review what happened. Each row you created in the collection will become one **Model** in Noodl containing all the properties you entered. The _For Each_ node will duplicate the **Task Item** component for every model in the collection and the property _Text_ will be provided as a **Component Input** to the task items. In that component it is connected to the text node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/example-tasks-2.png" class="ndl-image large"></img>   
</div>

<div class="ndl-images">
    <img src="/guides/models-and-collections/task-item-text-connected.png" class="ndl-image large"></img>   
</div>

Next we'll dive into the **New Task Screen** and add functionality for creating new tasks. Here you will find a **Text Input** field and **Button** that should trigger the task creation.

<div class="ndl-images">
    <img src="/guides/models-and-collections/new-task-screen.png" class="ndl-image large"></img>  
</div>

Just like we used a **Query Collection** node to access the collection we will use a **Model** node to create a new Model in a Collection. These are the steps needed:

- Create a **Model** node and set the **Collection Name** to **Tasks**. When you select a Collection the node will automatically get inputs for the attributes of the models in the collection.

- Connect the **Text** output from the **Text Input** node to the **Text** input of the **Model** node. This will push the text that you type in the text field to the model node.

- Create a **Boolean** node and connect the **Value** output to the **Completed** input of the model node. This will provide the default value of _false_ for the completed attribute. (The boolean node value is false by default, you can of course change it if you want another value when creating the model.)

- Now connect **Click** from the Button to **Insert** on the Model. This will insert a new model into the collection when it receives a signal, i.e. when the button is clicked.

- Finally you can connect the **Saved** output signal from the Model node to the **Navigate** input on the **Navigate Back** node. This will close the popup when the Model has been successfully saved in the collection.

The setup below is what you want:

<div class="ndl-images">
    <img src="/guides/models-and-collections/new-task-model.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"40c68a30-54f5-e421-0506-78de13ba9c62","type":"Group","x":-117.1255445807002,"y":283.08062013197235,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"d7678721-3348-a68b-8e9a-fb05889b7be1","type":"/Parts/Header","x":-97.1255445807002,"y":329.08062013197235,"parameters":{"Title":"New task"},"ports":[],"children":[]},{"id":"6ad2e712-dfca-1ca5-346a-263f37481d35","type":"Group","x":-97.1255445807002,"y":411.08062013197235,"parameters":{"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"7696257e-6ac3-d006-2e60-749b41949eb2","type":"Text Input","x":-77.1255445807002,"y":457.08062013197235,"parameters":{"sizeMode":"explicit","type":"textArea","fontFamily":"OpenSans-Regular.ttf","fontSize":{"value":20,"unit":"px"},"color":"#545454","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[]},{"id":"4b484d89-545e-3a5d-c02c-9472ef0b3486","type":"/Parts/Button","label":"Save","x":-77.1255445807002,"y":539.0806201319724,"parameters":{"Label":"Save","Margin Bottom":{"value":20,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"d6983ce5-ce40-a174-c1e1-5484a3a778fe","type":"PageStackNavigateBack","x":-372.0587249235202,"y":260.39843157520994,"parameters":{},"ports":[],"children":[]},{"id":"7fcf129e-ff41-1a20-fc5d-bf92012a1759","type":"DbModel","x":-363.59213475211016,"y":414.2395258535911,"parameters":{"$ndlCollectionName":"Tasks"},"ports":[],"children":[]},{"id":"a62ee714-877a-2fe1-18aa-d6d66eff723e","type":"Boolean","x":-359.59213475211016,"y":585.2395258535912,"parameters":{},"ports":[],"children":[]}],"connections":[{"fromId":"d7678721-3348-a68b-8e9a-fb05889b7be1","fromProperty":"Close","toId":"d6983ce5-ce40-a174-c1e1-5484a3a778fe","toProperty":"navigate"},{"fromId":"7696257e-6ac3-d006-2e60-749b41949eb2","fromProperty":"onTextChanged","toId":"7fcf129e-ff41-1a20-fc5d-bf92012a1759","toProperty":"Text"},{"fromId":"4b484d89-545e-3a5d-c02c-9472ef0b3486","fromProperty":"Click","toId":"7fcf129e-ff41-1a20-fc5d-bf92012a1759","toProperty":"insert"},{"fromId":"a62ee714-877a-2fe1-18aa-d6d66eff723e","fromProperty":"savedValue","toId":"7fcf129e-ff41-1a20-fc5d-bf92012a1759","toProperty":"Completed"},{"fromId":"7fcf129e-ff41-1a20-fc5d-bf92012a1759","fromProperty":"saved","toId":"d6983ce5-ce40-a174-c1e1-5484a3a778fe","toProperty":"navigate"}]})'></button>      
</div>

What happened here is that a new _Model_ was created and pushed to the cloud storage when the _Insert_ signal was received. When the model has been properly saved the *Saved* signal is emitted which is connected to a *Navigate Back* node that will take us back to the previous page.

?> Note that when you add models to the cloud store they are not immediately added to the collection that is returned by *Query Collection*. You must explicitly *Fetch* the query again. As you can see when the *Did Mount* signal is emitted in the *Tasks screen* it is forwarded to the *Fetch* input so this is taken care of for us when we navigate back to that screen and it becomes visible again.

Now let's move on to editing.

First we need to look at the **Task Item** component, here you can see that there is a Navigation node that navigates to the **Edit Task Screen** when the item is clicked. The **Id** of the task item is also passed as a navigation parameter. Just like **Objects** the _Id_ of a Model uniquely identifies it, so to make sure we edit the right task that is passed and will be available as a component input in the **Edit Task Screen** component. To learn more about how navigation works take a look at the [navigation guide](/modules/guides/navigation).

<div class="ndl-images">
    <img src="/guides/models-and-collections/pass-task-id.png" class="ndl-image large"></img>  
</div>

Lets move on to the **Edit Task Screen** component. Here we first need to fix so that the current task text is shown. This is done through the following steps:

- Find the **Component Inputs** node and the **Task Id** input. This is the **Id** of the Model we are editing that was passed via the Navigation node.

- Create a **Model** node and set the **Colllection Name** to **Tasks**. Then connect the **Task Id** component input to the **Id** input of the model node.

- Finally connect the **Text** output of the Model node to the **Text** input of the **Text Input** node. This will send the text from the Model node when it is retrieved via the Id connection. So that the text input shows the current value of the Model's **Text** attribute.

<div class="ndl-images">
    <img src="/guides/models-and-collections/edit-task-step1.png" class="ndl-image large"></img>  
</div>

Now you can click the Task items and the **Edit Task Screen** is shown with the correct task text. You can edit the text input but nothing happens when you hit save. This is what we will do now, what you see below is what we want to build, to achieve this we need to:

- Create another **Model** node and set the collection name to **Tasks**. We could actually use the existing node but sometimes it is easier to create another so to illustrate how thats done we'll do that here.

- Connect the **Task Id** input to this new Model node as well. This is import to understand. As long as the two model nodes have the same **Id** they will work on the same model.

- Connect the **Text** from the **Text Input** to the new model's **Text** input.

- Connect the Save buttons **Click** to the **Save** signal input of the Model node. This will have the effect that when the button is clicked the node will Save the current value on it's inputs to the persistent database. This is similair to the **Set** signal but it will also persist the data.

- Finally connect the **Saved** output from the Model node to the **Navigate Back** node as shown below. This will trigger the back navigation and close the popup when the model has been succesfully saved.

<div class="ndl-images">
    <img src="/guides/models-and-collections/edit-task-step2.png" class="ndl-image large"></img>  
</div>

Now you can edit and save the Model, it will take you back to the tasks list and you can see the updated task in the list. There is also a Delete button on the screen, so let's connect that one too. We can use the existing Model node for this.

- Connect the Delete buttons **Click** output signal to the **Delete** input signal on the Model node.

- Connect the **Deleted** signal from the Model node to the **Navigate** input of the _Navigate Back_ node. This will have the edit screen close and return to the tasks list when an item has been deleted.

Give it a try! So now we can **Create**, **Edit** and **Delete** our task items. That's pretty good. One thing to note is that we don't actually need to refetch a Query Collection if one of the items in the result are deleted, this is handled automatically.

There is one last thing in this guide and that is to connect the check mark button for the items. This should be connected to the **Completed** attribute of the task Models.

In the **Task Item** component, another component is used, the **Check Mark**. This is a simple check button created with a states node, you can take a look at it and read the [states guide](/guides/states.md) to learn more. This component has both a boolean input (checked true or false) and a boolean output that is updated when the user clicks. Let's hook up this component to our data model.

- Create a **Model** node and choose our collection **Tasks**.

- Connect the **Completed** output from the **Model** node to the **State** input of the **Check Mark** component.

- We also need to provide the **Id** of the Model, to do this we connect the **Id** from the **Component Inputs** to the **Id** input of the **Model** node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/check-mark-step1.png" class="ndl-image large"></img>  
</div>

Now the **Completed** attribute of our task models will be visualized with a check mark. If you have a task in your collection that has Completed set to true it should be reflected in the task list. Now we also want any change made by the user saved in the database.

- Connect the **State** from **Check Mark** to the **Completed** in the **Model** node. So we essentially create a connection in the other direction as well. Before we used two nodes, one for reading and one for saving. You can use the same node if you like.

- Connect the **Click** signal from the **Check Mark** node to the **Save** input of the **Model**. So when the user clicks the check mark the Model will be saved to the database.

!> It's important to only do **Save** and **Insert** on Models on user interactions. If you hook up these to change signals or other non user events you can create feedback loops. It's not like you will disrupt the very fabric of time and space or anything but you could throw an exception or two.

<div class="ndl-images">
    <img src="/guides/models-and-collections/check-mark-step2.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"94a38025-f370-b1e5-6700-4d2ca6eca15a","type":"Group","x":251.6487730624964,"y":426.1378094685841,"parameters":{"height":{"value":60,"unit":"px"},"flexDirection":"none"},"ports":[],"children":[{"id":"27d5785e-6634-f948-0d52-81eb5a5b796b","type":"Group","x":271.6487730624964,"y":508.1378094685841,"parameters":{"height":{"value":1,"unit":"px"},"alignY":"bottom","backgroundColor":"#E0E0E0","marginLeft":{"value":40,"unit":"px"},"marginRight":{"value":20,"unit":"px"}},"ports":[],"children":[]},{"id":"08f72a38-5416-a55b-deef-e7f15a763065","type":"Text","x":271.6487730624964,"y":554.1378094685841,"parameters":{"fontFamily":"OpenSans-Regular.ttf","text":"Task text","alignY":"center","marginLeft":{"value":40,"unit":"px"}},"ports":[],"children":[]},{"id":"5f12f5e3-0797-1ff2-827f-0f107b8a91d6","type":"/Parts/Check Mark","x":271.6487730624964,"y":636.1378094685841,"parameters":{},"ports":[],"children":[]}]},{"id":"483f5fbd-d532-56ed-84ae-1f3005ce60a4","type":"Component Outputs","x":561.6980374538364,"y":420.1033739471129,"parameters":{},"ports":[{"name":"Click","plug":"input","type":"*","index":0}],"children":[]},{"id":"9a3459c4-4333-4e72-9ce1-fa2e53846ca0","type":"Component Inputs","x":-295.62036281479845,"y":452.5618525606613,"parameters":{},"ports":[{"name":"Text","plug":"output","type":{"name":"*"},"index":1},{"name":"Id","plug":"output","type":{"name":"*"},"index":2}],"children":[]},{"id":"64219a21-8ad4-00e2-0b3b-ec9d1c19e0c6","type":"PageStackNavigate","x":18.402253261914552,"y":380.18013999658916,"parameters":{"stack":"App","target":"3ohr"},"ports":[],"children":[]},{"id":"b139bb1d-a732-8ed6-15af-7b8367282d50","type":"DbModel","x":-34.967824759137784,"y":609.4957939932369,"parameters":{"$ndlCollectionName":"Tasks"},"ports":[],"children":[]}],"connections":[{"fromId":"94a38025-f370-b1e5-6700-4d2ca6eca15a","fromProperty":"onClick","toId":"483f5fbd-d532-56ed-84ae-1f3005ce60a4","toProperty":"Click"},{"fromId":"9a3459c4-4333-4e72-9ce1-fa2e53846ca0","fromProperty":"Text","toId":"08f72a38-5416-a55b-deef-e7f15a763065","toProperty":"text"},{"fromId":"9a3459c4-4333-4e72-9ce1-fa2e53846ca0","fromProperty":"Id","toId":"64219a21-8ad4-00e2-0b3b-ec9d1c19e0c6","toProperty":"pm-Task Id"},{"fromId":"94a38025-f370-b1e5-6700-4d2ca6eca15a","fromProperty":"onClick","toId":"64219a21-8ad4-00e2-0b3b-ec9d1c19e0c6","toProperty":"navigate"},{"fromId":"9a3459c4-4333-4e72-9ce1-fa2e53846ca0","fromProperty":"Id","toId":"b139bb1d-a732-8ed6-15af-7b8367282d50","toProperty":"modelId"},{"fromId":"b139bb1d-a732-8ed6-15af-7b8367282d50","fromProperty":"Completed","toId":"5f12f5e3-0797-1ff2-827f-0f107b8a91d6","toProperty":"State"},{"fromId":"5f12f5e3-0797-1ff2-827f-0f107b8a91d6","fromProperty":"State","toId":"b139bb1d-a732-8ed6-15af-7b8367282d50","toProperty":"Completed"},{"fromId":"5f12f5e3-0797-1ff2-827f-0f107b8a91d6","fromProperty":"Click","toId":"b139bb1d-a732-8ed6-15af-7b8367282d50","toProperty":"save"}]})'></button>      
</div>

Pat yourself on the back because you have just hooked up the app to a cloud storage to save the tasks. You can try to edit the tasks, check them completed and uncheck. Refreshing the viewer or reloading the app in a browser will retain the same state. Now you essentially have a shared tasks list app that you could deploy and use.
