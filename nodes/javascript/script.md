# Script

The **Script** node is used when you need to create more complex Javascript code and it provides a few more capabilities over the [Function](/nodes/javascript/function.md) node which can be used for simpler scripts. One difference is the the code in the **Script** is executed as soon as the node is created, to create signals, detect change on inputs etc the **Node** object can be used. More details in the javascript [guide](/guides/javascript.md).

You can choose to either write your script code directly in Noodl, just like the **Function** node, but you can also provide an external file that is part of your project folder. This is all achieved via the properties.

![](script-1.png ':class=img-size-m')

Just as with the **Function** node any **Inputs** and **Outputs** used in the code will automatically become inputs and outputs of the node, but you can also add inputs and outputs directly via the property panel.

![](function-3.png ':class=img-size-m')



