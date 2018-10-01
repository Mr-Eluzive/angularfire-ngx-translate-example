import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirestoreTransLoader } from '../shared/firestore-trans-loader';


export function FirestoreTranslationsLoaderFactory(db: AngularFirestore) {
  return new FirestoreTransLoader(db);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: FirestoreTranslationsLoaderFactory, deps: [AngularFirestore]}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
