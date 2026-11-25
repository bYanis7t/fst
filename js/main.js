const programme = evenements.map((d) => new Evenement(d));

const liste = document.querySelector("#programme");
liste.innerHTML = programme.map((ev) => ev.carte()).join("");


const samedi = document.querySelector("#samedi");


function afficher(liste) {
  const zone = document.querySelector("#programme");
  zone.innerHTML = liste.map((ev) => ev.carte()).join("");
}

function duSamedi() {
  return programme.filter((ev) => ev.jour === "samedi");
}

samedi.addEventListener("click", () => afficher(duSamedi()));


const vendredi = document.querySelector("#vendredi");
function duVendredi() {
  return programme.filter((ev) => ev.jour === "vendredi");
}

vendredi.addEventListener("click", () => afficher(duVendredi()));

const tout = document.querySelector("#tout");
function toutLeProgramme() {
  return programme;
}

tout.addEventListener("click", () => afficher(toutLeProgramme()));