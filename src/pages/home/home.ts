import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { StorageProvider } from '../../providers/storage/storage.provider';
import { UserService } from '../../services/user.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[UserService]
})
export class HomePage {

  constructor(public nasvCtrl: NavController, public events: Events,
    private storage: StorageProvider, private userService: UserService) {

  }

  exitApp() {
    this.storage.cleanStorage();
    this.userService.logout();
    this.events.publish('logout');
  }

  ionViewWillEnter() {
    this.events.publish('menu:show');
  }
}
