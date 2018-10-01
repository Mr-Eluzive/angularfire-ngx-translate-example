import { TranslateLoader } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class FirestoreTransLoader implements TranslateLoader {

  constructor(private db: AngularFirestore) {
  }

  getTranslation(lang: string, prefix: string = 'translates'): Observable<any> {
    return this.db.doc(`${prefix}/${lang}`).valueChanges();
  }

}
