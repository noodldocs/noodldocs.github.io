---
hide_title: true
hide_table_of_contents: true
title: REST
---

<##head##>

# REST

This node is used to connect to external [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) endpoints to make requests and expose data. It supports request content in **JSON** format.

<div className="ndl-image-with-background l">

![](/nodes/data/rest/rest-1.png)

</div>

You initiate the request by sending a <span className="ndl-signal">signal</span> to the <span className="ndl-signal">Fetch</span> input. Any inputs and outputs to the node are specified in the `request` and `response` scripts.

<##head##>

## Request and response script

The REST node uses a script much like the [Script](/nodes/javascript/script) node to prepare the request and parse the response.
Any variables with the prefix **Inputs.** and **Outputs.** will be exposed as inputs and outputs to the node. So you can use these inputs in the request script to prepare the REST call, and the outputs in the response script to parse the response into outputs.

The first script is used to prepare the request before it is send of to the REST endpoint.
The _Inputs_ object contains the values of the inputs specified in the section above at the time the
request was initiated. The _Request_ object contains details on the request that can be adjusted if necessary.

-   _resource_ - Contains the resource for the request, i.e. the url.
-   _method_ - Contains the method of the request.
-   _headers_ - This is a map containing all headers to the request, add or remove headers in the function.
-   _parameters_ - This is a map containing all parameters that will be appended to the url of the request, add or remove in the function.
-   _content_ - Contains the content of the request, the content will be encoded as JSON when the request is made.

The example below will create two inputs that you can connect to this node from other data in your applications. It modifies the headers and content for the request.

```javascript
Request.header['some-important-header'] = Inputs.ImportantHeader
Request.content = {
    'send-me': Inputs.SendMe,
}
```

When the request is completed and we have a response the corresponding response function will be invoked. In
the response function you can parse the response and set the approprieate outputs of the REST node using the _Outputs_ map
provided as an argument to _response_ function. In the function you will also have access to an object called _Response_ with the following content.

-   _status_ - The status code of the response.
-   _content_ - The content of the response.
-   _request_ - This contains the request object from the _request_ function above that was used to make the request.

The following example assumes the response content is an array of objects. It is convert to a Noodl Array with Noodl Objects and provided via the output **Items**.

```javascript
const result = Noodl.Array.get()
result.set(Response.content.map((o) => Noodl.Object.create(o)))
Outputs.Items = result
```

The REST node looks at the `Content-Type` header to determine how to parse the response from the server. If the type is JSON it will use `JSON.parse` and for XML it'll convert it to a JavaScript object.

## Inputs

| Signal                                     | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span>  | Connect a signal to this input to trigger a request.      |
| <span className="ndl-signal">Cancel</span> | Send a signal to this input to cancel an ongoing request. |

| Data                                       | Description                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Resource</span> | This is the resource endpoint that the REST request will use, i.e. the url.                                   |
| <span className="ndl-data">Method</span>   | This is the method that will be used for the request. Supported methods are GET, PUT, POST, PATCH and DELETE. |
| <span className="ndl-data">Request</span>  | Here you can edit the request script.                                                                         |
| <span className="ndl-data">Response</span> | Here you can edit the response script.                                                                        |

### Request and response inputs

Any variable of the **Inputs** object that you access in your scrips will automatically become an input of the node.

## Outputs

| Signal                                      | Description                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | A signal will be emitted on this output if the request receives a successful status code (2XX).         |
| <span className="ndl-signal">Failure</span> | A signal will be emitted on this output on all other status codes of if another type of failure occurs. |

### Request and response outputs

Any variable of the **Outputs** object that you access in your scrips will automatically become an output of the node.
