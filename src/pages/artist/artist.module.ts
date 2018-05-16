import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistPage } from './artist';
import { ArtistListModule } from '../../components/artist-list/artist-list.module';
import { ArtistListComponent } from '../../components/artist-list/artist-list';

@NgModule({
  declarations: [
    ArtistPage,
    ArtistListModule,
    ArtistListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ArtistPage),
  ],
  entryComponents: [
    ArtistListModule,
    ArtistListComponent
  ]
})
export class ArtistPageModule {}
