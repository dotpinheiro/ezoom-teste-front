import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {CourseProvider} from "../../providers/course/course";
import { Course } from '../../interfaces/Course';
import { BehaviorSubject } from "rxjs";


@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  public course: BehaviorSubject<Course> = this._courseProvider.openedCourse$;
  public id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _courseProvider: CourseProvider,
    private _loadingCtrl: LoadingController
  ) {
    this.id = this.navParams.get('id');

    }

  ionViewWillLoad(){

  }

  async ionViewDidLoad(){
    const loader = this._loadingCtrl.create({
      content: 'Carregando curso...'
    });
    await loader.present();
    await this._courseProvider.getCourseById(this.id);
    await loader.dismiss();
  }


  goBack() : void {
    this.navCtrl.pop();
  }

}
