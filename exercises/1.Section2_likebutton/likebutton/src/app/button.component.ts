import { Component } from '@angular/core'
import { ButtonService } from './button.service'
@Component({
    selector: 'button',
    template:`
    <input></input>
    <br>
    <button></button>`,
    providers:[ButtonService]
})

export class ButtonComponent{

}


