function newUser(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.greet = function () {
        return `Hi, I'm ${this.name}`;
    },
    this.data = function () {
        return { name, age, country };
    }
}

console.log(new newUser("Xouck", 90, "CO").greet());
console.log(new newUser("Xouck", 90, "CO").data());