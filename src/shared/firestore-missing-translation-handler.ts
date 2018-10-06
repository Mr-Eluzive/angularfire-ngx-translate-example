import {MissingTranslationHandler, TranslateService} from '@ngx-translate/core';
import {MissingTranslationHandlerParams} from '@ngx-translate/core/lib/missing-translation-handler';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class FirestoreMissingTranslationHandler implements MissingTranslationHandler {

  constructor(private http: HttpClient) {
  }

  handle(params: MissingTranslationHandlerParams) {
    return this.http.get(`./assets/i18n/${params.translateService.currentLang}.json`).pipe(
      map(x => x[params.key])
    );
  }

}
