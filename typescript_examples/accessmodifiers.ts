//access modifier restricts the change of the parameters of an object
// public, private and protected
class Point{
    private x:number;
    private y:number;
    
    constructor(x?: number, y?:number){
        this.x = x;
        this.y = y;
    }
        draw(){
            console.log('X: '  +this.x+  ' Y: '+this.y)
        }

}


let point = new Point();
// point.x wont work
point.draw();

//access modifiers in construction paramertes

class Point{
    private x:number;
    private y:number;
    
    //will intialize with fills 
    constructor(private x?: number, private y?:number){
    }
        draw(){
            console.log('X: '  +this.x+  ' Y: '+this.y)
        }

}


let point = new Point();
// point.x wont work
point.draw();