var search;
describe("Search Apollo 11 in Wikipedia", ()=>{

    before(()=>{
        cy.fixture('search-text').then((text)=>{
            search=text;
        })
    })

    beforeEach(()=>{
        cy.visit("/")
    })

    it("Search the text with default language selected", ()=>{
        cy.inputText(search.text)
        cy.clickSearchIcon()
        cy.verifyHeadingText(search.text)
    })

    it("Search the text with language selected as Hindi", ()=>{
        cy.inputText(search.text)
        cy.selectLanguage("hi")
        cy.clickSearchIcon()
    })

})