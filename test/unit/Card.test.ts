import Card from '../../src/domain/entity/Card';


test("Deve criar um Card", function () {
    const card = new Card("Card a", 3);
    expect(card.title).toBe("Card a");
    expect(card.estimative).toBe(3);
}); 

test("Não deve criar um Card sem nome", function () {
    expect(() => {
        const card = new Card("", 3);
    }).toThrowError("Card title is required");
});