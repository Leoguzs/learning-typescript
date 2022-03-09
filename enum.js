var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); //les asigna marcas a los números
var person = {
    name: "Leonardo",
    lastName: "Guzmán",
    role: Role.ADMIN
};
console.log(person.role);
console.log(person.role === Role.ADMIN);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles["AUTHOR"] = "Text";
})(Roles || (Roles = {})); //les asigna marcas a los números
var persona = {
    name: "Leonardo",
    lastName: "Guzmán",
    role: Role.ADMIN
};
console.log(persona.role);
console.log(persona.role == Role.ADMIN);
console.log(persona.role[1]);
