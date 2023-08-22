export function checkWin(board, currentPlayer, clickedBox) {
    const row = Math.floor(clickedBox / 3); // Calcula la fila del cuadro clickeado
    const col = clickedBox % 3; // Calcula la columna del cuadro clickeado
  
    // Verificar fila
    if (
      board[row * 3].value === currentPlayer && // Comprueba la primera casilla de la fila
      board[row * 3 + 1].value === currentPlayer && // Comprueba la segunda casilla de la fila
      board[row * 3 + 2].value === currentPlayer // Comprueba la tercera casilla de la fila
    ) {
      return true; // Si hay una fila completa del jugador actual, retorna true
    }
  
    // Verificar columna
    if (
      board[col].value === currentPlayer && // Comprueba la primera casilla de la columna
      board[col + 3].value === currentPlayer && // Comprueba la segunda casilla de la columna
      board[col + 6].value === currentPlayer // Comprueba la tercera casilla de la columna
    ) {
      return true; // Si hay una columna completa del jugador actual, retorna true
    }
  
    // Verificar diagonales
    if (
      (board[0].value === currentPlayer && // Comprueba la primera casilla de la diagonal principal
        board[4].value === currentPlayer && // Comprueba la casilla del centro
        board[8].value === currentPlayer) || // Comprueba la última casilla de la diagonal principal
      (board[2].value === currentPlayer && // Comprueba la primera casilla de la diagonal secundaria
        board[4].value === currentPlayer && // Comprueba la casilla del centro
        board[6].value === currentPlayer) // Comprueba la última casilla de la diagonal secundaria
    ) {
      return true; // Si hay una diagonal completa del jugador actual, retorna true
    }
  
    return false; // Si no hay ninguna combinación ganadora, retorna false
} 

export const saveDataToLocalStorage =  (stateBoard,turn,finish) => {
            const dataToSave = {
                stateBoard,
                turn,
                finish
            }
            localStorage.setItem('myData', JSON.stringify(dataToSave))
} 

export  const loadDataFromLocalStorage = () => {
    const data = localStorage.getItem('myData');
    return data ? JSON.parse(data) : null;
}; 



export const freeSquare = (stateBoard) =>{
  const findIndex = stateBoard.findIndex((square)=>square.value === null )
  return findIndex !== -1   ? true : false;
}
