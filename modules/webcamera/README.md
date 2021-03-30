# Web Camera

## Adding the module to your project

To get access to the **Web Camera** node in this module we need to add the Web Camera module to our Noodl project. Open the Noodl project in which you want to add the module, and import it from the sidebar.

<div class="ndl-images">
    <img src="/modules/webcamera/webcamera-add-module.png" class="ndl-image med"></img>
</div>

Once the module is imported you will have access to the Web Camera node.

## Usage example

The **Web Camera** node gets the video stream of a target device’s camera (mobile camera or computer web camera). The **Web Camera** is used together with the **Video** node to display the camera stream. See the image below for how to hook it up.

<div class="ndl-images">
    <img src="/modules/webcamera/webcamera-node.png" class="ndl-image medium"></img>  
</div>

It will work inside of Noodl without problems, but to make it work on a phone, or on a website, the project needs to be hosted on a secure server (https). If you use the Noodl Cloud Deploy functionality your project will be hosted on a secure server so this is a great way to test the Web Camera on a phone.

Note that iOS sometimes can be tricky, but try setting the Video node to mute and autoplay to get the Web Camera stream.
