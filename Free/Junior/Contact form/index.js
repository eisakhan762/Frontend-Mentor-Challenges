const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const tncCheckBox = document.getElementById("tnc");

function checkErrorField(inputElement, errorMessage) {
  const parentRow = inputElement.closest(".row");
  const errorMessageP = parentRow.querySelector(".error");

  if (inputElement.value.trim() === "") {
    console.log(`${inputElement.id} Input Is Blank`);
    inputElement.classList.add("inputError");
    errorMessageP.style.display = "block";
    errorMessageP.textContent = errorMessage;
  } else {
    inputElement.classList.remove("inputError");
    errorMessageP.style.display = "none";
    errorMessageP.textContent = "";
  }
  if (inputElement === emailInput) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputElement.value)) {
      console.log("Invalid Email Format");
      inputElement.classList.add("inputError");
      errorMessageP.style.display = "block";
      errorMessageP.textContent = "Please enter a valid email address";
    }
  }

  if (inputElement === tncCheckBox) {
    if (!tncCheckBox.checked) {
      console.log(`${inputElement.id} Input Is Blank`);
      inputElement.classList.add("inputError");
      errorMessageP.style.display = "block";
      errorMessageP.textContent = errorMessage;
    } else {
      inputElement.classList.remove("inputError");
      errorMessageP.style.display = "none";
      errorMessageP.textContent = "";
    }
  }
}

function showError() {
  checkErrorField(firstNameInput, "This field is required");
  checkErrorField(lastNameInput, "This field is required");
  checkErrorField(emailInput, "Please enter a valid email address");
  checkErrorField(messageInput, "This field is required");
  checkErrorField(
    tncCheckBox,
    "To submit this form, please consent to being contacted"
  );
}

function checkQueryTypeSelection() {
  const radioGroupName = "queryType";
  const isAnySelected = document.querySelector(
    `input[name="${radioGroupName}"]:checked`
  );

  const radioErrorP = document.querySelector(".radioError");
  if (isAnySelected) {
    radioErrorP.style.display = "none";
    radioErrorP.textContent = "";
  } else {
    radioErrorP.style.display = "block";
    radioErrorP.textContent = "Please select a query type";
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.clear();

  showError();
  checkQueryTypeSelection();

  if (
    firstNameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === "" ||
    !document.querySelector(`input[name="queryType"]:checked`) ||
    !tncCheckBox.checked
  ) {
    console.log("Form has errors");
  } else {
    console.log("Form submitted successfully");

    const successBox = document.querySelector(".success-box");
    successBox.style.display = "block";
    successBox.style.animation = "successBoxAnim 2s forwards";
    setTimeout(() => {
      successBox.style.animation = "successBoxAnim 2s forwards reverse 7s";
      console.log("Success box hidden after 7 seconds");
    }, 7000);
  }
});
