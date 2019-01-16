export class Courses {

  private _id: number;
  private _name: string;
  private _image: string;
  private _description: string;
  private _generic: boolean;
  private _highlight: boolean;

  constructor() { }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get description() {
    return this._description;
  }

  get generic() {
    return this._generic;
  }

  get highlight() {
    return this._highlight;
  }
}
