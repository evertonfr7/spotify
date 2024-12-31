
describe('Spotify Playlists', () => {
  it('should view playlists', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/playlists'

    cy.intercept('GET', 'https://api.spotify.com/v1/me', { fixture: 'me.json' })

    cy.intercept('GET', 'https://api.spotify.com/v1/me/playlists?limit=5&offset=0', { fixture: 'playlists.json' })
    cy.visit(appUrl)

    cy.contains('Minhas Playlists')
    cy.contains('Sua coleção pessoal de playlists')

    cy.contains('Carregar mais').click()

    cy.intercept('GET', 'https://api.spotify.com/v1/me/playlists?limit=5&offset=5', { fixture: 'playlists.json' })

  })

  it('should create playlist', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/playlists'

    cy.intercept('GET', 'https://api.spotify.com/v1/me', { fixture: 'me.json' })

    cy.intercept('GET', 'https://api.spotify.com/v1/me/playlists?limit=5&offset=0', { fixture: 'playlists.json' })
    cy.visit(appUrl)

    cy.contains('Minhas Playlists')
    cy.contains('Sua coleção pessoal de playlists')

    cy.contains('Criar playlist').click()

    cy.contains('Dê um nome a sua playlist').should('be.visible')

    cy.get('input').type('Cypress Playlist')

    cy.contains('Criar').click({ force: true })

    cy.intercept('POST', 'https://api.spotify.com/v1/users/1/playlists', {})

  })
})

