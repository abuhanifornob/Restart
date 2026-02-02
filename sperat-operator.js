const age=[10,10,25,23]
const age2=[...age,1000]
console.log(age2)

const user = { name: "Arnob", age: 25 };
const UpdateObject={...user,age:32}
console.log(UpdateObject)

const userInfo = { name: "Arnob" };
const contact = { email: "arnob@mail.com" };

const fullContact={...userInfo,...contact}
console.log(fullContact)
const sum=(...numbers)=>numbers.reduce((a,b)=>a+b)
console.log(`Function Reduce ${sum(10,20,50,3,5,9)}`)
// Reduce Function...
//Example 1 — Sum of Numbers
const numbers = [1, 2, 3, 4];
const total=numbers.reduce((acumulator,current)=>{
    return acumulator+current
},0)
console.log(`Reduce for Summation: ${total}`)

//Example 2 — Product Total (E-commerce)
const cart = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 }
];
const priceTotal=cart.reduce((total,item)=>{
    return total+item.price
},0);
console.log("Reduce for E-Commerce",priceTotal)

//Example 3 — Count Occurrences
const fruits = ["apple", "banana", "apple","banana","mango"];
const itemCount=fruits.reduce((acc,item)=>{
    acc[item]=(acc[item]||0)+1
    return acc
},{})

console.log(itemCount)

// Example 4 — Remove Duplicate
const numbersD = [1, 2, 2, 3];
const uniqueArr=numbersD.reduce((acc,num)=>{
    if(!acc.includes(num)){
        acc.push(num)
    }
    return acc
},[])

console.log(`Remove Duplicat Values: ${uniqueArr}`)

//🔹 map + filter + reduce Combined

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 15000 }
];

const totalPrice=products.filter(p=>p.price<30000).map(p=>p.price).reduce((acc,cur)=>acc+cur,0);
console.log(totalPrice)