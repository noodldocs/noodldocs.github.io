# REST
The REST node is used to connect to [REST][0] endpoints to make request and expose data from
these endpoints. It currently supports only request content in **JSON** format.

The request is initiated with the **Fetch** signal. Any inputs and outputs to the node are specified in the **request** and **response** scripts.

![](rest-1.png ':class=img-size-m')

## Request and response script
The REST node uses a script much like the [Javascript][1] node to prepare the request and parse the response.
Any variables with the prefix **Inputs.** and **Outputs.** will be exposed as inputs and outputs to the node. So you can use these inputs in the request script to prepare the REST call, and the outputs in the response script to parse the response into outputs.

The first script is used to prepare the request before it is send of to the REST endpoint.
The _Inputs_ object contains the values of the inputs specified in the section above at the time the
request was initiated. The _Request_ object contains details on the request that can be adjusted if necessary.

* *resource* - Contains the resource for the request, i.e. the url.
* *method* - Contains the method of the request.
* *headers* - This is a map containing all headers to the request, add or remove headers in the function.
* *parameters* - This is a map containing all parameters that will be appended to the url of the request, add or remove in the function.
* *content* - Contains the content of the request, the content will be encoded as JSON when the request is made.

The example below will create two inputs that you can connect to this node from other data in your applications. It modifies the headers and content for the request.

```javascript
Request.header['some-important-header'] = Inputs.ImportantHeader;
Request.content = {
    "send-me":Inputs.SendMe
}
```


When the request is completed and we have a response the corresponding response function will be invoked. In
the response function you can parse the response and set the approprieate outputs of the REST node using the _Outputs_ map
provided as an argument to _response_ function. In the function you will also have access to an object called _Response_ with the following content.

* *status* - The status code of the response.
* *content* - The content of the response.
* *request* - This contains the request object from the _request_ function above that was used to make the request.

The following example assumes the response content is an array of objects. It is convert to a Noodl Array with Noodl Objects and provided via the output **Items**.

```javascript
var result = Noodl.Array.get();
result.set(Response.content.map((o) => Noodl.Object.create(o));
Outputs.Items = result;
```

The REST node looks at the `Content-Type` header to determine how to parse the response from the server. If the type is JSON it will use `JSON.parse` and for XML it'll convert it to a JavaScript object.

## Inputs
### Request
**Resource**  
This is the resource endpoint that the REST request will use, i.e. the url.

**Method**  
This is the method that will be used for the request. Supported methods are GET, PUT, POST, PATCH and DELETE.

**Request**  
Here you can edit the request script.

**Response**  
Here you can edit the response script.

### Request and response inputs
Any variable of the **Inputs** object that you access in your scrips will automatically become an input of the node.

### Actions
**Fetch**  
Connect a signal to this input to trigger a request.

**Cancel**  
Send a signal to this input to cancel an ongoing request.


## Outputs

### Events
**Success**
A signal will be emitted on this output if the request receives status code 200.

**Failure**
A signal will be emitted on this output on all other status codes of if another type of failure occurs.

### Request and response outputs
Any variable of the **Outputs** object that you access in your scrips will automatically become an output of the node.

[0]: https://en.wikipedia.org/wiki/Representational_state_transfer
[1]: ../nodes/javascript/javascript
