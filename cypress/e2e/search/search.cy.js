describe("Search Apollo 11 in Wikipedia", ()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    it("Search the text", ()=>{
        cy.inputText("Apollo 11")
        cy.clickSearchIcon()
    })
})