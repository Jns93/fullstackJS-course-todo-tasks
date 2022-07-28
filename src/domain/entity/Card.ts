export default class Card {
    title: string;
    estimative: number;
    
    constructor(title: string, estimative: number = 0) {
        this.title = title;
        this.estimative = estimative;

        if(this.title === '') throw new Error('Card title is required');
    }


}