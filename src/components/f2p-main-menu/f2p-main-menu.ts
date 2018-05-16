import { Component } from '@angular/core';

/**
 * Generated class for the F2pMainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'f2p-main-menu',
  templateUrl: 'f2p-main-menu.html'
})
export class F2pMainMenuComponent {

  text: string;

  constructor() {
    console.log('Hello F2pMainMenuComponent Component');
    this.text = 'Hello World';
  }

}
