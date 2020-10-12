document.getElementById("validationform").onsubmit = validate;

function validate()
{
    let valid = true;
    let errors = document.getElementsByClassName("err");
    for(let i=0; i<errors.length; i++){
        errors[i].style.visibility ="hidden";
    }

    let name = document.getElementById("name").value;
    if(name == ""){
        let errName = document.getElementById("errName");
        errName.style.visibility = "visible";
        valid = false;
    }

    let email = document.getElementById("email").value;
    let dot = email.includes(".");
    let at = email.includes("@");
    if(!dot || !at){
        let errEmail = document.getElementById("errEmail");
        errEmail.style.visibility = "visible";
        errEmail.innerHTML = "please enter a valid email.";
        valid = false;
    }

    let password = document.getElementById("password").value;
    if(password === "" || password.length < 8){
        let errPassword = document.getElementById("errPassword");
        errPassword.style.visibility = "visible";
        valid = false;
    }

    let passwordConfirm = document.getElementById("passwordConfirm").value;
    if(passwordConfirm == ""){
        let errPasswordConfirm = document.getElementById("errPasswordConfirm");
        errPasswordConfirm.style.visibility = "visible";
        valid = false;
    }
    if (passwordConfirm !== "") {
        if (passwordConfirm !== password) {
            let errPasswordConfirm2 = document.getElementById("errPasswordConfirm2");
            errPasswordConfirm2.style.visibility = "visible";
            valid = false;
        }
    }

    let check = document.getElementById("check").checked;
    if(check=== false ){
        let checkTerms = document.getElementById("errCheck");
        checkTerms.style.visibility = "visible";
        valid = false;
    }

    return valid;
}