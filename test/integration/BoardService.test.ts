import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BaordRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import BoardRepositoryMemory from "../../src/infra/repository/BoardRepositoryMemory";
import BoardService from "../../src/services/BoardService";

test("Deve listar os quadros", async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BaordRepositoryDatabase(connection);
    // const boardRepository = new BoardRepositoryMemory();
    const boardService =  new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
});