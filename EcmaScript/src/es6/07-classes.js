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
    set uAge(newValue) {
        this.age = newValue;
        this.hasUpdate = true;
    }
    get uAge() {
        if(!this.hasUpdate) return this.speak();
        else return `Sorry, ${this.speak()}`
    }
    // methods
    greeting () { return `Hello, I'm ${this.name}` }
    speak() { return `I'm ${this.age} years old.` }
};

// Instantiating
const newUser = new User("Xouck", 50)
console.log(newUser.greeting())
console.log(newUser.uAge)
if(newUser.brithday === today) {
    newUser.uAge = 51
}
console.log(newUser.uAge);