import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    <button class="btn btn-primary" [class.active]="isActive">Class binding</button>
     <div (click)="onDivClicked()">
        <button (click)="onSave($event)">on save button</button>
    </div>
    <input (keyup.enter)="onKeyUp($event)"/>
 
    `

})


export class CoursesComponent{
    isActive = true;
    title = "List of courses";
    courses;
    onKeyUp(){
        console.log("enter was pressed");
    }

    onDivClicked(){
        console.log("div clicked");
    }

    onSave($event){
        $event.stopPropagation(); //stops the propogation of the event bubbling
        console.log("button was clicked", $event);
    }
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}