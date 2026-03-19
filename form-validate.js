const form=document.querySelector(".form");
const btn=document.querySelector(".btn-primary");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-pass");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const terms = document.getElementById("terms");

const genderError = document.getElementById("gender-error");
const termsError = document.getElementById("terms-error");

function validation(){
    let valid=true;

    let namecheck = /^[A-Za-z\s]+$/;
    if (!namecheck.test(name.value)) {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
        valid = false;
    } else {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
    }

    let emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailcheck.test(email.value)) {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if (password.value.length < 8) {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        valid = false;
    } else {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }

    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPassword.classList.add("is-invalid");
        confirmPassword.classList.remove("is-valid");
        valid = false;
    } else {
        confirmPassword.classList.add("is-valid");
        confirmPassword.classList.remove("is-invalid");
    }

    let phonecheck = /^\d{11}$/;
    if (!phonecheck.test(phone.value)) {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        valid = false;
    } else {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    }

    let genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        genderError.innerText = "Select any option.";
        valid = false;
    } else {
        genderError.innerText = "";
    }

    if (country.value === "") {
        country.classList.add("is-invalid");
        country.classList.remove("is-valid");
        valid = false;
    } else {
        country.classList.add("is-valid");
        country.classList.remove("is-invalid");
    }

    if (!terms.checked) {
        termsError.innerText = "Accept terms & conditions.";
        valid = false;
    } else {
        termsError.innerText = "";
    }

    btn.disabled = !valid;
    return valid;
}

form.addEventListener("input",validation);

form.addEventListener("submit",function (e){
    e.preventDefault();

    if(validation()){
        document.getElementById("successMsg").classList.remove("d-none");
        form.reset();
        submitBtn.disabled = true;

        document.querySelectorAll(".form-control").forEach(input => {
            input.classList.remove("is-valid");
        });
    }
});