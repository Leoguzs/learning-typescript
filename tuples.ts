/* Los tuples sólo están en TS, de tamaño y tipo definido */
//siempre debe de tener dos elementos

let person: {
  name: string;
  lastName: string;
  role: [number, string];
} = {
  name: "Leonardo",
  lastName: "Guzmán",
  role: [2, "author"],
};
console.log((person.role[0] = 1));

person.role.push("admin");
console.log(person.role);
