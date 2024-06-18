/** Promise */
const checkName = name => {
    return new Promise((resolve, reject) => {
        name === "Alex" ? resolve("access granted") : resolve("access denied")
    })
}
checkName("Jordi")
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("finish"))