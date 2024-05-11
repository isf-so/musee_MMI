let param = new URLSearchParams(location.search);
let oeuvrenombre = param.get('nombre');
let oeuvreInfo = OEUVRE[oeuvrenombre];



// Validation de la SAE
// document.querySelector("h1").innerHTML = saenombre;
// document.querySelector("h2").innerHTML = saeInfo.titre;


let liste1 = '';
for (let i in OEUVRE) {
    liste1 +=
        '<div class="oeuvre1" style="background-image: url(\'../img/' + OEUVRE[i]["image"] + '\')">' +
        '<div class="grid2">' +
        '<div><h3 id="titre">' + OEUVRE[i]["titre"] + '</h3>' +
        '</div><div id="description">' +
        '<p>' + OEUVRE[i]["description"] + '</p>' +
        '</div></div><div class="largeur"><h3 id="lieu">' +
        OEUVRE[i]["lieu"] +
        '</h3></div></div>';
}
document.querySelector(".oeuvre").innerHTML = liste1;










