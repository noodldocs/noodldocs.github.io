# Static Array

Store static data to populate an [Array](nodes/data/array.md) with items. The Static Array node is great for providing static local data for lists etc. You can use it e.g. as an input to a **For Each** node.

![](static-array-1.png ':class=img-size-m')

You can provide the data in either **CSV** format or, **JSON** format. The **items** output is of **Noodl.Array** format. The content of the array is reset whenever the application is refreshed.

## Inputs
**Type**  
Choose what format the data will be in.

* **CSV** - Comma-separated values
* **JSON** - Javascript Object Notation

**CSV**  
The first row defines the name of all properties. Subsequent rows defines the data values.
Example:

    lamp,topic
    Kitchen Lamp,/lamps/1
    Office Lamp,/lamps/2
    Office Lamp 2,/lamps/4

**JSON**  
Define the name of the properties, and the data, using a JSON array.
Example:

    [
        {
            "lamp": "Kitchen Lamp",
            "topic": "/lamps/1"
        },
        {
            "lamp": "Office Lamp",
            "topic": "/lamps/2"
        },
        {
            "lamp": "Office Lamp 2",
            "topic": "/lamps/4"
        }
    ]

## Outputs

**Items**  
A `Noodl.Array` object that can be connected to e.g. an [Array](nodes/data/array.md), [Javascript](guides/javascript.md) or [For Each](nodes/data/for-each.md).

