// Class implementation in js

class person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        console.log(`${this.firstName} ${this.lastName}`)

    }

}

const person1 = new person("Shweta ", "Pal")
person1.fullName();