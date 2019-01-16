import { Courses } from './../../model/courses';
import { Injectable } from '@angular/core';
import { modalTemplate } from './modal.template';
import { ModalElements } from './modal.elements';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _el: ModalElements;
  private _modal: Element;

  constructor() {
    this._createModal();
  }

  build(course: Courses) {

    document.body.classList.add('has--no-scroll');
    document.body.appendChild(this._modal);

    this._el = new ModalElements();
    this._el.container.classList.add('slide');
    this._el.wrap.classList.remove('has--overflow');
    this._el.close.onclick = this._closeModal.bind(this);
    this._el.title.innerText = course.name;
    this._el.description.innerText = course.description ? course.description : 'Não há descrição para esta matéria';

    const colorImageContainer = course.generic ? 'color-generic-course' : 'color-custom-course';
    this._alterColorCourse(colorImageContainer);

    const srcImage = course.image ? course.image : 'assets/img/box.png';
    this._el.image.setAttribute('src', srcImage);
    this._el.image.setAttribute('alt', course.name);

    this._checkHeight();

    setTimeout(() => this._el.container.classList.remove('slide'), 100);
  }

  private _createModal() {
    const _el = new DOMParser().parseFromString(modalTemplate, 'text/html');
    this._modal = _el.body.firstElementChild;
  }

  private _closeModal() {
    this._el.container.classList.add('slide');

    setTimeout(() => {
      this._el.container.classList.remove('slide');
      this._el.self.remove();
      document.body.classList.remove('has--no-scroll');
    }, 300);
  }

  private _checkHeight() {
    const windowHeight = window.innerHeight;
    const modalHeight = this._el.wrap.clientHeight;

    if ((modalHeight * 1.05) >= windowHeight) {
      this._el.wrap.classList.add('has--scroll');
    } else {
      this._el.wrap.classList.remove('has--scroll');
    }
  }

  private _alterColorCourse(classColor: string) {
    Array.from(this._el.imageContainer.classList).forEach(_class => {
      if (_class.match(/^color-/)) {
        this._el.imageContainer.classList.remove(_class);
      }
    });

    this._el.imageContainer.classList.add(classColor);
  }
}
