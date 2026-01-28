let myMap   = new Map();

myMap.set("name", "Humberto");
myMap.set("age", 25);
myMap.set("country", "Peru");

console.log(myMap);

console.log(myMap.get("name"));
console.log(myMap.get("age"));
console.log(myMap.get("country"));

console.log(myMap.has("name"));
console.log(myMap.has("city")); 

console.log(myMap.keys());
console.log(myMap.values());


myMap.delete("age");
console.log(myMap);

console.log(myMap.size);

myMap.clear();
console.log(myMap);