let l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 2;
let b = 3;
function sumOfMultiples(a, b, l) {
    return l.reduce((sum, num) => {
        if (num % a === 0 || num % b === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}

let result = sumOfMultiples(a, b, l);
alert("Final sum of multiples of " + a + " or " + b + " is: " + result);  // Output will be the sum of multiples of 2 or 3 in the list