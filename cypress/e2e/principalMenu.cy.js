describe('Principal Menu test', () => {
  it('muestra el menu principal', () => {
    cy.visit('/');
    cy.contains('Menu Principal');
  });
  it('contiene las diferentes funcionalidades', () => {
    cy.visit('/');
    cy.get('button').contains("Mostrar lista de niños");
    cy.get('button').contains("Registrar niño");
  });
});
