enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} //les asigna marcas a los números

let person = {
  name: "Leonardo",
  lastName: "Guzmán",
  role: Role.ADMIN,
};

console.log(person.role);
console.log(person.role === Role.ADMIN);

enum Roles {
  ADMIN = "admin",
  READ_ONLY = 1,
  AUTHOR = "Text",
} //les asigna marcas a los números

let persona = {
  name: "Leonardo",
  lastName: "Guzmán",
  role: Role.ADMIN,
};

console.log(persona.role);
console.log(persona.role == Role.ADMIN);
