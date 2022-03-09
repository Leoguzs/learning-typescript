let person: {
  name: string;
  lastName: string;
} = {
  name: "Leonardo",
  lastName: "Guzmán",
};

let animal = {
  breed: "Labrador",
  age: 2,
  hobbies: ["Sports", "Cooking"],
};
console.log(person.name);
console.log(person);

/* Ahora pasamos con Arrays  */
let favoriteHobbies: string[];
favoriteHobbies = ["basket"];
favoriteHobbies = ["music", "gatos"];
console.log(favoriteHobbies[0]);
/* para usar un arreglo con diferentes tipos de datos, usamos any */
let anyArray: any[];
anyArray = [3, true, "hola"];
console.log(anyArray);

for (const hobby of animal.hobbies) {
  console.log(hobby.toUpperCase);
}
