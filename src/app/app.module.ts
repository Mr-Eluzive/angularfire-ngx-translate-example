import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirestoreTransLoader } from '../shared/firestore-trans-loader';
import { FirestoreMissingTranslationHandler } from '../shared/firestore-missing-translation-handler';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export function FirestoreTranslationsLoaderFactory(db: AngularFirestore) {
  return new FirestoreTransLoader(db);
}

export function MissingTranslationHandlerFactory(http: HttpClient) {
  return new FirestoreMissingTranslationHandler(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: FirestoreTranslationsLoaderFactory, deps: [AngularFirestore]},
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: MissingTranslationHandlerFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
