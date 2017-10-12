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
