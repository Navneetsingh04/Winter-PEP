// Write a function calculateDiscount that takes two parameters: price and discount (with a default value of 10). The function should return the final price after applying the discount.

function calculateDiscount(price, discount = 10) {
    return price-(price* discount/100);
}
console.log(calculateDiscount(100, 20));