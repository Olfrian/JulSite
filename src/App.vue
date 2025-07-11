<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar color="primary" flat app>
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-img src="/logo.svg" alt="Yoga-Logo" max-height="40" contain class="mr-3" />
          <span class="font-weight-bold text-white text-h6">Yoga mit Ronja</span>
        </div>
        <div class="d-flex gap-2">
          <v-btn text class="text-white" @click="scrollTo('kurs')">Kurs</v-btn>
          <v-btn text class="text-white" href="#kontakt">Kontakt</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- Hero mit Hintergrundbild -->
      <section class="hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1 class="hero-title">Yoga für dich</h1>
            <p class="hero-subtitle">
              Sanft. Kraftvoll. Echt. Mein erster Kurs für Körper & Geist.
            </p>
            <v-btn variant="outlined" color="secondary" class="hero-button" @click="scrollTo('kurs')">
              Mehr erfahren
            </v-btn>
          </div>
        </div>
      </section>

      <!-- Kursinfo -->
      <v-container class="section" id="kurs">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="section-title">🧘 Nächster Kurs</h2>
            <p>
              <strong>Samstag, 20. Juli 2025 · 10:00–11:30 Uhr</strong><br />
              Yogastudio Sonnenklang, Kiel
            </p>

            <h3 class="section-subtitle">✨ Was dich erwartet</h3>
            <ul>
              <li>Geführte Atemübungen & achtsames Ankommen</li>
              <li>Sanfte Flows & Bewegungsfreiheit</li>
              <li>Entspannung & Musik am Ende</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>

      <!-- Footer -->
      <v-footer color="primary" dark id="kontakt">
        <v-container class="text-center py-10">
          <h4 class="mb-4">Kontakt</h4>
          <p>
            📧 <a href="mailto:ronjaehlers@gmx.de" class="footer-link">ronjaehlers@gmx.de</a><br />
            🧾 <a href="/impressum.html" class="footer-link">Impressum</a>
          </p>
          <p class="mt-6 text-white text-sm">&copy; {{ new Date().getFullYear() }} Yoga mit Ronja</p>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<!-- Rubik Font von Google einbinden -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');

body {
  font-family: 'Rubik', sans-serif;
}
</style>

<style scoped>
/* Hero mit Hintergrundbild */
.hero {
  position: relative;
  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
}

.hero-overlay {
  background-color: rgba(46, 64, 55, 0.7); /* dunkles Overlay */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.hero-button {
  font-weight: 500;
  font-size: 1rem;
}

/* Kursbereich */
.section {
  background-color: #f5f5f1;
  padding: 80px 20px;
  color: #1e1e1e;
}

.section-title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-subtitle {
  margin-top: 2rem;
  font-weight: 500;
}

ul {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Footer */
.footer-link {
  color: #81c784;
  text-decoration: underline;
}
</style>