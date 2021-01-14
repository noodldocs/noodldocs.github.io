# For Each

Noodl let's you create reusable components so that building front end interfaces is easier and faster. This guide will show you how reusable components can be used to show dynamic data in a list. 

Let's look at an example of a list of National Parks. You can import the example below into Noodl by clicking the import button.

<div class="ndl-images">
    <img src="/guides/for-each/screen.png" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/for-each/project-v2.zip",{name:"For Each Guide",thumb:"guides/for-each/screen.png"})'></button>
</div>

## The For Each node

There are two components, **Main** and **Item**, in the imported project. The **Item** component contains the nodes that comprise the items in the list (as the name implies).

<div class="ndl-images">
    <img src="/guides/for-each/item-comp.png" class="ndl-image large"></img>  
</div>

The **Item** component is then used twice in the **Main** component. Each instance of the **Item** component has it's own input values for the image and two labels.

<div class="ndl-images">
    <img src="/guides/for-each/main-comp.png" class="ndl-image med"></img>  
     <img src="/guides/for-each/item-props.png" class="ndl-image small"></img>  
</div>

To utilize dynamic data, let's change the node graph by replacing the the two **Item** components with a **For Each** node.

The **For Each** node dynamically creates components based on the data it is given in it's **Items** input port. We will go through the **For Each** node in more detail later in this guide.

There are many ways to bring data into Noodl, but in this example we will use a **Static Array** with static data.
Below you can see the new node graph we want to create. You can copy the nodes and replace the previous node graph in your project.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-nodes.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"c742d550-e134-e5ad-c6c3-0466ab68e456","type":"Group","x":430.22076842300993,"y":360.61425173633353,"parameters":{"backgroundColor":"#FFFFFF","scrollBehavior":"native","scrollEnabled":true},"ports":[],"children":[{"id":"26ca28ad-bc2c-43fe-e75d-95f8394e99d1","type":"For Each","x":450.22076842300993,"y":406.61425173633353,"parameters":{"template":"/Item"},"ports":[],"children":[]}]},{"id":"cdc83bfe-8962-cd05-7ac8-9e3c479d6aa0","type":"Static Data","x":158.22076842300993,"y":409.61425173633353,"parameters":{"csv":"","type":"json","json":"[\n     {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Grand_Canyon_view_from_Pima_Point_2010.jpg/460px-Grand_Canyon_view_from_Pima_Point_2010.jpg\",\n        \"Name\":\"Grand Canyon\",\n        \"Location\":\"Arizona,USA\"\n    },   \n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/568px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg\",\n        \"Name\":\"Yosemite\",\n        \"Location\":\"California,USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YellowstonefallJUN05.JPG/500px-YellowstonefallJUN05.JPG\",\n        \"Name\":\"Yellowstone\",\n        \"Location\":\"Idaho, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/568px-Zion_angels_landing_view.jpg\",\n        \"Name\":\"Zion National Park\",\n        \"Location\":\"Utah, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hvannadalshnjukur-Vatnajokull_National_Park.JPG/568px-Hvannadalshnjukur-Vatnajokull_National_Park.JPG\",\n        \"Name\":\"Vatnajökull\",\n        \"Location\":\"Iceland\"\n    }\n    \n]"},"ports":[],"children":[]}],"connections":[{"fromId":"cdc83bfe-8962-cd05-7ac8-9e3c479d6aa0","fromProperty":"items","toId":"26ca28ad-bc2c-43fe-e75d-95f8394e99d1","toProperty":"items"}]})'></button>
</div>

Let's go through this new node graph, and let's start with the simple data node **Static Array**. This node is great for specifying small pieces of data that typically does not change. The **Static Array** node you pasted in, already has a small snippet of data filled in. You can edit the data by editing the properties of the node. The data can be specifed in CSV or JSON format.

<div class="ndl-images">
    <img src="/guides/for-each/static-array.gif" class="ndl-image large"></img>  
</div>

The **Static Array** node will output the specified data in an output port called **Items**. These types of outputs generally contain arrays. You can review the content of the items that are being outputted by hovering over the connection. This is particulary useful when you are loading data from different sources and you want to review its content.

