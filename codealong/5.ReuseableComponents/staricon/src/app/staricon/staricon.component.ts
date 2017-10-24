import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // ViewEncapsulation.Emulated - emulates the shadow dom and adds aditional attributes to the css
  
  // ViewEncapsulation.Native - will only use the imported files in the css, and not the globablly imported files
  // ViewEncapsulation.None - this will not encapsulate the styles and will be accessible to all

})
export class StariconComponent {
@Input('isFavorite') isSelected : boolean; // is-favorite is a alias
@Output('change') change = new EventEmitter(); //instantiate a new emitter

  
  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected}); // publishes an event with the instanciated emitter
    
  }



}

export interface FavoriteChangedEventArgs{
  newValue:boolean;
}