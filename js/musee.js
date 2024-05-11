document.addEventListener("DOMContentLoaded", function() {
    var blurEffect = document.querySelector(".blur-effect");
    var ecran = document.querySelector("#ecran");
    var container = document.querySelector(".container");
    var svg = document.querySelector("#svg");
    var oeuvre = document.querySelector(".oeuvre");


    // Transition de l'opacité du flou à 0
    blurEffect.style.transition = "opacity 1s ease-in-out";
    blurEffect.style.opacity = "0";

    // Disparition du flou après 2 secondes
    setTimeout(function() {
        blurEffect.style.display = "none";
        blurEffect.style.opacity = ""; // Réinitialisation de l'opacité
        ecran.style.display = "none";
        svg.style.display = "block";
    }, 2000);
});
