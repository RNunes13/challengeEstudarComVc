import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private timeouts = [];

  constructor() { }

  private required(param: string) {
    throw new Error(`Parameter ${param} is required.`);
  }

  private close(cleanTimeouts = false) {
    if (cleanTimeouts) {
      document.body.removeChild(document.body.querySelector('#notify'));
      this.clearTimeouts();
      return false;
    }

    document.body.querySelector('#notify').classList.add('closing');
    setTimeout(() => document.body.removeChild(document.body.querySelector('#notify')), 500);
  }

  private setTimeout(callback, delay) {
    this.timeouts.push( setTimeout(callback, delay) );
  }

  private clearTimeouts() {
    this.timeouts.forEach( (id) => window.clearTimeout(id) );
    this.timeouts = [];
  }

  alert(options: any = this.required('options')) {
    if (document.body.querySelector('#notify')) {
      this.close(true);
    }

    const type = options.type;
    const text = options.text;
    const delay = options.delay ? options.delay : 5000;

    const notify = document.createElement('div');
    const symbol = document.createElement('div');
    const message = document.createElement('div');
    const close = document.createElement('span');

    notify.className = `notify alert-${type} opening`;
    notify.setAttribute('id', 'notify');
    symbol.className = `icon icon-${type}`;
    message.className = 'message';
    close.className = 'close';
    close.addEventListener('click', () => this.close(true) );

    message.innerText = text;
    message.appendChild(close);
    notify.appendChild(symbol);
    notify.appendChild(message);

    document.body.insertBefore(notify, document.body.childNodes[0]);

    this.setTimeout(() => document.body.querySelector('#notify').classList.remove('opening'), 500);

    this.setTimeout(() => this.close(), delay);
  }
}
