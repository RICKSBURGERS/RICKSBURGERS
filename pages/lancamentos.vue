<template>
  <main class="releases-page" role="main">
    <header class="releases-header" role="banner">
      <h1>Lançamentos</h1>
      <p>Confira as novidades quentinhas do nosso cardápio!</p>
    </header>

    <section class="releases-items" role="region" aria-label="Itens de Lançamento">
      <article v-for="release in releases" :key="release.id" class="release-item">
        <NuxtImg :src="release.image" :alt="release.alt" width="300" quality="80" loading="lazy" />
        <h2>{{ release.name }}</h2>
        <p>{{ release.description }}</p>
        <span class="price">{{ release.price }}</span>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#imports';
import releasesData from '~/data/lancamentos.json';

const releases = ref(releasesData);

useHead({
  title: "Lançamentos - Rick's Burgers",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Confira os lançamentos do cardápio da Rick's Burgers! Novidades como Burger da Temporada e Veggie Rick.",
    },
    { name: 'keywords', content: "lançamentos, cardápio, Rick's Burgers, hambúrguer artesanal, veggie" },
    { hid: 'og:title', property: 'og:title', content: "Lançamentos - Rick's Burgers" },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Confira os lançamentos do cardápio da Rick's Burgers! Novidades como Burger da Temporada e Veggie Rick.",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/burger-new.jpg' },
  ],
});
</script>

<style scoped>
.releases-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  color: #333;
}

.releases-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--accent);
}

.releases-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.releases-header p {
  font-size: 20px;
  color: #a68a64;
  margin-top: 10px;
}

.releases-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.release-item {
  background: var(--text);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
}

.release-item:hover {
  transform: translateY(-5px);
}

.release-item img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.release-item h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
}

.release-item p {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.price {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 15px;
}

/* Removido o estilo do .cta-button, pois não é mais usado */

@media (max-width: 768px) {
  .releases-page {
    margin: 40px auto;
    padding: 0 15px;
  }

  .releases-header h1 {
    font-size: 36px;
  }

  .releases-header p {
    font-size: 16px;
  }

  .releases-items {
    grid-template-columns: 1fr;
  }

  .release-item img {
    max-width: 100%;
  }
}
</style>