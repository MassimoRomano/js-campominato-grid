// Variabili per il gioco
let poop = []; // Array per i numeri delle cacche
let score = 0; // Punteggio del giocatore

// Aggiungiamo l'evento al pulsante di generazione della griglia
document.getElementById('generate').addEventListener('click', function () {
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  console.log("Livello di difficoltà selezionato:", difficulty);
  
  // In base al livello di difficoltà selezionato, chiamiamo createGrid con le dimensioni appropriate
  let rows, cols, numPoops;
  if (difficulty === "easy") {
    rows = 10;
    cols = 10;
    numPoops = 16;
  } else if (difficulty === "medium") {
    rows = 9;
    cols = 9;
    numPoops = 16;
  } else if (difficulty === "hard") {
    rows = 7;
    cols = 7;
    numPoops = 16;
  }
  console.log("Creazione griglia con dimensioni:", rows, "x", cols, "e", numPoops, "cacche.");

  createGrid(rows, cols, numPoops);
});

// Funzione per creare la griglia di gioco
function createGrid(rows, cols, numPoops) {
  const container = document.getElementById('grid');
  container.innerHTML = ''; // Pulisce il contenuto precedente
  poop = []; // Azzera l'array dei funghi

  console.log("Creazione griglia di gioco...");

  // Crea la griglia di gioco
  for (let i = 1; i <= rows; i++) {
    for (let x = 1; x <= cols; x++) {
      const cellNumber = (i - 1) * cols + x;
      const cell = document.createElement('div');
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

  // Codice per generare casualmente le cacche nella griglia
  while (poop.length < numPoops) {
    const newPoop = Math.floor(Math.random() * (rows * cols)) + 1;
    if (!poop.includes(newPoop)) {
      poop.push(newPoop);
    }
  }

  console.log("Poops generati:", poop);
}

// Funzione per gestire i click sui box
function cellClick(event) {
  const clickedNumber = parseInt(event.target.textContent);
  if (poop.includes(clickedNumber)) {
    // Se il numero è presente nella lista dei poops, il gioco termina
    event.target.classList.add('box-poop');
    endGame();
  } else {
    // Altrimenti, il giocatore ha cliccato su una cella sicura
    event.target.classList.add('box-safe');
    score++; // Aumenta il punteggio del giocatore
    // Verifica se il giocatore ha completato il gioco
    if (score === (event.currentTarget.childElementCount - poop.length)) {
      endGame();
    }
  }
}