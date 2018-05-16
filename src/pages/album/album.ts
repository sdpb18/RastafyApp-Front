import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumService } from '../../services/album.service';
import { AlbumModel } from '../../models/logic-models/album.model';
import { StorageProvider } from '../../providers/storage/storage.provider';
import { GLOBAL } from '../../services/global';

@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
  providers: [AlbumService]
})
export class AlbumPage {

  public albums: AlbumModel[];
  private token: string;
  private url: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public albumService: AlbumService,
    public storageProvider: StorageProvider) {

    this.url = GLOBAL.url;
  }

  ionViewWillEnter() {
    this.token = this.storageProvider.getToken();
    this.albumService.getAlbums(this.token).subscribe(response => {
      this.albums = response.data;
      console.log('RESPONSE ALBUM',response);
      console.log('RESPONSE ALBUM DATA',response.data);
    });
  }

}
