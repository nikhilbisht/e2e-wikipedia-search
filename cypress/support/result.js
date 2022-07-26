Cypress.Commands.add('verifyHeadingText',(text)=>{
    cy.get('h1#firstHeading').should('have.text',text)
})