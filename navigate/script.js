
let listes = document.getElementsByTagName('ol');
let maListe = listes[listes.length - 1];
let dernierEnfant = maListe.lastElementChild;
maListe.insertBefore(dernierEnfant, maListe.firstElementChild);



let sections = document.querySelectorAll('main section');
    if (sections.length >= 3) {
    
        let h2Section2 = sections[1].querySelector('h2');
        let h2Section3 = sections[2].querySelector('h2');

        let temp = h2Section2.textContent;
        h2Section2.textContent = h2Section3.textContent;
        h2Section3.textContent = temp;


}


let lastSection = document.querySelector('section:last-child');
lastSection.parentNode.removeChild(lastSection);




