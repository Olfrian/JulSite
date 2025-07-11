
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'yomoStyle',
    themes: {
      yomoStyle: {
        dark: false,
        colors: {
          primary: '#2e4037',      // Dunkelgrün
          secondary: '#c9d8c5',    // Salbei
          background: '#f5f5f1',   // Sand-Ton
          surface: '#ffffff',
          'on-primary': '#ffffff',
          'on-background': '#1e1e1e',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')