# useI18nWithGoogleTranslate 🐱‍🐉

Helper automated function to translate json file based on language like `english` to any other language through `google-translate`.

> Created to be used in [`Breakpoint`] Project(s).

## `Installation`

```bash
# npm
$ npm install use-i18n-with-google-translate
# yarn
$ yarn add use-i18n-with-google-translate
```

## `Usage`

```typescript
import useI18nWithGoogleTranslate from "use-i18n-with-google-translate";

useI18nWithGoogleTranslate(
  inputFile, // input file path to read data(string)
  outputFile, // output file path to write the result (string)
  config // config object to setup the direction of translate default to { from: 'en', to: 'ar' }
); // return a promise
```

#### License

---

[MIT](LICENSE) &copy; [Imed Jaberi](https://github.com/3imed-jaberi)
