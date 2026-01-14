'use strict'

class Artikal {
    constructor(id, naziv, cena, dostupan) {
        this.id = id
        this.naziv = naziv
        this.cena = cena
        this.dostupan = dostupan
    }
}

const artikli = [
    new Artikal(1, "Monitor", 165, true),
    new Artikal(2, "TV", 650, false),
    new Artikal(3, "Miš", 20, true)
]
