// Function to generate an array of consecutive numbers between two given numbers
function generateArray(num1, num2) {

    // Determine the start and end numbers for the array
    const start = Math.min(num1, num2); 
    const end = Math.max(num1, num2);   
    
    // Initialize an empty array to store the generated numbers
    const array = [];
    
    // Loop from the start to the end number 
    for (let i = start; i <= end; i++) {
  // Push the current number to the array
        array.push(i); 
    }
    
    // Return the generated array
    return array;
}

// Test the generated Array function 
console.log(generateArray(4, 7));   
console.log(generateArray(-4, 7));  
