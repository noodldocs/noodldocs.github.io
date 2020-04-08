# Websocket
Bidirectional communication via a websocket. Works with flat JSON objects

<div class = "node-inputs">

## INPUTS
**Ip Address:Port**  
The address to connect to. `ws://` is automatically prepended

**Send Data**  
Creates a flat object of all inputs created in the *Data to Send* category, encodes it as JSON and sends it to the server

**Data to Send**  
Defines attributes of the JSON object that will be sent

</div>

<div class = "node-outputs">

## Outputs
**New Data Received**  
This signal will fire when a new JSON object is sent from the server. This signal is fired after the other outputs have been updated to the new values sent from the server.

**Outputs**  
Here you can specify values that will be sent from the server. You don't have to include all properties and different Websocket nodes can have different properties. Properties from the server that aren't used will be ignored.

</div>
