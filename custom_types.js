var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 2
});
var betterPoint = function (point) {
    console.log("".concat(point.x + "resultado es " + point.y, "}"));
};
betterPoint({
    x: 7,
    y: 2
});
//anteriormente violamos el principio de cohesión porque tenemos una interfaz y la función abajo SEPARADAS
/* aquí entramos con la Classes: grupos variables(propiedades) y funciones(métodos) que están altamente relacionados */
//y ya es una Clase, no una interfazx
var Points = /** @class */ (function () {
    function Points() {
    }
    Points.prototype.draw = function () {
        console.log("X: " + this.x + ' Y: ' + this.y);
    };
    Points.prototype.drawAgain = function () {
    };
    Points.prototype.getDistante = function (another) {
    };
    return Points;
}());
var point = new Points();
point.x = 5;
point.y = 2;
point.draw();
