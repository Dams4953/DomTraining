let tab1 = ['nom0', 'nom1', 'nom2', 'nom3', 'nom4',];



let article = document.querySelector('article');

for (let i = 0; i < tab1.length; i++){

        let section = document.createElement('section');
        let paragraph = document.createElement('img');

        section.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        
        paragraph.textContent = tab1[i];

        section.appendChild(paragraph);
        article.appendChild(section);
}



