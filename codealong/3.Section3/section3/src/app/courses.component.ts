import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    <h2>{{ title }}</h2>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    `

})


export class CoursesComponent{
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}