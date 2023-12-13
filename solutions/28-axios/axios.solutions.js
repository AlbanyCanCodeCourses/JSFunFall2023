(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

  // Gets button and reacts to the user clicking the button
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    axios({
      // Sending a request to the API
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET" /** @see comment below */,
    })
      .then((response) => {
        // Gets the image on the screen
        const image = document.querySelector("#image");
        // Changes the image URL to the URL that you get back from the API
        image.src = response.data.message;
      })
      // Logs any errors
      .catch((err) => console.error(err));

    /**
     * We could have also solved this exercise this way, because fetch uses
     * the method GET by default:
     * @example
     * axios("https://dog.ceo/api/breeds/image/random").then( // ...
     */
  });
})();
