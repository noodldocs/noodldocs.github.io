<##head##>

# Inverter

This node changes <span class="ndl-data">true</span> values to be <span class="ndl-data">false</span>, and <span class="ndl-data">false</span> values to be <span class="ndl-data">true</span>. It is identical to a logic NOT operation.

![](inverter.png)

The <span class="ndl-node">Inverter</span> node runs JavaScript in the background and interprets truthy and falsy values in the same fashion. It is equal to creating an <span class="ndl-node">Expression</span> node with the expression `!value`.

<##head##>

<div class = "node-inputs">

## Inputs

**Value**
The value to invert.

</div>

<div class = "node-outputs">

## Outputs

**Result**
The result of inverting the input _Value_. This is equal to either _True_ or _False_

</div>

## Advanced

The inverter is equal to creating the following expression:
`!value` .
