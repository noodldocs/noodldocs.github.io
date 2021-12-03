# Get DOM element

<div class="ndl-image-with-background l">
    <img src="/snippets/javascript/get-dom-element.png"></img>
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"da9a319e-46ae-0bba-f9f0-64115fd8326a","type":"Group","x":-26,"y":-78.00000000000003,"parameters":{},"ports":[],"children":[]},{"id":"432255e5-cf33-ab78-5dfc-c468fa2d35f0","type":"Javascript2","label":"Get DOM Element","x":-266,"y":-87,"parameters":{"code":"Node.Inputs = {\n    group:\"reference\"\n}\n\nNode.Signals = {\n    didMount() {\n        const domElement = Node.Inputs.group.getDOMElement();\n        //domElement.addEventListener(...)\n    },\n    willUnmount() {\n        // const domElement = Node.Inputs.group.getDOMElement();\n        // domElement.removeEventListener(...)\n    }\n}\n","scriptInputs":[]},"ports":[],"children":[]}],"connections":[{"fromId":"da9a319e-46ae-0bba-f9f0-64115fd8326a","fromProperty":"didMount","toId":"432255e5-cf33-ab78-5dfc-c468fa2d35f0","toProperty":"didMount"},{"fromId":"da9a319e-46ae-0bba-f9f0-64115fd8326a","fromProperty":"willUnmount","toId":"432255e5-cf33-ab78-5dfc-c468fa2d35f0","toProperty":"willUnmount"},{"fromId":"da9a319e-46ae-0bba-f9f0-64115fd8326a","fromProperty":"this","toId":"432255e5-cf33-ab78-5dfc-c468fa2d35f0","toProperty":"group"}]})'></button>
</div>

Sometimes you need to get access to the underlying DOM element and use the browser APIs directly.

To get from a visual Noodl node to a DOM element we'll connect a visual node to a Script node. The input type should be `"reference"` (or `"*"` to accept all types). This example uses a Group, but any visual node will work.

```js
Node.Inputs = {
    group: 'reference',
}
```

Once we have the reference to a Noodl node we can get the DOM element reference with `getDOMElement()` on the Noodl node.

A visual node might be unmonted, or haven't had a chance to render yet. To make sure there's a DOM element we'll use the **Did Mount** output from the Noodl node. This makes sure we'll get the latest DOM reference, and that our code won't run until the visual node is actually rendered.

```js
Node.Inputs = {
    group: 'reference',
}

Node.Signals = {
    didMount() {
        const domElement = Node.Inputs.group.getDOMElement()
        //domElement.addEventListener(...)
    },
    willUnmount() {
        // const domElement = Node.Inputs.group.getDOMElement();
        // domElement.removeEventListener(...)
    },
}
```
