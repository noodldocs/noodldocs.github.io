# Date To String

This node takes a **Date** type input and produces a string output based on a specified format.

![](date-to-string.png ':class=img-size-l')

The format is specified as a string that can include the following special syntax:

* **{date}** The numeric date part.
* **{month}** The numeric month 1 = January, 12 = December.
* **{year}** The numeric year.
* **{hour}** The numeric hour, between 0..23
* **{minute}** The numeric minute, between 0..60
* **{second}** The numeric second, between 0..60

The default format is this:

```
{year}-{month}-{date}
```

## INPUTS

**Format**  
This is where the format string is specified, see above for details.

**Date**  
The date input to format.

## OUTPUTS

**Date String**  
The formatted date string.

**Date Changed**  
A signal is sent here when the formatted date string changed.

