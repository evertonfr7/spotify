import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "theme_color": "#57B660",
        "background_color": "#57B660",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "Spotify Luizalabs Challenge",
        "description": "Spotify Luizalabs Challenge",
        "name": "Spotify Luizalabs Challenge",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "511x512",
            "type": "image/png"
          }
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
