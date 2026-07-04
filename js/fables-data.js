// ============================================================
// CORPORATE FABLES — archivio favole
// ============================================================
// Questo è l'UNICO file da modificare ogni settimana.
// Aggiungi la nuova favola come PRIMO elemento dell'array FABLES
// (in cima): comparirà automaticamente sia in homepage (tra le
// "in evidenza") sia nell'archivio completo in favole.html.
//
// Copia questo blocco vuoto, incollalo in cima all'array qui sotto
// e compila i campi:
//
// {
//   crest: "mole",              // vedi elenco stemmi disponibili sotto
//   character: "Nome",          // nome del personaggio
//   role: "il/la animale",      // es. "la volpe"
//   title: "Titolo della favola",
//   moral: "La morale in una riga.",
//   teaser: "Due righe che raccontano l'inizio senza svelare il finale.",
//   url: ""                     // incolla qui il link diretto al post Substack
//                                // appena pubblicato. Se lo lasci vuoto, il
//                                // pulsante porta alla newsletter generale.
// },
//
// Stemmi disponibili in assets/crests.svg:
// mole, octopus, tapir, snail, monkey, pigeon, mule, raccoon, eagle
// Se il nuovo animale non è ancora tra questi, dimmelo: te ne disegno uno nuovo.
// ============================================================

const FABLES = [
  {
    crest: "mole",
    character: "Duna",
    role: "la talpa",
    title: "La talpa che non alzava mai lo sguardo",
    moral: "Il dettaglio senza direzione è lavoro senza senso.",
    teaser: "Duna scava da sempre, sicura e instancabile, senza mai chiedersi dove portino le sue gallerie. Finché un airone le chiede: l'ultima volta che hai alzato lo sguardo, cosa hai visto?",
    url: ""
  },
  {
    crest: "octopus",
    character: "Otto",
    role: "il polpo",
    title: "Il polpo che diceva sempre sì",
    moral: "Non siamo indispensabili perché capaci. A volte, perché non abbiamo mai chiesto aiuto.",
    teaser: "Otto ha otto tentacoli e non ha mai imparato a dire no. Finché uno dei tentacoli, semplicemente, smette di muoversi.",
    url: ""
  },
  {
    crest: "tapir",
    character: "Teo",
    role: "il tapiro",
    title: "Il tapiro che convocava riunioni",
    moral: "Una riunione senza una decisione da prendere non è una riunione.",
    teaser: "Teo crede che ogni problema si risolva riunendo le creature in una stanza. Un martedì mattina, la stanza rimane vuota.",
    url: ""
  },
  {
    crest: "snail",
    character: "Lena",
    role: "la lumaca",
    title: "La lumaca che aspettava il momento giusto",
    moral: "La perfezione è spesso il nome che diamo alla paura di essere giudicati.",
    teaser: "Il progetto di Lena è \u201cquasi pronto\u201d da tre anni. Un vecchio cervo le fa notare che lo diceva anche l'anno scorso.",
    url: ""
  },
  {
    crest: "monkey",
    character: "Ada",
    role: "la scimmia",
    title: "La scimmia e la biblioteca perfetta",
    moral: "Un sistema perfetto per chi lo ha costruito è spesso invisibile per chi deve usarlo.",
    teaser: "La biblioteca di Ada è un capolavoro di logica. L'unico problema è che nessuno riesce a trovarci quello che cerca.",
    url: ""
  },
  {
    crest: "pigeon",
    character: "Bernie",
    role: "il piccione",
    title: "Il piccione che non si fermava mai",
    moral: "La comunicazione interna che funziona non è quella che viaggia più in fretta.",
    teaser: "Bernie consegna pergamene da mattina a sera. Nessuno gli ha mai chiesto se, una volta arrivate, qualcuno le leggesse davvero.",
    url: ""
  },
  {
    crest: "mule",
    character: "Aldo",
    role: "il mulo",
    title: "Il mulo che non voleva il nuovo sistema",
    moral: "Il problema con i cambiamenti non è mai solo il cambiamento in sé.",
    teaser: "Aldo resiste al nuovo metodo con ogni scorciatoia possibile. Nessuno gli ha mai spiegato cosa ci avrebbe guadagnato lui.",
    url: ""
  },
  {
    crest: "raccoon",
    character: "Renoir",
    role: "il procione",
    title: "Il procione guardiano dello stemma",
    moral: "I valori appesi al muro non fanno cultura. La fanno le domande scomode.",
    teaser: "Renoir lucida lo stemma del castello ogni mattina. Un giorno un cavallo gli chiede: quella parola, dove la vedi oggi?",
    url: "https://substack.com/@stefrengo"
  },
  {
    crest: "eagle",
    character: "Kael",
    role: "l'aquila",
    title: "L'aquila che vedeva tutto",
    moral: "I numeri dicono cosa sta succedendo. Le persone dicono perché.",
    teaser: "Dalla cima della torre, Kael vede tutto — finché scende tra i corridoi e scopre quanto i numeri non gli avevano mai detto.",
    url: ""
  }
];
