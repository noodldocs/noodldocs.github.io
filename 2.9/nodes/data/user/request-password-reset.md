---
hide_title: true
hide_table_of_contents: true
title: Request Password Reset
---

<##head##>

# Request Password Reset

This action node is used to help users recover a lost password, or to change their password. In order to do this they first need to receive a reset link via email. This action will trigger such an email (it needs to be hooked up via one of Noodls cloud services integrations such as [Zapier](/docs/guides/business-logic/zapier)). Typically you would use some sort of password recovery page.

![](/nodes/data/user/request-password-reset/request-ui.png)

This page would run the **Request Password Reset** action as shown below. The node needs the <span className="ndl-data">Email</span> that it should request a password reset for, given that a user with that email exists. Then send a signal to <span className="ndl-signal">Do</span> to initiate the request.

<div className="ndl-image-with-background l">

![](/nodes/data/user/request-password-reset/request-nodes.png)

</div>

<##head##>

This [guide](/docs/guides/business-logic/user-management) explains in detail how to connect Noodl with an email service using Zapier.

## Inputs

| Signal                                 | Description                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to have a password reset email sent to the user with the provided Email if it esists.<##input##> |

| Data                                    | Description                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Email</span> | <##input:email##>The email that should receive a password reset email, if a user with that email exists.<##input##> |

## Outputs

| Signal                                      | Description                                                                                                                                                          |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>The password reset email was succesfully triggered. It will be sent using your connected email service.<##output##>                              |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something when wrong when sending the email. The error message can be found in the **Error** output.<##output##> |

| Data                                    | Description                                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the action failed.<##output##> |
