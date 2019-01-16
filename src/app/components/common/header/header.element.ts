export class HeaderElements {

  private _self: Element;
  private _menu: Element;
  private _icon: Element;
  private _name: Element;
  private _button: Element;
  private _navbar: Element;
  private _section: Element;

  constructor() {
    this._self = document.querySelector('.js--header');
    this._menu = document.querySelector('.js--header-menu');
    this._icon = document.querySelector('.js--header-menu-icon');
    this._name = document.querySelector('.js--header-menu-name');
    this._button = document.querySelector('.js--header-button');
    this._navbar = document.querySelector('.js--navbar');
    this._section = document.querySelector('.js--section');
  }

  get self() {
    return this._self;
  }

  get menu() {
    return this._menu;
  }

  get icon() {
    return this._icon;
  }

  get name() {
    return this._name;
  }

  get button() {
    return this._button;
  }

  get navbar() {
    return this._navbar;
  }

  get section() {
    return this._section;
  }
}
