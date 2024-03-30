function swapCase(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
console.log(swapCase('The Quick Brown Fox')); 
