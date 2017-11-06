import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses:any = [1,2];
  viewMode = 'map';
  array:any;

  tests;
  isSelected;
onAdd(){
  this.tests.push({id:4, name: 'course'});
}

onChange(course){
  let index = this.tests.indexOf(course);
  this.tests.splice(index,1);
}


loadCourses(){
  this.tests = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];
}


///used if you have a large data set and have issues with performance

trackCourse(index,course){
  return course ? course.id : undefined;
}
onclick(){
  this.isSelected =!this.isSelected
}

task = {
  title: 'Reivew apps',
  assignee:{
    name: 'Johnx Smith'
  }
  }
}

