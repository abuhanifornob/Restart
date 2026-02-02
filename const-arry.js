// const box=['hello','bangla']
// console.log(box)
// let userList=['hanif','kalam','slalm']
// userList.push('santo')

// console.log(userList)
// userList.pop()
// console.log(userList)


// Arry Build in Function
//................Map...............


// const userInfo=[
//     {name:"Abu Hanif",email:"hanif90@gmail.com"},
//     {name:"Salam",email:"salam90@gmail.com"}
// ]
// const userList=userInfo.map(user=>{
//     return user.email
// })
// console.log(userList)

//..... Vat Calculation...
// const prices=[50,30,65,68,40]
// const priceWithVat=prices.map(price=>price+price*0.15)
// console.log("Arrey is With Vat",priceWithVat)

// ...... Filter......
// const users = [
//   { name: "Rahim", age: 17 },
//   { name: "Karim", age: 22 },
//   { name: "Hasan", age: 19 },
//   { name: "Rakib", age: 35 }
// ];

// const adult=users.filter(user=>user.age>18)
// console.log("Adult User List",adult)

const products = ["Phone", "Laptop", "Tablet"];
const search='phone';
const result=products.filter(item=>
 item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
)
console.log(result)


const users = [
  { name: "Arnob", active: true },
  { name: "Rahim", active: false }
];

const activeUsers=users.filter(user=>user.active)
console.log("Active Users: ",activeUsers)

const numbers=[1,2,3,1,4,5,6,2]
const unique=numbers.filter((num,index)=>{
    console.log("Number: ",num ,"numbers.indexOf(num):",numbers.indexOf(num),"index",index);
    return numbers.indexOf(num)===index;
}
);
console.log("array",unique)