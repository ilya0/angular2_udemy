//properies - getters and setters
// getters and setters are used to control values when they have private access
class Point{
    private x:number;
    private y:number;
    
    //will intialize with fills 
    // _x is used because its a camelcase convention, since its just one letter it will be hard to use camelcase for it
    constructor(private _x?: number, private _y?:number){
    }
        draw(){
            console.log('X: '  +this.x+  ' Y: '+this.y)
        }
        get x(){
            return this.x;
        }
        set x(value){
            if(value<0){
                throw new Error("val cannot be less than 0";)
                this.x = value;
            }
        }

}


let point = new Point();
// point.x wont work *********
let x = point.X;
point.X = 10;
point.draw();
