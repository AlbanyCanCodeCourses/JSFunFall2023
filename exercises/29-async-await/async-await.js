// (function () {
//   /**
//    * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
//    *
//    *  Developer notes:
//    *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
//    *
//    * This is the API you will be using. The method will be GET.
//    * https://ron-swanson-quotes.herokuapp.com/v2/quotes
//    */
//   //This is telling the function that this is an async function
//   const myQuotes = async () => {
//     try {
//       //until this request is completed the next steps can NOT occur
//       let quote = await axios(
//         "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
//       );
//       //once request goes thru the data is saved in this variable
//       let data = quote.data[0];

//       let quoteBtn = document.querySelector(".btn");
//       let blockQuote = document.querySelector("#quote");
//       //listens to the button being clicked to then display the quote
//       quoteBtn.addEventListener("click", () => {
//         //changes the test in this blockquote element
//         blockQuote.textContent = data;
//       });
//     } catch (err) {
//       //if it goes wrong and the api isn't working an error should appear
//       return console.log("error", err);
//     }
//   };
//   myQuotes();
// })();
// first original way that I came back to test
(async () => {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  try {
    let quoteBtn = document.querySelector(".btn");
    let blockQuote = document.querySelector("#quote");
    quoteBtn.addEventListener("click", async () => {
      let quote = await axios(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      let data = quote.data[0];
      blockQuote.textContent = data;
    });
  } catch (err) {
    return console.log("error", err);
  }
})();
