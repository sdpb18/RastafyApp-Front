import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistModel } from '../../models/logic-models/artist.model';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { ArtistService } from '../../services/artist.service';
import { StorageProvider } from '../../providers/storage/storage.provider';

@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
  providers: [UserService, ArtistService]
})
export class ArtistPage implements OnInit {

  public artist: ArtistModel[];
  public url: string;
  public identity: any;
  public token; any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
    public artistService: ArtistService,
    public storageProvider: StorageProvider) {

      this.url = GLOBAL.url;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistPage');
  }

  ionViewWillEnter() {
    this.token = this.storageProvider.getToken();
    this.artistService.getArtists(this.token).subscribe(response => {
      this.artist = response.data;
      console.log(this.artist);
    });
  }

  ngOnInit() { 
    // conseguir listas del servicio.
  }

}
