# Event API

**`Noodl.eventEmitter.emit(eventName, data)`**  
Send an event. Works well together with _Event Receivers_.

```javascript
Noodl.eventEmitter.emit("event name", {
    value: "hello",
    someOtherValue: 100
}):
```

**`Noodl.eventEmitter.on(eventName, callback(data))`**  
**`Noodl.eventEmitter.once(eventName, callback(data))`**  

Receive an event. Works together with _Event Senders_

```javascript
Noodl.eventEmitter.on("event name", function(eventData) {
    console.log(eventData.value);
});
```
