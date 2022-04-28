# Form Validation

## Adding the module to your project

Since the **Validate** node is not part of the default node set in Noodl, we need to add the Form Validation module. Open the Noodl project in which you want to add the module, and import it from the sidebar.

![](/library/modules/validation/formvalidation-add-module.png)

Once that's done you'll be able to create the **Validate** node.

## Guide

Validating user inputted data in forms and other input fields are a recurring and often tedious process. This module provides a [Validate](/library/modules/validation/validate) node with a set of neat tools to make this easier.

First let's take a look at a very basic example.

![](/library/modules/validation/simple-validate.png ':class=img-size-l')

Here we introduce the **Validate** node and we will use it to validate a simple input field. Using the **Validate** node you create a _schema_ for the inputs that you want to validate, this schema is a property of the **Validate** node.

![](/library/modules/validation/schema-property.png ':class=img-size-m')

You edit the schema script by clicking the editor button. The simple schema for this example looks something like this:

```javascript
schema({
    Name: string().required('Must provide name.'),
})
```

This schema has one property **Name** that must be a string and it is required. Each property in the schema will create an input on the **Validate** node. The error message can be provided, so if the validation fails that error message is sent on the **Name Error** output.

This will result in the following. If there is no _non empty_ string provided on the **Name** input the **Name Error** will output "Must provide name."

![](/library/modules/validation/simple-validate-1.png ':class=img-size-l')

So that's a very basic example. Now let's take a look at one a little bit more involved.

![](/library/modules/validation/sign-up-example.png ':class=img-size-l')

This example has the following _schema_ script:

```javascript
schema({
    Name: string().required('Must provide name'),
    Email: string().required('Must provide email').email('Must be valid email'),
})
```

It's not much more complicated, it has an additional property **Email** that is both require and needs to be a valid email, with provided error messages.

A few notes on this example:

-   The **Validate** nodes **Enabled** input can be used to control if the validation should run or not. If it doesn't run it will not emit any error messages. This is connected to a **Switch** node that is false by default and when the save button is clicked it enables the validation. This a common wanted behavior to not show the error messages while the user is first inputting.

-   The **Is Valid** output is used to determin if the form is valid and thus if the submit action should be performed. In this case the **Save User** action is not performed unless the _Only save if valid_ condition is true.

-   The **Name** and **Email** outputs from the **Validate** node are the ones that are sent to the action. The validation node can also perform modifiers on the property, such as trimming etc and the modified propertys are provided as outputs of the **Validate** node.

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
})
```

This can be used to validate that a password is formatted correctly and you can also use this module to make sure that two input fields match.

```javascript
schema({
    'Due Date': date().min(new Date(), 'Must be a date in the future'),
})
```

If you want to use spaces in your property names, make sure they are provided as strings i.e. in quatation marks. This example above tests a date and make sure that it is a date in the future.
