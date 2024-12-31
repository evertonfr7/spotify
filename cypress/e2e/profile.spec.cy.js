
describe('Spotify Profile', () => {
  it('should view profile page', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/perfil'

    cy.intercept('GET', 'https://api.spotify.com/v1/me', { fixture: 'me.json' })

    cy.visit(appUrl)

    cy.contains('everton7fr')
    cy.contains('Logout')

  })

  it('should logout', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/perfil'

    cy.intercept('GET', 'https://api.spotify.com/v1/me', { fixture: 'me.json' })

    cy.visit(appUrl)

    cy.contains('everton7fr')
    cy.contains('Logout').click()

    cy.url().should('include', 'http://localhost:5173/login')

  })

})

