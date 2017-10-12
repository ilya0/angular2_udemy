import { ButtonService } from './button.service'

export class ButtonComponent{
title: string = "This is a like button bellow"
likebuttontitle:string = "This is a like button"

    constructor(private _likecounter: number, private _isSelected:boolean){
    }

    onClick(){
        this.likecounter += (this._isSelected)? 1:+1;
        this._isSelected = !this._isSelected;
        }

        get likecounter(){
            return this._likecounter
        }

        set likecounter(){
            return this._likecounter
        }
    }



