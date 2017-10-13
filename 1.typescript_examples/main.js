function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        var counter = a;
    }
    console.log('Finally: ' + counter);
}
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'b', false];
// const ColorRed = 0
// const ColorGreen = 1;
// const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //Enums allow us to define a set of named constants. 
var backgroundColor = Color.Blue;
console.log("console.log of color.blue " + Color.Blue);
//type assertions
var message;
// since let is a "any" variable, you cannot do .endsWith since it is only implementable on a string variable
message = 'abc';
//let endsWithC = (<string>message).endsWith('c');
//let alternativeWay = (message as string).endsWith('c'); // this is another way to do type assertion
// arrow functions
var log = function (message) {
    console.log(message);
};
var doLog1 = function (message) {
    console.log(message);
};
//function if it has one line
var doLog2 = function (message) { return console.log(message); };
// let drawPoint = (point: Point) => {
// }
// ** this is the old way - 
// let drawPoint = (point:{ x:number, y:number}) => { 
//this is inline annotations because the function is expecting a object with certain object properites
// drawPoint({
//     x:1,
//     y:2
// })
//classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // logic
    };
    return Point;
}());
//objects
var point;
point.draw();
