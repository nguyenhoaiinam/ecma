const productList = [
    { id: 1, name: "Product A", price: 200 }, // item
    { id: 2, name: "Product B", price: 300 }, // item
    { id: 3, name: "Product C", price: 400 }, // item
];
const app = document.querySelector("#app");

// const showProduct = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let i = 0; i < data.length; i++) {
//         result += `<div>${data[i].name}</div>`;
//     }
//     return result;
// };

// For..in
// const showProduct = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let i in data) {
//         result += `<div>${data[i].name}</div>`;
//     }
//     return result;
// };

// for...of
// const showProduct = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     for (let item of data) {
//         result += `<div>${item.name}</div>`;
//     }
//     return result;
// };

// forEach
// const showProduct = (data) => {
//     if (!Array.isArray(data)) return "";
//     let result = "";
//     data.forEach((item, index) => (result += `<div>${item.name} - ${index}</div>`));
//     return result;
// };

// const showProduct = (data) => {
//     if (!Array.isArray(data)) return "";
//     return data
//         .map(function (item) {
//             return `<div>${item.name}</div>`;
//         })
//         .join("");
// };

// filter method
const showProduct = (data) => {
    if (!Array.isArray(data)) return "";
    return (
        data
            // lọc và trả về mảng không chứa item có id là 2
            .filter((item) => item.id !== 2)
            // tạo 1 mảng chuyển đổi sang chuỗi
            .map((item) => `<div>${item.name}</div>`)
            .join("")
    );
};
if (app) {
    app.innerHTML = showProduct(productList);
}
