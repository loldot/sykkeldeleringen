import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdr-home',
  template: `
    <p i18n="@@homePageWorks">Hjemmesiden virker!</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
