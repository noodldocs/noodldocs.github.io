# Importing external scripts

## What you'll learn
- How to import external scripts into Noodl, without using Noodl modules
- Practical application of the [Function](/nodes/javascript/function.md) node
- How to look up the distance and travel time between two geographic locations using the Google Maps platform
- Using Noodl Arrays together with the For Each node to create dynamic user interfaces

## Google Maps API
The Google maps JavaScript API collect many of Google's location and map services into a single library. We'll use it to access the [Distance Matrix Service](https://developers.google.com/maps/documentation/javascript/distancematrix) that can calculate the distance between locations when travelled by car.

## Step 1 - API Key
Most libraries and APIs that access web services require an API Key. These allow the API provider to track how many requests are made, for billing purposes, as well as preventing bots and denial of service attacks.

Google require an API key for their services, which can be setup in their cloud platform console. A credit card is required, but this guide will stay well within the limits of the free tier quota.

Follow [Google's guide](https://developers.google.com/maps/documentation/javascript/get-api-key) for how to get an API key. 

## Step 2 - Importing the script

Looking at [Google's example](https://developers.google.com/maps/documentation/javascript/examples/distance-matrix#maps_distance_matrix-javascript) they're importing the Maps API library by adding this HTML tag:

```html
<script
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
    async
></script>
```

While Noodl [modules](modules/modules.md) can be used to extend Noodl in many ways, including adding `<script>` tags, there's a simpler alternative, the [Script Downloader](nodes/javascript/script-downloader.md) node.

The Script Downloader node needs the `src` part of a `<script>` tag and will load scripts asynchronously (like the `async` keyword above). Note that Google's example is specify a callback with `callback=initMap`, a global javascript function that will automatically be called when the script has loaded. In Noodl we don't need that, so it can be removed. The `v=weekly` part is optional, it's specifying what version to load. Removing the callback and version leaves us with the following:
```
https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY
```
This can be added to a Script Downloader node. Make sure to use your own API key.

![](script-downloader-params.png ':class=img-size-l')

## Step 3 - Using the Distance API

The Script Downloader node has an output named _Loaded_, which triggers when the script(s) has been loaded. This can be connected to a Function node:

![](function.png ':class=img-size-l')

This enables the same functionality as the the global callback function that Google's example was using, and runs code directly after the library has loaded.

Now let's write some code in the Function node to use Google's distance matrix service:
```js
const service = new google.maps.DistanceMatrixService();

const options = {
  origins: ["Malmö, Sweden"],
  destinations: ["Copenhagen, Denmark"],
  travelMode: google.maps.TravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC,
  avoidHighways: false,
  avoidTolls: false,
};

service.getDistanceMatrix(options, (response, status) => {
   console.log(response); 
});
```

We're asking the service for the distance between Malmö and Copenhagen, and printing the results using `console.log()`

## Step 4 - The developer console

`console.log()` prints to the developer console. The developer tools are opened by clicking the bug icon in the preview window's toolbar:
![](debugger.png ':class=img-size-m')

Now we can see the result from the code above:
![](devtools-1.png ':class=img-size-l')

The results consist of:
- `destinationAddresses`: The actual address of the location that Google inferred from our destination string
- `originAddresses`: The actual address of the location that Google inferred from our origin string
- `rows`: One row per origin, with a list of result for every destination

This might look a bit complicated for our needs, but keep in mind that the service support more advanced use cases using multiple origins and destinations. We'll leverage that later in this guide.

?> If you'd rather use your browser of choice you can open up the URL from the address in the preview window's title bar. Here's an example using Safari: ![](browser-devtools.png ':class=img-size-l')

## Step 5 - Showing the result in a Text node

In Noodl we want to send the result via an output from the Function node, not just printing it to the developer console. Let's add the following code to the `getDistanceMatrix` callback:
```js
Outputs.Distance = response.rows[0].elements[0].distance.text;
Outputs.Changed();
```

This is doing two things:
1. Setting an output called `Distance`. We're extracting the part of the result that formatted as a string with an unit (metric in our case). Noodl will automatically create the output.
2. Creating an output signal called `Changed`. Calling a signal is required when setting outputs from a callback since Noodl won't update any outputs until a signal is sent. This is also good practice in general since it allows the Function to trigger additional things, like showing a popup, animate a result, trigger a navigation, and much more.

Now we can connect the result to a text node:
![](result-1.png ':class=img-size-l')

## Step 6 - Using text inputs for origin and destination

The origin and destination has been hardcoded to cities in Sweden and Denmark. Let's make those dynamic and get them from the user interface instead:
```js
const options = {
  origins: [Inputs.Origin],
  destinations: [Inputs.Destination],
```
Noodl will create two new inputs, `Origin` and `Destination`, that we can use to connect the output of input fields.

Let's add a button and a few input fields from the [SDS](modules/sds-v3/) module.

![](with-sds.png ':class=img-size-l')

- We don't want the Function node to run immediately on load anymore. It's triggered by the user pressing the Enter key when one of the input fields are focused, or when clicking the "Go" button.
- Origin and destination is now read from input fields

Now we have a simple app where the user can enter any origin and destination and see the distance between them.

## Step 7 - Handling errors

If the user enters an incorrect value, our code won't output anything. Let's look at what we get from Google's library when non-existing cities or locations are used:

![](devtools-2.png ':class=img-size-l')

So we get `status: "OK"` when a call was successful, and `status: "NOT_FOUND"` when either the origin or destination wasn't found.

Let's update our code to do some very basic error handling. We'll let the `Distance` output do double duty as either the result or an error message. Here's the update code, in its entirety:
```js
const service = new google.maps.DistanceMatrixService();

const options = {
    origins: [Inputs.Origin],
    destinations: [Inputs.Destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
};

Outputs.Distance = ""; //clear previous value

service.getDistanceMatrix(options, (response, status) => {
    const result = response.rows[0].elements[0];
    if(result.status === "OK") {
       Outputs.Distance = result.distance.text;
    }
    else {
        Outputs.Distance = result.status;
    }
    Outputs.Changed();
});
```

Just before the `getDistanceMatrix()` call is made, we set the `Distance` output to an empty string. This erases the previous result when the user starts a new request, and the result will be empty while we're waiting for a new response.

![](not-found.png ':class=img-size-m')

It's not the most elegant error handling solution, but it's a foundation that can be extended to implement better designs.

## More advanced use cases - multiple destinations

Let's take a look at a more advanced scenarios. We'll create a user interface where a user can enter multiple destinations and get the distance to all of them in one single request.

![](result-2.png ':class=img-size-m')
*Apparently you can't drive all the way from the US to Sweden. Maybe Google doesn't include the [Sherp](https://sherp.eu/en/home/) amphibious all-terrain vehicle when finding potential routes*

## Step 8 - Making the number of destinations dynamic

![](multi-dest-app.png ':class=img-size-l')

The application has now been expanded to include:
- A button to add new destinations. An empty [Object](nodes/data/object/object/) is created and added to an [Array](nodes/data/array/array/) with the id *Destinations*. See the [Arrays guide](guides/arrays.md) for more information.
- To trigger the request the user has to press the "Go" button
- The destinations Array is connected to the Function node. 
- A [For Each](nodes/data/for-each.md) node is using a new component that includes a delete icon, input field, and text showing the result

## Step 9 - The component in the For Each node
![](multi-dest-item.png ':class=img-size-l')

This item sets the destination and shows the result. For completeness there's also an icon that deletes a destination.

Note that this example has created two identical **Component Input** nodes for getting the Id. This can be useful to separate nodes into independent clusters, which can make a component easier to understand. Another approach would be to only have one **Component Inputs** and do all the connections from there, but it can quickly cause connections that fan out all over the component, making it harder to see what's connected to what.

## Step 10 - Final update to the code
![](final-function.png ':class=img-size-l')

The Function now has three inputs:
- `Origin`: A single origin
- `Items`: The Array with all destinations
- `Run`: Triggers the code to run

And here's the final iteration of the code:

```js
const service = new google.maps.DistanceMatrixService();

const options = {
    origins: [Inputs.Origin],
    //extract destination strings from our Objects
    destinations: Inputs.Items.map(d => d.destination),
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
};

Outputs.Distance = ""; //clear previous value

service.getDistanceMatrix(options, (response, status) => {
    
    const firstOrigin = response.rows[0];
    
    firstOrigin.elements.forEach((e,i) => {
        const distance = e.status === "OK" ? e.distance.text : e.status;
        //save result to the Objects in the Destinations array
        Inputs.Items.get(i).Result = distance;
    });
});
```

The `destinations` option is using `map()` on the Destination array to loop over all the Objects and extract the destination.

The result is saved to the array with all the destinations (which is connected to `Inputs.Items`). This is how the result is passed back to the Noodl component from the previous step, where it's connected to a Text input.

![](result-text.png ':class=img-size-m')

?> The **For Each** node adds all properties of an Object to the **Component Inputs** of all components it creates

## Further reading
- [Function](nodes/javascript/function)
- [Array API](javascript-api/noodl-array)
- [Object API](javascript-api/noodl-object)
- [For Each](guides/for-each)