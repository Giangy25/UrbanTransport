// intefacce
interface IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  IDUnivoco: string;
  stato: "disponibile" | "in uso";
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamentoPreferito: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICittà {
  nomeCittà: string;
  elencoMezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

// classi

class Mezzo implements IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  IDUnivoco: string;
  stato: "disponibile" | "in uso";

  constructor(
    tipo: "bici" | "scooter" | "monopattino",
    IDUnivoco: string,
    stato: "disponibile" | "in uso" = "disponibile") {
    this.tipo = tipo;
    this.IDUnivoco = IDUnivoco;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(`Il mezzo ${this.IDUnivoco} (${this.tipo}) è stato assegnato all'utente ${utente.nome} ${utente.cognome}`)
    } else {
      console.log(`Il mezzo ${this.IDUnivoco} (${this.tipo}) è disponibile`)
    }
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoDiPagamentoPreferito: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamentoPreferito: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoDiPagamentoPreferito = metodoDiPagamentoPreferito;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
    } else {
      console.log(`Il mezzo ${mezzo.IDUnivoco} (${mezzo.tipo}) non è disponibile`)
    }
  }
}


class Città implements ICittà {
  nomeCittà: string;
  elencoMezziDisponibili: IMezzo[];

  constructor(nomeCittà: string) {
    this.nomeCittà = nomeCittà;
    this.elencoMezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.elencoMezziDisponibili.push(mezzo);
    console.log(`Un nuovo ${mezzo.tipo} con id ${mezzo.IDUnivoco} è stato aggiunto all'elenco dei mezzi disponibili della citta di ${this.nomeCittà} `)
  }
}

// istanzio
const bici01 = new Mezzo("bici", "A001");
const scooter01 = new Mezzo("scooter", "B001");
const monopattino01 = new Mezzo("monopattino", "C001");


const Utente1 = new Utente("Giada", "Antrà", "antràgiada.00@gmail.com", "Paypal");
const Utente2 = new Utente("Marco", "Rossi", "marcorossi@gmail.com", "bonifico");


const città1 = new Città("Venezia");


// aggiungo mezzi
città1.aggiungiMezzo(bici01);
città1.aggiungiMezzo(scooter01);
città1.aggiungiMezzo(monopattino01);

Utente1.prenotaMezzo(scooter01);
Utente2.prenotaMezzo(monopattino01);
Utente2.prenotaMezzo(scooter01);
