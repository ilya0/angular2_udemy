//constructor
// is a method that creates and instance of that class when that method is called

class Point{
    x:number;
    y:number;
    
    constructor(x?: number, y?:number){
        this.x = x;
        this.y = y;
    }
        draw(){
            console.log('X: '  +this.x+  ' Y: '+this.y)
        }

}


let point = new Point();
point.draw();

