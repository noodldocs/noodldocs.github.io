# REST
The REST node is used to connect to [REST][0] endpoints to make request and expose data from
these endpoints.

### Request and response script
The REST node uses a script much like the [Javascript][1] node to prepare the request and parse the response.
Just like the Javascript node there is a section for specifiyng additional inputs and outputs for the
REST node, these inputs and outputs can be used in the request and response functions later. Check out the
[Javascript][1] node for more details on how to specify inputs and outputs.

    define({
      // The input ports of the REST node, name of input and type
      inputs:{
          //ExampleInput:'number',
      },

      // The output ports of the REST node, name of output and type
      outputs:{
          //ExampleOutput:'string',
      },

After there is a section to prepare the request before it is send of to the external or prototype endpoint.
The _inputs_ argument contains the values of the inputs specified in the section above at the time the
request was initiated. The _request_ argument contains details on the request that can be adjusted if necessary.

* *resource* - Contains the resource for the request
* *method* - Contains the method of the request
* *headers* - This is a map containing all headers to the request, add or remove headers in the function
* *parameters* - This is a map containing all parameters that will be appended to the url of the request, add or remove in the function.
* *content* - Contains the content of the request, the content will be encoded as JSON when the request is made.

You can always access the inputs and outputs using _this.inputs_ and _this.outputs_.

	request:function(inputs,request) {
	},

When the request is completed and we have a response the corresponding response function will be invoked. In
the response function you can parse the respons and set the approprieate outputs of the REST node using the _outputs_ map
provided as an argument to _response_ function.

* *status* - The status code of the response.
* *content* - The content of the response.
* *request* - This contains the request object from the _request_ function above that was used to make the request.

You can always access the inputs and outputs using _this.inputs_ and _this.outputs_.

	response:function(outputs,response) {
	}

The REST node looks at the `Content-Type` header to determine how to parse the response from the server. If the type is JSON it will use `JSON.parse` and for XML it'll convert it to a JavaScript object.

### Prototype backend script
There are two types of backends for the REST node, the normal is *External* which simply points to a REST endpoint
that can be reached using cross origin from a browser. Sometimes when building prototypes the external endpoint is not
yet available, in that case you can use a prototype backend. That is simply a small script that takes the request
prepared in the request function as described above and provides a response. To enable a prototype backend set the
_Backend type_ input to _Prototype_. Then edit the script to provide a prototype response based on the request.

    context.sendResponse(200,{result:'success'});

Above is a simple short example. Use context.sendResponse to send the response back to the REST script above. Provide
the status and the content of the result. The context object contains the following:

* *request* - The request object from the _request_ function of the REST script.
* *sendResponse* - The function to send the response back to the REST script, status and content are the supported arguments.

<div class = "node-inputs">

## Inputs
### Request
**Resource**
This is the resource endpoint that the REST request will use.

**Method**
This is the method that will be used for the request. Supported methods are GET, PUT, POST and DELETE.

**Script**
Here you can edit the request script as detailed above.

**Use External Script**
If you set this to true you can pick an external javascript file in the project folder
and use it as the request script.

**File Path**
If you choose to use an external javascript file for the request script this input shows up
and you can pick a file from the project folder.

### Backend
**Backend Type**
Specify which backend type to use, can be either *External* or *Prototype*.

- *External* - With this setting the node will make the request to the specified endpoint as expects.
- *Prototype* - With this setting a script will be invoked to return the response from the request. This is useful when the endpoint is not yet available.

**Endpoint**
If *External* backend type is used then you can specify the endpoint in this field. It must start with _http://_ or _https://_.
The resource you specified will be appended to the endpoint to make up the full URL that will be used
for the request.

**Script**
If *Prototype* backend type you can specify a script that will be invoked when the request is made
instead of going out to the external endpoint. This script can then return a prototype response.

### Actions
**Fetch**
Connect a signal to this input to trigger a request.

**Cancel**
Send a signal to this input to cancel an ongoing request.

</div>

<div class = "node-outputs">

## Outputs
### Status
**Fetching**
This output will be true if a request is ongoing, and then turn false when the request is either canceled or completed.

### Signals
**Started**
A signal will be emitted on this output when the request is started.

**Completed**
A signal will be emitted on this output when the request is completed.

**Status OK**
A signal will be emitted on this output when the request has completed with OK status.

**Status Fail**
A signal will be emitted on this output when the request has completed with a status that is not OK.

</div>

[0]: https://en.wikipedia.org/wiki/Representational_state_transfer
[1]: ../standard-nodes/javascript
