export class LoaderElements {

  private _self: HTMLElement;

  constructor() {
    this._self = document.querySelector('.js--loader');
  }

  get self() {
    return this._self;
  }
}