<div class="ndl-images">
    <img src="/guides/for-each/hover-data.png" class="ndl-image large"></img>  
</div>

The array of items are fed into the **For Each** node by connecting it to the input port called **Items**.
_For each_ object in the array of items, the **For Each** node creates an instance of a specified component. The component it creates is specified in the **Component** property of the **For Each** node.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-props.png" class="ndl-image med"></img>  
</div>

In this example, we use the **Item** component that was previously used in our static design. The For Each node creates **Item** component instances dynamically, based on the data received in the **Items** input port.

As you can see this data contains an array of objects, each with the attributes **Image**, **Name** and **Location**. These attributes match the input ports of our **Item** component and they will automatically be set by the For Each node.

Your Noodl project should now have a list with more items. You can try to add new items to the data in the **Static Array** node and see how the list updates.

## Item signals

If you take a closer look at the **Item** component you will see that it has an output that is connected to the **Click** signal of the top level Group. When the item is clicked it will send a signal on the **Click** output.

<div class="ndl-images">
    <img src="/guides/for-each/item-click.png" class="ndl-image large"></img>  
</div>

Normally you use these kind of outputs to trigger actions from your component, but when you are using the component via a **For Each** node, you can't connect to component outputs directly. In the next section we will show you how to create a popup for the list as shown below.

<div class="ndl-images">
    <img src="/guides/for-each/popup.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/for-each/popup-v2.zip")'></button>
</div>

Start by importing the **Popup** component into your existing project. Next you need to add the popup to your app in the **Main** component. Open the **Main** component and create a new **Group** node, edit the properties of the newly created node and make sure the **Layout** is set to **None**. Then make the existing **Group** a child of the newly created one and add the **Popup** component as the last child. You should end up with the following node graph:

<div class="ndl-images">
    <img src="/guides/for-each/popup-added.png" class="ndl-image med"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"caeb1584-3743-a478-3a77-250e8df36e77","type":"Static Data","x":211.4379259824135,"y":213.128734486496,"parameters":{"csv":"","type":"json","json":"[\n     {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Grand_Canyon_view_from_Pima_Point_2010.jpg/460px-Grand_Canyon_view_from_Pima_Point_2010.jpg\",\n        \"Name\":\"Grand Canyon\",\n        \"Location\":\"Arizona,USA\"\n    },   \n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg/568px-Tunnel_View%2C_Yosemite_Valley%2C_Yosemite_NP_-_Diliff.jpg\",\n        \"Name\":\"Yosemite\",\n        \"Location\":\"California,USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YellowstonefallJUN05.JPG/500px-YellowstonefallJUN05.JPG\",\n        \"Name\":\"Yellowstone\",\n        \"Location\":\"Idaho, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/568px-Zion_angels_landing_view.jpg\",\n        \"Name\":\"Zion National Park\",\n        \"Location\":\"Utah, USA\"\n    },\n    {\n        \"Image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hvannadalshnjukur-Vatnajokull_National_Park.JPG/568px-Hvannadalshnjukur-Vatnajokull_National_Park.JPG\",\n        \"Name\":\"Vatnajökull\",\n        \"Location\":\"Iceland\"\n    }\n    \n]"},"ports":[],"children":[]},{"id":"09a4bbba-549a-038c-eb44-cae7abf16282","type":"Group","x":416.27564730568224,"y":117.46288089582201,"parameters":{"flexDirection":"none"},"ports":[],"children":[{"id":"4e4d41b2-0201-7ca4-2f7f-eab7a0431620","type":"Group","x":436.27564730568224,"y":163.46288089582202,"parameters":{"backgroundColor":"#FFFFFF","scrollBehavior":"native","scrollEnabled":true},"ports":[],"children":[{"id":"664c48be-1895-728c-3826-2fe08dfbe593","type":"For Each","x":456.27564730568224,"y":209.46288089582202,"parameters":{"template":"/Item"},"ports":[],"children":[]}]},{"id":"25aa2e6a-7add-a52c-275b-24206f595b74","type":"/Popup","x":436.27564730568224,"y":291.462880895822,"parameters":{},"ports":[],"children":[]}]}],"connections":[{"fromId":"caeb1584-3743-a478-3a77-250e8df36e77","fromProperty":"items","toId":"664c48be-1895-728c-3826-2fe08dfbe593","toProperty":"items"}]})'></button>
