import {ArtistModel} from './artist.model';
export class AlbumModel {

  public title: string;
  public description: string;
  public year: number;
  public image: string;
  public artist: ArtistModel;
  

  constructor(album: AlbumModel) {
    this.title = album.title;
    this.description = album.description;
    this.year = album.year;
    this.image = album.image;
    this.artist = album.artist;
  }
}