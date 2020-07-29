import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CoursePage} from "../pages/course/course";
import { CourseProvider } from '../providers/course/course';
import { HttpClientModule } from "@angular/common/http";
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DirectivesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseProvider
  ]
})
export class AppModule {}
