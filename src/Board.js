import Column from "./Column.js";

export default class Board {

    constructor (name) {
        this.name = name;
        this.columns = [];
    }

    addColumn(name, hasTime = false) {
        this.columns.push(new Column(name, hasTime));
    }
}
