const elementInput = document.querySelector("#validation-input");

function checkInput(event) {
  if (elementInput.value.length !== Number(elementInput.getAttribute("data-length"))) {
    elementInput.classList.add("invalid");
  }
  else
  {
elementInput.classList.remove("invalid");
    elementInput.classList.add("valid");
  }
}


elementInput.addEventListener("blur", checkInput);