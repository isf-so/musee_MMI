document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".blurry-background").addEventListener("click", function() {
        this.style.filter = "blur(20px)";
        this.style.transition = "filter 0.5s ease";
    });
});
