export class UserModel {
  public _id?: string;
  public name?: string;
  public lastname?: string;
  public email?: string;
  public password?: string;
  public role?: string;
  public image?: string;
  public gethash?: string;

  constructor(user: UserModel) {
    this._id = user._id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.image = user.image;
    this.gethash = user.gethash;
  }
}