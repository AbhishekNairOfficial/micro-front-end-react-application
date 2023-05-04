import { Component } from '@angular/core';
const LOGO_IMAGE = require('../assets/logo.png');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private LOGO = LOGO_IMAGE;

  title = 'left-sidebar';
}
