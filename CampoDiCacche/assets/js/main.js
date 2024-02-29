// Variabili per il gioco
// Array per i numeri delle cacche
let poop = []; 
 // Punteggio del giocatore
let score = 0;


// Creazione della griglia di gioco 10x10
document.getElementById('generate').addEventListener('click', function () {
  // Otteniamo il valore del livello di difficoltà selezionato
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

 // In base al livello di difficoltà selezionato, chiamiamo createGrid con le dimensioni appropriate
 let rows, cols, numPoop;
 if (difficulty === "easy") {
   rows = 10;
   cols = 10;
   numPoop = 16;
 } else if (difficulty === "medium") {
   rows = 9;
   cols = 9;
   numPoop = 16;
 } else if (difficulty === "hard") {
   rows = 7;
   cols = 7;
   numPoop = 16;
 }

 createGrid(rows, cols, numPoop);
});

// Function per creare la griglia di gioco 10x10
function createGrid(rows, cols) {
  //variabile per selezionare l'id presente nell html
  const container = document.getElementById('grid');
  //ciclo for per il calcolo delle righe
  for (let i = 1; i <= rows; i++) {
    // Ciclo for per calcolo delle colonne
    for (let x = 1; x <= cols; x++) {
      const cellNumber = (i - 1) * cols + x;
      // Creazione dell'elemento div per la cella
      const cell = document.createElement('div');
      cell.textContent = cellNumber;
      // Aggiunta della classe "cell" per lo stile
      cell.classList.add('box');
      // Aggiunta della cella al contenitore della griglia
      container.appendChild(cell);

      cell.addEventListener('click', cellClick);
    }
  }
}

// Fuction per gestire i click sui box
function cellClick(event) {
  // Inseriamo un event per farci ridare dalla console una string che ci dice che la cella e cliccata
  event.target.classList.add('box-click');
  console.log("Cella cliccata:", event.target.textContent);
}


