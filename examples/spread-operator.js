const person = {
    name: "John",
    age: 30,
    child: {
        name: "Child Name",
    },
};
// const person2 = {
//     ...person,
//     address: "New York",
// };
// Shallow copy
// const person2 = Object.assign({}, person, { address: "New York" });
const person2 = structuredClone(person);
person2.child.name = "Dat";

console.log("person", person);
console.log("person2", person2);

const products = [10, 20, 30];
const newProducts = [...products, 40];
console.log("products: ", products);
console.log("newProducts", newProducts);

// shallow copy và deep copy
