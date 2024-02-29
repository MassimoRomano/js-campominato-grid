
// Creazione della griglia di gioco 10x10
document.getElementById('generate').addEventListener('click', function () {
  // Otteniamo il valore del livello di difficoltà selezionato
  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  if (difficulty === "easy") {
    createGrid(10, 10);
  } else if (difficulty === "medium") {
    createGrid(9, 9);
  } else if (difficulty === "hard") {
    createGrid(7, 7);
  }
  console.log("Griglia creata correttamente");
  console.log("Eventi aggiunti correttamente");
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


