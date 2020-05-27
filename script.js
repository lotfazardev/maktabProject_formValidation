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
function validate() {
    let formGroup = document.getElementsByClassName("form-control"), values = [];
    let errorMsgbox = document.getElementsByClassName("text-muted")
    let flag = false;
    const sectionNames = ["username", "password", "re-password", "email", "country"]
    for (let i = 0; i < formGroup.length; i++) {
        values.push(formGroup[i].value || null)
    }
    // is empty checker
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
                        errorMsgbox[i].innerHTML = `only <span class="yellow"> alphaNumeric </span> and <span class="yellow"> underline </span> allowed (from <span class="yellow"> 5 </span> to <span class="yellow"> 20 </span> char)`
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