let BodyEnfants = document.body.children[1];


for (let Enfants of BodyEnfants.children) {
  console.log(Enfants);
}

document.title = "Modifying the DOM";
function nomDoc() {
    console.log(document.title);
  }
  nomDoc();


  let body = document.body;
  body.style.backgroundColor = "#FF69B4";


