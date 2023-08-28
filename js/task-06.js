const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (evt) => {
  const inputLength = evt.currentTarget.value.length;
  const checkLength = Number(textInput.getAttribute("data-length"));

  textInput.classList.remove("valid", "invalid");
  textInput.classList.add(inputLength === checkLength ? "valid" : "invalid"); //тернарний
});

console.log(textInput);
