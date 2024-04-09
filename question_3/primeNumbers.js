// Function to check if a number is prime
function isPrime(num) {
    // If the number is less than or equal to 1, it's not prime
    if (num <= 1) {
        return false; 
    }
    
    // Check divisibility of the number from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If the number is divisible by any number other than 1 and itself, it's not prime
        }
    }
    
    // If the number is not divisible by any number other than 1 and itself, it's prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(arr) {
    // Use the filter method to create a new array containing only prime numbers
    return arr.filter(num => isPrime(num));
}

// Test the function 
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimes(inputArray));