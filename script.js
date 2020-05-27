var loader = document.getElementById('loading-layout')
window.addEventListener ("load", function() {
    loader.style.display = 'none';
});

isMatch = (arg1, arg2) => arg1 === arg2;
isEmail = (Email) => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegEx.test(Email)
}
isEmpty = (arg) => arg == null || arg === "" || arg === [] || arg === {}
isAlphaNumerical = (text) => {
    const alphaNumrical = /^[a-zA-Z0-9_]*$/;
    return alphaNumrical.test(text)
}
isUser = (username) => {
    const userRegEx = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    return userRegEx.test(username)
}
isPassword = (password) => {
    const passwordRegEx = /^[a-zA-Z0-9_!@#$%^&*()]{8,}$/
    return passwordRegEx.test(password)
}
function validate() {
    let formGroup = document.getElementsByClassName("form-control"), values = [];
    let errorMsgbox = document.getElementsByClassName("text-muted")
    let flag = false;
    const sectionNames = ["username", "password", "re-password", "email", "country"]
    for (let i = 0; i < formGroup.length; i++) {
        values.push(formGroup[i].value || null)
    }

    for (let i = values.length - 1; i >= 0; i--) {
        if (isEmpty(values[i])) {
            errorMsgbox[i].innerHTML = `please Enter your <span style="color : #CE4D3B ;">${sectionNames[i]}</span>`
            formGroup[i].focus();
            flag = true
        } else {
            errorMsgbox[i].innerText = ""
            switch (i) {
                case 0:
                    if (!isUser(values[i])) {
                        errorMsgbox[i].innerHTML = `only <span class="yellow"> alphaNumeric </span> and <span class="yellow"> underline </span> allowed (from <span class="yellow"> 5 </span> to <span class="yellow"> 20 </span> characters)`
                        formGroup[i].focus();
                        flag = true
                    }
                break;
                case 1:
                    if(!isPassword(values[i])){
                        errorMsgbox[i].innerHTML = `password must <span class="yellow"> at least 8 </span> characters`
                        formGroup[i].focus();
                        flag = true
                    }
                break;
                case 2:
                    if(!isMatch(values[i],values[i-1])){
                        errorMsgbox[i].innerHTML = `Password and confirm password <span class="yellow"> does not match </span>`
                        formGroup[i].focus();
                        flag = true
                    }
                break;
                case 3:
                    if(!isEmail(values[i])){
                        errorMsgbox[i].innerHTML = `<span class="yellow"> invalid email </span>`
                        formGroup[i].focus();
                        flag = true
                    }
                break;
            }
        }
        if (flag && !i) {
            return false
        }
    }
    console.table(errorMsgbox);
    // if (Reg.test(username) == false) {
    //     alert('Invalid Username.');
    //     document.forms[form_id].elements[firstName].focus();
    //     return false;
    // }

    // if (Reg1.test(password) == false) {
    //     alert('Invalid Password.');
    //     document.forms[form_id].elements[password].focus();
    //     return false;
    // }
}