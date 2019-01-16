import { Injectable } from '@angular/core';
import { template } from './loader.template';
import { LoaderElements } from './loader.elements';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _el: LoaderElements;

  constructor() {
    this._createLoader();
    setTimeout(() => this._el = new LoaderElements(), 500);
  }

  show() {
    this._el.self.classList.remove('is--hidden');
  }

  hide() {
    this._el.self.classList.add('is--hidden');
  }

  private _createLoader() {
    const _el = new DOMParser().parseFromString(template, 'text/html');
    document.body.appendChild(_el.body.firstElementChild);
  }
}
