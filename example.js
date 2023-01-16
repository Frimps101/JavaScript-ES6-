export const data = [1,2,3]

export class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    detail = ()=>{
        console.log(`${this.type} ${this.legs}`)
    }

    makeSound = (sound)=>{
        console.log(sound)
    }

    // Static makes it so that you dont need an instance to use it
    static move(){
        console.log("move")
    }

    get type(){
        return `${this.type}`
    }
}

export class Dog extends Animal{
    constructor(type, legs, humps){
        super(type, legs)
        this.humps = humps
    }
}