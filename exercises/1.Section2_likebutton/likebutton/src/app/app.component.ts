import { Component } from '@angular/core';
import { ButtonComponent } from './button.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ButtonComponent]
})
export class AppComponent {
  title = 'app';
}
