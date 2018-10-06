import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ helloKey | translate }}</p>
    <select (change)="onLangChange($event)">
      <option value="en">English</option>
      <option value="pl">Polish</option>
    </select>

  `,
})
export class AppComponent {

  helloKey = 'SOMETHING';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onLangChange(event) {
    this.translate.use(event.target.value);
  }

}
