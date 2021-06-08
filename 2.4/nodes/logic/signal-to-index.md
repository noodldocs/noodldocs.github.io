# Signal To Index

Maps signals to integer values.

![](signal-to-index.png)

<div class = "node-inputs">

## Inputs

**Signal 0..N**  
Signals that should be mapped to numbers. _Signal 0_ will map to 0, _Signal 1_ will map to 1, and so on.

**Start Index**  
Choose what value the _Index_ output should start at.

</div>

<div class = "node-outputs">

## Outputs

**Index**  
The index of the input signal that triggered last.

**Signal Triggered**  
Emits a signal when any of the input signals triggered.

</div>
