function calculateTotalCost(basket, prices) {
    let totalCost = 0;

    for (const product in basket) {
        if (prices.hasOwnProperty(product)) {
            totalCost += basket[product] * prices[product];
        }
    }

    return totalCost;
}

// Example usage:
const basket = {
    apple: 2,
    banana: 3,
    orange: 1
};

const prices = {
    apple: 0.5,
    banana: 0.2,
    orange: 0.75
};

const total = calculateTotalCost(basket, prices);
console.log(`Total cost: $${total.toFixed(2)}`);