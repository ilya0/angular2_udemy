import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staricon',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css']
})
export class StariconComponent implements OnInit {
isFavorite: boolean;

  constructor() { }
  ngOnInit() {}
  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css']
// })
// export class FavoriteComponent implements OnInit {
//   isFavorite: boolean;

//   constructor() { }

//   ngOnInit() {
//   }

//   onClick() { 
//     this.isFavorite = !this.isFavorite;
//   }
// }
