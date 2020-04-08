# Signal To Index
Maps signals to integer values

![](signal-to-index.png)

<div class = "node-inputs">

## Inputs
**Signal 0..N**  
Signals that should be mapped to numbers. *Signal 0* will map to a 0, *Signal 1* will map to 1, and so on

**Start Index**  
Choose what value the *Index* output should start at

</div>

<div class = "node-outputs">

## Outputs
**Index**  
The index of the input signal that triggered last

**Signal Triggered**  
Emits a signal when any of the input signals triggered

</div>
