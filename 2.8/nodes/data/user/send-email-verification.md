---
hide_title: true
hide_table_of_contents: true
title: Send Email Verification
---

<##head##>

# Send Email Verification

When a new user is created that have a valid email Noodl will automatically attempt to send a verification email (this needs an email service hooked up via something like [Zapier](/docs/guides/business-logic/zapier)). If for some reasone you need to resend the email you can use this action node. Your will need to provide the span <span className="ndl-data">email</span> as in input to the node and then trigger the <span className="ndl-signal">Do</span> action.

<div className="ndl-image-with-background l">

![](nodes/data/user/send-email-verification/send-email-verification.png)

</div>

<##head##>

## Inputs

| Signal                                 | Description                                                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to have a verification email sent to the user with the provided Email if it esists.<##input##> |

| Data                                    | Description                                                                                                       |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Email</span> | <##input:email##>The email that should receive a verification email, if a user with that email exists.<##input##> |

## Outputs

| Signal                                      | Description                                                                                                                                                          |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>The verification email was succesfully triggered. It will be sent using your connected email service.<##output##>                                |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something when wrong when sending the email. The error message can be found in the **Error** output.<##output##> |

| Data                                    | Description                                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the action failed.<##output##> |
