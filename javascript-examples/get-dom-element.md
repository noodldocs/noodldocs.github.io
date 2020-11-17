# Get DOM element

<div class="ndl-images">
    <img src="/javascript-examples/get-dom-element.png" class="ndl-image large"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"03300332-670d-cffd-75e1-57fb2dc889d7","type":"Group","x":398,"y":179,"parameters":{},"ports":[],"dynamicports":[],"children":[]},{"id":"eb8d6aff-52dc-cf1f-cadf-0bb9d5e1bb80","type":"Javascript2","label":"Get DOM Element","x":158,"y":170,"parameters":{"code":"script({\n\tinputs:{\n\t    group: \"reference\"\n\t},\n\tsignals:{\n    \tdidMount() {\n            this.domElement = ReactDOM.findDOMNode(this.inputs.group.getRef());\n            //this.domElement.addEventListener(...)\n    \t},\n    \twillUnmount() {\n    \t    //this.domElement.removeEventListener(...)\n    \t}\n\t}\n})\n"},"ports":[],"dynamicports":[{"name":"group","plug":"input","type":{"name":"reference"},"group":"Inputs","index":2},{"name":"didMount","plug":"input","type":{"name":"signal"},"group":"Inputs","index":3},{"name":"willUnmount","plug":"input","type":{"name":"signal"},"group":"Inputs","index":4}],"children":[]}],"connections":[{"fromId":"03300332-670d-cffd-75e1-57fb2dc889d7","fromProperty":"didMount","toId":"eb8d6aff-52dc-cf1f-cadf-0bb9d5e1bb80","toProperty":"didMount"},{"fromId":"03300332-670d-cffd-75e1-57fb2dc889d7","fromProperty":"willUnmount","toId":"eb8d6aff-52dc-cf1f-cadf-0bb9d5e1bb80","toProperty":"willUnmount"},{"fromId":"03300332-670d-cffd-75e1-57fb2dc889d7","fromProperty":"this","toId":"eb8d6aff-52dc-cf1f-cadf-0bb9d5e1bb80","toProperty":"group"}]})'></button>
</div>

Sometimes you need to get access to the underlying DOM element and use the browser APIs directly.

There are two layers we need to get through, first Noodl and then React.

To get from Noodl to React we'll connect a visual node to a Javascript node. The input type should be `"reference"` (or `"*"` to accept all types). This example uses a Group, but any visual node will work.
```js
inputs:{
	group: "reference"
},
```

Once we have the reference to a Noodl node we can get the React component reference with `getRef()` on the Noodl node.

To get the DOM element we need to use `ReactDOM.findDOMNode(ref)` function. This will get us what we're after, the "raw" browser DOM element. We can then access the style, add event listeners, and so on.

To make sure there's a DOM element we'll use the **Did Mount** output from the Noodl node. This makes sure we'll get the latest DOM reference, and that our code won't run until the visual node is actually rendered.

```js
script({
	inputs:{
	    group: "reference"
	},
	signals:{
    	didMount() {
            this.domElement = ReactDOM.findDOMNode(this.inputs.group.getRef());
            //this.domElement.addEventListener(...)
    	},
    	willUnmount() {
    	    //this.domElement.removeEventListener(...)
    	}
	}
})
```