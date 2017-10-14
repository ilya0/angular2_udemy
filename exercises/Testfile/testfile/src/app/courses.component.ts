import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'test',
    template: `
    <button class="btn btn-primary" [class.active]="isActive">Class binding</button>


     <div (click)="onDivClicked()">
        <button (click)="onSave($event)">on save button</button>
    </div>


    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> two way binding
 <br><br>
    {{ text | summary:100 }}
    `

})


export class CoursesComponent{
    isActive = true;
    title = "List of courses";
    courses;
    email = "me@example.com";
    text =`
     Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile phones, tablets, desktops/laptops, or other devices. Text messages may be sent over a cellular network, or may also be sent via an Internet connection.
    
    The term originally referred to messages sent using the Short Message Service (SMS). It has grown beyond alphanumeric text to include multimedia messages (known as MMS) containing digital images, videos, and sound content, as well as ideograms known as emoji (happy faces and other icons).
    `
  
    

    onKeyUp(){
        console.log(this.email);
        //email is a template variable
        // email =  $event.target.value
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