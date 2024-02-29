// Variabili per il gioco
// Array per i numeri delle cacche
let poop = []; 
 // Punteggio del giocatore
let score = 0;


// Event per la creazione della griglia
document.getElementById('generate').addEventListener('click', function () {
  // Otteniamo il valore del livello di difficoltà selezionato
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

 // COn gli if e else creiamo la griglia di gioco in base alla difficolta'
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

 console.log("Dimensioni griglia:", rows, "x", cols);
 console.log("Numero di poops:", numPoop);

 createGrid(rows, cols, numPoop);
});

// Function per creare la griglia di gioco 10x10
function createGrid(rows, cols, numPoop) {
  //variabile per selezionare l'id presente nell html
  const container = document.getElementById('grid');
  // rimuove il contenuto precedente
  container.innerHTML = ''; 
  // Azzera l'array dei funghi
  poop = []; 

  console.log("Creazione griglia di gioco...");

  // Codice per generare casualmente le cacche nella griglia
  while (poop.length < numPoop) {
    const newPoop = Math.floor(Math.random() * (rows * cols)) + 1;
    if (!poop.includes(newPoop)) {
      poop.push(newPoop);
    }
  }

  console.log("Poops generati:", poop);

  //Crea la griglia di gioco
  for (let i = 1; i <= rows; i++) {
    for (let x = 1; x <= cols; x++) {
      const cellNumber = (i - 1) * cols + x;
      const cell = document.createElement('div');
      cell.textContent = cellNumber;
      cell.classList.add('box');

      // Aggiunge una cacca nel caso in cui nella casella viene generato
      if (poop.includes(cellNumber)) {
        cell.innerHTML = '<i class="fa-solid fa-poo"></i>';
      } else {
        cell.textContent = cellNumber;
      }


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


