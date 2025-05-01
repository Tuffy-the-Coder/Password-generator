const chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*";

let password = "";
let generatedPassword = document.getElementById("generated-password");

document.getElementById("generate-button").addEventListener("click",() => { 
    for (let i = 0; password.length < 12; i++) {
    password+= capitalLetters[Math.floor(Math.random()*capitalLetters.length)];
    password+= chars[Math.floor(Math.random()*chars.length)];
    password+= smallLetters[Math.floor(Math.random()*smallLetters.length)];
    password+= chars[Math.floor(Math.random()*chars.length)];
    password+= numbers[Math.floor(Math.random()*numbers.length)];
    password+= chars[Math.floor(Math.random()*chars.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];
    password+= chars[Math.floor(Math.random()*chars.length)];
    }
    generatedPassword.innerText = password;
    generatedPassword.style.color = "black";
    password = "";
})
document.querySelector(".fa-copy").addEventListener("click",() => {
    navigator.clipboard.writeText(generatedPassword.innerText)
    .then(() => {
        console.log("copied")
    })
    .catch((err) => {
        console.error("failed to copy",err);
    })
})


let enteredPassword = document.getElementById("enter-password");
let messgae = document.createElement("p");
document.getElementById("password-checker").append(messgae);
enteredPassword.addEventListener("keyup", (e) => {
    checkPassword();
})
enteredPassword.addEventListener("paste", (e) => {
    checkPassword();
})

function checkPassword(params) {
    let lowerCaseUsed = 0;
    let upperCaseUsed = 0;
    let numberUsed = 0;
    let symbolsUsed = 0;
    let length = enteredPassword.value.length;
    let value = enteredPassword.value;
    for (let i = 0; i < length; i++) {
        if (capitalLetters.includes(value[i])) {
            upperCaseUsed++;
        } 
        else if (smallLetters.includes(value[i])) {
            lowerCaseUsed++;
        }
        else if (symbols.includes(value[i])) {
            symbolsUsed++;
        }
        else if (numbers.includes(value[i])) {
            numberUsed++;
        }
    }

    if (length >= 12 && symbolsUsed == 0 && numberUsed >=3 && lowerCaseUsed >= 3) {
        console.log("moderate cause no symbol")
        messgae.innerText = "Moderate Password";
        messgae.style.color = "goldenrod";
        enteredPassword.style.borderColor = "goldenrod"
    }
    else if ( length >= 12 && lowerCaseUsed >=1 && upperCaseUsed >=1 && symbolsUsed>=1 && numberUsed>=1) {
        console.log("strong");
        messgae.innerText = "Strong Password";
        messgae.style.color = "Green";
        enteredPassword.style.borderColor = "green"
    }
    else if (length == 0) {
        enteredPassword.style.borderColor = "grey";
        messgae.innerText = "";
    }
    else {
        messgae.innerText = "Weak Password!";
        messgae.style.color = "red";
        enteredPassword.style.borderColor = "red"
    }
}
