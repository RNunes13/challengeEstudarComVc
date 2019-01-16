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
      this._showDashboard()
      this._buildCourses();
    }, 500);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  showModal(course: Courses) {
    this.modalService.build(course);
  }

  private _buildCourses() {
    const next = (courses) => {
      if ((Array.isArray(courses) && !courses.length) || !courses) {
        this.genericCourses = [];
        this.customCourses = [];
        return false;
      }

      this._coursesRaw = courses;
      this._separateCourses();
    };

    const error = (err) => {
      this.loaderService.hide();
      console.log('error -> ', err);
    };

    const complete = () => {
      this.loaderService.hide();
    };

    this.loaderService.show();
    this._subscription = this.endpointService.getCourses().subscribe(next, error, complete);
  }

  private _separateCourses() {
    this.genericCourses = this._coursesRaw.filter(course => course.generic);
    this.customCourses = this._coursesRaw.filter(course => !course.generic);
  }

  private _showDashboard() {
    this._el.self.classList.remove('is--hidden');
  }
}
