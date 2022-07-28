import Column from '../../src/domain/entity/Column';


test("Deve criar uma coluna", function () {
    const column = new Column("Coluna a", true);
    expect(column.name).toBe("Coluna a");
    expect(column.hasEstimative).toBeTruthy();
}); 

test("Não deve criar uma coluna sem nome", function () {
    expect(() => {
        const column = new Column("", true);
    }).toThrowError("Column name is required");
});