describe('app', () => {
  it('works', () => {
    cy.visit('/')
      .getByText(/autocomplete/i)
      .click()
  })
})
