
function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.activo = true;
    this.saludar = function () {
    console.log("Hola, mi nombre es " + this.name);
    };

}

let user1 = new User("Beto", 36, "hp.sistemas68@gmail.com");
let user2 = new User("Ana", 28, "kimi_alma@hotmail.com");

user1.saludar();
user2.saludar();

console.log(user1);
console.log(user2);