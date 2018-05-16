import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs/Rx';
import { BaseHttpInterface } from '../models/http-interfaces/base-http.interface';
import { UserModel } from '../models/logic-models/user.model';
import { Storage } from '@ionic/storage';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { ArtistModel } from '../models/logic-models/artist.model';

@Injectable()
export class AlbumService {

  public url: string;
  public token: any;

  constructor(private http: Http, public storage: Storage) {
    this.url = GLOBAL.url;

    }

    getAlbums(token: any, artist?: any,): Observable<BaseHttpInterface> {
      let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
      });

      let options = new RequestOptions({headers: headers});
      return this.http.get(this.url+ 'getartists/'+artist, options)
            .map(res => res.json());
    }

}