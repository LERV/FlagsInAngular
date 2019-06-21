import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flags = [
    { id: 1, country: 'China', code: 'cn' },
    { id: 2, country: 'Germany', code: 'de' },
    { id: 3, country: 'Uruguay', code: 'uy' },
    { id: 4, country: 'France', code: 'fr' },
    { id: 5, country: 'Japan', code: 'jp' },
    { id: 6, country: 'Argentina', code: 'ar' },
    { id: 7, country: 'Costa Rica', code: 'cr' }]
  title = 'flags-angular 1';

  selectedCountryId = 7;
}
