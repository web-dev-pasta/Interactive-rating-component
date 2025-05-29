let allDivs = document.querySelectorAll(".card .rate div");
let x;
let card = document.querySelector(".card");
let submitCard = document.querySelector(".submit-card");
allDivs.forEach((e) => {
  e.onclick = function () {
    allDivs.forEach((e) => e.classList.remove("selected"));
    e.classList.add("selected");
    x = e.innerHTML;
  };
});
let pSelection = document.querySelector("p.selection");
let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", () => {
  if (x) {
    card.style.display = "none";
    pSelection.innerHTML = `You selected ${x} out of 5`;
    submitCard.style.display = "block";
  }
});
