import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserModel } from '../../models/logic-models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user.service';
import { RegisterPage } from '../register/register';
import { Events } from 'ionic-angular/util/events';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { StorageProvider } from '../../providers/storage/storage.provider';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage implements OnInit {

  public title: string;
  public user: UserModel = new UserModel({});
  public identity: any;
  public token: any;
  public loginForm: FormGroup;
  public isFormSubmited: boolean = false;
  public error: any = {
    errorMessage: null,
    errorFlag: false
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private userService: UserService,
    private storage: Storage,
    private events: Events,
    private storageProvider: StorageProvider) {
    this.title = 'Rastafy';
    this.createLoginForm();
  }

  ngOnInit() {
    this.storageProvider.cleanStorage();
  }

  login() {
    this.isFormSubmited = true;
    this.userService.login(this.user).subscribe(response => {
      this.identity = response.data;
      console.log('RESPONSE',response);
      console.log('IDENTITY',this.identity);
      if (!this.identity._id) {
        console.log('error en el servidor');
      } else {
        console.log('this.identity', this.identity);
        this.storageProvider.setUser(this.identity);
        this.storage.set('identity',this.identity);
        this.userService.login(this.user, 'true').subscribe(response => {
          console.log(response, 'response');
          this.token = response.data;
          if (this.token.length <= 0) {
            console.log('no se genero token');
          } else {
            this.storageProvider.setToken(this.token);
            this.storage.set('token', this.token);
          }
        },
          errorResponse => {
            var body = errorResponse._body;
            this.isFormSubmited = false;
          });
          this.isFormSubmited = false;
          this.navCtrl.push(HomePage);
      }
    },
      errorResponse => {
        var body = errorResponse._body;
        this.isFormSubmited = false;
      });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewWillEnter() {
    this.events.publish('menu:hide');
    this.events.subscribe('logout', () => {
      this.navCtrl.setRoot(LoginPage);
    });
    this.clearUserInput();

  }
 
  clearUserInput() {
    this.loginForm.controls.email.reset();
    this.loginForm.controls.password.reset();
  }
  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


}
