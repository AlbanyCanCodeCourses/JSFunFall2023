const user = { id: 1234, username: "lolcatz1", email: "lolcatz1@gmail.com" }; // e.g.
const newEmail = "purrfect@gmail.com"; // e.g.

/**
 * Create an object called "newUser". It should be equal to "user" with this small change:
 * The email address should be equal to "newEmail" (e.g. "purrfect@gmail.com").
 * @example console.log(newUser);
 * // { id: 1234, username: "lolcatz1", email: "purrfect@gmail.com" };
 *
 * You should use the spread operator to shallow copy the original object.
 *
 * Your answer should still work when "user" and "newEmail" are equal to different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let newUser = { ...user };
newUser.email = newEmail;
