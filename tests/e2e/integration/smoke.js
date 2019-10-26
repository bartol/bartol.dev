describe('navigating to article', () => {
  it('works', () => {
    cy.visit('/')
      .get('#focusFirstCard')
      .click()
      .url()
      .should('not.eq', Cypress.config().baseUrl)
  })
})
