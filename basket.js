function calculateTotalCost(basket, prices) {
    let totalCost = 0;
    for (const product in basket) {
        if (prices.product(product)) {
            totalCost += basket[product] * prices[product];
        }
    }
    alert(`Total cost: $${totalCost.toFixed(2)}`);
}
const basket = {
    apple: 2,
    banana: 3,
    orange: 1
};

const prices = {
    apple: 10,
    banana: 5,
    orange: 6
};
calculateTotalCost(basket, prices);