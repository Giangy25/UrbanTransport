// classi
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, IDUnivoco, stato) {
        if (stato === void 0) { stato = "disponibile"; }
        this.tipo = tipo;
        this.IDUnivoco = IDUnivoco;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === "disponibile") {
            this.stato = "in uso";
            console.log("Il mezzo ".concat(this.IDUnivoco, " (").concat(this.tipo, ") \u00E8 stato assegnato all'utente ").concat(utente.nome, " ").concat(utente.cognome));
        }
        else {
            console.log("Il mezzo ".concat(this.IDUnivoco, " (").concat(this.tipo, ") \u00E8 disponibile"));
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoDiPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamentoPreferito = metodoDiPagamentoPreferito;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === "disponibile") {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log("Il mezzo ".concat(mezzo.IDUnivoco, " (").concat(mezzo.tipo, ") non \u00E8 disponibile"));
        }
    };
    return Utente;
}());
var Città = /** @class */ (function () {
    function Città(nomeCittà) {
        this.nomeCittà = nomeCittà;
        this.elencoMezziDisponibili = [];
    }
    Città.prototype.aggiungiMezzo = function (mezzo) {
        this.elencoMezziDisponibili.push(mezzo);
        console.log("Un nuovo ".concat(mezzo.tipo, " con id ").concat(mezzo.IDUnivoco, " \u00E8 stato aggiunto all'elenco dei mezzi disponibili della citta di ").concat(this.nomeCittà, " "));
    };
    return Città;
}());
// istanzio
var bici01 = new Mezzo("bici", "A001");
var scooter01 = new Mezzo("scooter", "B001");
var monopattino01 = new Mezzo("monopattino", "C001");
var Utente1 = new Utente("Giada", "Antrà", "antràgiada.00@gmail.com", "Paypal");
var Utente2 = new Utente("Marco", "Rossi", "marcorossi@gmail.com", "bonifico");
var città1 = new Città("Venezia");
// aggiungo mezzi
città1.aggiungiMezzo(bici01);
città1.aggiungiMezzo(scooter01);
città1.aggiungiMezzo(monopattino01);
Utente1.prenotaMezzo(scooter01);
Utente2.prenotaMezzo(monopattino01);
Utente2.prenotaMezzo(scooter01);
