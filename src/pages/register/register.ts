import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Events } from 'ionic-angular/util/events';
import { UserModel } from '../../models/logic-models/user.model';
import { UserService } from '../../services/user.service';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UserService]
})
export class RegisterPage {

  public registerForm: FormGroup;
  public user_register: UserModel = new UserModel({});

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public events: Events,
              private userService: UserService) {
    this.initRegisterForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.user_register.name = this.registerForm.value.name;
    this.user_register.lastname = this.registerForm.value.lastName;
    this.user_register.email = this.registerForm.value.email;
    this.user_register.role = 'user_role';
    this.user_register.image = '';
    this.user_register.password = this.registerForm.value.password;

    this.userService.register(this.user_register).subscribe(response => {
      let user = response.data;
      this.user_register = user;
      if(!user._id) {
        console.log('Error al registrarse');
      } else {
        console.log('usuario registrado');
        this.clearUserInput();
        this.navCtrl.pop();
      }
    },
    error =>{
      console.log(error);
    });
  }

  clearUserInput() {
    this.registerForm.controls.name.reset();
    this.registerForm.controls.lastName.reset();
    this.registerForm.controls.email.reset();
    this.registerForm.controls.password.reset();
  }

  private initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ionViewWillEnter() {
    this.events.publish('menu:hide');
  }

}
