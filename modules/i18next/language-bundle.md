# LanguageBundle

The language bundle contains the translations for a language. If you have multiple languages you will have one LanguageBundle for each language and they generally should contain the same strings, translated to the respective language.

Each language bundle also has a "Namespace". This can be used to separate different parts of translations to different bundles that can be loaded at different times. For example you can have one bundle for static UI-texts called "UI" and one bundle for texts that are dynamically loaded based on content in the database called "Dbtexts". If you support two languages, English and Spanish, this would mean that you have four language bundle nodes: UI and Dbtexts for English and Spanish.

The bundle itself is a JSON-object, as described on [i18next website](https://www.i18next.com/translation-function/essentials). It contains `key:string` pairs for each text. It can also include an inner structure (JSON objects) to help organize strings based on features. Aa bundle for English could look like this:

```json
{
  "loginpage":{
    "user_name":"User Name",
    "confirm_button":{
      "label":"Confirm",
      "hover_text":"Press here to confirm"
    }
}
```

In this example the key `loginpage.confirm_button.hover_text` would identify the button hover text translation when used in a Translation node.
Note that i18next supports various dynamic features in the texts, e.g. plurals, date formats, etc. These are generally supported when used in Noodl.

There are typically two ways to use Language Bundles. For static texts, for example UI texts, you edit the bundle object directly in Noodl (pressing the "Edit" button on the property panel). As you build the UI you add new texts to the bundle. You have one bundle per language. For dynamic texts, for example loaded during execution from a database, you programatically create bundle objects and load them into the **LanguageBundle** when available and using the AddBundleObject input.

## Inputs

### Language (string)

The language that this bundle applies to. Typically a language code, e.g. `en`.

### Namespace (string)

The name of the Namespace. Can by any string.

### AddResource (signal)

### ResourceKey (string)

### ResourceValue (string)

These three inputs are used in combination to add a single new key/string to the bundle.

### AddBundleObject (signal)

### Resource Bundle Object (javascript object)

These two inputs are used in combination to add a complete Bundle object to the bundle.

# Outputs

## BundleLoaded (signal)

Triggered when a new bundle object has been loaded.
