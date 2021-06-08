# P5.js Canvas Intergration

This snippet will set up a [p5.js](https://p5js.org/) sketch inside of Noodl, by using the [Script node](/nodes/javascript/script.md) and [Script Downloader node](/nodes/javascript/script-downloader.md) to get the p5 library via CDN. Click the "COPY NODES" button to copy all the nodes to your clipboard, and then paste them into your own project.
<div class="ndl-images">
    <img src="snippets/p5-canvas/donut_slider.gif" class="ndl-image large"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"68a79366-bb6e-9b8e-5f16-594483af394a","type":"Group","x":476.044097445949,"y":286.7006022280909,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"07589d1d-dda7-a85f-87cc-8b44c953be8e","type":"Group","x":496.044097445949,"y":332.7006022280909,"parameters":{"sizeMode":"explicit","alignY":"center","height":{"value":400,"unit":"px"},"width":{"value":50,"unit":"%","isFixed":false},"alignX":"center"},"ports":[],"children":[{"id":"e2f1281d-bfc2-517b-5c1a-475087425851","type":"Group","label":"Canvas","x":516.044097445949,"y":378.7006022280909,"parameters":{"position":"relative","pointerEventsMode":"explicit","pointerEventsEnabled":false,"alignX":"center","sizeMode":"explicit"},"ports":[],"children":[]},{"id":"a17633eb-385f-5612-793b-8c285c63b0ef","type":"Group","x":516.044097445949,"y":533.7006022280909,"parameters":{"sizeMode":"contentHeight","alignX":"center","marginBottom":{"value":56,"unit":"px"}},"ports":[],"children":[{"id":"dd94fad0-ed46-8abc-615d-567ba4d7b12c","type":"Text","x":536.044097445949,"y":579.7006022280909,"parameters":{"marginBottom":{"value":16,"unit":"px"},"text":"Donut speed","fontFamily":"Helvetica"},"ports":[],"children":[]},{"id":"dc9e948c-788b-25a4-bc0d-79e4c163e43f","type":"Range","x":536.044097445949,"y":625.7006022280909,"parameters":{"trackColor":"#C6C6C6","thumbColor":"#006394"},"ports":[],"children":[]}]}]}]},{"id":"060ba13e-751a-234c-fed0-f704a9851d51","type":"Script Downloader","label":"p5.js library","x":807.9173956410343,"y":35.030111507158125,"parameters":{"input 0":"https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js"},"ports":[],"children":[]},{"id":"9062d91d-befb-a9e7-69ca-44fca53514e3","type":"Switch","label":"Canvas is mounted?","x":808.3721889573343,"y":257.97928151879415,"parameters":{},"ports":[],"children":[]},{"id":"0f0a20b0-7eeb-9602-6038-fb3085e86442","type":"Switch","label":"Is script loaded?","x":809.2337801446156,"y":133.64537144418404,"parameters":{},"ports":[],"children":[]},{"id":"991f1429-bc64-c0e8-f969-a809cabc36a4","type":"And","x":1160.391921876462,"y":304.63734948358086,"parameters":{},"ports":[],"children":[]},{"id":"dd46e607-0b86-9ff5-4b9d-71b82335452c","type":"Javascript2","label":"P5.js","x":813.7550783158606,"y":443.7587731362177,"parameters":{"useExternalFile":"no","externalFile":"scripts/canvas.js","scriptInputs":[{"id":"2hqh","label":"width"},{"id":"5x9n","label":"height"},{"id":"fe74","label":"donutSpeed"}],"intype-width":"number","intype-height":"number","intype-data":"array","intype-maxVal":"number","intype-minVal":"number","intype-dataSize":"number","code":"\nNode.Signals.InitCanvas = function(){\n    let canvas = document.createElement(\"div\");\n    Node.Inputs.group.getDOMElement().appendChild(canvas);\n\n    sketch = function(p) {\n        p.setup = function(){\n            p.createCanvas(Node.Inputs.width, Node.Inputs.height, p.WEBGL);\n                p.background(0);\n        }\n        \n        p.draw = function() {\n          p.background(255);\n          p.normalMaterial();\n          p.translate(0, 0, 0);\n          p.push();\n          p.rotateZ(p.frameCount * Node.Inputs.donutSpeed);\n          p.rotateX(p.frameCount * Node.Inputs.donutSpeed);\n          p.rotateY(p.frameCount * Node.Inputs.donutSpeed);\n          p.torus(70, 20);\n          p.pop();\n        }\n        \n        p.windowResized = function() {\n            p.resizeCanvas(Node.Inputs.width, Node.Inputs.height);\n        }\n    };\n  \n    p = new p5(sketch, canvas);\n}\n\n","intype-donutSpeed":"number"},"ports":[],"children":[]},{"id":"3b9f4f8b-ceda-6371-0c5c-85c8f33f12e5","type":"Number Remapper","label":"Number Remapper","x":814.4873491221048,"y":628.314344427397,"parameters":{"maxInputValue":100,"maxOutputValue":0.1},"ports":[],"children":[]}],"connections":[{"fromId":"060ba13e-751a-234c-fed0-f704a9851d51","fromProperty":"loaded","toId":"0f0a20b0-7eeb-9602-6038-fb3085e86442","toProperty":"on"},{"fromId":"e2f1281d-bfc2-517b-5c1a-475087425851","fromProperty":"didMount","toId":"9062d91d-befb-a9e7-69ca-44fca53514e3","toProperty":"on"},{"fromId":"0f0a20b0-7eeb-9602-6038-fb3085e86442","fromProperty":"state","toId":"991f1429-bc64-c0e8-f969-a809cabc36a4","toProperty":"input 0"},{"fromId":"9062d91d-befb-a9e7-69ca-44fca53514e3","fromProperty":"state","toId":"991f1429-bc64-c0e8-f969-a809cabc36a4","toProperty":"input 1"},{"fromId":"e2f1281d-bfc2-517b-5c1a-475087425851","fromProperty":"boundingWidth","toId":"dd46e607-0b86-9ff5-4b9d-71b82335452c","toProperty":"width"},{"fromId":"e2f1281d-bfc2-517b-5c1a-475087425851","fromProperty":"boundingHeight","toId":"dd46e607-0b86-9ff5-4b9d-71b82335452c","toProperty":"height"},{"fromId":"e2f1281d-bfc2-517b-5c1a-475087425851","fromProperty":"this","toId":"dd46e607-0b86-9ff5-4b9d-71b82335452c","toProperty":"group"},{"fromId":"991f1429-bc64-c0e8-f969-a809cabc36a4","fromProperty":"result","toId":"dd46e607-0b86-9ff5-4b9d-71b82335452c","toProperty":"InitCanvas"},{"fromId":"dc9e948c-788b-25a4-bc0d-79e4c163e43f","fromProperty":"value","toId":"3b9f4f8b-ceda-6371-0c5c-85c8f33f12e5","toProperty":"inputValue"},{"fromId":"3b9f4f8b-ceda-6371-0c5c-85c8f33f12e5","fromProperty":"remappedValue","toId":"dd46e607-0b86-9ff5-4b9d-71b82335452c","toProperty":"donutSpeed"}]})'></button>
