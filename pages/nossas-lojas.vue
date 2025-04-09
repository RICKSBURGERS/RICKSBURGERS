<template>
  <main class="stores-page" role="main">
  <header class="stores-header">
  <h1>Nossas Lojas – Rick's Burgers</h1>
  <p>Encontre a Rick's Burgers mais próxima de você e venha saborear o melhor hambúrguer da cidade!</p>
  </header>
 
  <section class="stores-search">
  <div class="search-container">
  <input
  v-model="searchQuery"
  type="text"
  placeholder="Digite sua cidade ou CEP"
  class="search-input"
  aria-label="Pesquisar por cidade ou CEP"
  @input="debouncedFilterStores"
  />
  <button @click="filterStores" class="search-button" aria-label="Buscar lojas">
  <Icon name="mdi:map-search" size="24" /> Buscar
  </button>
  </div>
  </section>
 
  <section class="stores-map">
  <h2>Mapa das Lojas</h2>
  <GoogleMap
  :api-key="apiKey"
  style="width: 100%; height: 400px"
  :center="center"
  :zoom="zoomLevel"
  aria-label="Mapa das lojas Rick's Burgers"
  >
  <Marker v-for="store in filteredStores" :key="store.id" :options="{ position: { lat: store.lat, lng: store.lng } }">
  <InfoWindow>
  <div class="map-info-window">
  <h3>{{ store.name }}</h3>
  <p>{{ store.address }}</p>
  <a :href="store.directions" target="_blank" rel="noopener noreferrer">Como Chegar</a>
  </div>
  </InfoWindow>
  </Marker>
  </GoogleMap>
  </section>
 
  <section class="stores-list">
  <h2>Lojas Disponíveis</h2>
  <div v-if="filteredStores.length > 0" class="stores-grid">
  <div v-for="store in filteredStores" :key="store.id" class="store-card">
  <h3>{{ store.name }}</h3>
  <p><strong>Endereço:</strong> {{ store.address }}</p>
  <p><strong>Horário:</strong> {{ store.hours }}</p>
  <p><strong>Serviços:</strong> {{ store.services.join(', ') }}</p>
  <a :href="store.directions" target="_blank" rel="noopener noreferrer" class="directions-button">
  <Icon name="mdi: navigation" size="20" /> Como Chegar
  </a>
  </div>
  </div>
  <p v-else class="no-results">
  Nenhuma loja encontrada. Tente outro CEP ou cidade!
  </p>
  </section>
 
  <section class="stores-promo">
  <h2>Promoção Exclusiva nas Lojas</h2>
  <p>
  Visite uma de nossas lojas e experimente o <strong>Burger do Mês</strong> com 20% de desconto! Veja o cardápio e peça já.
  </p>
  <NuxtLink to="/cardapio" class="promo-button">Ver Cardápio</NuxtLink>
  </section>
  </main>
 </template>
 
 <script setup>
 import { ref, onMounted, computed } from 'vue';
 import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map';
 import { debounce } from 'lodash-es';
 import storesData from '~/data/stores.json';
 
 useHead({
  title: "Nossas Lojas - RICK'S BURGERS",
  meta: [
  { hid: 'description', name: 'description', content: "Encontre a loja Rick's Burgers mais próxima de você e aproveite o melhor hambúrguer da cidade!" },
  { name: 'keywords', content: 'lojas, Rick\'s Burgers, hambúrguer artesanal' },
  { hid: 'og:title', property: 'og:title', content: "Nossas Lojas - Rick's Burgers" },
  { hid: 'og:description', property: 'og:description', content: "Encontre a loja Rick's Burgers mais próxima de você e aproveite o melhor hambúrguer da cidade!" },
  { hid: 'og:type', property: 'og:type', content: 'website' },
  { hid: 'og:image', property: 'og:image', content: '/images/burger-classic.jpg' },
  ],
 });
 
 const stores = ref(storesData);
 const filteredStores = ref([]);
 const searchQuery = ref('');
 
 const center = computed(() => {
  if (filteredStores.value.length === 0) {
  return { lat: -14.235004, lng: -51.92528 }; // Centro do Brasil
  }
  const lat = filteredStores.value.reduce((sum, store) => sum + store.lat, 0) / filteredStores.value.length;
  const lng = filteredStores.value.reduce((sum, store) => sum + store.lng, 0) / filteredStores.value.length;
  return { lat, lng };
 });
 
 const zoomLevel = computed(() => {
  return filteredStores.value.length === 1 ? 15 : 4;
 });
 
 const apiKey = useRuntimeConfig().public.googleMapsApiKey;
 
 const filterStores = () => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) {
  filteredStores.value = stores.value;
  return;
  }
  filteredStores.value = stores.value.filter(
  (store) =>
  store.city.toLowerCase().includes(query) ||
  store.address.toLowerCase().includes(query) ||
  /\d{5}-?\d{3}/.test(query) // Simula busca por CEP
  );
 };
 
 const debouncedFilterStores = debounce(filterStores, 300);
 
 onMounted(() => {
  filteredStores.value = stores.value;
 });
 </script>
 
 <style scoped>
 .stores-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
 }
 
 .stores-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--accent);
 }
 
 .stores-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
 }
 
 .stores-header p {
  font-size: 20px;
  color: #666;
  margin-top: 10px;
  font-style: italic;
 }
 
 .stores-search {
  margin-bottom: 40px;
  text-align: center;
 }
 
 .search-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
 }
 
 .search-input {
  padding: 12px 20px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #A68A64;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
 }
 
 .search-input:focus {
  border-color: var(--accent);
 }
 
 .search-button {
  padding: 12px 25px;
  background: var(--accent);
  color: var(--text);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.3s;
 }
 
 .search-button:hover {
  background: #D97A30;
 }
 
 .stores-map {
  margin-bottom: 60px;
 }
 
 .stores-map h2 {
  font-size: 32px;
  font-weight: 600;
  color: #A68A64;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
  text-align: center;
 }
 
 .map-info-window {
  padding: 10px;
 }
 
 .map-info-window h3 {
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 5px;
 }
 
 .map-info-window p {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
 }
 
 .map-info-window a {
  color: var(--accent);
  text-decoration: none;
 }
 
 .map-info-window a:hover {
  text-decoration: underline;
 }
 
 .stores-list {
  margin-bottom: 60px;
 }
 
 .stores-list h2 {
  font-size: 32px;
  font-weight: 600;
  color: #A68A64;
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
  text-align: center;
 }
 
 .stores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
 }
 
 .store-card {
  background: var(--text);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
 }
 
 .store-card h3 {
  font-size: 22px;
  color: var(--primary);
  margin-bottom: 15px;
 }
 
 .store-card p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
 }
 
 .store-card strong {
  color: #A68A64;
 }
 
 .directions-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--primary);
  color: var(--text);
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  transition: background 0.3s;
 }
 
 .directions-button:hover {
  background: #2A4A39;
 }
 
 .no-results {
  text-align: center;
  font-size: 18px;
  color: #666;
  font-style: italic;
 }
 
 .stores-promo {
  text-align: center;
  padding: 50px 20px;
  background: var(--primary);
  color: var(--text);
  border-radius: 10px;
 }
 
 .stores-promo h2 {
  font-size: 32px;
  font-weight: 600;
  color: var(--accent);
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
 }
 
 .stores-promo p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
 }
 
 .stores-promo strong {
  color: var(--accent);
 }
 
 .promo-button {
  display: inline-block;
  padding: 15px 40px;
  background: var(--accent);
  color: var(--text);
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  transition: background 0.3s;
 }
 
 .promo-button:hover {
  background: #D97A30;
 }
 
 @media (max-width: 768px) {
  .stores-page {
  margin: 40px auto;
  padding: 0 15px;
  }
 
  .stores-header h1 {
  font-size: 36px;
  }
 
  .stores-header p {
  font-size: 16px;
  }
 
  .search-input {
  width: 100%;
  max-width: 250px;
  }
 
  .search-button {
  padding: 10px 20px;
  font-size: 14px;
  }
 
  .stores-map h2,
  .stores-list h2,
  .stores-promo h2 {
  font-size: 24px;
  }
 
  .stores-map {
  margin-bottom: 40px;
  }
 
  .stores-list {
  margin-bottom: 40px;
  }
 
  .store-card {
  padding: 20px;
  }
 
  .store-card h3 {
  font-size: 18px;
  }
 
  .store-card p {
  font-size: 14px;
  }
 
  .directions-button {
  padding: 8px 16px;
  font-size: 14px;
  }
 
  .no-results {
  font-size: 16px;
  }
 
  .stores-promo {
  padding: 30px 15px;
  }
 
  .stores-promo p {
  font-size: 16px;
  }
 
  .promo-button {
  padding: 12px 30px;
  font-size: 16px;
  }
 }
 </style>
