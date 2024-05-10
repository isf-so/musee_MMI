document.addEventListener("DOMContentLoaded", function() {
    var blurryBackground = document.querySelector(".blurry-background");
    var fullScreenDiv = document.querySelector(".full-screen-div");

    blurryBackground.addEventListener("click", function() {
        this.style.filter = "blur(20px)";
        this.style.transition = "filter 0.5s ease";

        // Ajout d'un événement pour la fin de l'animation de flou
        this.addEventListener("transitionend", function() {
            // Suppression complète de la div blurry-background après 2 secondes
            setTimeout(function() {
                blurryBackground.style.display = "none";
                // Rediriger vers une autre page HTML après la suppression
                window.location.href = "pages/1home.html";
                
            }, 2000);
        });
    });
});