</div>

Open the Script node and place the following snippet to attach a P5.js canvas to a Noodl Group node. The size is set from two inputs; One for Width, and another for Height. The "This" output of a Noodl Group node should be connected to the input called "group" on the Script Node. 

```js
Node.Signals.InitCanvas = function(){
    let canvas = document.createElement("div");
    Node.Inputs.group.getDOMElement().appendChild(canvas);

    sketch = function(p) {
        p.setup = function(){
            p.createCanvas(Node.Inputs.width, Node.Inputs.height);
        }
        
        p.draw = function() {

        }

        p.windowResized = function() {
            p.resizeCanvas(Node.Inputs.width, Node.Inputs.height);
        }
    };
  
    p = new p5(sketch, canvas);
}
```

Before the script will work we need to make sure that both the Group that we want to use as the canvas is mounted, and the Script Loader node is done loading the library from https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js


<div class="ndl-images">
    <img src="snippets/p5-canvas/connections.png" class="ndl-image large"></img>  
</div>


Now let's extend the **p.draw function** in the Script Node to show a rotating donut rendered with WEBGL. 

```js
Node.Signals.InitCanvas = function(){
    let canvas = document.createElement("div");
    Node.Inputs.group.getDOMElement().appendChild(canvas);

    sketch = function(p) {
        p.setup = function(){
            p.createCanvas(Node.Inputs.width, Node.Inputs.height, p.WEBGL);
                p.background(0);
        }
        
        p.draw = function() {
          p.background(255);
          p.normalMaterial();
          p.translate(0, 0, 0);
          p.push();
          p.rotateZ(p.frameCount * 0.01);
          p.rotateX(p.frameCount * 0.01);
          p.rotateY(p.frameCount * 0.01);
          p.torus(70, 20);
          p.pop();
        }
        
        p.windowResized = function() {
            p.resizeCanvas(Node.Inputs.width, Node.Inputs.height);
        }
    };
  
    p = new p5(sketch, canvas);
}
```
<div class="ndl-images">
    <img src="snippets/p5-canvas/donut_fixed.gif" class="ndl-image large"></img>  
</div>

We can add as many inputs and outputs as we want, to control the p5 sketch from other Noodl elements. So let's add a simple slider to control the speed of the rotating donut. First, let's change the hardcoded values that control the rotation with values coming from outside the Script node. We create a new input variable to control the speed. Let's call it donutSpeed, and make it available as an Input like this: **Node.Inputs.donutSpeed**. 

```js
Node.Signals.InitCanvas = function(){
    let canvas = document.createElement("div");
    Node.Inputs.group.getDOMElement().appendChild(canvas);

    sketch = function(p) {
        p.setup = function(){
            p.createCanvas(Node.Inputs.width, Node.Inputs.height, p.WEBGL);
                p.background(0);
        }
        
        p.draw = function() {
          p.background(255);
          p.normalMaterial();
          p.translate(0, 0, 0);
          p.push();
          p.rotateZ(p.frameCount * Node.Inputs.donutSpeed);
          p.rotateX(p.frameCount * Node.Inputs.donutSpeed);
          p.rotateY(p.frameCount * Node.Inputs.donutSpeed);
          p.torus(70, 20);
          p.pop();
        }
        
        p.windowResized = function() {
            p.resizeCanvas(Node.Inputs.width, Node.Inputs.height);
        }
    };
  
    p = new p5(sketch, canvas);
}
```
DonutSpeed is now an available input on our Script node, and we can now create a slider, connect it to a Number Remapper node to get the value range we want and connect it to the donutSpeed input on the Script node.
<div class="ndl-images">
    <img src="snippets/p5-canvas/slider.png" class="ndl-image large"></img>  
</div>

And there we go. Thats how you setup a p5.js canvas in Noodl. 
<div class="ndl-images">
    <img src="snippets/p5-canvas/donut_slider.gif" class="ndl-image large"></img>
</div>
