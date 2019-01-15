import { Component, OnInit } from '@angular/core';
import { HeaderElements } from './header.element';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _el: HeaderElements;

  constructor() { }

  ngOnInit() {
    this._el = new HeaderElements();
  }

  toggleMenu() {
    this._el.menu.classList.toggle('is--toggle');
    this._el.navbar.classList.toggle('is--toggle');
  }

}
