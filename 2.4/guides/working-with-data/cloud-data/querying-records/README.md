## Querying and Fetching Records
Now we've managed to create **Records** and store in a cloud database. Next step is to retrieve them. When working with databases the process of asking the database for a specific subset of **Records** based on some conditions. This is called "Querying". You can think about it as asking the database "Give me all records when condition X is fulfilled", for example "Give me all tasks where the property `isDone` is false".

Another important concept is to "Fetch" a specific record from the database. In Noodl, if you know the **Id** of a **Record**, you can ask the database to fetch the properties of that specific **Record**. Remember, all the data in your database is not available in your Noodl App when it starts, you have to Query and Fetch the records necessary.

### Making a Query
Lets split our screen into two parts, one part to create **Records** (which we already have) and one new part to list Query results from the database.