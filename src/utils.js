export const getTotals = (cart) => {
  console.log(cart);
  let totalAmount = 0;
  let totalCost = 0;

  //fct that only gives values in a Map
  for (let item of cart.values()) {
    console.log(item.amount, item.price);
    totalAmount += item.amount;
    totalCost += item.amount * item.price;
    console.log(totalAmount, totalCost);
  }

  return {
    totalAmount, //quantity of items
    totalCost, //price all together
  };
};
