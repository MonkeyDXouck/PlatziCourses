const users = {
    luke: {
        class: "Jedi"
    },
    anakin: {
        class: "Sith",
        saber: "Red"
    }
}
// check if there is key. if there is return value, else return undefined
console.table(users.anakin?.saber)

console.table(users.luke?.saber)