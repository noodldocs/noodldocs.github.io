<##head##>

# Query Records

This node is used to fetch a selection of records from the Noodl Cloud Services backend. You can provide a query to define the selection of records you want to retrieve.

![](./query-records-node.png ':class=img-size-l')

You can specify the query using filter, sorting and limit in the Property Panel.

![](./query-records-filter-1.png ':class=img-size-l')

<##head##>

## Inputs

| Data                                           | Description                                                                                                                                                                                                                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span>            | Select the **Class** for the types of records this node should query. When the **Class** is selected you can create filters and sorting based on the properties of the **Class**.                                                                                                 |
| <span class="ndl-data">Filter</span>           | This specifies the type of filter, you can choose from:<br/><br/>`Visual`: Specify your filter using the visual filter editor.<br/>`JavaScript`: Specify your filter using JavaScript (this is more flexible and you can create more dynamic queyries but it's also more complex) |
| <span class="ndl-data">Use Limit</span>        | <##input:use limit##>Enable or disable the use of limit, i.e. that you can specify how many records are returned as a maximum and if a number of record should be skipped.<##input##>                                                                                             |
| <span class="ndl-data">Limit</span>            | <##input:limit##>The maximum number of records to be returned by the backend.<##input##>                                                                                                                                                                                          |
| <span class="ndl-data">Skip</span>             | <##input:skip##>This property allows you to skip a number of records from being returned by the backend. Using **Skip** and **Limit** allows you to do paging, e.g. return records from 10-20.<##input##>                                                                         |
| <span class="ndl-data">Query Parameters</span> | <##input:qp-\*##>The input for specifying the value of a query parameter.<##input##> Each paramteter used in your query will get an input where you can provide a value through a connection.                                                                                     |

| Signal                             | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal here to perform the query and fetch matching records from the backend.<##input##> |

## Outputs

| Data                                          | Description                                                                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Items</span>           | <##output:items##>The result of the query as an array of **Records**.<##output##>                                          |
| <span class="ndl-data">Count</span>           | <##output:count##>The number of records in the result.<##output##>                                                         |
| <span class="ndl-data">First Record Id</span> | <##output:first record id##>The Id of the first Record in the result array.<##output##>                                    |
| <span class="ndl-data">Error</span>           | <##output:error##>This output contains the error message incase something when wrong when executing the query.<##output##> |

| Signal                                  | Description                                                                                                                                            |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Success</span> | <##output:success##>A signal is sent here if the query was successful and the result is ready.<##output##>                                             |
| <span class="ndl-signal">Failure</span> | <##output:failure##>A signal is sent here if something went wrong with the query. You can find the error message via the **Error** output.<##output##> |
