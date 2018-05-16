import { Component, Input } from '@angular/core';
import { ArtistModel } from '../../models/logic-models/artist.model';

/**
 * Generated class for the ArtistListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'artist-list',
  templateUrl: 'artist-list.html'
})
export class ArtistListComponent {

  @Input('artistInput') artist : ArtistModel[];

  constructor() {
    console.log(this.artist);
  }

}
