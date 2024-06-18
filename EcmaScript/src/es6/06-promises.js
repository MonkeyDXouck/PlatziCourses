const anotherFunction = value => {
    return new Promise((resolve, reject) => {
        if (value) resolve("Hey Link!");
        else reject("Whoops!");
    })    
}

anotherFunction(false)
    .then(response => console.log(response))
    .catch(error => console.log(error));