# Model relationships

We learned how *Models* and *Collections* work in a previous [guide](/guides/models-and-collections.md) and how to use them to store data in the cloud. Another important concept is relationships between models. This is often used when modeling data in applications. 

If we imagine an app where we have a couple of different collections, say a *Post* collection with blog posts and a *Comment* collection with comments on these post. These models need to be related and we need to be able to query these relations.

## One-to-many relationships
This type of relationship is often referred to as a *one-to-many* relationship, in that one blog *Post* will have many *Comment*s, but each comment only belong to one post. This is done using a special type of property called a *Pointer*. 

A *Pointer* property can reference another model of a certain class via it's *Id*. In this case we want to reference the *Post* that is the owner of a *Comment*. So in the *Comment* class we create the *Owner* property, and give it a *Pointer* type and specify that it should point to *Post* models.

<div class="ndl-images">
    <img src="/guides/relations/create-pointer.png" class="ndl-image med"></img>
</div>

Now when you create a new *Comment* model you can simply pass the *Id* of the *Owner* model, it should be a *Post* model that is the owner.

<div class="ndl-images">
    <img src="/guides/relations/insert-comment.png" class="ndl-image large"></img>
</div>

When you have a *Post* model and you want to query all *Comments* on the post you need to use the advanced filter format in the *Query Collection* node. The filter you need is the following:

```javascript
where({ 
    {Owner:{pointsTo:Inputs.PostId}}
})
```

What this filter does is that it will only select the models where the *Owner* property contains a specific *Id*, something that we will provide to the *Query Collection* via an input connection.

<div class="ndl-images">
    <img src="/guides/relations/query-comments.png" class="ndl-image large"></img>
</div>

What you get is really a back reference from the *Comment*, it has a *Pointer* property that points to it's owner and that is used to filter out the *Comment*s for a given *Post* when needed.

You can inspect your relationships in the data browser, if you go ahead and open the *Dashboard* for the cloud services and find the *Comment* table. There you can see the model *Id* that the pointer currently points to, and you can click it to jump to that particular model.

<div class="ndl-images">
    <img src="/guides/relations/comments-owner.png" class="ndl-image med"></img>
</div>

## Many-to-many relationships
Let's say that we introduce a new model called *Group*, and a *Post* can be part of many different *Group*s. In this case we cannot use the backwards pointing mechanism from the previous example. Instead we need to use a concept called *Relation*. You need to start by creating a new property of the *Group* model that have the type *Relation* and like pointers you need to specify the *Type* and give it a name.

?> So in this case it becomes a *forward* reference, the *Group* has the relation property.

<div class="ndl-images">
    <img src="/guides/relations/create-relation.png" class="ndl-image med"></img>
</div>

When you have a *Relation* property on a model you will get some additional inputs that you can use in to manage relations.

<div class="ndl-images">
    <img src="/guides/relations/relation-inputs.png" class="ndl-image small"></img>
</div>

Just like you would use an [Array](/guides/arrays.md) you can provide an *Id* to a model (it needs to be from the *Post* collection) and then send a signal to *Remove* or *Add* in the relation group to remove or add a relation to the model.

<div class="ndl-images">
    <img src="/guides/relations/add-posts-relation.png" class="ndl-image large"></img>
</div>

In the same manner as with *Pointers* you can go to the *Dashboard* of the cloud services and find the relations of your models in the table. You can click *View relation* to get a table of the relations for this particular model.

<div class="ndl-images">
    <img src="/guides/relations/view-relation.png" class="ndl-image med"></img>
</div>

Finally you need to be able to query the relations. So let's say that we have a *Group* model by *Id* and we want to find all *Posts* that are related to that group. For this you will also need the *advanced* filter setting of the *Query Collection*. You would create a *Query Collection* node and make sure it is set to the *Post* collection. Then put in the following *advanced* filter.

```javascript
where({ 
    {relatedTo: {id:Inputs.GroupId, key:'posts'}
})
```

The above filter will make sure to only return the *Post* models that are related to the provided *Group* via the *GroupId* input and that are related via the *posts* property of the *Group*. This is how you might hook it up in the node graph.

<div class="ndl-images">
    <img src="/guides/relations/query-posts-in-group.png" class="ndl-image large"></img>
</div>