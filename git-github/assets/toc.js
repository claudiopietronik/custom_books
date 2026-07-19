/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Git & GitHub).
   Libro della collana di programmazione: il controllo di versione con Git e la
   collaborazione con GitHub. Dalla prima commit al workflow con pull request.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Git & GitHub", glyph: "🔀", tema: "git-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Cos'è il controllo di versione",
    file: "cap01-controllo-versione.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Il problema: tenere traccia dei cambiamenti" },
      { id: "s1-2", n: "1.2", t: "Cosa fa un sistema di versioning" },
      { id: "s1-3", n: "1.3", t: "Git e GitHub: non sono la stessa cosa" },
      { id: "s1-4", n: "1.4", t: "Come lavora Git (panoramica)" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: la mappa mentale" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Installare e configurare Git",
    file: "cap02-installare-configurare.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Installare Git" },
      { id: "s2-2", n: "2.2", t: "La prima configurazione" },
      { id: "s2-3", n: "2.3", t: "Nome ed email: la tua identità" },
      { id: "s2-4", n: "2.4", t: "Il terminale e i comandi di base" },
      { id: "s2-5", n: "2.5", t: "Laboratorio: git config" },
      { id: "s2-6", n: "2.6", t: "Esercizi" },
      { id: "s2-7", n: "2.7", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Il primo repository",
    file: "cap03-primo-repository.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Cos'è un repository" },
      { id: "s3-2", n: "3.2", t: "git init" },
      { id: "s3-3", n: "3.3", t: "Le tre aree: working, staging, repository" },
      { id: "s3-4", n: "3.4", t: "git status: la tua bussola" },
      { id: "s3-5", n: "3.5", t: "Laboratorio: crea un repository" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Salvare le modifiche: la commit",
    file: "cap04-commit.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "git add: preparare le modifiche" },
      { id: "s4-2", n: "4.2", t: "git commit: salvare uno snapshot" },
      { id: "s4-3", n: "4.3", t: "Il messaggio di commit" },
      { id: "s4-4", n: "4.4", t: "Il ciclo add-commit" },
      { id: "s4-5", n: "4.5", t: "Laboratorio: le prime commit" },
      { id: "s4-6", n: "4.6", t: "Esercizi" },
      { id: "s4-7", n: "4.7", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "La storia del progetto",
    file: "cap05-storia.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "git log: la linea del tempo" },
      { id: "s5-2", n: "5.2", t: "Leggere una commit (hash, autore, data)" },
      { id: "s5-3", n: "5.3", t: "git diff: cosa è cambiato" },
      { id: "s5-4", n: "5.4", t: "git show: guardare una commit" },
      { id: "s5-5", n: "5.5", t: "Laboratorio: esplorare la storia" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Annullare e correggere",
    file: "cap06-annullare.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Scartare modifiche non salvate (restore)" },
      { id: "s6-2", n: "6.2", t: "Togliere dallo staging" },
      { id: "s6-3", n: "6.3", t: "Correggere l'ultima commit (amend)" },
      { id: "s6-4", n: "6.4", t: "Annullare una commit pubblica (revert)" },
      { id: "s6-5", n: "6.5", t: "Laboratorio: rimediare agli errori" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "I branch",
    file: "cap07-branch.html",
    stato: "da-fare",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Cos'è un branch e a cosa serve" },
      { id: "s7-2", n: "7.2", t: "Creare e spostarsi tra branch" },
      { id: "s7-3", n: "7.3", t: "HEAD: dove sei adesso" },
      { id: "s7-4", n: "7.4", t: "Lavorare in isolamento" },
      { id: "s7-5", n: "7.5", t: "Laboratorio: il tuo primo branch" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "Unire i branch: il merge",
    file: "cap08-merge.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Riportare il lavoro sul branch principale" },
      { id: "s8-2", n: "8.2", t: "Il fast-forward" },
      { id: "s8-3", n: "8.3", t: "Il merge commit" },
      { id: "s8-4", n: "8.4", t: "Cancellare un branch finito" },
      { id: "s8-5", n: "8.5", t: "Laboratorio: crea e unisci un branch" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Risolvere i conflitti",
    file: "cap09-conflitti.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Perché nascono i conflitti" },
      { id: "s9-2", n: "9.2", t: "Leggere i marcatori di conflitto" },
      { id: "s9-3", n: "9.3", t: "Risolvere e completare il merge" },
      { id: "s9-4", n: "9.4", t: "Evitare i conflitti (buone abitudini)" },
      { id: "s9-5", n: "9.5", t: "Laboratorio: risolvi un conflitto" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "GitHub: il repository remoto",
    file: "cap10-github-remoto.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Cos'è un repository remoto" },
      { id: "s10-2", n: "10.2", t: "Creare un account e un repository su GitHub" },
      { id: "s10-3", n: "10.3", t: "Collegare locale e remoto (remote)" },
      { id: "s10-4", n: "10.4", t: "Clonare un repository esistente" },
      { id: "s10-5", n: "10.5", t: "Laboratorio: il tuo primo repo su GitHub" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Collaborare: push, pull, fetch",
    file: "cap11-push-pull.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "git push: mandare le commit al remoto" },
      { id: "s11-2", n: "11.2", t: "git pull: ricevere le modifiche" },
      { id: "s11-3", n: "11.3", t: "fetch vs pull" },
      { id: "s11-4", n: "11.4", t: "Restare sincronizzati in team" },
      { id: "s11-5", n: "11.5", t: "Laboratorio: sincronizzare" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Pull request e code review",
    file: "cap12-pull-request.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Il workflow a feature branch" },
      { id: "s12-2", n: "12.2", t: "Aprire una pull request" },
      { id: "s12-3", n: "12.3", t: "La code review" },
      { id: "s12-4", n: "12.4", t: "Fare il merge della PR" },
      { id: "s12-5", n: "12.5", t: "Laboratorio: una pull request" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Ignorare file e buone pratiche",
    file: "cap13-gitignore-pratiche.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Il file .gitignore" },
      { id: "s13-2", n: "13.2", t: "Cosa non mettere mai in un repo" },
      { id: "s13-3", n: "13.3", t: "Messaggi di commit efficaci" },
      { id: "s13-4", n: "13.4", t: "Commit piccole e frequenti" },
      { id: "s13-5", n: "13.5", t: "Laboratorio: pulizia e .gitignore" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Un flusso di lavoro completo",
    file: "cap14-workflow-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Mettere tutto insieme" },
      { id: "s14-2", n: "14.2", t: "Dal clone alla pull request" },
      { id: "s14-3", n: "14.3", t: "Gestire un progetto reale" },
      { id: "s14-4", n: "14.4", t: "Dove andare da qui" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: il progetto completo" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  }
];
