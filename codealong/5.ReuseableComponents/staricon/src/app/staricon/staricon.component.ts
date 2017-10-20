import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css']
})
export class StariconComponent implements OnInit {
@Input('isfavorite') isSelected : boolean; // is-favorite is a alias

  constructor() { }
  ngOnInit() {}
  onClick(){
    this.isSelected = !this.isSelected;
  }
}

