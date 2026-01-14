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

const table = document.getElementById('artikli')

table.style.borderCollapse = 'collapse'

artikli.forEach(function(artikal) {
    const row = table.insertRow()

    const cellId     = row.insertCell()
    const cellNaziv  = row.insertCell()
    const cellCena   = row.insertCell()
    const cellDostup = row.insertCell()

    cellId.textContent    = artikal.id
    cellNaziv.textContent = artikal.naziv
    cellCena.textContent  = artikal.cena 
    cellDostup.textContent = artikal.dostupan ? "DA" : "NE"

    table.querySelectorAll('th').forEach(function(th) {
        th.style.fontWeight = 'normal'
        th.style.border = '1px solid #030303'
        th.style.padding = '12px'
        th.style.textAlign = 'center'
    })

    const cells = [cellId, cellNaziv, cellCena, cellDostup]
    cells.forEach(function(cell) {
        cell.style.border = '1px solid #030303'
        cell.style.padding = '12px'
    })

    cellId.style.textAlign    = "center"
    cellNaziv.style.textAlign = "center"
    cellCena.style.textAlign  = "center"
    cellDostup.style.textAlign = "center"

    if (!artikal.dostupan) {
        row.style.backgroundColor = "#ffcccc"
        row.querySelectorAll('td').forEach(function(td) {
            td.style.border = "1px solid #900"
        })
    }
})
