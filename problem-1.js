function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    let discountedPrice = currentPrice - (currentPrice * discount) / 100;
    return discountedPrice.toFixed(3);
  }
}
let priceNow = newPrice(1500, 20);
console.log(priceNow);
