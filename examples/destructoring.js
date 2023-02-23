const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
    },
};
// const name = person.name;
// const age = person.age;
// const address = person.address;

// const {
//     name,
//     age,
//     address: { city },
// } = person;

function showInfo({ name, age, address: { city } }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

showInfo(person);

// Destructoring array

function useState(initialState) {
    // gán giá trị khởi tạo ban đầu cho biến value
    let value = initialState;
    // Xây dựng hàm getValue trả về giá trị ban đầu
    function getValue() {
        return value;
    }
    // Xây dựng hàm setValue để thay đổi giá trị
    function setValue(newValue) {
        value = newValue;
    }
    // Trả về mảng chứa 2 hàm getValue và setValue
    return [getValue, setValue];
}
// count là giá trị khởi tạo
// setCount là hàm thay đổi giá trị của count
const [count, setCount] = useState(10);
console.log("Gia tri cu", count()); // 10
setCount(20);
console.log("Gia tri moi", count());
