function sumOfMultiples(a, l) {
    // Extract the two integers from the list 'a'
    let x = a[0];
    let y = a[1];
    
    // Sum multiples of either x or y in the list 'l'
    return l.reduce((sum, num) => {
        if (num % x === 0 || num % y === 0) {
            return sum + num;
        }
        return sum;
    }, 0);  // Initialize sum to 0
}

// Example usage:
let a = [2, 3];  // List of two integers
let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // List of numbers
let result = sumOfMultiples(a, l);

// Display the result using alert
alert("Final sum of multiples of elements in " + a + " is: " + result);