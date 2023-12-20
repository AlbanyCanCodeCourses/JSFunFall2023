const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }]; // e.g.
const newItem = { name: "Popcorn", price: 5 }; // e.g.

/**
 * Create an object called "newShoppingCart".
 * It should deep copy "shoppingCart" and add "newItem" to the "newShoppingCart".
 * Any changes to "shoppingCart" or "newItem" should not effect "newShoppingCart".
 *
 * @example console.log(newShoppingCart);
 * // [{ name: "TV - 20ft", price: 1000000 }, { name: "Popcorn", price: 5 }]
 *
 * // This should not change "newShoppingCart" or "newItem"
 * shoppingCart[0].price = 9000000;
 * console.log(newShoppingCart); // 1000000
 * newItem.price = 10; // This should not change newItem
 * console.log(newItem); // 5
 *
 * Solve this problem without a third-party library.
 *
 * Your answer should still work when "shoppingCart" and "newItem" are equal to different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let newShoppingCart = [];
for (let i = 0; i < shoppingCart.length; i++) {
  newShoppingCart.push({ ...shoppingCart[i] });
}
newShoppingCart.push({ ...newItem });
