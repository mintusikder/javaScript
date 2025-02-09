const person = {
    name : "Mintu Sikder",
    age : 21 ,
    profession : "Developer",
    salary : 25000,
    married : false
}
person.salary = 300000
person["age"] = 50
console.log(person)

const keyName = "profession"
console.log(person[keyName])

const propName = "profession"
person[propName] = "Devops"
console.log(person)