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
export class ArtistService {

  public url: string;
  public identity: any;
  public token: any;

  constructor(private http: Http, public storage: Storage) {
    this.url = GLOBAL.url;

    }

    getArtists(token: any, page?: any): Observable<BaseHttpInterface> {
      let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
      });

      let options = new RequestOptions({headers: headers});
      return this.http.get(this.url+ 'getartists/'+page, options)
            .map(res => res.json());
    }

    getArtist(token: any, id: any) {
      let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
      });

      let options = new RequestOptions({headers: headers});
      return this.http.get(this.url+ 'getartist/'+id, options)
            .map(res => res.json());
    }

    edittArtist(token: any,id: string, artist: ArtistModel) {
      let params = JSON.stringify(artist);
      let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
      });

      let options = new RequestOptions({headers: headers});
      return this.http.put(this.url+ 'artist/'+id,params, options)
            .map(res => res.json());
    }

}