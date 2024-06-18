// declaring
const today = new Date();

class User {
    // Building
    constructor(name, age) {
        this.name = name
        this.age = age
        this.brithday = today
        this.hasUpdate = false;
    }
    // setters and getters
    set #uName(newValue) {
        this.name = newValue;
        this.hasUpdate = true;
    }
    set uAge(newValue) {
        this.age = newValue;
        this.hasUpdate = true;
    }
    get uAge() {
        if(!this.hasUpdate) return this.speak();
        else return `Sorry, ${this.speak()}`
    }
    // methods
    updateName (newName) { this.name = newName }
    greeting () { return `Hello, I'm ${this.name}. I'm ${this.age}` }
    #speak() { return `I'm ${this.age} years old.` }
};
// base user Xouck
const newUser = new User("Xouck", 50)
console.log(newUser.greeting())
// uName private, it's not possible change value
newUser.uName = "Lico"
newUser.uAge = "40"
console.log(newUser.greeting())
// uName private, change is possible through this method
newUser.updateName("Lico")
newUser.uAge = "40"
console.log(newUser.greeting())