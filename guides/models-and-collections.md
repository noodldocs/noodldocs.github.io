# Models and collections

In the [Variables and Objects](/guides/variables-and-objects.md) guide you learned how to store data in memory. This is useful, but as you might have figured out the data is reset every time you refresh your browser or viewer. Most use cases require persistent data, and this is where **Models** and **Collections** enter the picture. With these we can store data in the cloud so it can persist and you can create multi user apps.

- **Model** A model typically represents an item that you want to store, e.g. a Task item in a task app, or a Shopping Item in a shopping cart. It is accessed via the model node. A Model node is an extended Object. It works like an Object where you can Set and Fetch values but it also includes functionality to save to the cloud.

- **Collection** A collection contains a set of models of a specific type. When you create a collection you typically name it after the type you want it to contain. You can access the models of a collection with the *Query Collection* node.

Let's take a closer look at Models and Collections with this example project. It is a static Task app that we will turn into a functional database backed app. You can import the project below.

<div class="ndl-images">
    <img src="/guides/models-and-collections/static-tasks-screen.png" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/models-and-collections/start-project.zip")'></button>
</div>

After importing you should have a number of components in your project. There should be one folder called **Parts** this folder contains the diffent UI components used in the screens. The other folder is called **Screens** and contains the three screens of the app.

* *Tasks Screen* This is the main screen, a list of all the tasks.
* *New Task Screen* This is the screen used to create new tasks.
* *Edit Task Screen* The screen where the user can edit a task.

You can use the *eye* icon to switch between the different components in the viewer, when you are done make sure the **Tasks Screen** is the visible. It contains three static task items that we will replace with dynamic data.

<div class="ndl-images">
    <img src="/guides/models-and-collections/task-items.png" class="ndl-image large"></img>   
</div>

We are going to use collections to store the data in the cloud. But to make collections available in this project we need to enable cloud services. This needs to be done in every project that uses any of the cloud features. More on this later, but for now simply open the cloud services popup and hit *enable*.

<div class="ndl-images">
    <img src="/guides/models-and-collections/enable-cloud-services.gif" class="ndl-image med"></img>  
</div>

Now you can open the collections panel from the toolbar to the left in the editor.

<div class="ndl-images">
    <img src="/guides/models-and-collections/database-panel.png" class="ndl-image med"></img>   
</div>

At the bottom of the panel you can create a new **Collection** call it _Tasks_. The name you give your collection should specify what type of object it will contain so it's easier to read your Noodlings later. Also you cannot use spaces in your collection names, only alphanumeric characters and underscore.

<div class="ndl-images">
    <img src="/guides/models-and-collections/create-new-collection.png" class="ndl-image med"></img>   
</div>

Now that we have our Collection we need to specify the schema for the models in the collection, a schema is simply a list of properties with types that all models in the collection share. Out _Tasks_ models will have two properties, a _Text_ with the task content and a _Completed_ that will store if the task is done or not. Open the collection by clicking on it and on the tab labeled _Schema_. Then create two properties.

* *Text* This property should be of type *String*, it will contain the text of the task.
* *Completed* This property should be of type *Boolean* so it can be either *true* for when a task has been marked completed, and *false* if not.

<div class="ndl-images">
    <img src="/guides/models-and-collections/schema.gif" class="ndl-image large"></img>   
</div>

