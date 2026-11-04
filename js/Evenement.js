class Evenement {
  constructor(donnees) {

    this.titre = donnees.titre;
    this.jour = donnees.jour;
    this.heureDebut = donnees.heureDebut;
    this.duree = donnees.duree;
  }

  heureFin() {
    const heures = Number(this.heureDebut.slice(0, 2));
    const minutes = Number(this.heureDebut.slice(3, 5));
    const total = heures * 60 + minutes + this.duree;

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte" data-jour="${this.jour}">
        <h3>${this.titre}</h3>
        <p>${this.jour}</p>
        <p>${this.heureDebut} - ${this.heureFin()}</p>
      </li>`;
  }
}
