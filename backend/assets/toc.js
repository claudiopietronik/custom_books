/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Backend Development).
   Libro della collana di informatica: come si costruisce la "metà nascosta" del
   web — server, API, database, autenticazione, storage, container, deploy.
   Dal primo endpoint FastAPI fino all'app completa online dietro nginx e HTTPS.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Backend Development", glyph: "⚙", tema: "be-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Cos'è il backend",
    file: "cap01-cos-e-il-backend.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Front-end e back-end" },
      { id: "s1-2", n: "1.2", t: "Il modello client-server" },
      { id: "s1-3", n: "1.3", t: "Cosa fa davvero un server" },
      { id: "s1-4", n: "1.4", t: "Gli attori: web server, app, database" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: il tuo primo server" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "HTTP e le API REST",
    file: "cap02-http-api-rest.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Richiesta e risposta HTTP" },
      { id: "s2-2", n: "2.2", t: "I metodi: GET, POST, PUT, DELETE" },
      { id: "s2-3", n: "2.3", t: "I codici di stato" },
      { id: "s2-4", n: "2.4", t: "Cos'è un'API REST" },
      { id: "s2-5", n: "2.5", t: "JSON: il formato dei dati" },
      { id: "s2-6", n: "2.6", t: "Laboratorio: esplorare un'API con curl" },
      { id: "s2-7", n: "2.7", t: "Esercizi" },
      { id: "s2-8", n: "2.8", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Preparare l'ambiente Python",
    file: "cap03-ambiente-python.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Perché un ambiente isolato" },
      { id: "s3-2", n: "3.2", t: "Gli ambienti virtuali (venv)" },
      { id: "s3-3", n: "3.3", t: "pip e i pacchetti" },
      { id: "s3-4", n: "3.4", t: "requirements.txt" },
      { id: "s3-5", n: "3.5", t: "Laboratorio: l'ambiente del progetto" },
      { id: "s3-6", n: "3.6", t: "Esercizi" },
      { id: "s3-7", n: "3.7", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Il primo server con FastAPI",
    file: "cap04-primo-fastapi.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "Cos'è FastAPI" },
      { id: "s4-2", n: "4.2", t: "Installare FastAPI e uvicorn" },
      { id: "s4-3", n: "4.3", t: "Il primo endpoint" },
      { id: "s4-4", n: "4.4", t: "uvicorn: avviare il server" },
      { id: "s4-5", n: "4.5", t: "La documentazione automatica" },
      { id: "s4-6", n: "4.6", t: "Laboratorio: hello API" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Rotte e parametri",
    file: "cap05-rotte-parametri.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "Le path operation" },
      { id: "s5-2", n: "5.2", t: "Parametri di percorso" },
      { id: "s5-3", n: "5.3", t: "Parametri di query" },
      { id: "s5-4", n: "5.4", t: "Tipi e validazione automatica" },
      { id: "s5-5", n: "5.5", t: "Laboratorio: un'API con parametri" },
      { id: "s5-6", n: "5.6", t: "Esercizi" },
      { id: "s5-7", n: "5.7", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "Ricevere dati: Pydantic",
    file: "cap06-pydantic.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Il corpo della richiesta" },
      { id: "s6-2", n: "6.2", t: "I modelli Pydantic" },
      { id: "s6-3", n: "6.3", t: "Validazione dei dati" },
      { id: "s6-4", n: "6.4", t: "Risposte strutturate" },
      { id: "s6-5", n: "6.5", t: "Laboratorio: ricevere e validare" },
      { id: "s6-6", n: "6.6", t: "Esercizi" },
      { id: "s6-7", n: "6.7", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Un'API CRUD completa",
    file: "cap07-crud.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Cosa significa CRUD" },
      { id: "s7-2", n: "7.2", t: "Progettare le risorse" },
      { id: "s7-3", n: "7.3", t: "GET/POST/PUT/DELETE in pratica" },
      { id: "s7-4", n: "7.4", t: "Gestire gli errori" },
      { id: "s7-5", n: "7.5", t: "Laboratorio: l'API di una rubrica" },
      { id: "s7-6", n: "7.6", t: "Esercizi" },
      { id: "s7-7", n: "7.7", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "I database relazionali",
    file: "cap08-database-relazionali.html",
    stato: "pronto",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Perché un database" },
      { id: "s8-2", n: "8.2", t: "Tabelle, righe, colonne" },
      { id: "s8-3", n: "8.3", t: "Chiavi primarie e tipi" },
      { id: "s8-4", n: "8.4", t: "Il linguaggio SQL" },
      { id: "s8-5", n: "8.5", t: "Laboratorio: SQL con SQLite" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "PostgreSQL e MySQL",
    file: "cap09-postgres-mysql.html",
    stato: "pronto",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "I database di produzione" },
      { id: "s9-2", n: "9.2", t: "PostgreSQL: installazione e uso" },
      { id: "s9-3", n: "9.3", t: "MySQL/MariaDB: differenze" },
      { id: "s9-4", n: "9.4", t: "Connettersi e creare un database" },
      { id: "s9-5", n: "9.5", t: "Laboratorio: un database Postgres" },
      { id: "s9-6", n: "9.6", t: "Esercizi" },
      { id: "s9-7", n: "9.7", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "SQLAlchemy: l'ORM",
    file: "cap10-sqlalchemy.html",
    stato: "pronto",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Cos'è un ORM" },
      { id: "s10-2", n: "10.2", t: "Engine e connessione" },
      { id: "s10-3", n: "10.3", t: "I modelli: classi = tabelle" },
      { id: "s10-4", n: "10.4", t: "La sessione" },
      { id: "s10-5", n: "10.5", t: "Laboratorio: primo modello e query" },
      { id: "s10-6", n: "10.6", t: "Esercizi" },
      { id: "s10-7", n: "10.7", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "FastAPI + database",
    file: "cap11-fastapi-database.html",
    stato: "pronto",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Mettere insieme i pezzi" },
      { id: "s11-2", n: "11.2", t: "La dependency injection" },
      { id: "s11-3", n: "11.3", t: "CRUD sul database reale" },
      { id: "s11-4", n: "11.4", t: "Schemi Pydantic vs modelli ORM" },
      { id: "s11-5", n: "11.5", t: "Laboratorio: rubrica persistente" },
      { id: "s11-6", n: "11.6", t: "Esercizi" },
      { id: "s11-7", n: "11.7", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "Relazioni tra tabelle",
    file: "cap12-relazioni.html",
    stato: "pronto",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Uno-a-molti" },
      { id: "s12-2", n: "12.2", t: "Le chiavi esterne" },
      { id: "s12-3", n: "12.3", t: "relationship in SQLAlchemy" },
      { id: "s12-4", n: "12.4", t: "Molti-a-molti (cenni)" },
      { id: "s12-5", n: "12.5", t: "Laboratorio: utenti e post" },
      { id: "s12-6", n: "12.6", t: "Esercizi" },
      { id: "s12-7", n: "12.7", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Autenticazione e sicurezza",
    file: "cap13-autenticazione.html",
    stato: "pronto",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Il problema dell'identità" },
      { id: "s13-2", n: "13.2", t: "Password: mai in chiaro" },
      { id: "s13-3", n: "13.3", t: "Token e JWT" },
      { id: "s13-4", n: "13.4", t: "OAuth2 in FastAPI" },
      { id: "s13-5", n: "13.5", t: "Proteggere le rotte" },
      { id: "s13-6", n: "13.6", t: "Laboratorio: login con token" },
      { id: "s13-7", n: "13.7", t: "Esercizi" },
      { id: "s13-8", n: "13.8", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "File e storage con MinIO",
    file: "cap14-minio-storage.html",
    stato: "pronto",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Perché non i file nel database" },
      { id: "s14-2", n: "14.2", t: "L'object storage (S3)" },
      { id: "s14-3", n: "14.3", t: "MinIO: S3 in casa" },
      { id: "s14-4", n: "14.4", t: "Caricare e scaricare file" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: upload di un'immagine" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "Docker: impacchettare l'app",
    file: "cap15-docker.html",
    stato: "pronto",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Il problema «sul mio PC funziona»" },
      { id: "s15-2", n: "15.2", t: "Immagini e container" },
      { id: "s15-3", n: "15.3", t: "Il Dockerfile" },
      { id: "s15-4", n: "15.4", t: "Costruire ed eseguire" },
      { id: "s15-5", n: "15.5", t: "Laboratorio: l'app in un container" },
      { id: "s15-6", n: "15.6", t: "Esercizi" },
      { id: "s15-7", n: "15.7", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Docker Compose",
    file: "cap16-docker-compose.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Più servizi insieme" },
      { id: "s16-2", n: "16.2", t: "Il file docker-compose.yml" },
      { id: "s16-3", n: "16.3", t: "Reti e volumi" },
      { id: "s16-4", n: "16.4", t: "App + database + MinIO" },
      { id: "s16-5", n: "16.5", t: "Laboratorio: lo stack completo" },
      { id: "s16-6", n: "16.6", t: "Esercizi" },
      { id: "s16-7", n: "16.7", t: "Soluzioni" }
    ]
  },
  {
    n: 17,
    titolo: "nginx: reverse proxy e HTTPS",
    file: "cap17-nginx-https.html",
    stato: "da-fare",
    sezioni: [
      { id: "s17-1", n: "17.1", t: "Cos'è un reverse proxy" },
      { id: "s17-2", n: "17.2", t: "nginx davanti a FastAPI" },
      { id: "s17-3", n: "17.3", t: "Servire file statici" },
      { id: "s17-4", n: "17.4", t: "HTTPS con Let's Encrypt" },
      { id: "s17-5", n: "17.5", t: "Laboratorio: nginx + certificato" },
      { id: "s17-6", n: "17.6", t: "Esercizi" },
      { id: "s17-7", n: "17.7", t: "Soluzioni" }
    ]
  },
  {
    n: 18,
    titolo: "Andare in produzione",
    file: "cap18-produzione.html",
    stato: "da-fare",
    sezioni: [
      { id: "s18-1", n: "18.1", t: "Un server vero (VPS)" },
      { id: "s18-2", n: "18.2", t: "Accesso e sicurezza di base" },
      { id: "s18-3", n: "18.3", t: "Worker e systemd" },
      { id: "s18-4", n: "18.4", t: "Dominio, DNS e messa online" },
      { id: "s18-5", n: "18.5", t: "Manutenzione: log, backup, update" },
      { id: "s18-6", n: "18.6", t: "Laboratorio: il deploy completo" },
      { id: "s18-7", n: "18.7", t: "Esercizi" },
      { id: "s18-8", n: "18.8", t: "Soluzioni" }
    ]
  }
];
