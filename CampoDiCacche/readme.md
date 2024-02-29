
<!-- ### Creazione della Griglia

Step 1. **Creiamo la griglia** 
  - Creiamo la funzione gridCreate per formare le righe e le collone del nostro   campo fiorito.
        - aggiungiamo una variabile per il container e andiamo a recuperare l'id del div  

<!-- Step 2. **Creiamo le celle**
  - Utilizziamo una variabile per creare le celle 10x10
    - creiamo un ciclo for per fare  il calcolo
        - creaiamo i div per le celle
            - aggiungiamo un add per dargli la classe cell
                - aggiungiamo i div con classe cell al padre grid
                    - aggiungiamo un event click per gestire il click sulle celle -->


Step 2. **Creiamo le celle**
  - Creo il primo ciclo for per le righe numerate
    - ora creo il secondo ciclo for per le colonne numerate
       - creaiamo i div per le celle
            - aggiungiamo un add per dargli la classe cell
                - aggiungiamo i div con classe cell al padre grid
                    - aggiungiamo un event click per gestire il click sulle celle 


Step 3. **Creiamo il cambio colore con il click**
  - aggiungiamo la fuzione per gestire il click sulle celle in console
    - aggiungiamo un cosole.log per visualizzare il click



Fix
Ho inserito un secondo ciclo for e ho modificato il primo per creare sia le colonne
che le righe numerate 
 -->


 Step 1. **Creiamo le variabili per le cacche**
   - creo un array per le cacche
       - creo una varibile per il punteggio  

Step 2. **Modifico gli if and else**
  - inserisco negli if and else il numero di colonne righe e poop da creare per ogni partita 

Step 4. **Genero numeri casuali per le poop**
  - aggiungo un ciclo while per generare cacche in modo random

Step 5. **Genera una funziona per i click sulle celle**
  - if se clicchi sulla casella sbagliata il gioco mi da una cacca
    - else se clicchi sulla casella giusta il gioco aumenta il punteggio 


Step 6. **Genero una funzione per i click**
  - creo una variabile per i numeri cliccati
   - aggungo un if and else per generare la funzione di fine gioco in caso l'utente trova una cacca 
    - if nel caso in cui il giocatore clicca su un numero dove e generata una cacca il gioco finisce
      - else nel caso clicca su un numero senza cacche il gioco continua e aumenta lo score

