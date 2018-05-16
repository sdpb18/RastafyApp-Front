import { UserModel } from '../../models/logic-models/user.model';
import { Injectable } from '@angular/core';
import { ArtistModel } from '../../models/logic-models/artist.model';

@Injectable()
export class StorageProvider {

  public user: UserModel;
  public token: string;
  public artists: ArtistModel[];
  
  constructor() {}


  setToken(incomingToken: string) {
    this.token = incomingToken;
  }

  getToken() {
    return this.token;
  }

  getUser() {
    console.log(this.user,'get');
    return this.user;
  }

  setUser(incomingUser: any) {
    this.user = incomingUser;
  }

  setArtists(incomingArtist: ArtistModel[]) {
    this.artists = incomingArtist;
  }

  getArtist() {
    return this.artists;
  }

  cleanStorage() {
    this.user = null;
    this.token = null;
    this.artists = [];
  }

}