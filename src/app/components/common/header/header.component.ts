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
    setTimeout(() => this._el = new HeaderElements(), 500);
  }

  toggleMenu() {
    this._el.menu.classList.toggle('is--toggle');
    this._el.navbar.classList.toggle('is--toggle');
    this._el.section.classList.toggle('menu-toggle');
  }

}
