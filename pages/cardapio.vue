<template>
  <main class="menu-page" role="main">
    <!-- Cabeçalho com Banner -->
    <header class="menu-header" role="banner">
      <h1>Cardápio</h1>
    </header>

    <!-- Filtros de Categoria -->
    <section class="menu-filters" role="navigation" aria-label="Filtros de Categoria">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="filterItems(category)"
        :aria-label="`Filtrar por ${category}`"
      >
        {{ category }}
      </button>
    </section>

    <!-- Itens do Cardápio -->
    <section class="menu-items" role="region" aria-label="Itens do Cardápio">
      <article v-for="item in filteredItems" :key="item.id" class="menu-item">
        <NuxtImg :src="item.image" :alt="item.alt" width="250" height="250" quality="80" loading="lazy" />
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <NuxtLink
          to="https://delivery.ricksburgers.com.br/"
          class="cta-button"
          :aria-label="`Monte o seu ${item.name}`"
        >
          Monte o seu
        </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useHead } from '#imports';
import menuData from '~/data/menu.json';

// Dados do cardápio
const menuItems = ref(menuData);

// Categorias únicas extraídas do JSON
const categories = ref([...new Set(menuData.map(item => item.category))]);

// Categoria selecionada (padrão: primeira categoria)
const selectedCategory = ref(categories.value[0]);

// Itens filtrados com base na categoria selecionada
const filteredItems = computed(() => {
  return menuItems.value.filter(item => item.category === selectedCategory.value);
});

// Função para mudar a categoria
const filterItems = (category) => {
  selectedCategory.value = category;
};

// Configuração de SEO
useHead({
  title: "Cardápio - RICK'S BURGERS",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Confira o cardápio da Rick's Burgers e monte seu hambúrguer favorito!",
    },
    { name: 'keywords', content: "cardápio, hambúrguer artesanal, Rick's Burgers" },
    { hid: 'og:title', property: 'og:title', content: "Cardápio - Rick's Burgers" },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Confira o cardápio da Rick's Burgers e monte seu hambúrguer favorito!",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/burger-hero.jpg' },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap',
    },
  ],
});
</script>

<style scoped>
.menu-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background: #F5F5F5;
  font-family: 'Open Sans', sans-serif;
  color: #333;
}

/* Cabeçalho com Banner */
.menu-header {
  height: 300px;
  background: url('/images/burger-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
}

.menu-header h1 {
  font-size: 48px;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Filtros */
.menu-filters {
  position: sticky;
  top: 0;
  background: #FFFFFF;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 10;
  border-bottom: 1px solid #E0E0E0;
}

.menu-filters button {
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  background: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.menu-filters button.active,
.menu-filters button:hover {
  background: #B22222;
  color: #FFFFFF;
  border-color: #B22222;
}

/* Itens do Cardápio */
.menu-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 0;
}

.menu-item {
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: box-shadow 0.3s;
}

.menu-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.menu-item img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.menu-item h2 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.menu-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background: #B22222;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #8F1B1B;
}

/* Responsividade */
@media (max-width: 1024px) {
  .menu-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .menu-header {
    height: 200px;
  }

  .menu-header h1 {
    font-size: 36px;
  }

  .menu-filters {
    flex-wrap: wrap;
    gap: 10px;
    padding: 15px 0;
  }

  .menu-filters button {
    font-size: 14px;
    padding: 8px 15px;
  }

  .menu-items {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }

  .menu-item img {
    width: 200px;
    height: 200px;
  }
}
</style>
