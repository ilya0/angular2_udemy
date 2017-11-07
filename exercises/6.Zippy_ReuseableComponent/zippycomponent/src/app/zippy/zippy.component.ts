import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  zippyVar = "the zippy component is connected "
  isButtonClicked = false;
  @Input() ButtonName:String;




  onclick(item){

  }

  constructor() { }

  ngOnInit() {
  }

}
