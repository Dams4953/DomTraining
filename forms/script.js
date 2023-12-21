let tab = []; // Initialisation du tableau vide

// Sélection du premier champ de saisie
let firstNameInput = document.getElementById('firstname');

// Sélection du span où afficher le prénom
let displaySpan = document.getElementById('display-firstname');

// Ajout d'un écouteur d'événement "keydown" sur le champ de saisie
firstNameInput.addEventListener('keydown', function (event) {
    // Vérifier si la touche pressée est la touche "Enter" (code clavier 13)
    if (event.keyCode === 13) {
        // Récupérer le contenu actuel du champ de saisie
        let inputValue = firstNameInput.value.trim(); // Trim pour enlever les espaces avant et après

        if (inputValue !== "") {
            // Ajouter la valeur actuelle dans le tableau
            tab.push(inputValue);

            // Mettre à jour le contenu du span avec le dernier mot saisi
            displaySpan.textContent = tab;

            console.log(tab); // Afficher le tableau dans la console
        }

        // Effacer le contenu du champ de saisie
        firstNameInput.value = "";

        // Empêcher le comportement par défaut de la touche "Enter" (éviter le rechargement de la page)
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


let pwdInput = document.getElementById('pwd');
let pwdConfirm = document.getElementById('pwd-confirm');

function applyBorder(element) {
    element.style.border = '2px solid red';
}




pwdInput.addEventListener('input', function (event) {


});