With the schema in place we can add some test data to the collection, this is done in the other tab labeled *Data*. Create a Model with the attributes _Text_ and _Completed_. When you add models to a collection you use JSON which is great to [learn](https://www.w3schools.com/js/js_json_intro.asp) if you don't already know it.

<div class="ndl-images">
    <img src="/guides/models-and-collections/add-model.gif" class="ndl-image large"></img>   
</div>

Go ahead and add a few more models to the collection in the same way. Next up we will replace the static **Task Item** components with dynamically created ones, just like in the [For Each](/guides/for-each.md) guide. The setup below is what you want:

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-and-for-each.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"41b407b0-1d78-f7aa-7b77-d328431691be","type":"Group","x":-61.842898249714494,"y":106.85295677441763,"parameters":{},"ports":[],"children":[{"id":"794f0ee8-315e-26f8-4c91-f80ad40e0bc4","type":"Group","x":-41.842898249714494,"y":188.85295677441763,"parameters":{"backgroundColor":"#FFFFFF","paddingLeft":{"value":5,"unit":"px"},"paddingRight":{"value":5,"unit":"px"},"paddingTop":{"value":20,"unit":"px"},"paddingBottom":{"value":20,"unit":"px"},"position":"absolute"},"ports":[],"children":[{"id":"7e43e470-9c21-4367-9928-2aa482d5fb4e","type":"Text","x":-21.842898249714494,"y":234.85295677441763,"parameters":{"fontFamily":"OpenSans-Regular.ttf","text":"My Tasks","fontSize":{"value":30,"unit":"px"},"marginLeft":{"value":31,"unit":"px"}},"ports":[],"children":[]},{"id":"a263dc80-eefb-daea-71e2-1558b85caf07","type":"Group","x":-21.842898249714494,"y":280.85295677441763,"parameters":{"marginTop":{"value":20,"unit":"px"},"scrollBehavior":"native","clip":true,"marginBottom":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"64401a30-613c-4946-c15d-4e32c082222f","type":"For Each","x":-1.8428982497144943,"y":326.85295677441763,"parameters":{"template":"/Parts/Task Item"},"ports":[],"children":[]}]},{"id":"dbb3ccd8-419f-40a3-c85c-f1451cfe0113","type":"/Parts/Add Button","x":-21.842898249714494,"y":408.85295677441763,"parameters":{"Align X":"right","Align Y":"bottom","Margin Right":{"value":10,"unit":"px"},"Margin Bottom":{"value":10,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"7db8ff3d-9293-0393-58ff-22e404625cb9","type":"PageStackNavigate","x":244.43601436983369,"y":444.4054142410768,"parameters":{"target":"/Screens/New Task Screen","transition":"Popup","tr-direction":"Up","tr-timing":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"tr-fadein":true,"tr-shift":{"value":75,"unit":"%"}},"ports":[],"children":[]},{"id":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","type":"DbCollection","x":-321.5387225298615,"y":258.8532974218833,"parameters":{"collectionName":"Tasks"},"ports":[],"children":[]}],"connections":[{"fromId":"dbb3ccd8-419f-40a3-c85c-f1451cfe0113","fromProperty":"Click","toId":"7db8ff3d-9293-0393-58ff-22e404625cb9","toProperty":"navigate"},{"fromId":"41b407b0-1d78-f7aa-7b77-d328431691be","fromProperty":"didMount","toId":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","toProperty":"storageFetch"},{"fromId":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","fromProperty":"items","toId":"64401a30-613c-4946-c15d-4e32c082222f","toProperty":"items"}]})'></button>      
</div>

* Create a **Query Collection** node and set the *Collection Name* property to *Tasks*. This property is used to select which collection this node will access. If you create more collections they will show up here. This node is used to return all or some of the models in the collection.

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-name.png" class="ndl-image small"></img>   
</div>

* Next, create a **For Each** and replace the three **Task Item** components with that single node. Make sure you select the *Task Item* component as the template component.

<div class="ndl-images">
    <img src="/guides/models-and-collections/for-each-template.png" class="ndl-image small"></img>   
</div>

* Connect the **Did mount** output of the top group to the **Fetch** input of the *Query Collection* node. The *Did mount* signal is triggered when these nodes become visible and when that happens we want the *Query Collection* to fetch all models of the collection from the cloud storage. We need to send the *Fetch* signal when we want to retrieve the content of the collection it is not done automatically just by setting the collection name.

* Finally connect the **Items** output of the Collection node to the **Items** input of the **For Each**. This will have the *For Each* node replicate the *Task Item* component once for every model in the Tasks collection.

You will need to refresh in order for the **Did mount** signal to be send so that the Collection node will fetch the models. This will result in one **Task Item** for every model in the collection, the *Text* you put in your data items should show up in the list.

<div class="ndl-images">
    <img src="/guides/models-and-collections/connected-tasks.png" class="ndl-image med"></img>   
</div>

Let's review what happened. Each item you create in the collection data panel will become one **Model** in Noodl containing all the attributes you entered. The *For Each* node will duplicate the **Task Item** component for every model in the collection and the attribute *Text* will be provided as a **Component Input** to the task items. In that component it is connected to the text node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/text-attr-in-datapanel.png" class="ndl-image large"></img>   
</div>

<div class="ndl-images">
    <img src="/guides/models-and-collections/task-item-text-connected.png" class="ndl-image large"></img>   
</div>

Next we'll dive into the **New Task Screen** and add functionality for creating new tasks. Here you will find a **Text Input** field and **Button** that should trigger the task creation.

<div class="ndl-images">
    <img src="/guides/models-and-collections/new-task-screen.png" class="ndl-image large"></img>  
</div>

Just like we used a **Query Collection** node to access the collection we will use a **Model** node to create a new Model in a Collection. These are the steps needed:

* Create a **Model** node and set the **Collection Name** to **Tasks**. When you select a Collection the node will automatically get inputs for the attributes of the models in the collection.

* Connect the **Text** output from the **Text Input** node to the **Text** input of the **Model** node. This will push the text that you type in the text field to the model node.

* Create a **Boolean** node and connect the **Value** output to the **Completed** input of the model node. This will provide the default value of *false* for the completed attribute. (The boolean node value is false by default, you can of course change it if you want another value when creating the model.)

* Now connect **Click** from the Button to **Insert** on the Model. This will insert a new model into the collection when it receives a signal, i.e. when the button is clicked.

* Finnaly you can connect the **Saved** output signal from the Model node to the **Navigate** input on the **Navigate Back** node. This will close the popup when the Model has been successfully saved in the collection.

The setup below is what you want:

<div class="ndl-images">
    <img src="/guides/models-and-collections/new-task-model.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"888b0511-874c-dcc3-bf98-c98af68b48eb","type":"Group","x":-117.1255445807002,"y":283.08062013197235,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"0cc2e328-1acb-a922-1cab-2e6d445626eb","type":"/Parts/Header","x":-97.1255445807002,"y":329.08062013197235,"parameters":{"Title":"New task"},"ports":[],"children":[]},{"id":"4d13e6a1-e7ae-436a-b7f6-326f5006606c","type":"Group","x":-97.1255445807002,"y":411.08062013197235,"parameters":{"paddingLeft":{"value":20,"unit":"px"},"paddingRight":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"62036bbf-2a01-1a60-a048-04bc01ae30b3","type":"Text Input","x":-77.1255445807002,"y":457.08062013197235,"parameters":{"sizeMode":"explicit","type":"textArea","fontFamily":"OpenSans-Regular.ttf","fontSize":{"value":20,"unit":"px"},"color":"#545454","marginBottom":{"value":10,"unit":"px"}},"ports":[],"children":[]},{"id":"eba9b191-edc5-8eeb-eb58-611e0e339118","type":"/Parts/Button","label":"Save","x":-77.1255445807002,"y":539.0806201319724,"parameters":{"Label":"Save","Margin Bottom":{"value":20,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"524acf1f-f107-40a9-ca9f-d6bb19623579","type":"PageStackNavigateBack","x":-377.8536376170447,"y":276.4973969970899,"parameters":{},"ports":[],"children":[]},{"id":"5621ce0b-d4eb-4627-634a-bcaf2f67a4ca","type":"DbModel","x":-377.0510202634721,"y":425.2504935647117,"parameters":{"$ndlCollectionName":"Tasks"},"ports":[],"children":[]},{"id":"4163ea1a-0200-d710-07b1-31b4421fc329","type":"Boolean","x":-379.8940457253206,"y":583.2489203796379,"parameters":{},"ports":[],"children":[]}],"connections":[{"fromId":"0cc2e328-1acb-a922-1cab-2e6d445626eb","fromProperty":"Close","toId":"524acf1f-f107-40a9-ca9f-d6bb19623579","toProperty":"navigate"},{"fromId":"62036bbf-2a01-1a60-a048-04bc01ae30b3","fromProperty":"onTextChanged","toId":"5621ce0b-d4eb-4627-634a-bcaf2f67a4ca","toProperty":"Text"},{"fromId":"4163ea1a-0200-d710-07b1-31b4421fc329","fromProperty":"savedValue","toId":"5621ce0b-d4eb-4627-634a-bcaf2f67a4ca","toProperty":"Completed"},{"fromId":"eba9b191-edc5-8eeb-eb58-611e0e339118","fromProperty":"Click","toId":"5621ce0b-d4eb-4627-634a-bcaf2f67a4ca","toProperty":"insert"},{"fromId":"5621ce0b-d4eb-4627-634a-bcaf2f67a4ca","fromProperty":"saved","toId":"524acf1f-f107-40a9-ca9f-d6bb19623579","toProperty":"navigate"}]})'></button>      
</div>

What happened here is that a new *Model* was created and pushed to the cloud storage when the *Insert* signal was received. But as you can see the *Task Items* list does not update automatically to include the newly created model. New models that are created in cloud storage are not automatically sent to the client, instead we must query the collection again. This is a great place to use what we learned in the [events](/guides/events.md) guide. 

* In the *Tasks Screen* component. Create a *Receive Event* node that listens to the *Reload Tasks* event channel.

* Connect it to the *Fetch* signal of the *Query Collection* node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/receive-reload.png" class="ndl-image large"></img>  
</div>

This will have the *Query Collection* node fetch the models from the cloud storage and any newly created models will show up. Now make sure we send the event as well.

* In the *New Task Screen* component. Create a *Send Event* node that will send on the *Reload Tasks* channel.

* Connect the *Saved* signal from the *Model* node to the *Send* signal on the *Send Event* node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/send-reload.png" class="ndl-image large"></img>  
</div>

There you go, now you can create new task items and they will show up in the list. When the *Query Collection* returns the new *Result* that is passed to the *For Each* node it will update to reflect the new models.

?> You might wonder why the *Did mount* signal is not sent when we navigate back to the *Tasks screen* after creating a new model, thus forcing a *Fetch* from the *Query Collection*. The reason is that the navigation module will keep pages alive so to be more performant when navigation. The *Did mount* signal is only sent when a visual node is created and made visible.

Now let's move on to editing.

First we need to look at the **Task Item** component, here you can see that there is a Navigation node that navigates to the **Edit Task Screen** when the item is clicked. The **Id** of the task item is also passed as a navigation parameter. Just like **Objects** the *Id* of a Model uniquely identifies it, so to make sure we edit the right task that is passed and will be available as a component input in the **Edit Task Screen** component. To learn more about how navigation works take a look at the [navigation guide](/modules/mobile-web-app-nav/nav-guide).

<div class="ndl-images">
    <img src="/guides/models-and-collections/pass-task-id.png" class="ndl-image med"></img>  
</div>

Lets move on to the **Edit Task Screen** component. Here we first need to fix so that the current task text is shown. This is done through the following steps:

* Create a **Component Inputs** node and a **Task Id** input. This is the **Id** of the Model we are editing that was passed via the Navigation node.

* Create a **Model** node and set the **Colllection Name** to **Tasks**. Then connect the **Task Id** component input to the **Id** input of the model node.

* Finally connect the **Text** output of the Model node to the **Text** input of the **Text Input** node. This will send the text from the Model node when it is retrieved via the Id connection. So that the text input shows the current value of the Model's **Text** attribute.

<div class="ndl-images">
    <img src="/guides/models-and-collections/edit-task-step1.png" class="ndl-image large"></img>  
</div>

Now you can click the Task items and the **Edit Task Screen** is shown with the correct task text. You can edit the text input but nothing happens when you hit save. This is what we will do now, what you see below is what we want to build, to achieve this we need to:

* Create another **Model** node and set the collection name to **Tasks**. We could actually use the existing node but sometimes it is easier to create another so to illustrate how thats done we'll do that here.

* Connect the **Task Id** input to this new Model node as well. This is import to understand. As long as the two model nodes have the same **Id** they will work on the same model.

* Connect the **Text** from the **Text Input** to the new model's **Text** input.

* Connect the Save buttons **Click** to the **Save** signal input of the Model node. This will have the effect that when the button is clicked the node will Save the current value on it's inputs to the persistent database. This is similair to the **Set** signal but it will also persist the data.

* Finally connect the **Saved** output from the Model node to the **Navigate Back** node as shown below. This will trigger the back navigation and close the popup when the model has been succesfully saved.

<div class="ndl-images">
    <img src="/guides/models-and-collections/edit-task-step2.png" class="ndl-image large"></img>  
</div>

Now you can edit and save the Model, it will take you back to the tasks list and you can see the updated task in the list. There is also a Delete button on the screen, so let's connect that one too. We can use the existing Model node for this.

* Connect the Delete buttons **Click** output signal to the **Delete** input signal on the Model node.

* Connect the **Deleted** signal from the Model node to the **Navigate** input of the *Navigate Back* node. This will have the edit screen close and return to the tasks list when an item has been deleted.

Give it a try! So now we can **Create**, **Edit** and **Delete** out task items. That's pretty good. On thing to note is that we didn't have to send the *Reload Tasks* event, this is because any model that is already on the client, i.e. models that we have fetched previously, that are modified will be automatically updated. 

There is one last thing in this guide and that is to connect the check mark button for the items. This should be connected to the **Completed** attribute of the task Models.

In the **Task Item** component, another component is used, the **Check Mark**. This is a simple check button created with a states node, you can take a look at it and read the [states guide](/guides/states.md) to learn more. This component has both a boolean input (checked true or false) and a boolean output that is updated when the user clicks. Let's hook up this component to our data model.

* Create a **Model** node and choose our collection **Tasks**.

* Connect the **Completed** output from the **Model** node to the **State** input of the **Check Mark** component.

* We also need to provide the **Id** of the Model, so connect the **Item Id** output of the **For Each Item** node to the **Id** input of the **Model** node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/check-mark-step1.png" class="ndl-image large"></img>  
</div>

Now the **Completed** attribute of our task models will be visualized with a check mark. If you have a task in your collection that has Completed set to true it should be reflected in the task list. Now we also want any change made by the user saved in the database.

* Connect the **State** from **Check Mark** to the **Completed** in the **Model** node. So we essentially create a connection in the other direction as well. Before we used two nodes, one for reading and one for saving. You can use the same node if you like.

* Connect the **Click** signal from the **Check Mark** node to the **Save** input of the **Model**. So when the user clicks the check mark the Model will be saved to the database.

!> It's important to only do **Save** and **Insert** on Models on user interactions. If you hook up these to change signals or other non user events you can create feedback loops. It's not like you will disrupt the very fabric of time and space or anything but you could throw an exception or two.

<div class="ndl-images">
    <img src="/guides/models-and-collections/check-mark-step2.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"9878bcde-6bd2-ab34-3878-b6ba6912d0b9","type":"Group","x":251.6487730624964,"y":426.1378094685841,"parameters":{"height":{"value":60,"unit":"px"},"flexDirection":"none"},"ports":[],"children":[{"id":"0146bd28-9dfd-15ec-b282-992f6a1944c2","type":"Group","x":271.6487730624964,"y":508.1378094685841,"parameters":{"height":{"value":1,"unit":"px"},"alignY":"bottom","backgroundColor":"#E0E0E0","marginLeft":{"value":40,"unit":"px"},"marginRight":{"value":20,"unit":"px"}},"ports":[],"children":[]},{"id":"ecaaca53-2dba-71b0-174b-a8b4062e01eb","type":"Text","x":271.6487730624964,"y":554.1378094685841,"parameters":{"fontFamily":"OpenSans-Regular.ttf","text":"Task text","alignY":"center","marginLeft":{"value":40,"unit":"px"}},"ports":[],"children":[]},{"id":"5bd991ff-6333-c2e0-13e1-64fa2f10c479","type":"/Parts/Check Mark","x":271.6487730624964,"y":636.1378094685841,"parameters":{},"ports":[],"children":[]}]},{"id":"3659ec6d-42ff-6d03-64a7-0a7b66b24a27","type":"Component Outputs","x":561.6980374538364,"y":420.1033739471129,"parameters":{},"ports":[{"name":"Click","plug":"input","type":"*","index":0}],"children":[]},{"id":"862b661d-cbd0-38e7-aeff-814bdab062ee","type":"Component Inputs","x":520.642325918066,"y":574.1025604304423,"parameters":{},"ports":[{"name":"Text","plug":"output","type":{"name":"*"},"index":1}],"children":[]},{"id":"2b7d1860-18c4-96e2-bb28-52e22d29db05","type":"PageStackNavigate","x":570.2927032380076,"y":314.36537252167625,"parameters":{"target":"/Screens/Edit Task Screen","tr-direction":"Left","parameters":"Task Id"},"ports":[],"children":[]},{"id":"fbbbb144-e766-694d-081b-ac0412dbb763","type":"For Each Actions","x":226.94139646254027,"y":305.8264692525363,"parameters":{},"ports":[],"children":[]},{"id":"fdb5ca73-d040-a050-7ae4-cd7a46391600","type":"DbModel","x":-58.04124890956044,"y":461.30635426666413,"parameters":{"$ndlCollectionName":"Tasks"},"ports":[],"children":[]}],"connections":[{"fromId":"9878bcde-6bd2-ab34-3878-b6ba6912d0b9","fromProperty":"onClick","toId":"3659ec6d-42ff-6d03-64a7-0a7b66b24a27","toProperty":"Click"},{"fromId":"862b661d-cbd0-38e7-aeff-814bdab062ee","fromProperty":"Text","toId":"ecaaca53-2dba-71b0-174b-a8b4062e01eb","toProperty":"text"},{"fromId":"9878bcde-6bd2-ab34-3878-b6ba6912d0b9","fromProperty":"onClick","toId":"2b7d1860-18c4-96e2-bb28-52e22d29db05","toProperty":"navigate"},{"fromId":"fbbbb144-e766-694d-081b-ac0412dbb763","fromProperty":"itemId","toId":"2b7d1860-18c4-96e2-bb28-52e22d29db05","toProperty":"pm-Task Id"},{"fromId":"fbbbb144-e766-694d-081b-ac0412dbb763","fromProperty":"itemId","toId":"fdb5ca73-d040-a050-7ae4-cd7a46391600","toProperty":"modelId"},{"fromId":"fdb5ca73-d040-a050-7ae4-cd7a46391600","fromProperty":"Completed","toId":"5bd991ff-6333-c2e0-13e1-64fa2f10c479","toProperty":"State"},{"fromId":"5bd991ff-6333-c2e0-13e1-64fa2f10c479","fromProperty":"State","toId":"fdb5ca73-d040-a050-7ae4-cd7a46391600","toProperty":"Completed"},{"fromId":"5bd991ff-6333-c2e0-13e1-64fa2f10c479","fromProperty":"Click","toId":"fdb5ca73-d040-a050-7ae4-cd7a46391600","toProperty":"save"}]})'></button>      
</div>

Pat yourself on the back because you have just hooked up the app to a cloud storage to save the tasks. You can try to edit the tasks, check them completed and uncheck. Refreshing the viewer or reloading the app in a browser will retain the same state. Now you essentially have a shared tasks list app that you could deploy and use.