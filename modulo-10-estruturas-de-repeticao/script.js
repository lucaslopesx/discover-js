console.log("for");
// break para execução do loop
// continue pula a execução do loop naquele momento
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("");
console.log("while");

let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}

console.log("");
console.log("for...of");

let name = "Lucas";
let names = ["Joao", "Paulo", "Mateus"];

for (let name of names) {
    console.log(name);
}

console.log("");
console.log("for...in");

let person = {
    name: "Lucas",
    age: 19,
    weight: 73,
};

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}
