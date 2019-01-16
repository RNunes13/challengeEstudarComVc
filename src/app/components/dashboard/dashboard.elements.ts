export class DashboardElements {

  private _self: Element;
  private _courses: Element;
  private _view: Element;

  constructor() {
    this._self = document.querySelector('.js--section');
    this._courses = document.querySelector('.js--dashboard-courses');
    this._view = document.querySelector('.js--dashboard-view');
  }

  get self() {
    return this._self;
  }

  get courses() {
    return this._courses;
  }

  get view() {
    return this._view;
  }
}
