import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {CoursePage} from "../course/course";
import {CourseProvider} from "../../providers/course/course";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public courses = this._courseProvider.courses$;
  public loading = true;

  constructor(
    public navCtrl: NavController,
    private _courseProvider: CourseProvider,
    private _loadingCtrl: LoadingController
  ) {

  }

  async ionViewDidLoad(){
    const loader = this._loadingCtrl.create({
      content: 'Carregando cursos...'
    });
    await loader.present();
    await this._courseProvider.getCourses();
    await loader.dismiss();
    this.loading = false;
  }

  viewCourse({ id }){
    this.navCtrl.push(CoursePage, { id });
  }

}
