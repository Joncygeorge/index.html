function calculateTotalCost(basket, prices) {
    let totalCost = 0;

    for (const product in basket) {
        // Check if the product exists in the prices object
        if (prices.hasOwnProperty(product)) {
            // Access prices[product] correctly
            totalCost += basket[product] * prices[product];
        }
    }

    // Alert the total cost instead of returning it
    alert(`Total cost: $${totalCost.toFixed(10)}`);
}

// Example usage:
const basket = {
    apple: 2,
    banana: 3,
    orange: 1
};

const prices = {
    apple: 20,
    banana: 5,
    orange: 10
};

// Call the function to alert the total cost
calculateTotalCost(basket, prices);