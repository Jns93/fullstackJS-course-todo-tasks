import Card from './Card';

export default class Column {
    public name: string;
    public cards: Card[];
    public hasEstimative: boolean;
    public estimativeTime: number;

    constructor(name: string, hasEstimative: boolean = false) {
        this.name = name;
        this.cards = [];
        this.hasEstimative = hasEstimative;
        this.estimativeTime = 0;

        if(this.name === '') throw new Error('Column name is required');
    }

    addCard(name: string, time: number = 0) {
        if(time) {
            if(!this.hasEstimative) {
                return 'This column does not have time';
            } else {
                this.estimativeTime += time;
                return this.cards.push(new Card(name, time));
            }
        }
        this.estimativeTime += time;
        this.cards.push(new Card(name));
    }


}