</div>

If you look at the properties of the **Popup** component instance you can see that it has properties for **Name**, **Location** and **Image**, just the properties we need. You can try to manually open and close the popup by checking and unchecking the **Visible** property.

<div class="ndl-images">
    <img src="/guides/for-each/popup-props.png" class="ndl-image small"></img>  
</div>

When the popup appears you can see that it is empty. Now we want to show the popup when one of the items in the list is clicked. The **For Each** node will automatically detect any signal outputs that the template component has and expose those as outputs. The **Popup** component also happens to have a **Show** input, so it is very easy to create the logic that shows the popup when an item is clicked. Simply make the connection below:

<div class="ndl-images">
    <img src="/guides/for-each/click-to-show.png" class="ndl-image large"></img>  
</div>

You can use the X at the top of the popup to close it. Give it a try. If you like, you can take a look at the contents of the **Popup** component and how it uses the **States** node to open and close the popup. You can review the states [guide](/guides/states.md) to learn more about states and the **States** node.

As you can see the popup is empty when it shows up, so now we need to fill it with the correct content.

## Objects

The data in the **Items** output from the **Static Array** node is actually an array (list) of individual objects. You can review the data by hovering over the **Items** connection. Each of these objects are represented visually as an **Item** component thanks to the **For Each** node. Each object also has a unique identifier. This is just a random string of characters, but it can be used to uniquely identify an object within a Noodl app.

When the **For Each** node emits the **Click** signal from a component it will also provide the unqiue identifier of the component that triggered the signal. This is outputted on an output called **Item Id** on the For Each node. Now we want to access the individual attributes of the object, the **Name**, **Location** and **Image** and input those into the popup component. We can use the **Object** node and the following node graph to achieve that.

<div class="ndl-images">
    <img src="/guides/for-each/object-node.png" class="ndl-image large"></img>  
</div>

To achieve the node graph above:

- Create an **Object** node.
- Connect the **Item Id** output of the **For Each** node to the **Id** input of the **Object** node.
- Open the properties of the **Object** node and create the **Name**, **Location** and **Image** properties.

<div class="ndl-images">
    <img src="/guides/for-each/object-props.gif" class="ndl-image large"></img>  
</div>

You need to explicitly create outputs for the properties that you want to access. Each property that you specify will generate an output (and input) on the **Object** node.

- Finally connect the **Name**, **Location** and **Image** outputs from the **Object** node to the corresponding inputs on the **Popup** node.

Voila! Now you can open the popup by clicking a list item and it will show the content for that item. You can also inspect the data as it flows in the node graph by hovering over the connections. You can pin an inspector by clicking it so that you can see the connections updating as you navigate your app.

<div class="ndl-images">
    <img src="/guides/for-each/props-updating.gif" class="ndl-image large"></img>  
</div>

If you hover over the **Item Id** to **Id** connection you can see the **Id** of the object. The **Id** can actually be any string, but when Noodl assigns ids they become random unique strings. When the **Item Id** output is updated it is pushed to the Object node which then "switches" to the new object reference by using the **Id** and thus updates it's outputs accordingly. This in turn will push the new values for **Image**, **Location** and **Name** to the popup component.

## The Item Id

One more thing to mention before we wrap up this guide, is how the item **Id** is passed to each component instance. In our example, the **For Each** node generates an **Item** component for each object that is in the array of data that's connected to the **Items** input port for the **For Each** node. As you can see by taking a look at the **Item** component, each property of the object is passed as **Component Inputs** and can them be connected. Actually the **Id** of the object is also passed and can be used to access the object.

Take a look at the following change in the **Item** component.

<div class="ndl-images">
    <img src="/guides/for-each/for-each-item.png" class="ndl-image large"></img>  
</div>

Here you can see that the **Location** attribute is accessed by adding an **Object** node like we did before and connecting the **Id** component input to the **Id** of the object. Since the **Id** will referece the particular object that corresponds to each component intstance the **Object** node will access that particular object and in turn access the **Location** for the object.
