// rest parameter
function total(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(total(1, 2, 3, 5, 6, 7, 8));
