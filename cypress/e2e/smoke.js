describe('app', () => {
  it('works', () => {
    cy.visit('/')
      .getByText(/Undo last Git commit/i)
      .click()
      .getByText(/git push origin -f/i)
  })
})
