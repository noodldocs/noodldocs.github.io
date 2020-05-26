# Collection

A collection of models, mainly used together with a [For Each](/nodes/data/for-each.md) Node.

![](collection.png ':class=img-size-m')

## Inputs

|Input|Type|Description|
|-----|----|-----------|
|Items|Collection|Sets the items in a collection. Useful when you set the data with a [Static Data](/nodes/data/static-data.md) node.|
|Item Id|String|The item id to add or remove. Unsed in conjunction with the **Add** or **Remove** inputs.|
|Add|Signal|Add the Model with the id specified with the **Item Id** input to this collection.|
|Remove|Signal|Remove the Model with the id specified with the **Item Id** input from this collection.|
|Clear|Signal|Remove all models in the collection|
|Id|String|Set the Id for this collection. All collection nodes with the same Id will refer to the same collection and have the same items.|


## Outputs
|Output|Type|Description|
|------|----|-----------|
|Id|String|The Id for this Collection|
|Items|Collection|A `Noodl.Collection` object that can be connected to a [For Each](/nodes/data/for-each.md) node.|
|Count|Number|The number of items in the Collection|

 </div>
