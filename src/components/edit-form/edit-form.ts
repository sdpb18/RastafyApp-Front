import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../../models/logic-models/user.model';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'edit-form',
  templateUrl: 'edit-form.html',
  providers: [UserService]
})
export class EditFormComponent {

  public user: any;
  public user_update: UserModel = new UserModel({});
  public updateForm: FormGroup;
  public isFormSubmited: boolean = false;

  constructor(private navParams: NavParams,
    private viewCtrl: ViewController,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private storage: Storage) {
    this.initUpdateForm();
    this.user = this.navParams.get('profile');
    console.log(this.user);
  }


  // updateUser() {
  //   this.isFormSubmited = true;
  //   this.user_update._id = this.user._id;
  //   this.user_update.name = this.updateForm.value.name;
  //   this.user_update.lastname = this.updateForm.value.lastName;
  //   this.user_update.email = this.updateForm.value.email;
  //   this.user_update.role = 'user_role';;
  //   this.user_update.password = this.user.password;


  //   this.userService.updateUser(this.user_update).subscribe(response => {
  //     let identity = response.user;
  //     if (identity !== null) {
  //       this.user = response.user;
  //       this.storage.set('identity', (identity));
  //       this.isFormSubmited = false;
  //       console.log('datos actualizado correctamente');
  //       this.dismiss();
  //     }
  //   }, error => {
  //     console.log('error', error);
  //     this.isFormSubmited = false;
  //   });
  // }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewWillEnter() {
    this.isFormSubmited = false;
  }

  private initUpdateForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
}
