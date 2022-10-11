---
title: Stripe Checkout
hide_title: true
---

# Stripe Checkout

This module is built on top of [Stripe Checkout](https://stripe.com/docs/payments/checkout),
which is low-code payment integration that can be customized from their portal.

<div className="ndl-image-with-background l">

![](/library/modules/stripe-checkout/stripe_checkout.png)

</div>


## Redirect To Stripe Checkout

Redirect your customers to Stripe’s conversion-optimized Checkout,
a Stripe-hosted page to securely collect payment information.
When the customer completes their purchase,
they are redirected back to your website.

:::warning

When the customer is redirected back to the success URL,
we shouldn't assume that the payment is transferred.
Since the customer can just navigate to this website directly.

:::

### Setup

To start using this we first have to enable it inside Stripe.
Here is where you can enable it:
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to Settings (gear icon in the top right corner)
3. Navigate to "Checkout and Payment Links" under "Payments".
4. In the bottom of this page there is a section called "CLIENT-ONLY INTEGRATION" we have to enable that.

#### Getting the Publishable key

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to "Developers"
3. Navigate to "API keys" in the side panel
4. Under "Standard keys" you should see the key

### Items Format

Items is an array of objects.
More can be read here on the [Stripe API Docs](https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-lineItems).

#### Example
```json
[
  {
    // The ID of the price that the customer would like to purchase or subscribe to. May also be a SKU or plan.
    // This is just an example, where you have to use your own ID.
    "price": "price_1L5S6aHOo4vCBkMgnSou0t4U",
    // The quantity of units for the item.
    "quantity": 1
  }
]
```

### Inputs

<div className="ndl-table-35-65">

| Data                                              | Description                                                                      |
| ------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-data">Publishable key</span> | This is the Y value the the snap action will have as destination when triggered. |
| <span className="ndl-data">Mode</span>            | The type of payment mode we will process. |
| <span className="ndl-data">Success URL</span>     | The relative URL to where the customer will be redirect when the payment is successful. |
| <span className="ndl-data">Cancel URL</span>      | The relative URL to where the customer will be redirect when the payment is canceled. |
| <span className="ndl-data">Items</span>           | The products that the customer wants to purchase. More information about the format above. |

| Signal                                                 | Description                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| <span className="ndl-data">Redirect To Checkout</span> | Redirect to the Stripe Checkout. |

</div>

### Outputs

<div className="ndl-table-35-65">

| Data                                               | Description                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span>            | This will only be available when On Error is triggered. |
| <span className="ndl-data">Is Loading</span>       | This is true, when loading the Stripe plugin and redirecting. |

| Signal                                             | Description                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-data">On Error</span>         | Occurs on Stripe errors. |
| <span className="ndl-data">On Start Loading</span> | Occurs when we start loading the Stripe plugin and redirecting. |
| <span className="ndl-data">On Done Loading</span>  | Occurs when we are done loading the Stripe plugin and redirecting. |

</div>
