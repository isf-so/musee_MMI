document.addEventListener("DOMContentLoaded", function() {
    var blurryBackground = document.querySelector(".blurry-background");

    blurryBackground.addEventListener("click", function() {
        this.style.filter = "blur(20px)";
        this.style.transition = "filter 0.5s ease";

        // Suppression complète de la div blurry-background après 2 secondes
        setTimeout(function() {
            blurryBackground.style.display = "none";
        }, 2000);

        // Création d'une nouvelle div plein écran
        var fullScreenDiv = document.createElement("div");
        fullScreenDiv.classList.add("full-screen-div");
        fullScreenDiv.style.position = "fixed";
        fullScreenDiv.style.top = "0";
        fullScreenDiv.style.left = "0";
        fullScreenDiv.style.width = "100%";
        fullScreenDiv.style.height = "100%";
        fullScreenDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Couleur de fond semi-transparente
        fullScreenDiv.style.zIndex = "9999"; // Au-dessus de tout

        // Ajout de la nouvelle div au body
        document.body.appendChild(fullScreenDiv);
    });
});
