(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here
  const userInput = document.querySelector("#mysteryInput");
  const cardMessage = document.querySelector(".card");
  handleMessage = () => {
    cardMessage.textContent = userInput.value;
  };

  userInput.addEventListener("input", handleMessage);
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here'
  const searchBar = document.querySelector(".searchForm");
  const userSearch = document.querySelector(".searchBar");

  const displayMessage = document.querySelector(".text-white");

  handleSearchMessage = (e) => {
    e.preventDefault();
    displayMessage.textContent = `No results for ${userSearch.value} found`;
  };

  searchBar.addEventListener("submit", handleSearchMessage);
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To see an example of what this looks like:
   * When the page loads, @see terms-on-load.png
   * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
   * @see terms-on-error.png
   * When the user checks the "I Agree ..." checkbox and click "Continue",
   * @see terms-on-success.png
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here

  const errorMsg = document.querySelector(".text-danger");
  const successMsg = document.querySelector(".text-success");
  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  const termsForm = document.querySelector(".form-agree");

  termsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkbox = document.querySelector(".form-check-input");
    agreeText = document.querySelector(".form-check-input");
    if (checkbox.checked) {
      successMsg.style.display = "block";
      errorMsg.style.display = "none";
      agreeText.classList.remove("is-invalid");
    } else if (!checkbox.checked) {
      successMsg.style.display = "none";
      errorMsg.style.display = "block";
      agreeText.classList.add("is-invalid");
    }
  });
})();
