import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Courses } from 'src/app/model/courses';

import { DashboardElements } from './dashboard.elements';
import { EndpointService } from 'src/app/core/endpoint/endpoint.service';
import { ModalService } from 'src/app/core/modal/modal.service';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  private _el: DashboardElements;
  private _subscription: Subscription;
  private _coursesRaw: Array<Courses>;
  customCourses: Array<Courses>;
  genericCourses: Array<Courses>;

  constructor(
    private endpointService: EndpointService,
    private modalService: ModalService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this._el = new DashboardElements();
    setTimeout(() => {
      this.showDashboard()
      this.buildCourses();
    }, 500);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  buildCourses() {
    this.loaderService.show();

    this._subscription = this.endpointService.getCourses().subscribe(courses => {
      this._coursesRaw = courses;
      this._separateCourses();
      this.loaderService.hide();
    });
  }

  showModal(course: Courses) {
    this.modalService.build(course);
  }

  private _separateCourses() {
    this.genericCourses = this._coursesRaw.filter(course => course.generic);
    this.customCourses = this._coursesRaw.filter(course => !course.generic);
  }

  private showDashboard() {
    this._el.self.classList.remove('is--hidden');
  }
}
