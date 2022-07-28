
import express from 'express';
import pgp from "pg-promise";
import Board from './entity/Board';
import Card from './entity/Card';
import Column from './entity/Column';
import BoardService from './services/BoardService';

// App Express
const app = express()
const connection = pgp()("postgres://postgres:123456@localhost:5432/app");

//EX: ACOPLADO AO BANCO DE DADOS. Repare de que retorno sera um array com o que vem do banco. Se o nome de alguma coluna for alterada no banco, o teste será quebrado. Pois sera retornado um novo nome de coluna 
// app.get("/boards", async function (req, res) {
//     const boards = await connection.query("select name from branas.board"); 
//     res.json(boards);
// });

app.get("/boards", async function (req, res) {
    const boardService = new BoardService();
    const boards = await boardService.getBoards();
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async function (req, res) {
    const columnsData = await connection.query("select name, has_estimative from branas.column where id_board = $1", [req.params.idBoard]);
    const columns: Column[] = [];
    for(const columnData of columnsData) {
        columns.push(new Column(columnData.name, columnData.has_estimative));
    }
    res.json(columns);
});
app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
    const cardsData = await connection.query("select title, estimative from branas.card where id_column = $1", [req.params.idColumn]);
    const cards: Card[] = [];
    for(const cardData of cardsData) {
        cards.push(new Card(cardData.title, cardData.estimative));
    }
    res.json(cards);
});
// Inicia o sevidor
app.listen(3000);

