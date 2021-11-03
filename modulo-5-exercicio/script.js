let name = "Lucas"
let age = 19
let weight = 4.5
let isSubscribed = true

let students = {
    name: "Lucas",
    age: 19,
    weight: 73,
    isSubscribed: true,
}

console.log(students)

console.log(`${students.name} de idade ${students.age} pesa ${students.weight}kg`)

let student = [
    students
]



const john = {
    name: "John",
    age: 21,
    weight: 73,
    isSubscribed: false
}

student = [
    students,
    john
]

console.log(student)
