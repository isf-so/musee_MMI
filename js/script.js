const conteneur = document.getElementById('conteneur');

conteneur.addEventListener('wheel', (event) => {
    event.preventDefault(); // Empêche le défilement vertical

    const delta = event.deltaY || event.detail || event.wheelDelta;

    conteneur.scrollLeft += delta;
});


document.getElementById('centeredText').addEventListener('click', function() {
    var element = document.querySelector('#centeredText');
    element.parentNode.removeChild(element);
});

  