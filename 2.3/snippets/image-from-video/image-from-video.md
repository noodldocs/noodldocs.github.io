# Capture image from video

This snippet shows how to capture and display an image from a video stream inside of Noodl.
There is currently no built-in way to capture images from video streams but we can quickly make our own action component to do so, with a little help from the [Function node](https://docs.noodl.net/2.3/#/nodes/javascript/function).



<div class="ndl-images">
    <img src="snippets/image-from-video/thumbnail.png" class="ndl-image large">
</div>

First, we need to create an empty component that will contain the Function node with javascript for capturing an image from a video stream. Copy the nodes shown on the image below by clicking the **"COPY NODES"** and paste them into an empty component called **"Capture Image from Video"** in your own Noodl project.
<div class="ndl-images">
    <img src="snippets/image-from-video/action_image.png" class="ndl-image large"></img>  
     <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","type":"JavaScriptFunction","label":"Capture Image File from Video","x":991.372243125895,"y":824.3763205910893,"parameters":{"functionScript":"const video = Inputs.Video;\nconst canvas = document.createElement(\"canvas\");\n\n\nlet width = video.videoWidth;\nlet height = video.videoHeight;\n\n// Add the resizing logic\nif (width > height) {\n  if (width > Inputs.MaxWidth) {\n    height *= Inputs.MaxWidth / width;\n    width = Inputs.MaxWidth;\n  }\n} else {\n  if (height > Inputs.MaxHeight) {\n    width *= Inputs.MaxHeight / height;\n    height = Inputs.MaxHeight;\n  }\n}\n\nwidth = Math.floor(width);\nheight = Math.floor(height);\n\n\ncanvas.width = width;\ncanvas.height = height;\ncanvas.getContext(\"2d\").drawImage(video, 0, 0, width, height);\ncanvas.toBlob(blob => {\n    const file = new File([blob], \"name\");\n    Outputs.file = file;\n    Outputs.fileSize = Math.round(file.size / 1024) + \" kB\";\n    \n    Outputs.downscaledImageURL = URL.createObjectURL(file);\n    \n    Outputs.done();\n},\"image/jpeg\");  \n","scriptInputs":[{"id":"5jfj","label":"MaxWidth"},{"id":"n5qc","label":"MaxHeight"}],"intype-MaxWidth":"number","intype-MaxHeight":"number","in-MaxWidth":1920,"in-MaxHeight":1920,"intype-VideoRef":"object","intype-videoWidth":"number","intype-videoHeight":"number"},"ports":[],"children":[]},{"id":"801b13ca-28ff-50f3-30dc-9fe9771c91cc","type":"Component Outputs","x":1259.9405516842148,"y":850.8763205910893,"parameters":{},"ports":[{"name":"done","plug":"input","type":"*","index":2},{"name":"file","plug":"input","type":"*","index":3},{"name":"fileSize","plug":"input","type":"*","index":4},{"name":"downscaledImageURL","plug":"input","type":"*","index":5}],"children":[]},{"id":"5ed3a343-2408-03f1-a2bc-00b526baeecf","type":"Component Inputs","x":688.3722431258951,"y":848.8763205910893,"parameters":{},"ports":[{"name":"Do","plug":"output","type":"*","index":0},{"name":"MaxWidth","plug":"output","type":"*","index":1},{"name":"MaxHeight","plug":"output","type":"*","index":2},{"name":"Video","plug":"output","type":"*","index":3}],"children":[]}],"connections":[{"fromId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","fromProperty":"out-downscaledImageURL","toId":"801b13ca-28ff-50f3-30dc-9fe9771c91cc","toProperty":"downscaledImageURL"},{"fromId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","fromProperty":"out-fileSize","toId":"801b13ca-28ff-50f3-30dc-9fe9771c91cc","toProperty":"fileSize"},{"fromId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","fromProperty":"out-file","toId":"801b13ca-28ff-50f3-30dc-9fe9771c91cc","toProperty":"file"},{"fromId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","fromProperty":"out-done","toId":"801b13ca-28ff-50f3-30dc-9fe9771c91cc","toProperty":"done"},{"fromId":"5ed3a343-2408-03f1-a2bc-00b526baeecf","fromProperty":"Do","toId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","toProperty":"run"},{"fromId":"5ed3a343-2408-03f1-a2bc-00b526baeecf","fromProperty":"Video","toId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","toProperty":"in-Video"},{"fromId":"5ed3a343-2408-03f1-a2bc-00b526baeecf","fromProperty":"MaxHeight","toId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","toProperty":"in-MaxHeight"},{"fromId":"5ed3a343-2408-03f1-a2bc-00b526baeecf","fromProperty":"MaxWidth","toId":"54ad53ae-b205-7bed-25d3-a0e40cb1127f","toProperty":"in-MaxWidth"}]})'></button>
</div>

If we open open the Function node it should have the following code:

