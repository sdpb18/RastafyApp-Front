import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { EditFormComponent } from '../../components/edit-form/edit-form';
import { StorageProvider } from '../../providers/storage/storage.provider';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UserService]
})
export class ProfilePage {
  public user: any;
  public token: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private userService: UserService,
              private storageProvider: StorageProvider) {
                console.log(this.user);
                console.log(this.token);
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter() {
    this.user = this.storageProvider.getUser();
    this.token = this.storageProvider.getToken();
  }

  presentEditModal() {
    let editFormModal = this.modalCtrl.create(EditFormComponent, { profile: this.user });
    editFormModal.present();
  }

}
