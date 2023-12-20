/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const firstImg = document.querySelector("div:nth-child(1) > img");
  firstImg.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  const javascriptLink = document.querySelector("div:nth-child(2) > div > a");
  javascriptLink.href =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const divText = document.querySelector("div:nth-child(3)");
  divText.textContent = "I am victorious!";
  const hiddenPeekaboo = document.querySelector(
    "div.alert.alert-success.hidden"
  );
  hiddenPeekaboo.classList.remove("hidden");

  const blueBtn = document.querySelector("div.alert.alert-info.mt-5 > button");
  const blueBtnDiv = document.querySelector(" div.alert.alert-info.mt-5 > div");

  if (blueBtn.classList.contains("btn-primary")) {
    blueBtnDiv.textContent = "✓ blue";
  }
  console.log(hiddenPeekaboo);
})();
