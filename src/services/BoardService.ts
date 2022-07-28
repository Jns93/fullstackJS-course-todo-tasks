import pgp from "pg-promise";
import Board from "../entity/Board";

export default class BoardService {
    constructor() {
    }

    async getBoards() {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");

        //EX: ACOPLADO AO BANCO DE DADOS. (Repare de que retorno sera um array com o que vem do banco. Se o nome de alguma coluna for alterada no banco, o teste será quebrado. Pois sera retornado um novo nome de coluna )
        // app.get("/boards", async function (req, res) {
        //     const boards = await connection.query("select name from branas.board"); 
        //     res.json(boards);
        // });

        const boardsData = await connection.query("select id_board, name from branas.board", []); //ISSO SAO DADOS DA TABELA (POR ISSO BOARD DATA)
        const boards: Board[] = []; // ISSO É A ENTIDADE BOARD
        for (const boardData of boardsData) {
            const cardsData = await connection.query("select * from branas.card join branas.column using (id_column) where id_board = $1", [boardData.id_board]);
            let estimative = 0;
            for(const cardData of cardsData) {
                estimative += cardData.estimative;
            }
            const board = new Board(boardData.name);
            board.estimative = estimative;
            boards.push(board);
        };
        await connection.$pool.end();
        return boards;
    }
}