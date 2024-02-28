
// Creazione della griglia di gioco 10x10
createGrid(10, 10);
// Function per creare la griglia di gioco 10x10
function createGrid(rows, cols) {
    //variabile per selezionare l'id presente nell html
    const container = document.getElementById('grid');
    //variabile per calcolare il numero di cell
    const totalCells = rows * cols
    //ciclo for per calcolo delle celle
    for( let i = 0 ; i < totalCells ; i++){
      // Creazione dell'elemento div per la cella
      const cell = document.createElement('div');
      // Aggiunta della classe "cell" per lo stile
      cell.classList.add('box');
      // Aggiunta della cella al contenitore della griglia
      container.appendChild(cell);  

      cell.addEventListener('click', cellClick);
    }
}

// Fuction per gestire i click sui box
function cellClick(event) {
    // Inseriamo un event per farci ridare dalla console una string che ci dice che la cella e cliccata
    event.target.classList.add('box-click');
    console.log("Cella cliccata:", event.target.textContent);
}

