import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseComponent} from './course/course.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
