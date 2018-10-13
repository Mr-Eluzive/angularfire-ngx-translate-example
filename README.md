# README
Remember about complete your Firebase project's configuration in `environment.ts`.  
And this is example design of Firestore  
![firestore design](./screenshot.png?raw=true "Firestore design")

### Missing translation handler
[Right here](https://github.com/Mr-Eluzive/angularfire-ngx-translate-example/tree/missing-translation-handler) you can find example of `MissingTranslationHandler` implementation. When `TranslateService` is unable to find some translation in Firestore, then it will use this handler to get this translation from JSON file.
