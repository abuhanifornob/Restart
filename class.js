class Dog{
    constructor(name,age,color){
        this.name=name,
        this.age=age,
        this.color=color

    }
    bark(){
        return `Doge name is ${this.name}`
    }
}

const dog1=new Dog('Hero',"5","Black");
console.log(dog1.bark())