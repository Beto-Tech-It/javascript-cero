
function user(name, age, email, activo) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.activo = activo;
    this.saludar = function () {
    console.log("Hola, mi nombre es " + this.name);
    };

}

let user1 = new user("Beto", 36, "hp.sistemas68@gmail.com", true);
let user2 = new user("Ana", 28, "kimi_alma@hotmail.com", false);

user1.saludar();
user2.saludar();

console.log(user1);
console.log(user2);