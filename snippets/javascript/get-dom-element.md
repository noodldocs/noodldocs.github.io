# Get DOM element

<div class="ndl-images">
    <img src="/snippets/javascript/get-dom-element.png" class="ndl-image large"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"8e6dad7a-3a4d-a3bc-ae25-d53ee9cb222a","type":"Group","x":378.5,"y":142,"parameters":{},"ports":[],"children":[]},{"id":"c2a631bb-5168-fefd-6601-2ff77fa385f4","type":"Javascript2","label":"Get DOM Element","x":138.5,"y":133,"parameters":{"code":"Node.Inputs = {\n    group:\"reference\"\n}\n\nNode.Signals = {\n    didMount() {\n        const domElement = ReactDOM.findDOMNode(Node.Inputs.group.getRef());\n        //domElement.addEventListener(...)\n    },\n    willUnmount() {\n        // const domElement = ReactDOM.findDOMNode(Node.Inputs.group.getRef());\n        // domElement.removeEventListener(...)\n    }\n}\n","scriptInputs":[]},"ports":[],"children":[]}],"connections":[{"fromId":"8e6dad7a-3a4d-a3bc-ae25-d53ee9cb222a","fromProperty":"didMount","toId":"c2a631bb-5168-fefd-6601-2ff77fa385f4","toProperty":"didMount"},{"fromId":"8e6dad7a-3a4d-a3bc-ae25-d53ee9cb222a","fromProperty":"willUnmount","toId":"c2a631bb-5168-fefd-6601-2ff77fa385f4","toProperty":"willUnmount"},{"fromId":"8e6dad7a-3a4d-a3bc-ae25-d53ee9cb222a","fromProperty":"this","toId":"c2a631bb-5168-fefd-6601-2ff77fa385f4","toProperty":"group"}]})'></button>
</div>

Sometimes you need to get access to the underlying DOM element and use the browser APIs directly.

There are two layers we need to get through, first Noodl and then React.

To get from Noodl to React we'll connect a visual node to a Javascript node. The input type should be `"reference"` (or `"*"` to accept all types). This example uses a Group, but any visual node will work.
```js
Node.Inputs = {
    group:"reference"
}
```

Once we have the reference to a Noodl node we can get the React component reference with `getRef()` on the Noodl node.

To get the DOM element we need to use `ReactDOM.findDOMNode(ref)` function. This will get us what we're after, the "raw" browser DOM element. We can then access the style, add event listeners, and so on.

To make sure there's a DOM element we'll use the **Did Mount** output from the Noodl node. This makes sure we'll get the latest DOM reference, and that our code won't run until the visual node is actually rendered.

```js
Node.Inputs = {
    group:"reference"
}

Node.Signals = {
    didMount() {
        const domElement = ReactDOM.findDOMNode(Node.Inputs.group.getRef());
        //domElement.addEventListener(...)
    },
    willUnmount() {
        // const domElement = ReactDOM.findDOMNode(Node.Inputs.group.getRef());
        // domElement.removeEventListener(...)
    }
}

```