import Card from '../../src/domain/entity/Card';


test("Deve criar um Card", function () {
    const card = new Card(1, 1, "Atividade 1", 3);
    expect(card.title).toBe("Atividade 1");
    expect(card.estimative).toBe(3);
}); 

test("Não deve criar um Card sem titulo", function () {
    expect(() => {
        const card = new Card(1, 1, "", 3);
    }).toThrowError("Title is required");
});

test("Não deve criar cartão com estimativa negativa", function () {
	expect(() => new Card(1, 1, "Atividade 1", -3)).toThrow(new Error("Estimative must be positive"));
});