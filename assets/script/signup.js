const inputName = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");
const inputNumber = document.getElementById("inputNumber");
const inputEmail = document.getElementById("inputEmail");
const inputAgreement = document.getElementById("agreement");
const buttonSubmit = document.getElementById("submit");

const inputForms = document.querySelectorAll(".formulir");
const inputPlaceholder = [
    "Enter Name",
    "Enter Email",
    "Enter Password",
    "Enter Age"
]

inputForms.forEach((inputForm, index) => {
    inputForm.addEventListener("click", () => {
        inputForm.classList.remove("form-wrong");
        inputForm.placeholder = inputPlaceholder[index];
    });
})

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    let flag = true;

    // name contain 8 to 20 alphabetic character, can contain space, cant have morethan two parts
    const name = inputName.value;

    if(name == "" || name.length < 8 || name.length > 20 || name.split(" ").length > 2 || name.match(/[^a-zA-Z ]/g)){
        inputName.value = "";
        inputName.placeholder = "Name must follow the rules";
        inputName.classList.add("form-wrong");
        flag = false;
    }

    // Email must contain @gmail.com
    const email = inputEmail.value;

    if(email == "" || email.includes("@gmail.com") == false){
        inputEmail.value = "";
        inputEmail.placeholder = "Email must follow the rules";
        inputEmail.classList.add("form-wrong");
        flag = false;
    }

    // password must consist of 10 to 20 characters, consist of alphabetic character, number, and symbol
    const password = inputPassword.value;

    if(password == "" || password.length < 10 || password.length > 20 || password.match(/[^a-zA-Z0-9!@#$%^&*()_+]/g)){
        inputPassword.value = "";
        inputPassword.placeholder = "Password must follow the rules";
        inputPassword.classList.add("form-wrong");
        flag = false;
    }

    // age must be 15 or older
    const age = inputNumber.value;

    if(age == "" || age < 15){
        inputNumber.value = "";
        inputNumber.placeholder = "Age must follow the rules";
        inputNumber.classList.add("form-wrong");
        flag = false;
    }

    // agreement must be checked
    const agreement = inputAgreement.checked;

    if(!agreement){
        alert("You must agree to the terms and conditions");
        flag = false;
    }

    if(flag && agreement == true){
        alert("Data Berhasil Diinput");
        inputName.value = "";
        inputEmail.value = "";
        inputPassword.value = "";
        inputNumber.value = "";
    }
})