//classes

class Point{
    x:number;
    y:number;
    
        draw(){
            console.log('X: '  +this.x+  ' Y: '+this.y)
        }
        getDistance(another:Point){
            // logic
        }
}

//objects

let point = new Point(); // this is an object, which is an instance of a class

point.x = 1;
point.y = 2;
point.draw();
