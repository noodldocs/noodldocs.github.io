<##head##>
# Filter Record
This node is used to filter an array that is assumed to contain Records of a given class based on custom filter conditions.

![](./filter-records-node.png ':class=img-size-l')

You can specify both filter and sorting visually.

![](./filter-records-visual.png ':class=img-size-l')
<##head##>

## Inputs

**Enabled**  
<##input:enabled##>If disabled the node will simply pass the input array through without change, if enabled the input array will be filtered and sorted.<##input##>

**Class**  
The **Class** of records that the input array is assumed to contain.

**Use Limit**  
<##input:use limit##>Enabled or disable limiting of the input array to a specific number of maximum records.<##input##>

**Limit**  
<##input:limit##>The number of maximum records to limit the output filtered array to contain.<##input##>

**Skip**  
<##input:skip##>The number of records in the beginning of the output filtered array to skip.<##input##>

**Items**  
<##input:items##>The input array of records that should be filtered by this node.<##input##>

**Filter**  
<##input:filter##>Send a signal on this input to perform the filtering, this will produce a new filtered array on the **Items** output. If this input does not have a connection, the input array will be filtered every time it is updated.<##input##>

## Filter parameter inputs
<##input:fp-*##>Each filter parameter get an input where a connection can be made to provide the value for the paramter.<##input##>


## Outputs

**Items**  
<##output:items##>This output will contain the filtered array of records.<##output##>

**Filtered**  
<##output:filtered##>A signal will be sent on this output when the input array have been successfully filtered.<##output##>

**Count**  
<##output:count##>The number of records in the filtered output array.<##output##>

**First Record Id**  
<##output:first record id##>The **Id** of the first record in the filtered output array.<##output##>

