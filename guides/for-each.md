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


