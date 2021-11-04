console.log('----------functions----------')

const sum = function (num1, num2) {
    let total = num1 + num2
    return total;
}


let num1 = 34
let num2 = 25
sum(num1, num2)

console.log(`o numero 1 é: ${num1}`)
console.log(`o numero 2 é: ${num2}`)
console.log(`A soma é ${sum(num1, num2)}`)

console.log('----------function scope----------')

let subject

function createThink() {
    subject = 'study'
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)

console.log('----------function hoisting----------')

sayMyName()

function sayMyName() {
    console.log('Lucas')
}

console.log('----------arrow function----------')

const myName = (name) => {
    console.log(name)
}

myName('lucas =>')

console.log('----------callback function----------')

function sayMyOS(os) {
    console.log('antes de executar a callback')
    os()
    console.log('depois de executar a callback')
}

sayMyOS(() => {
    console.log('[estou em uma callback]')
})


console.log('----------function constructor----------')
function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}
const lucas = new Person("lucas")
const joao = new Person("joao")

console.log(lucas.walk())
console.log(joao.walk())
