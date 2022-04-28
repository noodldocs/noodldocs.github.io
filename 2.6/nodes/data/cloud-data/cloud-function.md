---
hide_title: true
hide_table_of_contents: true
title: Cloud Function
---

<##head##>

# Cloud Function

This node is used to make calls to backend cloud functions. To use cloud functions you need to have an external [Parse](https://parseplatform.org) backend up and running and have attached cloud functions or have a Noodl Zap running in [Zapier](https://zapier.com). You can read more about how to make your own backend logic [here](/docs/guides/business-logic/overview).

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-function/cloudfunction.png)

</div>

You need to specify the name of the cloud function you want to call. This is done via the **Function Name** property.

<div className="ndl-image-with-background">

![](/nodes/data/cloud-data/cloud-function/cloudfunction-name.png)

</div>

You can also provide parameters that you want to be passed to the cloud function by adding them using the **Parameters** property. Once a parameter is added the corresponding input is available on the node. You provide the input values via regular Noodl connections.

<div className="ndl-image-with-background">

![](/nodes/data/cloud-data/cloud-function/cloudfunction-params.png)

</div>

The cloud function can return a value, an object or an array when finished. The return value will be available on the **Result** output. The result value will be converted to a Noodl type, for example an [Object](/nodes/data/object/object-node.md) or an [Array](/nodes/data/array/array-node.md) containing **Objects**.
The only exception is if the returned array is an array of JavaScript primitives (strings, numbers, booleans), i.e. _not_ objects. Then Noodl cannot convert the array to a Noodl **Array** with **Objects**. Instead the returned array will be a JavaScript array with primitives that need to be handed in JavaScript by a [Function](/nodes/javascript/function.md) or [Script](/nodes/javascript/script.md) node.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-function/cloudfunction-result-example.png)

</div>
<##head##>

## Inputs

| Data                                                | Description                                                                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Function Name</span>     | <##input:functionName##>The name of the cloud function to call.<##input##>                                                                       |
| <span className="ndl-data">Custom Parameters</span> | <##input:pm-\*##>A parameter that will be passed to the function. Any parameters you add will become available as inputs on the node.<##input##> |

| Signal                                   | Description                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Call</span> | <##input:call##>Send a signal on this input to issue the request to the backend.<##input##> |

## Outputs

| Data                                     | Description                                                                                                                                                                                                                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Result</span> | <##output:result##>This output will contain the result that the **Cloud Function** returns upon completion. <##output##> |

| Signal                                      | Description                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>This is sent if the function returns a success code and a result object.<##output##> |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This is sent if the function returns a fail code.<##output##>                        |
