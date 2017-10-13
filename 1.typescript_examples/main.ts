function doSomething(){
    for (let i = 0; i<5; i++){
        console.log(i);
        var counter = a;
    }
    console.log('Finally: '+counter);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]=[1,2,3]
let f: any[]=[1,true,'b',false];


// const ColorRed = 0
// const ColorGreen = 1;
// const ColorBlue = 2;

enum Color {Red = 0 , Green= 1 , Blue = 2}; //Enums allow us to define a set of named constants. 

let backgroundColor = Color.Blue;
console.log("console.log of color.blue "+Color.Blue);



//type assertions
let message;
// since let is a "any" variable, you cannot do .endsWith since it is only implementable on a string variable
message = 'abc';
//let endsWithC = (<string>message).endsWith('c');
//let alternativeWay = (message as string).endsWith('c'); // this is another way to do type assertion



// arrow functions
let log = function(message){
    console.log(message);

}

let doLog1 = (message) => {
    console.log(message);
}

//function if it has one line
let doLog2 = (message) => console.log(message)



//custom types in typscript
///this draws a point in the screen

interface Point{
    x: number,
    y: number
}

// let drawPoint = (point: Point) => {
// }
// ** this is the old way - 
let drawPoint = (point:{ x:number, y:number}) => { 
//this is inline annotations because the function is expecting a object with certain object properites



// drawPoint({
//     x:1,
//     y:2
// })
