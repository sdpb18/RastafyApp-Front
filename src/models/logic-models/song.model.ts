import { AlbumModel } from "./album.model";

export class SongModel {
  public number: string;
  public name: string;
  public duration: string;
  public file: string;
  public album: AlbumModel;

  constructor(song: SongModel){
    this.number = song.number;
    this.name = song.name;
    this.duration = song.duration;
    this.file = song.file;
    this.album = song.album;
  }

}