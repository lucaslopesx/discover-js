console.log("----------Expressões e Operadores----------");

console.log("- expressão new tem a função de criar um objeto");

let nome = new String("lucas");
let age = new Number(19);
let date = new Date("2021-01-01");

console.log(nome, age, date);

console.log("");

console.log("- operador unario (typeof e delete)");

console.log("- typeof:");
console.log(typeof "lucas");

const person = {
    nome: "lucas",
    age: 19,
};

console.log(person);

delete person.age;
console.log("- delete:");
console.log(person);

console.log("");
console.log("- operador exponencial");
console.log("**");

console.log(3 ** 3);

console.log(
    "- operadores de comparação estritamente igual e estritamente diferente"
);

let one = 1;
let two = 2;

console.log(one === "1");
console.log(one === 1);
console.log(two !== 2);
console.log(two !== "2");
