export class ArtistModel {

  public name: string;
  public description: string;
  public image: string;

  constructor(artist: ArtistModel) {
    this.name = artist.name;
    this.description = artist.description;
    this.image = artist.image;
  }
}