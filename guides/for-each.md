# DYNAMIC CONTENT
In this guide we are going to review how to create dynamic content. If you have not previously watched the video lesson on Components it's a good time to do that now. As you know you can create reusable components in Noodl that makes build interfaces much easier. But often you want to show dynamic data instead of just static content. Luckily it's quite easy to go from static to dynamic data in Noodl.

We will look at an example of a list of National Parks, you can import the example below into Noodl by clicking the import button. You need to have a project open to import into.

<div class="ndl-images">
    <img src="/guides/for-each/screen.png" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/for-each/project.zip")'></button>
</div>

## The For Each node
There are two components **Main** and **Item**, the latter component contains the nodes that comprise the items in the list (as the name implies).

<div class="ndl-images">
    <img src="/guides/for-each/item-comp.png" class="ndl-image med"></img>  
</div>

The **Item** component is then used twice in the **Main** component with different inputs for the image and two labels.

<div class="ndl-images">
    <img src="/guides/for-each/main-comp.png" class="ndl-image med"></img>  
     <img src="/guides/for-each/item-props.png" class="ndl-image small"></img>  
</div>

To turn this setup into a one with dynamic data we will replace the two **Item** components with a node called **For Each**. This node will dynamically create any component you tell it to based on data it takes as input in the **Items** input. There are many ways to bring data into Noodl but for simplicity we will use static data now. The setup we are going for is shown below. You can copy the nodes and replace the static ones in your project.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-nodes.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"e733a5af-1587-aa30-dd3b-563196297e99","type":"Group","x":464,"y":303,"parameters":{"backgroundColor":"#FFFFFF","scrollBehavior":"native"},"ports":[],"children":[{"id":"09bc84f0-99e8-b172-bdeb-3670f6362e85","type":"For Each","x":484,"y":349,"parameters":{"template":"/Item"},"ports":[],"children":[]}]},{"id":"593ad143-0560-19c7-3c04-5a26ea3a1893","type":"Static Data","x":192,"y":352,"parameters":{"csv":"","type":"json","json":"[\n     {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Grand_Canyon_view_from_Pima_Point_2010.jpg/460px-Grand_Canyon_view_from_Pima_Point_2010.jpg\",\n        \"Name\":\"Grand Canyon\",\n        \"Location\":\"Arizona,USA\"\n    },   \n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/568px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg\",\n        \"Name\":\"Yosemite\",\n        \"Location\":\"California,USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YellowstonefallJUN05.JPG/500px-YellowstonefallJUN05.JPG\",\n        \"Name\":\"Yellowstone\",\n        \"Location\":\"Idaho, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/568px-Zion_angels_landing_view.jpg\",\n        \"Name\":\"Zion National Park\",\n        \"Location\":\"Utah, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hvannadalshnjukur-Vatnajokull_National_Park.JPG/568px-Hvannadalshnjukur-Vatnajokull_National_Park.JPG\",\n        \"Name\":\"Vatnajökull\",\n        \"Location\":\"Iceland\"\n    }\n    \n]"},"ports":[],"children":[]}],"connections":[{"fromId":"593ad143-0560-19c7-3c04-5a26ea3a1893","fromProperty":"items","toId":"09bc84f0-99e8-b172-bdeb-3670f6362e85","toProperty":"items"}]})'></button>
</div>

Let's start with the simple data node **Static Array**, this node is great for specifying small pieces of data that typically does not change. In the node you pasted we have provided a small snippet of data. You can edit the data by editing the properties of the node. The data can be specifed in CSV or JSON format.

<div class="ndl-images">
    <img src="/guides/for-each/static-array.gif" class="ndl-image large"></img>  
</div>

The node will output the specified data in an output called **Items**. These types of outputs generally contain arrays. You can review the content of the items by hovering the connection. This is particulary useful when you are loading data from other sources and you want to review its content.

<div class="ndl-images">
    <img src="/guides/for-each/hover-data.png" class="ndl-image med"></img>  
</div>

As you can see the array of items are feed into the **For Each** component, the input also called **Items**. What the node does is that *for each* object in the array it creates an instance of a specified component. The component it creates is specified in the properties of the **For Each** node.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-props.png" class="ndl-image small"></img>  
</div>

In this example, we have choosen the **Item** component that we used previously in our static design. Now the For Each node creates component instances dynamically.

As you can see this data contains an array of objects each with the attributes **Image**, **Name** and **Location**. These attributes match the inputs of our **Item** component and they will automatically be set by the For Each node.

The result you should have now is a list with more items. You can try to add new items to the data in the **Static Array** node and see how the list updates.

## Item signals
If you take a closer look at the **Item** component you will see that it has an output that is connected to the **Click** signal of the top level Group. So when the item is clicked it will send a signal on it's output. 

<div class="ndl-images">
    <img src="/guides/for-each/item-click.png" class="ndl-image med"></img>  
</div>

Normally you could use these kind of outputs to trigger actions when you use your component, but when you are using the component via a **For Each** you can't connect to component outputs diretly. In the next section we will show you how to create a popup for the list as shown below.

<div class="ndl-images">
    <img src="/guides/for-each/popup.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/for-each/popup.zip")'></button>
