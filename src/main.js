import Board from "./Board.js";
import Column from "./Column.js";

const board = new Board('Tarefas');

board.addColumn("To do");
board.addColumn("In progress");
board.addColumn("Done", true);
console.log(board);

board.columns[2].addCard("Estudar JavaScript", 10);
board.columns[2].addCard("Estudar Node", 15);
console.log(board.columns[2]);

console.log('tempo total', board.columns[2].estimativeTime);