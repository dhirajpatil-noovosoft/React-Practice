const user = {
    name: "abc",
    details: {
        age: 20,
        city: "pune"
    }
}
const cloneUser = {...user};
cloneUser.name = "xyc"
cloneUser.details.city = "mumbai"
console.log(user)