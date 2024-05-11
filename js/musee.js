document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');

    container.addEventListener('wheel', function (event) {
        event.preventDefault(); // Empêche le défilement par défaut

        var delta = event.deltaY || event.detail || event.wheelDelta;

        // Ajuste la position horizontale du défilement
        container.scrollLeft += (delta < 0 ? -30 : 30);
    });
});
  
  
document.addEventListener("DOMContentLoaded", function () {
    var blurEffect = document.querySelector(".blur-effect");
    var ecran = document.querySelector("#ecran");
    var container = document.querySelector(".container");
    var svg = document.querySelector("#svg");
    var body = document.querySelector("body");


    // Transition de l'opacité du flou à 0
    blurEffect.style.transition = "opacity 1s ease-in-out";
    blurEffect.style.opacity = "0";
    body.style.overflow = "hidden";

    // Disparition du flou après 2 secondes
    setTimeout(function () {
        blurEffect.style.display = "none";
        blurEffect.style.opacity = ""; // Réinitialisation de l'opacité
        ecran.style.display = "none";
        svg.style.display = "block";
        document.body.style.overflowX = "visible";
    }, 2000);
});


  