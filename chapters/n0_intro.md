# NORMALIZZAZIONE E OUTLIER

> *Corso: Master Statistics & Machine Learning — Mike X Cohen*  
> Parte II — corrisponde alla Sezione 7 del corso.

Questa parte è tutta **preparazione dei dati**: prima li portiamo su scale confrontabili (**normalizzazione**), poi individuiamo e gestiamo i valori anomali (**outlier**). È il ponte tra "descrivere i dati" e "modellare i dati".

Il principio guida è **GIGO: Garbage In, Garbage Out**. Nessun modello, per quanto sofisticato, produce buoni risultati da dati sporchi o mal scalati. La qualità dell'output non può superare la qualità dell'input.

> 🎯 **Perché normalizzare?** Quando le variabili hanno **scale diverse** (es. età 20–70 e reddito 20.000–200.000), gli algoritmi basati su distanze o pesi vengono dominati dalla variabile coi numeri più grandi, non da quella più importante. Normalizzare le mette tutte sullo stesso piano.
