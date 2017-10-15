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

}
