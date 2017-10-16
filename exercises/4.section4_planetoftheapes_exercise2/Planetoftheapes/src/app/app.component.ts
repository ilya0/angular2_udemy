import { TextPipe } from './text.pipe';
import { Component, Pipe, NgModule } from '@angular/core';
import { PipeTransform } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  textinput:string;
  onclicktext:string;
  counter:number = 0;

  onclick(){
    this.counter = this.counter+1;
    this.onclicktext= "test onclick clicked";

}
}