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
function validate() {
    let formGroup = document.getElementsByClassName("form-control"), values = [];
    let errorMsgbox = document.getElementsByClassName("text-muted")
    let flag = false ;
    const sectionNames = ["username","password","re-password","email","country"]
    for (let i = 0; i < formGroup.length; i++) {
        values.push(formGroup[i].value || null)
    }
    // is empty checker
    for(let i = values.length - 1 ; i >= 0; i--){
        if(isEmpty(values[i])){
            errorMsgbox[i].innerHTML = `please Enter your <span style="color : #CE4D3B ;">${sectionNames[i]}</span>`
            formGroup[i].focus();
            flag = true
        }else{
            errorMsgbox[i].innerText = ""
        }
        if(flag && !i){
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