</div>

Start by importing the **Popup** component into your project. Next you need to add the popup to your app in the **Main** component. Open the **Main** component and create a new **Group** node, edit the properties of the newly created node and make sure the **Layout** is set to **None**. Then make the existing Group a child of the newly created one and add the **Popup** component as the last child. You should end up with the following graph:

<div class="ndl-images">
    <img src="/guides/for-each/popup-added.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"af1444ee-0758-cf0a-a71c-85f10b77dfc3","type":"Group","x":370.7168944404044,"y":40.66047664062552,"parameters":{"flexDirection":"none"},"ports":[],"children":[{"id":"0146080e-db5a-77e3-dac0-3b5895b3237d","type":"Group","x":390.7168944404044,"y":86.66047664062552,"parameters":{"backgroundColor":"#FFFFFF","scrollBehavior":"native"},"ports":[],"children":[{"id":"d776b345-2cc2-da78-1e08-d596bd8fd1f4","type":"For Each","x":410.7168944404044,"y":132.66047664062552,"parameters":{"template":"/Item"},"ports":[],"children":[]}]},{"id":"2f6929e1-fff1-39dd-90df-f701ace1ae54","type":"/Popup","x":390.7168944404044,"y":214.66047664062552,"parameters":{},"ports":[],"children":[]}]}],"connections":[]})'></button>
</div>

If you look at the properties of the **Popup** component instance you can see that it has properties for the **Name**, **Location** and **Image** just the properties we need. You can try to manually open and close the popup by checking and unchecking the **Visible** property.

<div class="ndl-images">
    <img src="/guides/for-each/popup-props.png" class="ndl-image small"></img>  
</div>

When the popup appears you can see that it is empty. Now we want to show the popup when one of the items in the list is clicked. The **For Each** node will automatically detect any signal outputs that the template component has and expose those as outputs. The **Popup** component also happens to have a **Show** input, so it is very easy to create the logic that shows the popup when an item is clicked. Simply make the connection below:

<div class="ndl-images">
    <img src="/guides/for-each/click-to-show.png" class="ndl-image med"></img>  
</div>

You can use the cross at the top of the popup to close it again. Give it a try. If you like you can take a look at the contents of the **Popup** component and how it uses the **States** node to open and close, you can also review the states [guide](/guides/states.md) to learn more about that concept. Now as you can see the popup is empty and now we need to fill it with the correct content.

## Objects
The data in the **Items** output from the **Static Array** node is actually an array (list) of individual objects. You can review the data by hovering the **Items** connection. Each of these objects are represented visually by one list item via the **For each** node. Each object also has a unique identifier this is just a random string of characters but it can be used to uniquely identify an object within a Noodl app.

When the **For Each** node emits the **Click** signal from a component it will also provide the unqiue identifier of the component that triggered the signal. This is outputted on an output called **Item Id** on the For Each node. Now we want to access the individual attributes of the object, the **Name**, **Location** and **Image** and input those into the popup component. We can use the **Object** node and the following setup to achieve that.

<div class="ndl-images">
    <img src="/guides/for-each/object-node.png" class="ndl-image med"></img>  
</div>

To achieve the setup above:

* Create an **Object** node.
* Connect the **Item Id** output of the **For Each** node to the **Id** input of the **Object** node.
* Open the properties of the **Object** node and create the **Name**, **Location** and **Image** properties.

<div class="ndl-images">
    <img src="/guides/for-each/object-props.gif" class="ndl-image med"></img>  
</div>

You need to explicitly create outputs for the properties that you want to access. For each property that you specify you will get an output (and input) on the **Object** node.

* Finally connect the **Name**, **Location** and **Image** outputs from the **Object** node to the corresponding inputs on the **Popup** node.

And voila now you can open the popup by clicking a list item and it will show the content for that item. You can also inspect the data as it flows in the graph by hovering the connections, and you can pin an inspector by clicking it. So you can see the conenctions updating as you navigate your app.

<div class="ndl-images">
    <img src="/guides/for-each/props-updating.gif" class="ndl-image med"></img>  
</div>

There you can also see the **Id** of the object. The Id can actually be any string, but when Noodl assigns Ids they become random unique strings. When the **Item Id** output is updated it is pushed to the Object node which then "switches" to the new object reference by the Id and thus updates it's outputs accordingly. This in turn will push the new values for **Image**, **Location** and **Name** to the popup component.

## For each item
One more thing to mention before we wrap this guide up is the **For Each Item** node. This might be a bit tricky to visualize, but each **Item** component is duplicated many times by the **For Each** node and each time it has new inputs corresponding to the object that it is representing. You can also access the **Id** of the object the component is representing via the **For Each Item** node.

Take a look at the following change in the **Item** component.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-item.png" class="ndl-image med"></img>  
</div>

Here you can see that the **Location** attribute is accessed by adding an **Object** node like we did before and connecting the **Id** to the **Item Id** output of the **For Each Item** node. The result here is that each instance of the **Item** component will have a new output on **Item Id** that corresponds to that specific object in the array of objects. So the **Object** node will thus access that particular object.

This is a pattern that will be useful later.