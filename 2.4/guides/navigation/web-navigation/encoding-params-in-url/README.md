# Encoding Parameters In URLs

## What you will learn in this guide
This guide will teach you how to pass parameters in the URL when you are navigating between pages, either as the final part of a path, e.g. "mysite.com#/path/parameter" or as query strings, "mysite.com#/path?parameter1=val1&parameter2=val2".
Noodl is handling this through its [Page Inputs](/nodes/navigation/page-inputs/) node and [Navigate](/nodes/navigation/navigate/) node.

The main reason to encode data needed by a **Page Component** in URLs rather than using regular data nodes is that the data becomes independent of the App state. For example
- If a user refreshes the browser running the App, the data will still be available to the **Page Component** in the URL.
- If a user want to be able to share the exact state of an App with another user, you can encode that state in the URL.

## Overview
The guide will cover the following
- Pass data to a **Page Component** as a **Path Parameter**
- Navigate to a path that is dynamically constructed
- Pass data to a **Page Component** using a **Query Parameter**

The guide assumes that you are familiar with basic Web Navigation concepts and it's suggested that you have already gone through the [Basic Navigation](/guides/navigation/web-navigation/basic-navigation/) and [Multi Level Navigation](/guides/navigation/web-navigation/multi-level-navigatio/) guides before you go through this guide.

<div class="ndl-images">
    <img src="/2.4/guides/navigation/web-navigation/multi-level-navigation/main-app-2.png" class="ndl-image large"></img> 
<button class="ndl-import-button" onClick='importIntoNoodl("/2.4/guides/navigation/web-navigation/encoding-params-in-url/multi-level-navigation.zip",{name:"Encoding Parameters in URL",thumb:"/2.4/guides/navigation/web-navigation/multi-level-navigation/main-app-2.png"})'></button>
</div>