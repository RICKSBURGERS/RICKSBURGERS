<template>
  <main class="content">
    <section class="hero-slider" role="region" aria-label="Carrossel de Destaques">
      <div class="slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: currentSlide === index }"
          :aria-hidden="currentSlide !== index"
        >
          <NuxtImg :src="slide.image" :alt="slide.alt" width="1200" quality="80" loading="lazy" />
          <div class="slide-content">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <NuxtLink :to="slide.ctaLink" class="cta-button" :aria-label="slide.ctaText">{{ slide.ctaText }}</NuxtLink>
          </div>
        </div>
        <button class="slider-nav prev" @click="prevSlide" aria-label="Slide anterior">
          <Icon name="mdi:chevron-left" size="30" />
        </button>
        <button class="slider-nav next" @click="nextSlide" aria-label="Próximo slide">
          <Icon name="mdi:chevron-right" size="30" />
        </button>
      </div>
    </section>

    <section class="promocoes">
      <h2>Promoções Imperdíveis</h2>
      <div class="promocoes-list">
        <div class="promocao-item">
          <NuxtImg src="/images/promo-combo.jpg" alt="Combo Família" width="300" quality="80" loading="lazy" />
          <h3>Combo Família</h3>
          <p>2 hambúrgueres, 2 batatas fritas e 2 refrigerantes por apenas R$ 59,90!</p>
          <NuxtLink to="/cardapio" class="cta-button" aria-label="Peça o Combo Família Agora">Peça Agora</NuxtLink>
        </div>
        <div class="promocao-item">
          <NuxtImg src="/images/promo-lancamento.jpg" alt="Novo Lançamento" width="300" quality="80" loading="lazy" />
          <h3>Burger da Temporada</h3>
          <p>Experimente o novo Burger da Temporada com queijo brie e geleia de pimenta!</p>
          <NuxtLink to="/lancamentos" class="cta-button" aria-label="Saiba Mais sobre o Burger da Temporada"
            >Saiba Mais</NuxtLink
          >
        </div>
      </div>
    </section>

    <section class="sobre-nos">
      <div class="sobre-content">
        <h2>Conheça o RICK'S BURGERS</h2>
        <p>
          No RICK'S BURGERS, cada hambúrguer é feito com paixão e ingredientes frescos. Nossa vibe rústica e acolhedora é
          perfeita para quem busca sabor e uma experiência única. Venha nos visitar ou peça pelo delivery!
        </p>
        <NuxtLink to="/nossas-lojas" class="cta-button" aria-label="Encontre uma Loja Rick's Burgers"
          >Encontre uma Loja</NuxtLink
        >
      </div>
      <NuxtImg src="/images/sobre-nos.jpg" alt="RICK'S BURGERS Ambiente" width="600" quality="80" loading="lazy" class="sobre-img" />
    </section>

    <section class="cta-final">
      <h2>Peça Agora e Experimente o Sabor!</h2>
      <NuxtLink to="/cardapio" class="cta-button" aria-label="Ver Cardápio do Rick's Burgers">Ver Cardápio</NuxtLink>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCookies } from '~/composables/useCookies';
import { useHead } from '#imports';
import slidesData from '~/data/slides.json'; // Importação do JSON

useHead({
  title: "RICK'S BURGERS",
  meta: [
    { hid: 'description', name: 'description', content: "Bem-vindo ao RICK'S BURGERS. Hambúrgueres artesanais com atitude!" },
    { name: 'keywords', content: "hambúrguer artesanal, RICK'S BURGERS, promoções" },
    { hid: 'og:title', property: 'og:title', content: "RICK'S BURGERS" },
    { hid: 'og:description', property: 'og:description', content: "Bem-vindo ao RICK'S BURGERS. Hambúrgueres artesanais com atitude!" },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/burger-hero.jpg' },
  ],
});

const slides = ref(slidesData); // Usando o JSON importado
const currentSlide = ref(0);
const isInteracting = ref(false);
let slideInterval = null;

const nextSlide = () => {
  isInteracting.value = true;
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  isInteracting.value = true;
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const autoSlide = () => {
  slideInterval = setInterval(() => {
    if (!isInteracting.value) nextSlide();
  }, 5000);
};

onMounted(() => {
  autoSlide();
  setTimeout(() => {
    isInteracting.value = false;
  }, 10000);
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
});

const { hasConsent } = useCookies();

onMounted(() => {
  if (hasConsent('analytics')) loadAnalytics();
  if (hasConsent('marketing')) loadMarketing();
});

const loadAnalytics = () => {
  // Placeholder seguro; implementar com script real no nuxt.config.js
  console.log('Carregando Google Analytics...');
  // Exemplo: window.dataLayer = window.dataLayer || []; (adicionar no nuxt.config.js)
};

const loadMarketing = () => {
  // Placeholder seguro; implementar com script real no nuxt.config.js
  console.log('Carregando scripts de marketing...');
};
</script>

<style scoped>
.content {
  margin-top: 80px;
  background: var(--text);
}

.hero-slider {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--text);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.slide-content h1 {
  font-size: 48px;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
}

.slide-content p {
  font-size: 24px;
  color: var(--accent);
  margin: 10px 0;
}

.cta-button {
  display: inline-block;
  background: var(--accent);
  color: var(--text);
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #d97a30;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: var(--text);
  padding: 10px;
  cursor: pointer;
}

.slider-nav.prev {
  left: 20px;
}

.slider-nav.next {
  right: 20px;
}

.promocoes {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.promocoes h2 {
  font-size: 36px;
  color: var(--primary);
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
}

.promocoes-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.promocao-item {
  background: #e8dab2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.promocao-item img {
  border-radius: 10px;
}

.promocao-item h3 {
  font-size: 24px;
  color: #a68a64;
  margin: 15px 0 10px;
}

.promocao-item p {
  color: #666;
  font-size: 16px;
}

.sobre-nos {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.sobre-content {
  flex: 1;
}

.sobre-content h2 {
  font-size: 36px;
  color: var(--primary);
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.sobre-content p {
  font-size: 18px;
  color: #a68a64;
  margin-bottom: 20px;
}

.sobre-img {
  flex: 1;
  border-radius: 10px;
}

.cta-final {
  background: var(--primary);
  padding: 50px 20px;
  text-align: center;
}

.cta-final h2 {
  font-size: 36px;
  color: var(--text);
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

@media (max-width: 768px) {
  .content {
    margin-top: 60px;
  }

  .hero-slider {
    height: 400px;
  }

  .slide-content h1 {
    font-size: 32px;
  }

  .slide-content p {
    font-size: 18px;
  }

  .cta-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .promocoes {
    padding: 30px 15px;
  }

  .promocoes h2 {
    font-size: 28px;
  }

  .promocao-item h3 {
    font-size: 20px;
  }

  .promocao-item p {
    font-size: 14px;
  }

  .sobre-nos {
    padding: 30px 15px;
    flex-direction: column;
  }

  .sobre-content h2 {
    font-size: 28px;
  }

  .sobre-content p {
    font-size: 16px;
  }

  .sobre-img {
    width: 100%;
    max-width: 400px;
  }

  .cta-final {
    padding: 30px 15px;
  }

  .cta-final h2 {
    font-size: 28px;
  }
}
</style>
