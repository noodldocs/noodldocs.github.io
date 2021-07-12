# Form Validation

Validating user inputted data in forms and other input fields is a recurring and often tedious process. This module provides a [Validate](/modules/validation/validate) node with a set of neat tools to make this easier.

First let's take a look at a very basic example. These examples are using the [Simple Design System](/modules/sds-v3/).

![](simple-validate.png ':class=img-size-l')

In this example we introduce the **Validate** node and we use it to validate a simple input field. To use the **Validate** node you create a _schema_ for the inputs that you want to validate. This schema is a property of the **Validate** node.

![](schema-property.png ':class=img-size-m')

You edit the schema script by clicking the editor button. In this example we use a simple schema like this:

```javascript
schema({
  Name: string().required('Must provide name.'),
});
```

This schema has one property **Name** that must be a string and it is required. Each property in the schema will create an input on the **Validate** node. An error message can be provided, so if the validation fails that error message is sent on the **Name Error** output.

When this schema executes it will check that there is a non-empty string provided on the **Name** input. If the provided string is empty then the **Name Error** will output "Must provide name."

![](simple-validate-1.png ':class=img-size-l')

So that's a very basic example. Now let's take a look at a slightly more complex example.

![](sign-up-example.png ':class=img-size-l')

This example has the following _schema_ script:

```javascript
schema({
  Name: string().required('Must provide name'),
  Email: string().required('Must provide email').email('Must be valid email'),
});
```

We have an additional property **Email** that is both required and needs to be a valid email, with provided error messages.

A few notes on this example:

- The **Validate** node's **Enabled** input can be used to control if the validation should run or not. If it doesn't run it will not emit any error messages. In this example the **Enabled** input is connected to a **Switch** node that is false by default, and when the save button is clicked it enables the validation. Not showing the the error message until the user is done with the input is a common pattern.

- The **Is Valid** output is used to determine if the form is valid and thus if the submit action can be performed. In this case the **Save User** action is not performed unless the _Only save if valid_ condition is true.

- The **Name** and **Email** outputs from the **Validate** node are the ones that are sent to the action. The validation node can also perform modifiers on the properties, such as trimming etc and the modified properties are provided as outputs of the **Validate** node.

The **Validate** node is based on the open source library [Yup](https://github.com/jquense/yup) and in the documentation you can find many more examples. Here are a few others that can be useful:

```javascript
schema({
  Password: string()
    .required('Must provide password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  ConfirmPassword: string()
    .required('Must confirm password')
    .oneOf([ref('Password')], 'Passwords must match'),
});
```

The example above validates that a password is formatted correctly and that the **Password** and **ConfirmPassword** input fields match.

```javascript
schema({
  'Due Date': date().min(new Date(), 'Must be a date in the future'),
});
```

If you want to use spaces in your property names, make sure they are provided as strings i.e. in quotation marks. The example above tests a date and makes sure that it is a date in the future.
