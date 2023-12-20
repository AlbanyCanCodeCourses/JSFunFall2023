const popupDiv = document.querySelector(".popup");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const img = document.createElement("img");

  //adds img src to new created img element :)
  img.src = "https://i.imgflip.com/5aoszr.jpg";
  //adds to the div in the html
  popupDiv.appendChild(img);
});
