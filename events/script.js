// Création des éléments HTML
const actionBoxContainer = document.createElement('div');
actionBoxContainer.classList.add('action-box');

const redAction = document.createElement('div');
redAction.classList.add('action', 'red');

const blueAction = document.createElement('div');
blueAction.classList.add('action', 'blue');

const greenAction = document.createElement('div');
greenAction.classList.add('action', 'green');

actionBoxContainer.appendChild(redAction);
actionBoxContainer.appendChild(blueAction);
actionBoxContainer.appendChild(greenAction);

document.body.appendChild(actionBoxContainer);

const displayWrapper = document.createElement('div');
displayWrapper.classList.add('displayedsquare-wrapper');
document.body.appendChild(displayWrapper);

const journal = document.createElement('ul');
journal.classList.add('journal');
document.body.appendChild(journal);

// Fonction pour créer un nouveau <div> et <li>
function createSquare(color) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('displayedsquare');
  newDiv.style.backgroundColor = color;
  displayWrapper.appendChild(newDiv);

  const date = new Date().toLocaleString();
  const newLi = document.createElement('li');
  newLi.textContent = `Action effectuée le ${date}`;
  journal.appendChild(newLi);
}

// Sélection des éléments d'action
const actionBoxes = document.querySelectorAll('.action');

// Écoute des clics sur les cases d'action
actionBoxes.forEach(action => {
  action.addEventListener('click', function() {
    const color = this.classList[1]; // Récupère la deuxième classe (la couleur)
    createSquare(color);
  });
});