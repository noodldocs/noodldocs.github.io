# Create a new core node

Noodl is very extensible. As a developer you can add new modules with new capablities, create connections to data or make new visual components in your workspace. This guide gets us started by showing how the Noodl command line tool works and how to create an extension module with a single new node. This node will behave and appear just like the standard core nodes of Noodl.

!> This guide requires <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a> and <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">npm</a> installed.

## Setup

First you need to install the Noodl command line interfaces. If you have not previously installed the CLI you can do so via npm.

```bash
npm install -g @noodl/noodl-cli
```

With the CLI tool you can easily create a new library module from a template:

```bash
noodl-cli create-lib my-noodl-lib
```

You need to specify a directory name that will be created. The directory will contain everything you need to get started. Using the command above, the directory _my-noodl-lib_ will be created.

The newly created directory has the following structure:

```
my-noodl-lib/
    module/
    project/
    tests/
    icon.png
    module.json
```

First some notes on the content of a library module:

- The **module** directory contains the source code for the module as well as build scripts and any assets you might want, such as fonts, css etc.

- The **project** directory contains a Noodl project that will accompany the module. When a module is imported into a Noodl project, all content of this project is added to the project. So if you want components to follow along with your module you can add it to this project. By default the project is empty and only contains the code of your module.

- The **tests** folder contains a test project that you can use when you are developing your module, nothing in this project will be packaged into the module. This is a local project that needs to be imported into Noodl, we will show you how to do that below.

!> It is important that you do not change the name of the **project** and **tests** folders. The build scripts in the *module* folder is dependent on these names or it till not build the module properly and you cannot push to your workspace.

First enter the **module** directory and install the needed dependencies:

```bash
cd module
```

```bash
npm install
```

Once the dependencies are installed you can build the module using:

```bash
npm run build
```

You can also enter development mode where the module will be rebuilt when it detects changes in the source code.

```bash
npm run dev
```

Part of the development flow is to load the accompanying Noodl tests project that we can use to develop and test our module. First launch Noodl.

Next choose **Import project** at the bottom of the page.

![](import-project.png ':class=img-size-l')

On the next screen you will import the **tests** project.

![](pick-project-folder.png ':class=img-size-l')

!> This is **very important**: Make sure the “Local storage” checkbox is checked!

This will ensure that the project you are importing is stored locally on your computer and is edited in the place where you import from. In this case you will edit the project in your workspace directory.

Give your project a name (any name will do) and then hit the **Pick folder and create project** button.



Find the **tests** directory of your newly created library and then hit Open. Noodl will now open the test project that contains your custom module code. In the project there is a simple test the uses the new node:

![](fullname-tests.png ':class=img-size-l')

As mentioned before there are two projects created as part of the template, the **tests** folder and the **project** folder. You can import the latter in the same way and edit it in Noodl, both projects will contain the code of the module. The **project** folder will be packaged up with your module, so any components or content you add to that project, e.g. fonts or images, will be part of your module.

## Push library to Noodl

We will soon dive into the code in the library module, but let's first push the library to our Noodl workspace.

First we need to add some descriptive information to our library. Go back to the root folder or the library, in this example it's the _my-noodl-lib_ folder we created in the first step. Then run this command:

```bash
noodl-cli desc --label "My Noodl Lib" --desc "A short description of my lib"
```

Add your own descriptive label and description of your module. Next up you can replace the default _icon.png_ file with something that represents your library visually.

Now you need to find the Noodl workspace access key. This key is found in the Noodl console, you need to sign in to the Noodl console at [https://console.noodl.net](https://console.noodl.net). After you sign in, find the workspace your want to push to and click _Manage_.

![](manage-workspace.png ':class=img-size-m')

You will find the access key by clicking _Show Access Key_ in the header, this will show a popup with the access key.

![](access-key.png ':class=img-size-m')

With the key in hand you can run the following command in the root of your library folder, e.g. the _my-noodl-lib_ folder in this example.

```bash
noodl-cli push --accessKey "the-access-key"
```

That's it. Now you will find your library in the library pane within the Noodl editor. Any user of your workspace will see all modules and it can be added to a project with the _Add_ button.

![](library-pane.png ':class=img-size-l')

If you make changes to the library module or project, you need to rebuild and then push the new module to your workspace.

!> Currently you need to restart Noodl for the module to show up, also you need to restart to make sure you have the latest version of the library.

If you want to remove your module from the workspace simply run:

```bash
noodl-cli remove --accessKey "the-access-key"
```

## A tour of the code

Now you have created a new library module from the template and you have pushed it to your Noodl workspace. Let's review the code a bit to get you up and running.

The source code can be found in the **module** directory.

```
my-noodle-lib/
    module/
        src/
            index.js
        assets/
            manifest.json
        package.json
        webpack.config.js
    project/
        ...
```

Open _index.js_ in your favorite editor. This file contains a simple new core node, let's look at the different sections:

First you must import the Noodl SDK.

```javascript
const Noodl = require('@noodl/noodl-sdk');
```

Next you will define the code for the new node. 

```javascript
const MyFullNameNode = Noodl.defineNode({
  category: 'My Utils',
  name: 'Full Name',
  inputs: {
    FirstName: 'string',
    LastName: 'string',
  },
  outputs: {
    FullName: 'string',
  },
  changed: {
    FirstName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
    LastName: function () {
      this.setOutputs({
        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,
      });
    },
  },
});
```

- You need to specify the **name** of the node, this is the name that shows up in the list when creating new nodes.
- you can optionally specify a **category**, this will also be used in the new node popup in Noodl.

Finally you need to define the specification of your module.

```javascript
Noodl.defineModule({
  nodes: [MyFullNameNode],
  setup() {
    //this is called once on startup
  },
});
```

In this simple template we provide our new node as part of the module.

Now if you make a change to your code you either need to run the _npm build_ command in the _module_ folder as shown about, or if you are running the _npm run dev_ it will automatically detect the change and rebuild your module.

You need to reload the viewer in Noodl for the changes to appear. Use _Cmd/Ctrl-R_ or the refresh button at the top of the viewer.

## Documentation

It is important to document your module so that your fellow Noodlers will know how to use it. Once you have your documentation hosted somewhere, where it is accessible to the users of your module, you can add a docs link as shown below.

```bash
noodl-cli desc --docs "https://url.to.my/docs"
```

Now after you push your module the documentation will be accessible via the _Docs_ button from the library panel in Noodl.

![](library-pane.png ':class=img-size-l')
