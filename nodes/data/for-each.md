# For Each

Creates component instances for every item in a [Collection](/nodes/data/collection.md).
Place it as a child of a visual node, like [Group](/nodes/visual/group.md).

![](for-each.png ':class=img-size-m')


## Inputs
|Input|Type|Description|
|-----|----|-----------|
|Template Type|Enum|May be used to enable dynamic templates. Can be **Explicit** or **Dyanmic**, see below.|
|Component|Component|Only visible when **Template Type** is set to _Explicit_. Choose what Component to create for each item.|
|Script|Script|Only visible when **Template Type** is set to _Dynamic_. Write a script to choose what Component to create for every item.|
|Items|Collection|The Models to use to create all the Components.|
|Refresh|Signal|Remove all created components and recreate them.|

**Template Type**
* **Explicit** - The same Component will be used for all items. 
* **Dynamic** - Use code to choose what Component to create for each item.










