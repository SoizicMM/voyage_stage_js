// Effet machine à écrire 
const texteSlogan = "Destination Cocobeach 🌴";
let indexLettre = 0;

function ecrireMachine() {
    if (indexLettre < texteSlogan.length) {
        document.getElementById("slogan").textContent += texteSlogan.charAt(indexLettre);
        indexLettre++;
        setTimeout(ecrireMachine, 100);
    }
}

ecrireMachine(); 


// Dark Mode 
function basculerMode() {
    document.body.classList.toggle("mode-sombre");
}

// Apparition avec effet fade / slide 
// Sélectionner notre élément sur lequel on va agir 
const sectionAccueil = document.getElementById("section-accueil");

// Ajouter un écouteur d'évènement qui se déclenche quand on fait défiler la page 
window.addEventListener("scroll", () => {
    // Récupérer la position de notre élement par rapport à l'écran 
    const position = sectionAccueil.getBoundingClientRect();
    // Vérifier si le haut de la section est visible à l'écran 
    if (position.top < window.innerHeight - 100) {
        // ajouter la classe "visible" a mon html
        sectionAccueil.classList.add("visible");
    }
});

// ZOOM sur l'image 
const imagePlage = document.getElementById("image-plage");

// ajouter un effet zoom quand la souris entre en contact avec l'image 
imagePlage.addEventListener("mouseenter", () => {
    imagePlage.style.transform = "scale(1.5)";
});

// Remettre l'image à sa taille normale quand la souris quitte l'image 
imagePlage.addEventListener("mouseleave", () => {
    imagePlage.style.transform = "scale(1)";
});

// animation sur l'image du cocotier 
const cocotier = document.getElementById("cocotier");
let angleRotation = 0;
let direction = 1;

// on va timer notre animation 
setInterval(() => {
    // Incrémente (ou décrémente) l'angle de rotation selon la direction
    angleRotation += direction * 0.5;

    // stopper si on dépasse +5° ou - 5° , on inverse la direction 
    if (angleRotation > 5 || angleRotation < -5) {
        direction *= -1;
    }

    // appliquer la rotation à l'élément cocotier en css 
    cocotier.style.transform = `rotate(${angleRotation}deg)`;
},50);