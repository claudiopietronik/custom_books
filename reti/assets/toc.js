/* ============================================================================
   toc.js — SORGENTE UNICA DI VERITÀ dell'indice del libro (Reti e Internet).
   Primo libro della collana di informatica: come funziona internet, dal filo
   fisico al click che carica una pagina.
   Aggiungere un capitolo = aggiungere una voce a questo array, nient'altro.
   `stato`: 'pronto' | 'in-lavorazione' | 'da-fare'
   ========================================================================= */

const BOOK = { titolo: "Reti e Internet", glyph: "⇄", tema: "net-theme" };

const TOC = [
  {
    n: 1,
    titolo: "Cos'è una rete",
    file: "cap01-cos-e-una-rete.html",
    stato: "pronto",
    sezioni: [
      { id: "s1-1", n: "1.1", t: "Computer che parlano tra loro" },
      { id: "s1-2", n: "1.2", t: "Client e server" },
      { id: "s1-3", n: "1.3", t: "La commutazione di pacchetto" },
      { id: "s1-4", n: "1.4", t: "Il viaggio di un click (panoramica)" },
      { id: "s1-5", n: "1.5", t: "Laboratorio: i primi comandi" },
      { id: "s1-6", n: "1.6", t: "Esercizi" },
      { id: "s1-7", n: "1.7", t: "Soluzioni" }
    ]
  },
  {
    n: 2,
    titolo: "Il modello a livelli",
    file: "cap02-modello-a-livelli.html",
    stato: "pronto",
    sezioni: [
      { id: "s2-1", n: "2.1", t: "Perché a strati" },
      { id: "s2-2", n: "2.2", t: "I livelli di internet (TCP/IP)" },
      { id: "s2-3", n: "2.3", t: "L'incapsulamento" },
      { id: "s2-4", n: "2.4", t: "Il modello OSI (e perché se ne parla)" },
      { id: "s2-5", n: "2.5", t: "Laboratorio: guardare i livelli" },
      { id: "s2-6", n: "2.6", t: "Esercizi" },
      { id: "s2-7", n: "2.7", t: "Soluzioni" }
    ]
  },
  {
    n: 3,
    titolo: "Il livello fisico",
    file: "cap03-livello-fisico.html",
    stato: "pronto",
    sezioni: [
      { id: "s3-1", n: "3.1", t: "Bit e segnali" },
      { id: "s3-2", n: "3.2", t: "Il rame: doppino e cavi Ethernet" },
      { id: "s3-3", n: "3.3", t: "La fibra ottica" },
      { id: "s3-4", n: "3.4", t: "Le onde radio" },
      { id: "s3-5", n: "3.5", t: "Banda e latenza" },
      { id: "s3-6", n: "3.6", t: "Laboratorio: misurare la tua linea" },
      { id: "s3-7", n: "3.7", t: "Esercizi" },
      { id: "s3-8", n: "3.8", t: "Soluzioni" }
    ]
  },
  {
    n: 4,
    titolo: "Ethernet e la LAN",
    file: "cap04-ethernet-lan.html",
    stato: "pronto",
    sezioni: [
      { id: "s4-1", n: "4.1", t: "La rete locale" },
      { id: "s4-2", n: "4.2", t: "L'indirizzo MAC" },
      { id: "s4-3", n: "4.3", t: "Il frame Ethernet" },
      { id: "s4-4", n: "4.4", t: "Lo switch" },
      { id: "s4-5", n: "4.5", t: "ARP: da IP a MAC" },
      { id: "s4-6", n: "4.6", t: "Laboratorio: esplorare la tua LAN" },
      { id: "s4-7", n: "4.7", t: "Esercizi" },
      { id: "s4-8", n: "4.8", t: "Soluzioni" }
    ]
  },
  {
    n: 5,
    titolo: "Il WiFi",
    file: "cap05-wifi.html",
    stato: "pronto",
    sezioni: [
      { id: "s5-1", n: "5.1", t: "La rete senza fili" },
      { id: "s5-2", n: "5.2", t: "Frequenze e canali (2.4 e 5 GHz)" },
      { id: "s5-3", n: "5.3", t: "SSID, access point e roaming" },
      { id: "s5-4", n: "5.4", t: "La sicurezza: da WEP a WPA3" },
      { id: "s5-5", n: "5.5", t: "Perché il WiFi rallenta" },
      { id: "s5-6", n: "5.6", t: "Laboratorio: analizzare il tuo WiFi" },
      { id: "s5-7", n: "5.7", t: "Esercizi" },
      { id: "s5-8", n: "5.8", t: "Soluzioni" }
    ]
  },
  {
    n: 6,
    titolo: "L'indirizzo IP",
    file: "cap06-indirizzo-ip.html",
    stato: "pronto",
    sezioni: [
      { id: "s6-1", n: "6.1", t: "Un indirizzo per ogni host" },
      { id: "s6-2", n: "6.2", t: "IPv4: i quattro numeri" },
      { id: "s6-3", n: "6.3", t: "Sottoreti e notazione CIDR" },
      { id: "s6-4", n: "6.4", t: "Indirizzi pubblici e privati" },
      { id: "s6-5", n: "6.5", t: "IPv6" },
      { id: "s6-6", n: "6.6", t: "Laboratorio: i tuoi indirizzi" },
      { id: "s6-7", n: "6.7", t: "Esercizi" },
      { id: "s6-8", n: "6.8", t: "Soluzioni" }
    ]
  },
  {
    n: 7,
    titolo: "Il routing",
    file: "cap07-routing.html",
    stato: "pronto",
    sezioni: [
      { id: "s7-1", n: "7.1", t: "Il problema: trovare la strada" },
      { id: "s7-2", n: "7.2", t: "Il router e la tabella di routing" },
      { id: "s7-3", n: "7.3", t: "Salto dopo salto (hop by hop)" },
      { id: "s7-4", n: "7.4", t: "TTL e traceroute" },
      { id: "s7-5", n: "7.5", t: "Internet tra provider: cenni di BGP" },
      { id: "s7-6", n: "7.6", t: "Laboratorio: tracciare i tuoi pacchetti" },
      { id: "s7-7", n: "7.7", t: "Esercizi" },
      { id: "s7-8", n: "7.8", t: "Soluzioni" }
    ]
  },
  {
    n: 8,
    titolo: "La rete di casa",
    file: "cap08-rete-di-casa.html",
    stato: "da-fare",
    sezioni: [
      { id: "s8-1", n: "8.1", t: "Il router domestico (tuttofare)" },
      { id: "s8-2", n: "8.2", t: "DHCP: indirizzi automatici" },
      { id: "s8-3", n: "8.3", t: "Il NAT" },
      { id: "s8-4", n: "8.4", t: "Port forwarding" },
      { id: "s8-5", n: "8.5", t: "Laboratorio: dentro il tuo router" },
      { id: "s8-6", n: "8.6", t: "Esercizi" },
      { id: "s8-7", n: "8.7", t: "Soluzioni" }
    ]
  },
  {
    n: 9,
    titolo: "UDP e TCP",
    file: "cap09-udp-tcp.html",
    stato: "da-fare",
    sezioni: [
      { id: "s9-1", n: "9.1", t: "Il livello di trasporto e le porte" },
      { id: "s9-2", n: "9.2", t: "UDP: veloce e spensierato" },
      { id: "s9-3", n: "9.3", t: "TCP: affidabile per contratto" },
      { id: "s9-4", n: "9.4", t: "L'handshake a tre vie" },
      { id: "s9-5", n: "9.5", t: "Controllo di flusso e congestione" },
      { id: "s9-6", n: "9.6", t: "Laboratorio: connessioni e porte aperte" },
      { id: "s9-7", n: "9.7", t: "Esercizi" },
      { id: "s9-8", n: "9.8", t: "Soluzioni" }
    ]
  },
  {
    n: 10,
    titolo: "Il DNS",
    file: "cap10-dns.html",
    stato: "da-fare",
    sezioni: [
      { id: "s10-1", n: "10.1", t: "Dai nomi agli indirizzi" },
      { id: "s10-2", n: "10.2", t: "La gerarchia: root, TLD, autoritativi" },
      { id: "s10-3", n: "10.3", t: "La risoluzione, passo per passo" },
      { id: "s10-4", n: "10.4", t: "I record: A, AAAA, CNAME, MX…" },
      { id: "s10-5", n: "10.5", t: "Cache e TTL" },
      { id: "s10-6", n: "10.6", t: "Laboratorio: interrogare il DNS" },
      { id: "s10-7", n: "10.7", t: "Esercizi" },
      { id: "s10-8", n: "10.8", t: "Soluzioni" }
    ]
  },
  {
    n: 11,
    titolo: "HTTP",
    file: "cap11-http.html",
    stato: "da-fare",
    sezioni: [
      { id: "s11-1", n: "11.1", t: "Il protocollo del web" },
      { id: "s11-2", n: "11.2", t: "Anatomia di una richiesta" },
      { id: "s11-3", n: "11.3", t: "Anatomia di una risposta (status code)" },
      { id: "s11-4", n: "11.4", t: "I metodi: GET, POST e gli altri" },
      { id: "s11-5", n: "11.5", t: "Header e cookie" },
      { id: "s11-6", n: "11.6", t: "Laboratorio: parlare HTTP con curl" },
      { id: "s11-7", n: "11.7", t: "Esercizi" },
      { id: "s11-8", n: "11.8", t: "Soluzioni" }
    ]
  },
  {
    n: 12,
    titolo: "HTTPS e TLS",
    file: "cap12-https-tls.html",
    stato: "da-fare",
    sezioni: [
      { id: "s12-1", n: "12.1", t: "Perché serve cifrare" },
      { id: "s12-2", n: "12.2", t: "Crittografia simmetrica e asimmetrica" },
      { id: "s12-3", n: "12.3", t: "I certificati e le autorità" },
      { id: "s12-4", n: "12.4", t: "L'handshake TLS" },
      { id: "s12-5", n: "12.5", t: "Il lucchetto nel browser" },
      { id: "s12-6", n: "12.6", t: "Laboratorio: ispezionare un certificato" },
      { id: "s12-7", n: "12.7", t: "Esercizi" },
      { id: "s12-8", n: "12.8", t: "Soluzioni" }
    ]
  },
  {
    n: 13,
    titolo: "Il web veloce",
    file: "cap13-web-veloce.html",
    stato: "da-fare",
    sezioni: [
      { id: "s13-1", n: "13.1", t: "Dove si perde tempo" },
      { id: "s13-2", n: "13.2", t: "La cache (browser e server)" },
      { id: "s13-3", n: "13.3", t: "Le CDN" },
      { id: "s13-4", n: "13.4", t: "HTTP/2 e HTTP/3 (QUIC)" },
      { id: "s13-5", n: "13.5", t: "Laboratorio: misurare i tempi di una pagina" },
      { id: "s13-6", n: "13.6", t: "Esercizi" },
      { id: "s13-7", n: "13.7", t: "Soluzioni" }
    ]
  },
  {
    n: 14,
    titolo: "Email e altri protocolli",
    file: "cap14-email-altri-protocolli.html",
    stato: "da-fare",
    sezioni: [
      { id: "s14-1", n: "14.1", t: "Come viaggia una email (SMTP)" },
      { id: "s14-2", n: "14.2", t: "Leggere la posta: IMAP e POP" },
      { id: "s14-3", n: "14.3", t: "Spam e autenticazione (SPF, DKIM)" },
      { id: "s14-4", n: "14.4", t: "SSH: il terminale remoto" },
      { id: "s14-5", n: "14.5", t: "Laboratorio: gli header di una email vera" },
      { id: "s14-6", n: "14.6", t: "Esercizi" },
      { id: "s14-7", n: "14.7", t: "Soluzioni" }
    ]
  },
  {
    n: 15,
    titolo: "La sicurezza in rete",
    file: "cap15-sicurezza.html",
    stato: "da-fare",
    sezioni: [
      { id: "s15-1", n: "15.1", t: "Di chi (non) fidarsi" },
      { id: "s15-2", n: "15.2", t: "Gli attacchi comuni" },
      { id: "s15-3", n: "15.3", t: "Il firewall" },
      { id: "s15-4", n: "15.4", t: "La VPN" },
      { id: "s15-5", n: "15.5", t: "Buone pratiche personali" },
      { id: "s15-6", n: "15.6", t: "Laboratorio: il tuo firewall" },
      { id: "s15-7", n: "15.7", t: "Esercizi" },
      { id: "s15-8", n: "15.8", t: "Soluzioni" }
    ]
  },
  {
    n: 16,
    titolo: "Il viaggio completo di un click",
    file: "cap16-viaggio-completo.html",
    stato: "da-fare",
    sezioni: [
      { id: "s16-1", n: "16.1", t: "Cosa succede quando premi Invio?" },
      { id: "s16-2", n: "16.2", t: "Dal browser al primo pacchetto" },
      { id: "s16-3", n: "16.3", t: "Attraverso internet" },
      { id: "s16-4", n: "16.4", t: "Il server risponde, la pagina nasce" },
      { id: "s16-5", n: "16.5", t: "Tutto insieme: la cronologia dei millisecondi" },
      { id: "s16-6", n: "16.6", t: "Dove andare da qui" },
      { id: "s16-7", n: "16.7", t: "Esercizi" },
      { id: "s16-8", n: "16.8", t: "Soluzioni" }
    ]
  }
];
