# Cloud Function

This node can be used to make calls to backend cloud functions. To use cloud functions you need to have an external [Parse](https://parseplatform.org) backend up and running and have attached cloud functions.

![](cloudfunction.png ':class=img-size-l')

First you need to specify the name of the cloud function you want to call. This is done via the **Function Name** property.

![](cloudfunction-name.png ':class=img-size-m')

Next you can provide parameters that you want to be passed to the cloud function by adding them using the **Parameters** property. Once a parameter is added the corresponding input is available on the node. You need to provide any input values via connections.

![](cloudfunction-params.png ':class=img-size-m')

You will send a signal on the **Call** input when you want to perform the function call. This will result in a request to the backend and if the function is successful it will return the result. You can extract specific fields from the result object by adding a **Result** item.

![](cloudfunction-results.png ':class=img-size-m')

In this case we assume that the result object from the function contains a field call **Items** that will be extracted and sent on an output with the same name. By default javascript objects are converted to [Noodl.Object](/javascript-api/noodl-object.md) and arrays to [Noodl.Array](/javascript-api/noodl-array.md).

## INPUTS

### General

**Function Name**  
The name of the cloud function to call.

### Actions

**Call**  
Send a signal on this input to issue the request to the backend.

### Parameters
Here you can add parameters that will be passed to the function. Any parameters you add will become available as inputs on the node.

### Scripts
You can also add a small script to modify the parameters before they are sent, and to modify the result when it is received from the function.

**Before Call**  
This script is run before the function request is made to the backend and you have the option of modifying the **Parameters** object. For instance the following will add the current date as parameter.

```javascript
Parameters.NoCache = +(new Date())
```

**After Call**  
This script is run after the result have been returned from the backend. You can use this function to do custom parsing, e.g. remove all items that doesn't have a specific field.

```javascript
Result.Items = Result.Items.filter((i) => i.product !== undefined)
```


**Convert Objects**  
This will instruct the node to automatically convert any objects (and arrays of objects) to [Noodl.Object](/javascript-api/noodl-object.md) and [Noodl.Array](/javascript-api/noodl-array.md). It is enabled by default.

## OUTPUTS

### Results
Add result fields that will be extracted from the result object returned from the cloud function call.

### Signals

**Success**  
This is sent if the function returns a success code and a result object.

**Failure**  
This is sent if the function returns a fail code or no result object.

