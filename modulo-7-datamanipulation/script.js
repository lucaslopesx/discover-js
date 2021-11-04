console.log('-------prototype-------')

let protoString = "lucas".__proto__
let protoNum = 66.5.__proto__

console.log(protoString)
console.log(protoNum)

console.log('')
console.log('-------type conversion/coesion-------')

console.log('9' + 5)
console.log(Number('9') + 5)

console.log('')
console.log('-------string to number / number to string-------')

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))

console.log('')
console.log('-------manipulando strings e numeros-------')

console.log('')
console.log('- contando caracteres e digitos')


let word = "Paralelepipedo"
console.log(word.length)

let num = 1234
console.log(String(num).length)

console.log('')
console.log('- casas decimais')


let decimal = 1231.12312312312;

console.log(decimal.toFixed(2).replace(".", ","))
console.log(Number(decimal.toFixed(2).replace(".", ",")))

console.log('')
console.log('- string maiusculas e minusculas')

let word1 = "Programar"
console.log(word1.toLowerCase())
console.log(word1.toUpperCase())
console.log('')

console.log('- separando strings')

let phrase = "Eu quero viver!"
let myArray = phrase.split(' ')
console.log(myArray)

let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)



console.log('')
console.log('- encontrando palavras em frases')

let phraseSearch = "Eu quero viver o Amor"

console.log(phraseSearch.includes("Amor"))
console.log(phraseSearch.includes("amor"))


console.log('')
console.log('- criando array com construtor')

let myArray2 = new Array("a", "b", "c")

console.log(myArray2)


console.log('')
console.log('- elementos do array')

console.log('execução da função dentro do array: ' + [
    "a",
    { type: "array" },
    function () { return "alo" }
][2]())

console.log(["a", "b", "c"].length)


console.log('')
console.log('- string to array')


let wordToArray = "manipulacao"

console.log(Array.from(wordToArray))


console.log('')
console.log('-------manipulando arrays-------')

let techs = ["html", "css", "js"]
console.log(techs)



console.log('')
console.log('- add item to the end')


techs.push("nodejs")
console.log(techs)


console.log('')
console.log('- add item to the start')

techs.unshift("sql")
console.log(techs)


console.log('')
console.log('- remove item from the end')

techs.pop()
console.log(techs)


console.log('')
console.log('- remove item from the start')

techs.shift()
console.log(techs)


console.log('')
console.log('- pegar somente alguns elementos do array')

console.log(techs.slice(1, 3))


console.log('')
console.log('- remover 1 ou mais itens em qualquer posição do array')

console.log("removido: " + techs.splice(1, 1))
console.log(techs)


console.log('')
console.log('- encontrar posição de um elemento no array')
techs.push("nodejs", "react", "mongoDB", "nextjs")


let index = techs.indexOf('nodejs')
console.log(`elemento na posição ${index}:  ${techs[index]}`)

console.log(techs)