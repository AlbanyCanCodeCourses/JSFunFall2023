/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  let firstLi = document.querySelector("li");
  console.log(firstLi);

  let yellowLi = document.querySelectorAll("ul > li.bg-warning");

  yellowLi.forEach((li) => {
    console.log(li);
  });
  // console.log(yellowLi);
  const targetBtn = document.querySelector(".target-btn");
  console.log(targetBtn);

  const socialTags = document.querySelectorAll("a");
  socialTags.forEach((a) => console.log(a));
})();