```js
const video = Inputs.Video;
const canvas = document.createElement("canvas");


let width = video.videoWidth;
let height = video.videoHeight;

// Add the resizing logic
if (width > height) {
  if (width > Inputs.MaxWidth) {
    height *= Inputs.MaxWidth / width;
    width = Inputs.MaxWidth;
  }
} else {
  if (height > Inputs.MaxHeight) {
    width *= Inputs.MaxHeight / height;
    height = Inputs.MaxHeight;
  }
}

width = Math.floor(width);
height = Math.floor(height);


canvas.width = width;
canvas.height = height;
canvas.getContext('2d').drawImage(video, 0, 0, width, height);
canvas.toBlob(blob => {
    const file = new File([blob], "name");
    Outputs.file = file;
    Outputs.fileSize = Math.round(file.size / 1024) + ' kB';
    
    Outputs.downscaledImageURL = URL.createObjectURL(file);
    
    Outputs.done();
},'image/jpeg');  


```


<div class="ndl-images">
    <img src="snippets/image-from-video/nodes.png" class="ndl-image large"></img>  
</div>


We can now use this new component called "Capture Image from Video",  but before we can use it for something useful we need to have a simple UI to get a video stream going.

As shown in the image below, we will need to import the [Web camera module](https://docs.noodl.net/2.3/#/modules/webcamera/) into our project. See the [documentation](https://docs.noodl.net/2.3/#/modules/webcamera/) to see how. We also need a [Video Node](https://docs.noodl.net/2.3/#/nodes/visual/video), an [Image node](https://docs.noodl.net/2.3/#/nodes/visual/image), and a [Button node](https://docs.noodl.net/2.3/#/nodes/visual/button) to control when we want to capture an image. 

See the image below and click the **"COPY NODES"** button to get the nodes into your clipboard and paste them into your project. 

<div class="ndl-images">
    <img src="snippets/image-from-video/app.png" class="ndl-image large"></img>  
        <button class="ndl-copy-nodes-button" onClick='copyJsonToClipboard({"nodes":[{"id":"d574fd3a-c86e-4ccd-0350-c3eadbc07231","type":"Group","label":"App","x":374.10170108860007,"y":78.5204998380824,"parameters":{"backgroundColor":"#FFFFFF"},"ports":[],"children":[{"id":"9461ec72-c426-0ee9-c959-a6c290cb2201","type":"Video","x":394.10170108860007,"y":173.5204998380824,"parameters":{"sizeMode":"contentHeight","height":{"value":50,"unit":"%"}},"ports":[],"children":[]},{"id":"f864ef57-c7c5-0ed3-c878-c3520ffe9f3b","type":"Image","x":394.10170108860007,"y":315.5204998380824,"parameters":{"sizeMode":"explicit","height":{"value":50,"unit":"px"}},"ports":[],"children":[]},{"id":"72bdcca2-8b9a-26e9-5656-f6c4592b9a3b","type":"Button","x":394.10170108860007,"y":397.5204998380824,"parameters":{"position":"relative","alignX":"center","alignY":"bottom","marginBottom":{"value":0,"unit":"px"},"label":"Capture Image","sizeMode":"explicit","backgroundColor":"#29D691","fontSize":{"value":20,"unit":"px"},"styleType":"css"},"ports":[],"children":[]}]},{"id":"bd08484f-e68c-94a1-6a0a-ebadc6f95ede","type":"Web Camera","x":65.44693542592108,"y":124.55188476170525,"parameters":{},"ports":[],"children":[]},{"id":"4f5ec9a0-53dd-fa9e-6306-d5e1b69861f8","type":"/Capture Image from Video","x":700.8640326492996,"y":195.03001836947738,"parameters":{},"ports":[],"children":[]}],"connections":[{"fromId":"bd08484f-e68c-94a1-6a0a-ebadc6f95ede","fromProperty":"stream","toId":"9461ec72-c426-0ee9-c959-a6c290cb2201","toProperty":"srcObject"},{"fromId":"d574fd3a-c86e-4ccd-0350-c3eadbc07231","fromProperty":"didMount","toId":"bd08484f-e68c-94a1-6a0a-ebadc6f95ede","toProperty":"startStream"},{"fromId":"bd08484f-e68c-94a1-6a0a-ebadc6f95ede","fromProperty":"streamStarted","toId":"9461ec72-c426-0ee9-c959-a6c290cb2201","toProperty":"play"},{"fromId":"9461ec72-c426-0ee9-c959-a6c290cb2201","fromProperty":"onVideoElementCreated","toId":"4f5ec9a0-53dd-fa9e-6306-d5e1b69861f8","toProperty":"Video"},{"fromId":"72bdcca2-8b9a-26e9-5656-f6c4592b9a3b","fromProperty":"onClick","toId":"4f5ec9a0-53dd-fa9e-6306-d5e1b69861f8","toProperty":"Do"},{"fromId":"4f5ec9a0-53dd-fa9e-6306-d5e1b69861f8","fromProperty":"downscaledImageURL","toId":"f864ef57-c7c5-0ed3-c878-c3520ffe9f3b","toProperty":"src"},{"fromId":"9461ec72-c426-0ee9-c959-a6c290cb2201","fromProperty":"boundingHeight","toId":"f864ef57-c7c5-0ed3-c878-c3520ffe9f3b","toProperty":"height"}]}
    )'></button>
</div>

Make sure you have called the components the same as I've in the pictures to make sure it works out of the box when pasting the nodes into your project. 


