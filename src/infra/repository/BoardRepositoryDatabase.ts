import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";
import Connection from "../database/Connection";

export default class BaordRepositoryDatabase implements BoardRepository {
    constructor(readonly connection: Connection) {

    }
    async findAll(): Promise<Board[]> {
                //EX: ACOPLADO AO BANCO DE DADOS. (Repare de que retorno sera um array com o que vem do banco. Se o nome de alguma coluna for alterada no banco, o teste será quebrado. Pois sera retornado um novo nome de coluna )
        // app.get("/boards", async function (req, res) {
        //     const boards = await connection.query("select name from branas.board"); 
        //     res.json(boards);
        // });

        const boardsData = await this.connection.query("select id_board, name from branas.board", []); //ISSO SAO DADOS DA TABELA (POR ISSO BOARD DATA)
        const boards: Board[] = []; // ISSO É A ENTIDADE BOARD
        for (const boardData of boardsData) {
  
            const board = new Board(boardData.name);

            boards.push(board);
        };
        return boards;
    }

}