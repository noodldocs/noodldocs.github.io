# Create a React library

Noodl is based on the popular React frontend library which makes it easy for you to add customer or community React components to your workspace. This guide will help you create a React library from scratch and push it to your Noodl workspace.

!> This guide requires Node js and npm installed.

## Setup
First you need to install the Noodl command line interfaces. If you have not previously installed the CLI you can do so via npm.

```bash
npm install -g noodl-cli
```

With the CLI tool you can easily create a new react library module from a template like so:

```bash
noodl-cli create-react-lib my-react-lib
```

You need to specify a directory name that will be created and will contain everything you need to get started. Using the command above the directory *my-react-lib* will be created.

This directory will contain the following structure

```
my-react-lib/
    module/
    project/
    icon.png
    module.json
```

The **module** directory contains the source code for the module and the **project** directory contains a Noodl project that will accompany the module. We will look closer at the project later but first lets take a look at the module content.

First enter the **module** folder and install the needed dependencies:

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

Part of the development flow is to load the accompaning Noodl project that will now contain the built module. First launch Noodl.

Next go to the **Projects** tab and choose **Import existing project** at the bottom of the page.

![](import-project.png ':class=img-size-l')

This is **very important** make sure the “Save locally” checkbox is checked, this will ensure that the project you are importing is stored locally on your computer and is edited in the place where you import from. In this case you will edit the project in your workspace folder.

![](save-locally.png ':class=img-size-l')

Now you can give your project a name (any name will do) and then hit the **Pick project folder button**.

![](pick-project-folder.png ':class=img-size-l')

Find the **project** folder of you newly created React library and the hit Open. Noodl will now open the library project that contains your custom React components.

The module template will create a very simple component fittingly called *Custom React Component*. You can create an instance of the component as you would any other visual node in Noodl.

?> It might be a bit confusing terminology, but *components* in React actually become core nodes in Noodl. Noodl components are comprised of other Noodl nodes and connections. So keep in mind that we sometimes talk about React components and sometimes about Noodl components.

## Push library to Noodl
We will soon dive into the code behind these components. But lets first push the library to our Noodl workspace.

First we need to add some descriptive information to our library. Go back to the root folder or the library, e.g. the *my-react-lib* folder we created in the first step. Then run this command. 

```bash
noodl-cli desc --label "My React Lib" --desc "A short description of my lib"
```

You can provide your own nicely descriptive label and description. Next up you can replace the default *icon.png* file with something that represents your library visually.

Now you need to find the workspace access key. This key is found in the admin page of the workspace within Noodl.

![](workspace-admin.png ':class=img-size-m')

And the at the bottom of that page you will find the key.

![](access-key.png ':class=img-size-m')

With the key in hand you can run the following command in the root of your library folder, e.g. the *my-react-lib* folder in this example.

```bash
noodl-cli push --workspace "your-workspace-name" --accessKey "the-access-key"
```

Thats it. Now you will find your library in the library pane within the Noodl editor. Any user of your workspace will see all modules and it can be added to a project with the *Add* button.

![](library-pane.png ':class=img-size-l')

If you make changes to the library module or project you need to rebuild and then push the new module to your workspace.

## A tour of the code
Now you have created a new React library module from the template and you have pushed it to your Noodl workspace. Let's review the code a bit to get you up and running.

The react code can be found in the **module** folder.

```
my-react-lib/
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

Check out *index.js* this file contains a simple React component and its export to Noodl. For each component that you want to be exposed in Noodl as a visual component you must create a short export.

```javascript
const MyCustomReactComponentNode = {
	name: 'Custom React Component',
	getReactComponent() {
		return MyCustomReactComponent;
	},
	inputProps: {
		backgroundColor: {type: 'color', default: 'white'}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
}
```

You specify the *name* of the component as well as a function that returns the actual React component. You also need to specify the *inputs* and *outputs* that will be available for the visual node in Noodl.

The basic types for inputs are:
* **number** for a number property.
* **boolean** for a boolean (checkbox) property.
* **string** for a string property.
* **color** for a color property. Will show the color input in the Noodl properties.

Outputs in react are typically done via callbacks. You can capture these callbacks and deliver them as outputs in Noodl.




