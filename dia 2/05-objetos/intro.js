let user = {
  name: "Beto",
  age: 36,
  email: "hp.sistemas68@gmail.com",
  activo: true,

  saludar() {
    console.log("Hola, mi nombre es " + this.name);
  },
};

user.saludar();
console.log("Edad del usuario: ", user.age);
console.log("Email del usuario: ", user.email);

user.hobby = "Programar";
console.log("Hobby del usuario: ", user.hobby);

console.log(user);
