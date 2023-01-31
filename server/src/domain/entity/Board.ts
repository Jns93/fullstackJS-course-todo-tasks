import Column from "./Column";

export default class Board {
    estimative?: number;
    constructor (readonly idBoard: number, readonly name: string) {
        if(name === '') throw new Error('Board name is required');
        this.name = name;
    }
}
