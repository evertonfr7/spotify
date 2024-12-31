
describe('Spotify Login Test', () => {
  it('should log in via Spotify and redirect back to the app', () => {

    const appUrl = 'http://localhost:5173'

    cy.visit(appUrl)

    cy.contains('Entrar').click()

    cy.origin('https://accounts.spotify.com', () => {
      cy.get('input#login-username').type(Cypress.env('SPOTIFY_USERNAME'))
      cy.get('input#login-password').type(Cypress.env('SPOTIFY_PASSWORD'))
      cy.get('button#login-button').click()

      cy.contains('Agree').click()
    })

    cy.url().should('include', appUrl)
    cy.contains('Seja bem-vindo ao Spotify Luizalabs Challenge!')
  })
})

