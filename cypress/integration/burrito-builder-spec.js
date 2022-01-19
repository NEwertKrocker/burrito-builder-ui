describe('Burrito Builder UI', ()=>{
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have an app title at the top', ()=>{
    cy.get('h1').contains('Burrito Builder')
  })
  it('should have a name input field', ()=>{
    cy.get('input');
  })
  it('should have buttons to allow for adding ingredients', ()=>{
    cy.get('[name="beans"]').contains('beans');
    cy.get('[name="steak"]').contains('steak');
    cy.get('[name="carnitas"]').contains('carnitas');
    cy.get('[name="sofritas"]').contains('sofritas');
    cy.get('[name="lettuce"]').contains('lettuce');
    cy.get('[name="queso fresco"]').contains('queso fresco');
    cy.get('[name="pico de gallo"]').contains('pico de gallo');
    cy.get('[name="hot sauce"]').contains('hot sauce');
    cy.get('[name="guacamole"]').contains('guacamole');
    cy.get('[name="jalapenos"]').contains('jalapenos');
    cy.get('[name="cilantro"]').contains('cilantro');
    cy.get('[name="sour cream"]').contains('sour cream');
  })
  it('should have a place to display the current order ingredients', ()=>{
    cy.get('p').contains('Order:')
  })
  it('should have a button to submit orders', ()=>{
    cy.get('.submit-btn').contains('Submit Order')
  })
  it('should display the current orders', () => {
    cy.get('.order')
  })
})
