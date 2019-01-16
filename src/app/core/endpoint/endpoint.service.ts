import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from './../../model/courses';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private _url: string = 'https://raw.githubusercontent.com/estudarcomvoce/frontend-challenge/master/assets/courses.json';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Courses[]>(this._url);
  }
}
