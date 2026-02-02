// const box=['hello','bangla']
// console.log(box)
// let userList=['hanif','kalam','slalm']
// userList.push('santo')

// console.log(userList)
// userList.pop()
// console.log(userList)


// Arry Build in Function
//................Map...............

const userInfo=[
    {name:"Abu Hanif",email:"hanif90@gmail.com"},
    {name:"Salam",email:"salam90@gmail.com"}
]
const userList=userInfo.map(user=>{
    return user.email
})
console.log(userList)