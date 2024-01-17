let defaultMsg="";
let emailErrorMsg="X Email address should be non-empty with the format xyx@xyz.xyz.";
let userNameErrorMsg="X User name should be non-empty, and within 30 characters long.";
let passErrorMsg="X Password should be at least 6 characters: 1 uppercase, 1 lowercase.";
let pass2ErrorMsg="X Please retype password";
let termsErrorMsg="X Please accept the terms and conditions";

let emailInput=document.querySelector("#email");
let userNameInput=document.querySelector("#login");
let password=document.querySelector("#pass");
let pass2=document.querySelector("#pass2");
let termInput=document.querySelector("#terms");

let emailError=document.createElement('p');
emailError.setAttribute("class","warning");
document.querySelectorAll(".textfield")[0].append(emailError);

let userNameError=document.createElement('p');
userNameError.setAttribute("class","warning");
document.querySelectorAll(".textfield")[1].append(userNameError);

let passwordError=document.createElement('p');
passwordError.setAttribute("class","warning");
document.querySelectorAll(".textfield")[2].append(passwordError);

let pass2Error=document.createElement('p');
pass2Error.setAttribute("class","warning");
document.querySelectorAll(".textfield")[3].append(pass2Error);

let termError=document.createElement('p');
termError.setAttribute("class","warning");
document.querySelectorAll(".checkbox")[1].append(termError);


function validateEmail(){
    let email = emailInput.value;
    let regexp = /\S+@\S+\.\S+/;

    if (regexp.test(email)) {
        error = defaultMsg;
    } else {
        error = emailErrorMsg;
    }
    return error;
}

function validateUserName(){
    let error;
    let userName =userNameInput.value.trim();
    if (userName.length <= 30 && userName.length > 0) {
        error = defaultMsg;
        userNameInput.value = userName.toLowerCase();
    } else {
        error = userNameErrorMsg;
    }
    return error;
}

function validatePassword(){
    let error;
    let pass = password.value;
    if(/[a-z]/.test(pass) || /[A-Z]/.test(pass) && pass.length >= 6){
        error=defaultMsg;
    } else{
        error = passErrorMsg;
    }
    return error;
}

function validatePass2(){
    let error;
    if(pass2.value === password.value && pass2.value.length >= 6){
        error=defaultMsg;
    }else{
        error=pass2ErrorMsg;
    }
    return error;
}
function validateTerms(){
    if(termInput.checked)
    return defaultMsg;
    else
    return termsErrorMsg;
}
function validate(){
    let valid = true;//global validation 

    let emailValidation = validateEmail();
    if(emailValidation!==defaultMsg){
        emailError.textContent = emailValidation;
        emailInput.style.border='2px solid red';
        valid = false;  
    }

    let userNameValidation = validateUserName();
    if(userNameValidation!==defaultMsg){
        userNameError.textContent = userNameValidation;
        userNameInput.style.border='2px solid red';
        valid = false;  
    }

    let passValidation = validatePassword();
    if(passValidation!==defaultMsg){
        passwordError.textContent = passValidation;
        password.style.border='2px solid red';
        valid = false;  
    }

    let pass2Validation = validatePass2();
    if(pass2Validation!==defaultMsg){
        pass2Error.textContent = pass2Validation;
        pass2.style.border='2px solid red';
        valid = false;  
    }

    let termsValidation = validateTerms();
    if(termsValidation!==defaultMsg){
        termError.textContent=termsValidation;
        valid = false;
    }
    return valid;
};
function resetFormError() {
    emailError.textContent=defaultMsg;
    userNameError.textContent=defaultMsg;
    passwordError.textContent=defaultMsg;
    pass2Error.textContent=defaultMsg;
    termError.textContent=defaultMsg;
    pass2.style.border='';
    emailInput.style.border='';
    userNameInput.style.border='';
    password.style.border='';
    pass2.style.border='';
}
document.querySelector("#form").addEventListener("reset", resetFormError);

// // add event listner to the email if you entered correct email,the error paragraph with be empty

emailInput.addEventListener("blur",()=>{ // arrow function
    let x = validateEmail();
    if(x == defaultMsg){
        emailError.textContent=defaultMsg;
        emailInput.style.border='';
    }
});

userNameInput.addEventListener("blur",()=>{ // arrow function
    let x = validateUserName();
    if(x == defaultMsg){
        userNameError.textContent=defaultMsg;
        userNameInput.style.border='';
    }
});

password.addEventListener("blur",()=>{ // arrow function
    let x = validatePassword();
    if(x == defaultMsg){
        passwordError.textContent=defaultMsg;
        password.style.border='';
    }
});

pass2.addEventListener("blur",()=>{ // arrow function
    let x = validatePass2();
    if(x == defaultMsg){
        pass2Error.textContent=defaultMsg;
        pass2.style.border='';
    }
});

termInput.addEventListener("change",function(){
    if(this.checked){
        termError.textContent=defaultMsg;
    }
})

function showAlert(){
    let newOne=document.getElementById("newsletter");
    if(newOne.checked){
        alert("Might get spams")
    }
}