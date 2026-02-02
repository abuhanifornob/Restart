// function declaration

function add(n,n2){
    const result=n+n2;
    return result
}
const result=add(1,5)
console.log(result)

// function expression

const add1=function(num2,num1){
    console.log(num1+num2)
}
add1(10,10)

const arrowFunction=(a,b,c)=>{
return a+b+c
}
const total=arrowFunction(10,10,10)
console.log(total)