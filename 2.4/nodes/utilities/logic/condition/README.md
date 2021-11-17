<##head##>
# Condition
This node evaluates a condition and sends one of two <span class="ndl-signal">signals</span> depending on if the condition is <span class="ndl-data">true</span> or <span class="ndl-data">false</span>.

![](./condition_node.png ':class=img-size-l')

The input <span class="ndl-data">Condition</span> will be treated as a <span class="ndl-data">boolean</span>, and the evaluation happens when the input changes, unless an explict <span class="ndl-signal">signal</span> is connected to the <span class="ndl-signal">Evaluate</span> input.

<##head##>

![](condition.gif ':class=img-size-l')

<div class="node-inputs">

## Inputs

**Condition**
<##input:condition##>A boolean that decides which output signal (**On true** or **On false**) that should be triggered when the **Evaluate** signal is triggered or when the condition changes, if the **Evaluate** signal is not connected.<##input##>

**Evaluate**
<##input:evaluate##>Evaluates the **Condition** input and triggers the respective output signal. If no signal is connected to Evaluate, the node will evaluate the input everytime the input changes.<##input##>

## Outputs
**Result**
<##output:result##>A <span class="ndl-data">boolean</span> that holds the latest evaluated value on the **Condition** input. <##output##>

**On true**
<##output:ontrue##>Triggered when **Evaluate** is triggered and **Condition** is <span class="ndl-data">true.</span><##output##>

**On false**
<##output:onfalse##>Triggered when **Evaluate** is triggered and **Condition** is <span class="ndl-data">false.</span><##output##>

</div>
