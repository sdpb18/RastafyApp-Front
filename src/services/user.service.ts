import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs/Rx';
import { BaseHttpInterface } from '../models/http-interfaces/base-http.interface';
import { UserModel } from '../models/logic-models/user.model';
import { Storage } from '@ionic/storage';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

@Injectable()
export class UserService {

  public url: string;
  public identity: any;
  public token: any;

  constructor(private http: Http, public storage: Storage) {
    this.url = GLOBAL.url;
    if(this.token === undefined) {
      this.getToken().subscribe(response => {
        this.token = response;
      });
    }
  }

  login(user: UserModel, getHash: string = null): Observable<BaseHttpInterface> {
    if (getHash !== null) {
      user.gethash = getHash;
    }
    let params = JSON.stringify(user);
    console.log(params);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'login', params, { headers: headers })
      .map(response => response.json());
  }

  register(user_to_register: UserModel) {
    let params = JSON.stringify(user_to_register);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'register', params, { headers: headers })
      .map(response => response.json());
  }

  updateUser(user_to_update: UserModel): Observable<BaseHttpInterface>{
    let params = JSON.stringify(user_to_update);
    console.log(this.token, 'metodo');
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.token });
      return this.http.put(this.url + 'updateuser/' + user_to_update._id, params, { headers: headers })
        .map(response => response.json());
  }

  getIdentity() {
    return Observable.fromPromise(this.storage.get('identity').then(x => {
      return Promise.resolve(x);
    }));
  }

  getToken() {
    return Observable.fromPromise(this.storage.get('token').then(x => {
      return Promise.resolve(x);
    }));
  }

logout() {
  this.storage.remove('identity');
  this.storage.remove('token');
  this.storage.clear();
}

}