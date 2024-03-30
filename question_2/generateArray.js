function generateArray(num1, num2) {
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

console.log(generateArray(4, 7)); 
console.log(generateArray(-4, 7));
