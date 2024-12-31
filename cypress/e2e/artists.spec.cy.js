
describe('Spotify Artists', () => {
  it('should view artists', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/artistas'

    cy.intercept('GET', 'https://api.spotify.com/v1/me/top/artists?limit=5&offset=0', { fixture: 'artists.json' })
    cy.visit(appUrl)

    cy.contains('Top Artistas')
    cy.contains('Aqui você encontra seus artistas preferidos')

    cy.contains('Carregar mais').click()

    cy.intercept('GET', 'https://api.spotify.com/v1/me/top/artists?limit=5&offset=5', { fixture: 'artists.json' })

  })

  it('should view artist', () => {

    cy.setCookie('spotify_token', 'token')

    const appUrl = 'http://localhost:5173/artistas'

    cy.intercept('GET', 'https://api.spotify.com/v1/me/top/artists?limit=5&offset=0', { fixture: 'artists.json' })

    cy.visit(appUrl)

    cy.contains('Matuê').click()

    cy.intercept('GET', 'https://api.spotify.com/v1/artists/5nP8x4uEFjAAmDzwOEc9b8', { fixture: 'artist.json' })
    cy.intercept('GET', 'https://api.spotify.com/v1/artists/5nP8x4uEFjAAmDzwOEc9b8/albums?limit=5&offset=0', { fixture: 'albums.json' })

    cy.contains('Matuê')

    cy.contains('Carregar mais').click()

    cy.intercept('GET', 'https://api.spotify.com/v1/artists/5nP8x4uEFjAAmDzwOEc9b8/albums?limit=5&offset=5', { fixture: 'albums.json' })

  })
})

