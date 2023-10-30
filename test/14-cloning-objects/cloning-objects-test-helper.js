import { getAnswer } from "../getAnswer.js";

const changeEmailStr = getAnswer(
  "../exercises/14-cloning-objects/01-change-email.js"
);

const addToCartStr = getAnswer(
  "../exercises/14-cloning-objects/02-add-to-cart.js"
);

export const changeEmail = eval(`(user, newEmail) => {
  ${changeEmailStr}
  try {
    return newUser;
  } catch (e) {
    return undefined;
  }
}`);

export const addToCart = eval(`(shoppingCart, newItem) => {
  ${addToCartStr}
  try {
    return newShoppingCart;
  } catch (e) {
    return undefined;
  }
}`);
