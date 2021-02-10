# Pointer position example

<div class="ndl-images">
    <img src="/snippets/javascript/pointer-position.png" class="ndl-image large"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"0f09b7cb-50ab-74b8-52c1-7058a0769284","type":"Javascript2","label":"Pointer Position","x":-497.981910869314,"y":389.26538248207396,"parameters":{"code":"function setPosition(e) {\n    Node.Outputs.PointerX = e.clientX;\n    Node.Outputs.PointerY = e.clientY;\n}\n\nNode.OnInit = function() {\n     document.body.addEventListener(\"mousemove\", setPosition);\n\t document.body.addEventListener(\"mousedown\", setPosition);\n}\n\nNode.OnDestroy = function() {\n\t document.body.removeEventListener(\"mousedown\", setPosition);\n\t document.body.removeEventListener(\"mousemove\", setPosition);    \n}"},"ports":[],"children":[]},{"id":"bdc3ce12-5c23-27ee-7918-ad154b20e668","type":"Number","label":"X","x":-249.18868850167155,"y":333.4616732156818,"parameters":{},"ports":[],"children":[]},{"id":"efbbb196-1b60-27f2-26c6-e7fc0d69d23d","type":"Number","label":"Y","x":-256.3223936828915,"y":481.4925282575018,"parameters":{},"ports":[],"children":[]}],"connections":[{"fromId":"0f09b7cb-50ab-74b8-52c1-7058a0769284","fromProperty":"PointerX","toId":"bdc3ce12-5c23-27ee-7918-ad154b20e668","toProperty":"value"},{"fromId":"0f09b7cb-50ab-74b8-52c1-7058a0769284","fromProperty":"PointerY","toId":"efbbb196-1b60-27f2-26c6-e7fc0d69d23d","toProperty":"value"}]})'></button>
</div>

This example will attach an event listener to the body element of the web page, and listen for mousemove. 

```js
Node.OnInit = function() {
   document.body.addEventListener("mousemove", e=> {
       Node.Outputs.PointerX = e.clientX;
       Node.Outputs.PointerY = e.clientY;
    }) 
}
```

Now lets extend this to also include the `mousedown` event, so it updates directly when a pointer event starts, not just when it moves. Since we need the same code twice we can add it to a function.

```js
function setPosition(e) {
    Node.Outputs.PointerX = e.clientX;
    Node.Outputs.PointerY = e.clientY;
}

Node.OnInit = function() {
     document.body.addEventListener("mousemove", setPosition);
	 document.body.addEventListener("mousedown", setPosition);
}
```

We can extend this even further by removing the event listener when the Javascript node is destroyed. This can happen when a user navigates from a page that runs this code, or when a component with this code is generated by a **For Each** node.

```js
function setPosition(e) {
    Node.Outputs.PointerX = e.clientX;
    Node.Outputs.PointerY = e.clientY;
}

Node.OnInit = function() {
     document.body.addEventListener("mousemove", setPosition);
	 document.body.addEventListener("mousedown", setPosition);
}

Node.OnDestroy = function() {
	 document.body.removeEventListener("mousedown", setPosition);
	 document.body.removeEventListener("mousemove", setPosition);    
}
```