import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Course } from '../../interfaces/Course';


@Injectable()
export class CourseProvider {

  public readonly courses$: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly openedCourse$: BehaviorSubject<any> = new BehaviorSubject({});

  private _baseURL: string = 'http://localhost:8000/api';

  constructor(private _http: HttpClient) {}

  async getCourses(){
    try{
      const data:any = await this._http.get(this._baseURL + '/course').toPromise();
      this.courses$.next(data);
    }catch(err){
      console.log(err);
    }
  }

  async getCourseById(id){
    try{
      const data:any = await this._http.get(this._baseURL + `/course/${id}`).toPromise();
      this.openedCourse$.next(data);
    }catch(err){
      console.log(err);
    }
  }

  get courses() : Course[] {
    return this.courses$.getValue()
  }

  set courses(courses : Course[]){
    this.courses$.next(courses);
  }

  get openedCourse() : Course {
    return this.openedCourse$.getValue();
  }

  set openedCourse(course : Course){
    this.openedCourse$.next(course);
  }

}
