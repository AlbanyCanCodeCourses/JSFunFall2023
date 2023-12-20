(async () => {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

  const data = await axios("https://rickandmortyapi.com/api/character"); // What you get back from the Rick and Morty characters API

  const responseFromApi = data.data.results;

  console.log(responseFromApi);
  let htmlStr = "<option></option>";
  for (let character of responseFromApi) {
    htmlStr += `<option value="${character.id}">${character.name}</option>`;
  }
  const dropdown = document.querySelector("#dropdown");
  dropdown.innerHTML = htmlStr;
  // Function to fetch and display character image
  async function displayCharacterImage(characterId) {
    try {
      const characterData = await axios(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      const character = characterData.data;
      const imageContainer = document.querySelector("#get-schwifty");

      imageContainer.src = character.image;

      imageContainer.name = character.name;
      let pageTitle = document.querySelector("#title-head");
      pageTitle.innerHTML = character.name;
    } catch (error) {
      console.error("Error fetching character data", error);
    }
  }

  // Event listener for dropdown change
  dropdown.addEventListener("change", (event) => {
    const selectedCharacterId = event.target.value;
    if (selectedCharacterId !== "") {
      displayCharacterImage(selectedCharacterId);
    } else {
      // Clear the image container if no character is selected
      const imageContainer = document.querySelector("#character-image");
      imageContainer.innerHTML = "";
    }
  });
})();
