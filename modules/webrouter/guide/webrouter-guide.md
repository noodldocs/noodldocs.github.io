# Web Router

This guide will cover how to use the *Web Router* module to do navigation on a desktop style web application with Noodl. All Noodl applications are *single page applications* which means that they only load the application content from the server once and they all navigation is performed in your Noodl node graph. They still need to handle URLs, so that you can send a link to a specific page or resources in your application, called *deep linking*.

This is achieved via the *Web Router* node. The add the nodes you need for navigation you need to import the *Web Router* library into your project. This is done via the *Library* panel in the editor.

<div class="ndl-images">
    <img src="/modules/webrouter/guide/import.png" class="ndl-image med"></img>   
</div>

Hit the *Add* button and the latest version of the library is downloaded and added to your project. Now let's get down to business, the core node in this module is the *Web Router* node. You can place it anywhere you want a navigation area, but generally your place one at the root of your project.



