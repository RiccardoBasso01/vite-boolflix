# Descrizione

Creare un sito web per la visualizzazione di film e serie tv
Per fare questo, come fanno siti molto più rinomati, si utilizza un API che ci
permette di avere un insieme di risultati congrui alla nostra ricerca.

> Chiave API_KEY **c9010d9998307ed28e3fd7d0c8d75997**

Questa chiave verrà utilizzata in tutte le nostre chiamate. A questo url **https://developers.themoviedb.org/3** troveremo tutte le chiamate
possibili all’API. Per prima cosa si utilizzerà Search > Movies.
Con questa chiamata possiamo cercare tutti i film associati ad una ricerca.

> Esempio chiamata:
> https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro

---

## Milestone 0:

Progettare la struttura del global state.

## Milestone 1:

Creare un layout base con una searchbar in cui è possibile scrivere completamente o parzialmente il nome di un film. Cliccando il
bottone si può cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.

Per ogni film trovato visualizzare:

1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

## Milestone 2:

Trasformare la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente.
Allargare poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv.

> Esempio di chiamata per le serie tv:
> https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

## Milestone 3:

Aggiungere la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi si potrà generare da quella porzione di URL tante dimensioni diverse.
Si dovrà prendere quindi l’URL base delle immagini di TMDB:
**https://image.tmdb.org/t/p/** per poi aggiungere la dimensione che vogliamo generare.

> Troviamo tutte le dimensioni possibili a questo link:
> https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400

> Esempio di URL:
> https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

Trasformare poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
poter stampare a schermo un numero di stelle piene che vanno da 1 a 5 arrotondando per eccesso.

## Milestone 4:

Creare un layout completo simil-Netflix:

> Lista delle lingue: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## Milestone 5 (Opzionale):

Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie solo i primi 5 restituiti dall’API con Nome e Cognome, e i generi associati al film con questo schema: “Genere 1, Genere 2, …”.

## Milestone 6 (Opzionale):

Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.
