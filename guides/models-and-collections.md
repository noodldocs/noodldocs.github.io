# Models and collections
In the guide on variables and objects, take a look at it [here](/guides/variables-and-objects.md) if you have not already, you learned how to store data in memory. This is useful, but as you might have figured out the data is reset every time you refresh your browser or viewer. Most use cases will require persistent data, this is where **Models** and **Collections** enter.

* **Model** A Model node is an extended Object. It works like an object where you can set and fetch values but it also includes functionality to store in a persistent database.

* **Collection** A collection contains a set of models of a specific type. It can be used to fetch all or some of these models from the persistent storage.

Let's take a closer look at Models and Collections with this example project. You can import the project below, it is a static Task app that we will turn into a functional database backed app.

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
    <img src="/guides/models-and-collections/task-items.png" class="ndl-image med"></img>   
</div>

To do this we first need to create a new collection for our Tasks. This is done via the database panel.

<div class="ndl-images">
    <img src="/guides/models-and-collections/database-panel.png" class="ndl-image med"></img>   
</div>

At the bottom of the panel you can create a new **Collection** call it *Tasks* and make sure you pick *Local Collection*. There are two types of Collections you can create, local and cloud.

* **Local Collection** These will contain static data that will be refreshed everytime you reload the viewer or browser. This might sound strange since we want to do persistent storage but these are great when you are testing things out since you can put in a start state that you can easily reset to.

* **Cloud Collection** These collections are stored in the cloud and persistent in real time between all current users. This is what we will use later. You can switch between the two at any time.

<div class="ndl-images">
    <img src="/guides/models-and-collections/create-collection.png" class="ndl-image med"></img>   
</div>

Now that we have our Collection let's put some test data into it. Create a Model with the attributes *Text* and *Completed*, the latter should be a boolean (indicating if the task is completed or not). When you add models to a collection you use JSON which is great to [learn](https://www.w3schools.com/js/js_json_intro.asp) if you have not already done so.

<div class="ndl-images">
    <img src="/guides/models-and-collections/add-model.gif" class="ndl-image large"></img>   
</div>

Go ahead and add a few more models to the collection in the same way. Next up we will replace the static **Task Item** components with dynamically created ones, just like in the [For Each](/guides/for-each.md) guide. The setup below is what you want:

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-and-for-each.png" class="ndl-image large"></img>  
  <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"41b407b0-1d78-f7aa-7b77-d328431691be","type":"Group","x":-61.842898249714494,"y":106.85295677441763,"parameters":{},"ports":[],"children":[{"id":"794f0ee8-315e-26f8-4c91-f80ad40e0bc4","type":"Group","x":-41.842898249714494,"y":188.85295677441763,"parameters":{"backgroundColor":"#FFFFFF","paddingLeft":{"value":5,"unit":"px"},"paddingRight":{"value":5,"unit":"px"},"paddingTop":{"value":20,"unit":"px"},"paddingBottom":{"value":20,"unit":"px"},"position":"absolute"},"ports":[],"children":[{"id":"7e43e470-9c21-4367-9928-2aa482d5fb4e","type":"Text","x":-21.842898249714494,"y":234.85295677441763,"parameters":{"fontFamily":"OpenSans-Regular.ttf","text":"My Tasks","fontSize":{"value":30,"unit":"px"},"marginLeft":{"value":31,"unit":"px"}},"ports":[],"children":[]},{"id":"a263dc80-eefb-daea-71e2-1558b85caf07","type":"Group","x":-21.842898249714494,"y":280.85295677441763,"parameters":{"marginTop":{"value":20,"unit":"px"},"scrollBehavior":"native","clip":true,"marginBottom":{"value":20,"unit":"px"}},"ports":[],"children":[{"id":"64401a30-613c-4946-c15d-4e32c082222f","type":"For Each","x":-1.8428982497144943,"y":326.85295677441763,"parameters":{"template":"/Parts/Task Item"},"ports":[],"children":[]}]},{"id":"dbb3ccd8-419f-40a3-c85c-f1451cfe0113","type":"/Parts/Add Button","x":-21.842898249714494,"y":408.85295677441763,"parameters":{"Align X":"right","Align Y":"bottom","Margin Right":{"value":10,"unit":"px"},"Margin Bottom":{"value":10,"unit":"px"}},"ports":[],"children":[]}]}]},{"id":"7db8ff3d-9293-0393-58ff-22e404625cb9","type":"PageStackNavigate","x":244.43601436983369,"y":444.4054142410768,"parameters":{"target":"/Screens/New Task Screen","transition":"Popup","tr-direction":"Up","tr-timing":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"tr-fadein":true,"tr-shift":{"value":75,"unit":"%"}},"ports":[],"children":[]},{"id":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","type":"DbCollection","x":-321.5387225298615,"y":258.8532974218833,"parameters":{"collectionName":"Tasks"},"ports":[],"children":[]}],"connections":[{"fromId":"dbb3ccd8-419f-40a3-c85c-f1451cfe0113","fromProperty":"Click","toId":"7db8ff3d-9293-0393-58ff-22e404625cb9","toProperty":"navigate"},{"fromId":"41b407b0-1d78-f7aa-7b77-d328431691be","fromProperty":"didMount","toId":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","toProperty":"storageFetch"},{"fromId":"9bbb5f12-ecc6-032a-1dcc-49266eee53bb","fromProperty":"items","toId":"64401a30-613c-4946-c15d-4e32c082222f","toProperty":"items"}]})'></button>      
