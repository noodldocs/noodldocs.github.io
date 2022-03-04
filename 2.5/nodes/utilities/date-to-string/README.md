<##head##>

# Date To String

This node translates a <span class="ndl-data">date</span> type input and outputs a <span class="ndl-data">string</span> based on your specified format.

<div class="ndl-image-with-background l">

![](date-to-string.png)

</div>

The format is specified as a <span class="ndl-data">string</span> that can include the following special syntax: `{date}`, `{month}`, `{year}`, `{hour}`, `{minute}` and `{second}`.

<##head##>

-   **{date}** The numeric date part.
-   **{month}** The numeric month 1 = January, 12 = December.
-   **{year}** The numeric year.
-   **{hour}** The numeric hour, between 0..23
-   **{minute}** The numeric minute, between 0..60
-   **{second}** The numeric second, between 0..60

The default format is this:

```
{year}-{month}-{date}
```

## Inputs

| Data                                 | Description                                                          |
| ------------------------------------ | -------------------------------------------------------------------- |
| <span class="ndl-data">Format</span> | This is where the format string is specified, see above for details. |
| <span class="ndl-data">Date</span>   | The date input to format.                                            |

## Outputs

| Data                                        | Description                |
| ------------------------------------------- | -------------------------- |
| <span class="ndl-data">\*Date String</span> | The formatted date string. |

| Signal                                       | Description                                            |
| -------------------------------------------- | ------------------------------------------------------ |
| <span class="ndl-signal">Date Changed</span> | Sends a signal when the formatted date string changed. |
