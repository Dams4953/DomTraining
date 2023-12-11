
let elements = document.querySelectorAll('.important');


elements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});
  console.log(elements);




let images = document.querySelectorAll('img');

images.forEach(image =>{
    if (!image.classList.contains('important')) {
        
        image.style.display = 'none';
      }
});
    console.log(images);


let paragraphes = document.querySelectorAll('p');


paragraphes.forEach(paragraphe => {
  console.log(paragraphe.textContent);

  if (paragraphe.classList.length > 0) {
    console.log(paragraphe.classList);
  }
});

let PColors = document.querySelectorAll('p');

PColors.forEach(PColor => {
  if (PColor.classList.length === 0) {
    PColor.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
});

console.log(PColors);