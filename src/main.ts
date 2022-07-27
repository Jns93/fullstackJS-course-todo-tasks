
import express from 'express';
import pgp from "pg-promise";

// App Express
const app = express()
const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
app.get("/boards", async function (req, res) {
    const boards = await connection.query("select * from branas.board");
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async function (req, res) {
    const columns = await connection.query("select * from branas.column where id_board = $1", [req.params.idBoard]);
    res.json(columns);
});
app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
    const cards = await connection.query("select * from branas.card where id_column = $1", [req.params.idColumn]);
    res.json(cards);
});
// Inicia o sevidor
app.listen(3000);

