var count = 3;
var string;
var arrayOfNumbers = [3, 4, 6, 7];
arrayOfNumbers[1] = 1;
//de cualquier tipo
var anyArray = [2, "hola", true];
//enum, contene3dor para enumerar
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //se empieza en 0,1,2
var backgroundColor = Color.Green;
