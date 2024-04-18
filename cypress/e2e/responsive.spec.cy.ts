describe('Ensures the responsiveness of the application', () => {
  beforeEach(() => {
		cy.visit('http://localhost:3001')
    cy.viewport(700, 500)
	})

  it('Ensure desktop topics are not visible and mobile info titles are visible', () => {
    const topicsMenu = cy.get('[class*="itemTopics"]')
    topicsMenu.should('not.be.visible')

    cy.get('li').contains(/laboratório:/i).should('be.visible')
    cy.get('li').contains(/Data de publicação:/i).should('be.visible')    
  })

  it('Ensure mobile sort button is visible', () => {
    const sortAsc = cy.get('button').contains(/mais antigo/i)
    const sortDesc = cy.get('button').contains(/mais novo/i)

    sortAsc.should('be.visible')
    sortDesc.should('be.visible')
    //same function as list sort test, but for mobile
  })
})