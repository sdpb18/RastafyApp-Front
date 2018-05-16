import { IonicModule } from 'ionic-angular';
import { ArtistListComponent } from './artist-list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [ArtistListComponent],
  exports: [
    ArtistListComponent
  ]
})

export class ArtistListModule{}
