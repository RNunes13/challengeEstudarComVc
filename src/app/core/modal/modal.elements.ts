export class ModalElements {

  private _self: HTMLElement;
  private _container: HTMLElement;
  private _wrap: HTMLElement;
  private _close: HTMLElement;
  private _title: HTMLElement;
  private _imageContainer: HTMLElement;
  private _image: HTMLElement;
  private _description: HTMLElement;

  constructor() {
    this._self = document.querySelector('.js--modal');
    this._container = document.querySelector('.js--modal-container');
    this._wrap = document.querySelector('.js--modal-wrap');
    this._close = document.querySelector('.js--modal-close');
    this._title = document.querySelector('.js--modal-title');
    this._imageContainer = document.querySelector('.js--modal-image-container');
    this._image = document.querySelector('.js--modal-image');
    this._description = document.querySelector('.js--modal-description');
  }

  get self() {
    return this._self;
  }

  get container() {
    return this._container;
  }

  get wrap() {
    return this._wrap;
  }

  get close() {
    return this._close;
  }

  get title() {
    return this._title;
  }

  get imageContainer() {
    return this._imageContainer;
  }

  get image() {
    return this._image;
  }

  get description() {
    return this._description;
  }
}
