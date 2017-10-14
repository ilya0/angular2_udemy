import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staricon',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css']
})
export class StariconComponent implements OnInit {
isFavorite: boolean;

  constructor() { }

  ngOnInit() {

  }
  onclick(){
    this.isFavorite = !this.isFavorite;
  }

}
