// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      manifest: {
        "name": "DC | Links",
        "short_name": "dlinks",
        "orientation": "portrait",
        "theme_color": "#ffffff",
        "description": "All the links related to Diogo Costa.",
        "icons": [
          {
            "src": "/manifest-icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "/manifest-icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ]
      }
    })
  ]
}
