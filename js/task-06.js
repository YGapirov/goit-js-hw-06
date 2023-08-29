const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (evt) => {
  const inputLength = evt.currentTarget.value.trim().length; //перевіряє кількість символів в інпуті

  const checkLength = Number(textInput.getAttribute("data-length")); //намбер перетворює в числове значення строку, гетатрібуте отримує кількість символів в умові

  textInput.classList.remove("valid", "invalid");
  textInput.classList.add(inputLength === checkLength ? "valid" : "invalid"); //тернарний (<умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>)
});

console.log(textInput);
