const employes={
    name:"Abu Hanif",
    salary:26000,
    age:30,
    designatin:"Officer"
}

Object.seal(employes)
employes.salary=employes.salary+4000
employes.experiance=2
delete employes.age

console.log(employes)
const keys=Object.keys(employes)
console.log(`Keyes : ${keys}`)
const values=Object.values(employes)
console.log(`Values are ${values}`)
const entries=Object.entries(employes)
console.log(`Entries are: ${entries}`)