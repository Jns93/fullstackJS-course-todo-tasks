import Column from "./Column";

export default class Board {
    public columns: Column[];
    constructor (readonly name: string) {
        if(name === '') throw new Error('Board name is required');
        this.name = name;
        this.columns = [];
    }

    addColumn(name: string, hasTime: boolean = false) {
        this.columns.push(new Column(name, hasTime));
    }
}
