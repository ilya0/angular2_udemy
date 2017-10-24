import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heartlike',
  templateUrl: './heartlike.component.html',
  styleUrls: ['./heartlike.component.css']
})
export class HeartlikeComponent{
  @Input("isSelected") isSelected:boolean = false;
  @Input('text') text:number = 0;

  onclick(){
    this.isSelected = !this.isSelected
    this.text +=(this.text) ? -1 : 1;
    console.log("clicked");
  }

}
