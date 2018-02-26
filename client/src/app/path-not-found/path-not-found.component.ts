import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdr-path-not-found',
  template: `
    <h1 i18n="@@err404Title">Feil 404: Ikke funnet!</h1>
    <p i18n="@@err404Description">Du ødela internett - godt jobbet</p>
  `,
  styles: []
})
export class PathNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
