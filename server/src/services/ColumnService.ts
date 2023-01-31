import Column from "../domain/entity/Column";
import pgp from "pg-promise";
import ColumnRepository from "../domain/repository/ColumnRepository";


export default class ColumnService {
    constructor(readonly columnRepository: ColumnRepository) {

    }

    async getColumns (idBoard: number) {
        const columns = await this.columnRepository.findAllByIdBoard(idBoard);
        return columns;
    }
    async saveColumn(input: SaveInput): Promise<number> {
        const idColumn = this.columnRepository.save(new Column(input.idBoard, 1, input.name, input.hasEstimative));
        return idColumn;
    }
    async getColumn(idColumn: number): Promise<Column> {
        const column = this.columnRepository.get(idColumn);
        return column;
    }
    async deleteColumn(idColumn: number): Promise<void> {
        await this.columnRepository.delete(idColumn);
    }
 }

 type SaveInput = {
    idBoard: number;
    name: string;
    hasEstimative: boolean;
}