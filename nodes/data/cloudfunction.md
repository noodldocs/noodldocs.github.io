# Cloud Function

This node can be used to make calls to backend cloud functions. To use cloud functions you need to have an external [Parse](https://parseplatform.org) backend up and running and have attached cloud functions.

![](cloudfunction.png ':class=img-size-m')

First you need to specify the name of the cloud function you want to call. This is done via the **Function Name** property.

![](cloudfunction-name.png ':class=img-size-m')

Next you can provide parameters that you want to be passed to the cloud function by adding them using the **Parameters** property. Once a parameter is added the corresponding input is available on the node. You need to provide any input values via connections.

![](cloudfunction-params.png ':class=img-size-m')

## INPUTS

### General

**Function Name**  
The name of the cloud function to call.

### Actions

**Call**  
Send a signal on this input to issue the request to the backend.

### Parameters
Here you can add parameters that will be passed to the function. Any parameters you add will become available as inputs on the node.

## OUTPUTS

### Output

**Result**  
This output will contain the result that the cloud function returns upon completion. Depending on the type returned from the function this will either be a [Noodl.Object](/javascript-api/noodl-object.md), [Noodl.Array](/javascript-api/noodl-array.md) or a simple javascript type.

### Signals

**Success**  
This is sent if the function returns a success code and a result object.

**Failure**  
This is sent if the function returns a fail code or no result object.

