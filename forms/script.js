let tab = [];


let firstNameInput = document.getElementById('firstname');


let displayFN = document.getElementById('display-firstname');


firstNameInput.addEventListener('keyup', function (event) {


    if (event.keyCode === 13) {
        let inputValue = firstNameInput.value.trim();


        if (inputValue !== "") {

            tab.push(inputValue);
            displayFN.textContent = tab;
            console.log(tab);

        }


        firstNameInput.value = "";
        event.preventDefault();
    }
});

let ageInput = document.getElementById('age');
let hardTruthSection = document.getElementById('a-hard-truth');


ageInput.addEventListener('keyup', function (event) {


    let age = parseInt(event.target.value);

    if (event.keyCode === 13) {
        age = ageInput.value.trim();
        ageInput.value = "";
        event.preventDefault();
    }

    else if (age >= 18) {

        hardTruthSection.style.visibility = 'visible';

    } else {

        hardTruthSection.style.visiblity = 'hidden';

    }

});

let passwordInput = document.getElementById('pwd');
let confPasswordInput = document.getElementById('pwd-confirm');

passwordInput.addEventListener('keyup', validatePassword);
confPasswordInput.addEventListener('keyup', validatePassword);

function validatePassword() {
    var password = passwordInput.value;
    var confPassword = confPasswordInput.value;

    if (password.length < 6 || password === confPassword) {
        passwordInput.style.border="3px solid green";
        confPasswordInput.style.border="3px solid green";
    } else {
        passwordInput.style.border="3px solid red";
        confPasswordInput.style.border="3px solid red";
    }
}

let darkmode = document.getElementById('toggle-darkmode');

darkmode.addEventListener('change',function(){
    let alternMode = darkmode.value;

    if(alternMode=== 'dark'){
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#000000';
    }
  
});