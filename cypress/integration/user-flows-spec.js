describe('User flows', ()=> {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      body: {
        "orders": [
          {
            "id": 1,
            "name": "Bartimus",
            "ingredients": [
              "beans",
              "lettuce",
              "carnitas",
              "queso fresco",
              "jalapeno"
            ]
          },
          {
            "id": 2,
            "name": "Aloysius",
            "ingredients": [
              "steak",
              "pico de gallo",
              "lettuce",
              "carnitas",
              "queso fresco",
              "jalapeno"
            ]
          },
          {
            "id": 3,
            "name": "Killmaster",
            "ingredients": [
              "sofritas",
              "beans",
              "sour cream",
              "carnitas",
              "murder"
            ]
          }
        ]
      }
    }).as('Dummy Orders');
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      body: {
        name: 'Captain Dummy-Order',
        ingredients: ["sample", "example", "test"]
      }
    }).as('Dummy Post')
    cy.visit('http://localhost:3000')
  })
  it('should allow a user to enter their name in the name field', () => {
    cy.get('input').type('Ronald');
    cy.get('input').should('have.value', 'Ronald')
  })
  it('should allow a user to add ingredients to their order', () => {
    cy.get('[name="beans"]').click();
    cy.get('p').contains('Order: beans')
  })
  it('should allow a user to add multiple ingredients to their order', () => {
    cy.get('[name="beans"]').click();
    cy.get('[name="lettuce"]').click();
    cy.get('[name="jalapenos"]').click();
    cy.get('p').contains('Order: beans, lettuce, jalapenos')
  })
  it('should not allow a user to submit an order without entering their name', () => {
    cy.get('[name="beans"]').click();
    cy.get('[name="lettuce"]').click();
    cy.get('[name="jalapenos"]').click();
    cy.get('p').contains('Order: beans, lettuce, jalapenos');
    cy.get('.submit-btn').click();
    cy.get('.order').should('have.length', 3);
  })
  it('should not allow a user to submit an order without adding ingredients', () => {
    cy.get('input').type('Ronald');
    cy.get('input').should('have.value', 'Ronald')
    cy.get('p').contains('Order:');
    cy.get('.submit-btn').click();
    cy.get('.order').should('have.length', 3);
  })
  it('should post a new successful order to the burrito-tech API', () => {
    cy.get('.order').should('have.length', 3);
    cy.get('[name="beans"]').click();
    cy.get('[name="lettuce"]').click();
    cy.get('[name="jalapenos"]').click();
    cy.get('p').contains('Order: beans, lettuce, jalapenos');
    cy.get('input').type('Ronald');
    cy.get('input').should('have.value', 'Ronald')
    cy.get('.submit-btn').click();
    cy.get('.order').should('have.length', 4);
    cy.contains('Captain Dummy-Order')
  })
})
