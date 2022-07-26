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

Cypress.Commands.add('selectLanguage',(language)=>{
    cy.get('select#searchLanguage')
        .select(language)
        .should('have.value',language)
})