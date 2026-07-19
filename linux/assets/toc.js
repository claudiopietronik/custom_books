/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Linux).
   Libro della collana di informatica: usare Linux dal terminale, dal primo
   comando allo scripting bash. Filesystem, permessi, processi, pipe, pacchetti,
   automazione, e un progetto finale che unisce tutto.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Linux", glyph: "🐧", tema: "linux-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Cos'è Linux",
    file: "cap01-cos-e-linux.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Un sistema operativo ovunque" },
      { id: "s1-2", n: "1.2", t: "Kernel, distribuzioni, GNU" },
      { id: "s1-3", n: "1.3", t: "Perché imparare il terminale" },
      { id: "s1-4", n: "1.4", t: "Come provare Linux" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: il primo comando" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Il terminale e la shell",
    file: "cap02-terminale-shell.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Cos'è la shell" },
      { id: "s2-2", n: "2.2", t: "Leggere il prompt" },
      { id: "s2-3", n: "2.3", t: "Anatomia di un comando" },
      { id: "s2-4", n: "2.4", t: "Aiuto: man e --help" },
      { id: "s2-5", n: "2.5", t: "Laboratorio: esplorare i comandi" },
      { id: "s2-6", n: "2.6", t: "Esercizi" },
      { id: "s2-7", n: "2.7", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Il filesystem",
    file: "cap03-filesystem.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "L'albero delle directory" },
      { id: "s3-2", n: "3.2", t: "La radice e le cartelle principali" },
      { id: "s3-3", n: "3.3", t: "Percorsi assoluti e relativi" },
      { id: "s3-4", n: "3.4", t: "Navigare: pwd, ls, cd" },
      { id: "s3-5", n: "3.5", t: "Laboratorio: muoversi nell'albero" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "File e cartelle",
    file: "cap04-file-cartelle.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Creare: mkdir, touch" },
      { id: "s4-2", n: "4.2", t: "Copiare e spostare: cp, mv" },
      { id: "s4-3", n: "4.3", t: "Cancellare: rm, rmdir" },
      { id: "s4-4", n: "4.4", t: "I caratteri jolly (*, ?)" },
      { id: "s4-5", n: "4.5", t: "Laboratorio: gestire i file" },
      { id: "s4-6", n: "4.6", t: "Esercizi" },
      { id: "s4-7", n: "4.7", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Leggere e cercare nei file",
    file: "cap05-leggere-cercare.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Vedere il contenuto: cat, less" },
      { id: "s5-2", n: "5.2", t: "Inizio e fine: head, tail" },
      { id: "s5-3", n: "5.3", t: "Cercare testo: grep" },
      { id: "s5-4", n: "5.4", t: "Trovare file: find" },
      { id: "s5-5", n: "5.5", t: "Laboratorio: cercare nei file" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Permessi e proprietà",
    file: "cap06-permessi.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Utente, gruppo, altri" },
      { id: "s6-2", n: "6.2", t: "Leggere, scrivere, eseguire" },
      { id: "s6-3", n: "6.3", t: "Cambiare i permessi: chmod" },
      { id: "s6-4", n: "6.4", t: "Cambiare il proprietario: chown" },
      { id: "s6-5", n: "6.5", t: "Laboratorio: gestire i permessi" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Utenti e sudo",
    file: "cap07-utenti-sudo.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "root e gli utenti normali" },
      { id: "s7-2", n: "7.2", t: "sudo: poteri temporanei" },
      { id: "s7-3", n: "7.3", t: "Gestire utenti e gruppi" },
      { id: "s7-4", n: "7.4", t: "Sicurezza: il principio del minimo privilegio" },
      { id: "s7-5", n: "7.5", t: "Laboratorio: usare sudo" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "I processi",
    file: "cap08-processi.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Cos'è un processo" },
      { id: "s8-2", n: "8.2", t: "Vederli: ps, top" },
      { id: "s8-3", n: "8.3", t: "Terminarli: kill" },
      { id: "s8-4", n: "8.4", t: "Primo piano e background" },
      { id: "s8-5", n: "8.5", t: "Laboratorio: gestire i processi" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "Pipe e redirezione",
    file: "cap09-pipe-redirezione.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Input, output, errore" },
      { id: "s9-2", n: "9.2", t: "Redirigere su file: >, >>" },
      { id: "s9-3", n: "9.3", t: "La pipe: |" },
      { id: "s9-4", n: "9.4", t: "I filtri: wc, sort, uniq" },
      { id: "s9-5", n: "9.5", t: "Laboratorio: costruire catene" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Editor di testo",
    file: "cap10-editor.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Perché serve un editor da terminale" },
      { id: "s10-2", n: "10.2", t: "nano: semplice e pratico" },
      { id: "s10-3", n: "10.3", t: "vim: cenni e sopravvivenza" },
      { id: "s10-4", n: "10.4", t: "Quale usare quando" },
      { id: "s10-5", n: "10.5", t: "Laboratorio: modificare un file" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "Installare software",
    file: "cap11-pacchetti.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "I gestori di pacchetti" },
      { id: "s11-2", n: "11.2", t: "apt (Debian/Ubuntu)" },
      { id: "s11-3", n: "11.3", t: "Altri gestori: dnf, pacman" },
      { id: "s11-4", n: "11.4", t: "Aggiornare il sistema" },
      { id: "s11-5", n: "11.5", t: "Laboratorio: installare un programma" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Bash scripting: le basi",
    file: "cap12-bash-basi.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Cos'è uno script" },
      { id: "s12-2", n: "12.2", t: "Lo shebang e l'esecuzione" },
      { id: "s12-3", n: "12.3", t: "Variabili ed echo" },
      { id: "s12-4", n: "12.4", t: "Leggere input e argomenti" },
      { id: "s12-5", n: "12.5", t: "Laboratorio: il primo script" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Bash scripting: logica",
    file: "cap13-bash-logica.html",
    stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Condizioni: if, test" },
      { id: "s13-2", n: "13.2", t: "Cicli: for" },
      { id: "s13-3", n: "13.3", t: "Cicli: while" },
      { id: "s13-4", n: "13.4", t: "Mettere insieme la logica" },
      { id: "s13-5", n: "13.5", t: "Laboratorio: uno script utile" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Automazione e ambiente",
    file: "cap14-automazione.html",
    stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Variabili d'ambiente e PATH" },
      { id: "s14-2", n: "14.2", t: "Alias e .bashrc" },
      { id: "s14-3", n: "14.3", t: "Pianificare con cron" },
      { id: "s14-4", n: "14.4", t: "Rendere gli script comodi" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: automatizzare un compito" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Sistema e rete da terminale",
    file: "cap15-sistema-rete.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Spazio su disco: df, du" },
      { id: "s15-2", n: "15.2", t: "Rete: ip, ping, curl" },
      { id: "s15-3", n: "15.3", t: "Accesso remoto: ssh" },
      { id: "s15-4", n: "15.4", t: "Servizi: systemctl (cenni)" },
      { id: "s15-5", n: "15.5", t: "Laboratorio: ispezionare il sistema" },
      { id: "s15-6", n: "15.6", t: "Esercizi" },
      { id: "s15-7", n: "15.7", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Un progetto completo",
    file: "cap16-progetto-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "L'idea: uno script di backup" },
      { id: "s16-2", n: "16.2", t: "Costruire lo script pezzo per pezzo" },
      { id: "s16-3", n: "16.3", t: "Renderlo robusto" },
      { id: "s16-4", n: "16.4", t: "Automatizzarlo con cron" },
      { id: "s16-5", n: "16.5", t: "Laboratorio: il backup automatico" },
      { id: "s16-6", n: "16.6", t: "Dove andare da qui" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  }
];
