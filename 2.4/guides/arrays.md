# Arrays

Before you read this guide you should know how *Variables* and *Objects* work, if you are not familiar with these concepts please read the [guide](/guides/variables-and-objects.md). It is also helpful if you are famaliar with some of the uses for arrays, take a look at this [guide](/guides/for-each.md) to learn more.

Now as you might remember *Variables* are used to store single values and *Objects* are used to store a set of values as object properties. *Arrays* are used to store many *Objects* in a list. You can achieve this all through the **Array** node, which also has an *Id* property that specifies which array this particular node is reading from and writing to. 

<div class="ndl-images">
    <img src="/guides/arrays/array-id.png" class="ndl-image med"></img>  
     <img src="/guides/arrays/array-node.png" class="ndl-image med"></img>  
</div>

In the example above we have specified *Users* as the *Id* which then shows up on the array node in the editor. This will initially be an empty array. You can also make connections to the *Id* input, or if you don't specify any *Id* at all an empty array will be created with a unique id when you star doing operations using the node.

## Adding and removing objects
The first thing to learn is how to add to and remove objects from an array. What you need to do is to provide the *Id* of the object you want to add to your array by connecting to the **Item Id** input of the **Array** node.

Then you connect and send a signal on the **Add** input and the object referenced by current value on the **Item Id** input will be added to the array.

<div class="ndl-images">
    <img src="/guides/arrays/simple-add.png" class="ndl-image med"></img>  
</div>

The same goes for **Remove** , when a signal is received on this input the object, if it exists, in the array with the *Id* equal to **Item Id** will be removed. Lets take a look at this simple example below, you can import the project into a Noodl project if you like to test it out. It shows a common pattern for working with arrays and objects.

<div class="ndl-images">
    <img src="/guides/arrays/add-remove-example.png" class="ndl-image large"></img>  
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/arrays/add-remove-example.zip")'></button>
</div>

In this example there is a *Text Input* and a button *Group* that will be used to add objects to the *Users* array. You can also click the user items in the list to remove them.

<div class="ndl-images">
    <img src="/guides/arrays/add-remove-example-screen.png" class="ndl-image large"></img>  
</div>

Now lets look at some of the parts of this small Noodl app. First when we add new objects:

<div class="ndl-images">
    <img src="/guides/arrays/add-object-closeup.png" class="ndl-image large"></img>  
</div>

* The name of the user from the *Text Input* is passed to the *Name* property of the object.

* When the button is clicked the *New* signal is sent to the *Object* node. This will make the node create a new object with a unique id and set any current values on the property inputs on that object. From now on this node will act on this newly created object. It will also emit the *Created* signal to indicate that the object has been created properly.

<div class="ndl-images">
    <img src="/guides/arrays/add-object-closeup2.png" class="ndl-image med"></img>  
</div>

* The fresh unique id of the new object is passed to the *Item Id* input of the *Array* node that will contain our users.

* The *Created* signal is passed to the *Add* input signal which will add the object (since the *Item Id* input now has the object id) to the array.

Try typing a name and hit the *Add User* button to see they flow in the node graph. You can also inspect the content of the *Array* via the *Items* output.

<div class="ndl-images">
    <img src="/guides/arrays/inspect-items.png" class="ndl-image large"></img>  
</div>

That's it for adding items to the collection. Now lets take a look at removing items. It is done in a similar fashion but there are some interesting things here to look at:

<div class="ndl-images">
    <img src="/guides/arrays/remove-object.png" class="ndl-image large"></img>  
</div>

* The **For Each** node will emit output signals from the component instances it creates, see the [For Each guide](/guides/for-each.md) for more details. It will also pass the *Item Id* of the item that emitted the signal. This can be used to pass into our *Array* node.

* As you can see we are using a different node, but it has the same *Id*. All *Array* nodes with the same *Id* will act upon the same array of objects. This is a good way to structure your Noodl graphs so they become easier to read.



