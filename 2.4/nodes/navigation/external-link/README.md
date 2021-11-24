<##head##>

# External Link

This node is used to trigger a navigation to a page outside of your app.

It also supports common URL schemes, like `mailto:` and `tel:`.

![](./external-link.png ':class=img-size-l')

Note that **External Link** does not work in the Noodl Viewer. You need to run the app in a browser for it to work.

<##head##>

## Inputs

**Link**

<##input:link##>The URL that should be opened when the **Do** signal is triggered. The URL should include the full scheme, e.g. `http://`, `mailto:`, etc. <##input##>

**Open in New Tab**

<##input:openInNewTab##>If this property is set to <span class="ndl-data">true</span> the link will be opened in a new browser tab. Otherwise it will open (and replace) the current Noodl app in the browser.<##input##>

### Action
**Do**

<##input:do##>Triggering this signal will navigate to the external link.<##input##>



