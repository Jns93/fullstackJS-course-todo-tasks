
import express from 'express';
import PgPromiseConnection from './infra/database/PgPromiseConnection';
import BoardRepositoryDatabase from './infra/repository/BoardRepositoryDatabase';
import BoardService from './services/BoardService';
import CardService from './services/CardService';
import ColumnService from './services/ColumnService';

// App Express
const app = express();

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);

app.get("/boards", async function (req, res) {
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async function (req, res) {
    const columnService = new ColumnService();
    const columns = await columnService.getColumns(parseInt(req.params.idBoard));
    res.json(columns);
});
app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
    const cardService = new CardService();
    const cards = await cardService.getCards(parseInt(req.params.idColumn));
    res.json(cards);
});
// Inicia o sevidor
app.listen(3000);

