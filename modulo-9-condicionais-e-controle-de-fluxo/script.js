console.log("if...else");

let temperature = 37;
let highTemperature = temperature >= 37.5;
let moderateTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
    console.log("Febre alta");
} else if (moderateTemperature) {
    console.log("Febre moderada");
} else {
    console.log("Saudável");
}

console.log("");
console.log("switch");

let key = "b";

switch (key) {
    case "a":
        console.log("a");
        break;
    case "b":
        console.log("b");
        break;
    default:
        console.log("default");
        break;
}

function calculate(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("nao implementado");
            break;
    }
    return result;
}

console.log(calculate(4, "/", 8));
console.log(calculate(4, "*", 8));
console.log(calculate(4, "+", 8));

console.log("");
console.log("throw and try...catch");

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório";
    }
    console.log(name);
}
//throw finaliza a função a partir de quando ela foi executada
try {
    sayMyName("");
} catch (e) {
    console.log(e);
}
