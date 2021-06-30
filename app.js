const containerOne = document.getElementById("container-one");
const containerTwo = document.getElementById("container-two");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

previousBtn.addEventListener('click', previousPage)
nextBtn.addEventListener('click', nextPage);

containerOne.style.display = "block";
containerTwo.style.display = "none";

function previousPage(){
  if (containerTwo.style.display === "block") {
    containerOne.style.display = "none";
  } else {
    containerTwo.style.display = "block";
    containerOne.style.display = "none"
}
}

function nextPage(){
  if (containerOne.style.display === "none") {
    containerTwo.style.display = "block";
  } else {
    containerOne.style.display = "none";
    containerTwo.style.display = "block"
  }
}