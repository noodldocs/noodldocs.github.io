# i18next

This is used to register bundles and to set and get language.

## Inputs

### Language (string)

### ChangeLanguage (signal)

These two are used in combination to set a new language. The Language string should be a language code, and is matched to a language bundle. For example `en` for English.

## Outputs

### LanguageChanged (signal)

### CurrentLanguage (string)

**LanguageChanged** is triggered whenever the language is changed, for example when using the **ChangeLanguage** signal. If, for example, your Noodl project needs to take action when the language is changed, you can use this signal. **CurrentLanguage** contains the language code of the currently set language.
