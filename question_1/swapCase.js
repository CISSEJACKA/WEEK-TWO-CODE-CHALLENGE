// Function to change the case of each character in a string
function swapCase(inputString) {

   // Create a variable to store the modified string
    let result = '';
    
    // Iterate over each character in the input string

    for (let i = 0; i < inputString.length; i++) {
        // Get the current character
        let char = inputString[i];
        
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // If uppercase, convert to lowercase and add to the result
            result += char.toLowerCase();
        } else {
            // If lowercase, convert to uppercase and add to the result
            result += char.toUpperCase();
        }
    }
    
    // Return the final swapped case string
    return result;
}

// Test the swapCase function 
console.log(swapCase('The Quick Brown Fox')); 
