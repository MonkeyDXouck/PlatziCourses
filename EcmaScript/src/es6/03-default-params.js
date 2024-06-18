// set variables and your values default in one function.
// before es6
function newUser(name, age, country) {
    var name = name || "Xouck";
    var age = age || 95;
    var country = country || "CO";
    console.log(name + " " + age + " " + country);
}

newUser();
newUser("Oscar", 49, "MX");

// es6
function newUserMain(name = "Xouck", age = 95, country = "CO") {
    console.log(`${name} ${age} ${country}`)
}

newUserMain();
newUserMain("Carlos", 30, "MX");