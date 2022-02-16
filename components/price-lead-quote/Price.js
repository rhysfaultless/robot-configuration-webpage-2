export function Price(inputArray) {
  let priceValue = 0;
  for (let i = 0; i < inputArray.length; i++) {
    priceValue += inputArray[i].price;
  }
  return priceValue;
}
