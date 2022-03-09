var person = {
    name: "Leonardo",
    lastName: "Guzmán"
};
var animal = {
    breed: "Labrador",
    age: 2,
    hobbies: ["Sports", "Cooking"]
};
console.log(person.name);
console.log(person);
/* Ahora pasamos con Arrays  */
var favoriteHobbies;
favoriteHobbies = ["basket"];
favoriteHobbies = ["music", "gatos"];
console.log(favoriteHobbies[0]);
/* para usar un arreglo con diferentes tipos de datos, usamos any */
var anyArray;
anyArray = [3, true, "hola"];
console.log(anyArray);
for (var _i = 0, _a = animal.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
