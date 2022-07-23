Cypress.Commands.add('inputText', (text)=>{
    cy.get('input#searchInput')
        .should('be.visible')
        .type(text)
})

Cypress.Commands.add('clickSearchIcon', ()=>{
    cy.get('div#search-input+button')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('selectLanguage',()=>{
    cy.get('select#searchLanguage').select('English').should('have.value','en')
})