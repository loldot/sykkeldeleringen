import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdr-path-not-found',
  template: `
    <h1>404 Not Found!!!</h1>
    <p>you broke the internet, good job</p>
  `,
  styles: []
})
export class PathNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
