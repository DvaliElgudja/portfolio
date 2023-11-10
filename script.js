

// -------- AUTO-TYPE --------- //

const dynamicText = document.querySelector("h2 span");
const words = ["Développeur", "Codeur", "Agile"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex]; // Récupération du mot actuel

  if (!isDeleting) { // Si nous ne sommes pas en train de supprimer
    dynamicText.textContent = currentWord.substring(0, charIndex); // Afficher une partie du mot jusqu'à l'index du caractère actuel
    charIndex++;

    if (charIndex > currentWord.length) { // Si nous avons atteint la fin du mot, passer à la suppression
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause après avoir affiché le mot complet
      return;
    }
  } else {
    dynamicText.textContent = currentWord.substring(0, charIndex); // En mode suppression, afficher une partie du mot jusqu'à l'index du caractère actuel
    charIndex--;

    if (charIndex < 0) { // Si nous avons supprimé tout le mot, passer au mot suivant
      isDeleting = false;
      wordIndex++;
      if (wordIndex === words.length) { // Si nous avons atteint la fin de la liste de mots, revenir au début
        wordIndex = 0;
      }
    }    
  }

  setTimeout(typeEffect, isDeleting ? 50 : 80);
};

typeEffect();


//------------fonction pour afficher la navbar au scroll -----------//

const header = document.querySelector('.header_main');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.links a');

window.addEventListener('scroll', function() {
  // Obtenir la position de défilement de la page
  const scrollPosition = window.scrollY;

  // Si la position de défilement est supérieure ou égale à 100 pixels
  if (scrollPosition >= 100 && scrollPosition <= 500) {
    header.classList.add('visible');
    navbar.style.display = "block";

  } else {
    header.classList.remove('visible');
    navbar.style.display="none";
  }
});







