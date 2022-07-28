import Card from "../domain/entity/Card";
import pgp from "pg-promise";


export default class CardService {
    constructor() {

    }

    async getCards(idColumn: number) {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");

        const cardsData = await connection.query("select title, estimative from branas.card where id_column = $1", [idColumn]);
        const cards: Card[] = [];
        for(const cardData of cardsData) {
            cards.push(new Card(cardData.title, cardData.estimative));
        }

        await connection.$pool.end();
        return cards;
    }
}