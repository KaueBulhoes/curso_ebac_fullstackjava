/// <reference types ="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve add um novo contato', () => {
        cy.get('input[type="text"]').type('Kaue')
        cy.get('input[type="email"]').type('kaue@teste.com')
        cy.get('input[type="tel"]').type('84123454321')
        cy.get('button[type="submit"]').click()
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Jamile')
        cy.get('input[type="email"]').clear().type('Jamile@teste.com')
        cy.get('input[type="tel"]').clear().type('84123454321')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })
})