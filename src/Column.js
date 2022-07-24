import Card from './Card.js';

export default class Column {
    constructor(name, hasTime = false) {
        this.name = name;
        this.cards = [];
        this.hasTime = hasTime;
        this.estimativeTime = 0;
    }

    addCard(name, time = null) {
        if(time) {
            if(!this.hasTime) {
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