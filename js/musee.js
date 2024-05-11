document.addEventListener("DOMContentLoaded", function() {
    var blurEffect = document.querySelector(".blur-effect");
    var container = document.querySelector(".container");

    // Disparition du flou après 2 secondes
    setTimeout(function() {
        blurEffect.style.display = "none";
        container.style.display = "block"; // Affichage du contenu après disparition du flou
    }, 1000);
});
