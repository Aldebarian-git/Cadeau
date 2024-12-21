// Création de l'audio
const audio = new Audio("./Assets/song.mp3");
const cadeausound = new Audio("./Assets/cadeau.mp3");
// Définir le volume de base
audio.volume = 0.1; // 30% du volume maximum

// Activer la lecture en boucle
audio.loop = true;

document.addEventListener("click", () => {
  audio
    .play()
    .then(() => {
      console.log("Lecture audio réussie.");
    })
    .catch((error) => {
      console.error("Erreur lors de la lecture audio :", error);
    });
});

// Sélectionner l'élément de la page de couverture
const cover = document.getElementById("cover");

// Ajouter un gestionnaire d'événement pour le clic
cover.addEventListener("click", () => {
  // Ajouter une classe pour démarrer l'animation
  cover.classList.add("hidden");

  // Optionnel : Supprimer complètement l'élément après l'animation
  setTimeout(() => {
    cover.style.display = "none";
  }, 1000); // Correspond à la durée de transition définie dans le CSS (1s)
});

// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  // Récupérer le bouton et le conteneur de texte
  const button = document.querySelector("button");
  const textContainer = document.querySelector(".text");

  // Ajouter un gestionnaire d'événement au clic sur le bouton
  button.addEventListener("click", () => {
    cadeausound.play();
    cadeausound.volume = 0.1; // 30% du volume maximum
    // Modifier le contenu HTML de la div "text"
    textContainer.innerHTML = `
        <h2>🎁 ~ Cadeau de Noël ~ 🎁</h2>
        <p>
          Maman, le Père Noël t'offre un bon de réduction de <strong>50 euros</strong> 
          pour tout ce qu'il te plaira : un massage, un bijou, un vêtement… c'est à toi de choisir !
        </p>
        <p>Avec tout mon amour, profite bien de ton cadeau ❤️</p>
        <p>Ton fils qui t'aime</p>
      `;

    // Facultatif : Ajoutez une petite animation pour rendre l'apparition plus douce
    textContainer.style.transition = "opacity 0.5s ease";
    textContainer.style.opacity = 0;
    setTimeout(() => {
      textContainer.style.opacity = 1;
    }, 100);
  });
});
