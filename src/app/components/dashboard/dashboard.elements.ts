export class DashboardElements {

  private _self: Element;

  constructor() {
    this._self = document.querySelector('.js--section');
  }

  get self() {
    return this._self;
  }
}