</div>

* Create a **Collection** node and set the *Collection Name* property to *Tasks*. This property is used to select which collection this node will access. If you create more collections they will show up here.

<div class="ndl-images">
    <img src="/guides/models-and-collections/collection-name.png" class="ndl-image small"></img>   
</div>

* Next, create a **For Each** and replace the three **Task Item** components with that single node. Make sure you select the *Task Item* component as the template component.

<div class="ndl-images">
    <img src="/guides/models-and-collections/for-each-template.png" class="ndl-image small"></img>   
</div>

* Connect the **Did mount** output of the top group to the **Fetch** input of the Collection node. The *Did mount* signal is triggered when these nodes become visible and when that happens we want the Collection to fetch the nodes from the database. We need to send the *Fetch* signal when we want to retrieve the content of the collection it is not done automatically just by setting the collection name.

* Finally connect the **Items** output of the Collection node to the **Items** input of the **For Each**. This will have the *For Each* node replicate the *Task Item* component once for every model in the Tasks collection.

You will need to refresh in order for the **Did mount** signal to be send so that the Collection node will fetch the models. This will result in one **Task Item** for every model in the collection, the *Text* you put in your data items should show up in the list.

<div class="ndl-images">
    <img src="/guides/models-and-collections/connected-tasks.png" class="ndl-image med"></img>   
</div>

Let's review what happened. Each item you create in the collection data panel will become one **Model** in Noodl containing all the attributes you entered. The *For Each* node will duplicate the **Task Item** component for every model in the collection and the attribute *Text* will be provided as a **Component Input** to the task items. In that component it is connected to the text node.

<div class="ndl-images">
    <img src="/guides/models-and-collections/text-attr-in-datapanel.png" class="ndl-image med"></img>   
    <img src="/guides/models-and-collections/task-item-text-connected.png" class="ndl-image med"></img>   
</div>

Next we'll dive into the **New Task Screen** and add functionality for creating new tasks. Here you will find a **Text Input** field and **Button** that should trigger the task creation.

<div class="ndl-images">
    <img src="/guides/models-and-collections/new-task-screen.png" class="ndl-image large"></img>  
</div>

Just like we used a **Collection** node to access the collection we will use a **Model** node to create a new Model in a Collection. These are the steps needed:

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

There you go, now you can create new task items and they will show up in the list. When a Model is added to a Collection all **Collection** nodes will automatically update and any **For Each** node or similar will update as well.  

