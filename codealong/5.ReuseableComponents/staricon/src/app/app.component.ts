import { FavoriteChangedEventArgs } from './../../../../10.Routingandnavigation/hello-world/src/app/favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  post = {
    title:  "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs ){
    console.log("Favorite Changed", eventArgs);
  }

}
