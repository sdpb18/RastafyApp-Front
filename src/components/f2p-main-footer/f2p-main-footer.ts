import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { SearchPage } from '../../pages/search/search';
import { ArtistPage } from '../../pages/artist/artist';
import { AlbumPage } from '../../pages/album/album';
import { ProfilePage } from '../../pages/profile/profile';
import { Events } from 'ionic-angular/util/events';


@Component({
  selector: 'f2p-main-footer',
  templateUrl: 'f2p-main-footer.html'
})
export class F2pMainFooterComponent implements OnInit{
  public homePage = HomePage;
  public searchPage = SearchPage;
  public artistPage = ArtistPage;
  public albumPage = AlbumPage;
  public profilePage = ProfilePage;
  hideFooterLogin = true;


  constructor(public events: Events){
  }


  ngOnInit() {
    this.hideFooterLogin = true;
    this.events.subscribe('menu:hide', () => {
      console.log('hide');
      this.hideFooterLogin = true;
    });
    this.events.subscribe('menu:show', () => {
      console.log('show');
      this.hideFooterLogin = false;
    });
  }
  
}
