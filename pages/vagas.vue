<template>
  <main class="jobs-page" role="main">
    <!-- Cabeçalho -->
    <header class="jobs-header" role="banner">
      <h1>Vagas na Rick's Burgers</h1>
      <p>Encontre a oportunidade perfeita para fazer parte da nossa equipe!</p>
    </header>

    <!-- Lista de Vagas -->
    <section class="jobs-list" role="region" aria-label="Lista de Vagas">
      <article v-for="job in jobs" :key="job.id" class="job-item">
        <h2>{{ job.title }}</h2>
        <p>{{ job.location }} - {{ job.description }}</p>
        <a :href="job.link" class="apply-link" target="_blank">Candidate-se</a>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#imports';
import jobsData from '~/data/vagas.json';

const jobs = ref(jobsData.jobs);

useHead({
  title: "Vagas - Rick's Burgers",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Confira as vagas disponíveis na Rick's Burgers e junte-se à nossa equipe!",
    },
    { name: 'keywords', content: "vagas, empregos, Rick's Burgers, hamburgueria, trabalho" },
    { hid: 'og:title', property: 'og:title', content: "Vagas - Rick's Burgers" },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Confira as vagas disponíveis na Rick's Burgers e junte-se à nossa equipe!",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/ricks-jobs.jpg' },
  ],
});
</script>

<style scoped>
.jobs-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  color: #333;
}

.jobs-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--accent);
}

.jobs-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.jobs-header p {
  font-size: 20px;
  color: #a68a64;
  margin-top: 10px;
}

.jobs-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.job-item {
  background: var(--text);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;
}

.job-item:hover {
  transform: translateY(-5px);
}

.job-item h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
}

.job-item p {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.apply-link {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid var(--accent);
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.apply-link:hover {
  background-color: var(--accent);
  color: #fff;
}

@media (max-width: 768px) {
  .jobs-page {
    margin: 40px auto;
    padding: 0 15px;
  }

  .jobs-header h1 {
    font-size: 36px;
  }

  .jobs-header p {
    font-size: 16px;
  }

  .jobs-list {
    grid-template-columns: 1fr;
  }
}
</style>