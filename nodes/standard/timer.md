# Timer
A timer that can be used to delay actions

![](timer.png)

<div class = "node-inputs">

## Inputs

**Start**  
Starts the timer. Does nothing if the timer is already running.

**Restart**  
Starts the timer. Restarts it if the timer is already running.

**Duration**  
The duration of the timer in milliseconds

**Start Delay**  
The delay before the timer starts after the *Start* input is triggered. Specified in milliseconds.

**Stop**  
Stops the timer if it's running. Does nothing otherwise.

</div>

<div class = "node-outputs">

## Outputs
**Started**  
Emits a signal when the timer starts.

**Finished**  
Emits a signal when the timer is finished.

</div>
