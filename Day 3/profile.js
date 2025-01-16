// Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). Return an object with these properties.

function createUserProfile(username,age = 25,country = "Unknown"){
    return {
        username,
        age,
        country
    }
}
console.log(createUserProfile("Gurmukh", 23, "India"));