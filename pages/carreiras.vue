<template>
  <main class="careers-page">
    <!-- Cabeçalho com fundo de imagem -->
    <header class="careers-header">
      <div class="header-overlay">
        <h1>Carreiras na Rick's Burgers</h1>
        <p>Faça parte de uma equipe apaixonada por hambúrgueres e conexões humanas.</p>
      </div>
    </header>

    <!-- Conteúdo principal -->
    <section class="careers-content">
      <div class="intro-section">
        <h2>Sobre a Rick's Burgers</h2>
        <p>
          Fundada em 2020, a <strong>Rick's Burgers</strong> é uma hamburgueria artesanal com raízes em Caratinga e
          Ipatinga. Nosso objetivo é combinar sabor excepcional com um ambiente acolhedor, e estamos apenas começando.
          Somos apaixonados por criar experiências únicas para nossos clientes e oportunidades incríveis para nossa
          equipe. Venha fazer parte dessa história!
        </p>
      </div>

      <div class="culture-section">
        <h2>Nossos Valores</h2>
        <p>Nosso sucesso é guiado por princípios que definem quem somos:</p>
        <div class="values-grid">
          <div class="value-card">
            <h3>Paixão</h3>
            <p>Colocamos amor em tudo o que fazemos.</p>
          </div>
          <div class="value-card">
            <h3>Qualidade</h3>
            <p>Compromisso com os melhores ingredientes e serviços.</p>
          </div>
          <div class="value-card">
            <h3>Colaboração</h3>
            <p>Trabalhamos juntos para alcançar grandes resultados.</p>
          </div>
          <div class="value-card">
            <h3>Inovação</h3>
            <p>Sempre buscando maneiras de surpreender.</p>
          </div>
        </div>
      </div>

      <div class="benefits-section">
        <h2>Por Que Trabalhar Conosco?</h2>
        <p>
          Na Rick's Burgers, você encontra um ambiente que valoriza seu crescimento e bem-estar. Confira nossos
          diferenciais:
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <Icon name="mdi:account-group" size="34" class="benefit-icon" />
            <h3>Inclusão</h3>
            <p>Um lugar onde todos são bem-vindos.</p>
          </div>
          <div class="benefit-card">
            <Icon name="mdi:chart-line" size="34" class="benefit-icon" />
            <h3>Crescimento</h3>
            <p>Oportunidades de aprendizado e carreira.</p>
          </div>
          <div class="benefit-card">
            <Icon name="mdi:shield-check" size="34" class="benefit-icon" />
            <h3>Benefícios</h3>
            <p>Refeições gratuitas, descontos e mais.</p>
          </div>
          <div class="benefit-card">
            <Icon name="mdi:lightbulb" size="34" class="benefit-icon" />
            <h3>Propósito</h3>
            <p>Faça parte de uma marca com alma.</p>
          </div>
        </div>
      </div>

      <div class="impact-section">
        <h2>Nosso Impacto</h2>
        <p>
          Na Rick's Burgers, acreditamos em retribuir às comunidades onde atuamos. Apoiamos iniciativas locais em
          Caratinga e Ipatinga, oferecendo empregos e promovendo o desenvolvimento sustentável com ingredientes de
          produtores regionais. Trabalhar conosco é fazer a diferença.
        </p>
      </div>

      <div class="testimonials-section">
        <h2>O Que Nosso Time Diz</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p>
              "Comecei como atendente e hoje ajudo a treinar novos colegas – a Rick's me deu essa chance."
            </p>
            <span>Lucas – Atendente, Caratinga</span>
          </div>
          <div class="testimonial-card">
            <p>
              "Adoro a liberdade para criar na cozinha e o apoio do time para crescer."
            </p>
            <span>Camila – Cozinheira, Ipatinga</span>
          </div>
          <div class="testimonial-card">
            <p>
              "Gerenciar uma loja da Rick's é desafiador e gratificante – sinto que faço parte de algo especial."
            </p>
            <span>Rafael – Gerente, Caratinga</span>
          </div>
        </div>
      </div>

      <div class="locations-section">
        <h2>Onde Estamos</h2>
        <p>Confira as cidades onde você pode se juntar à nossa equipe:</p>
        <div class="locations-grid">
          <div v-for="location in locations" :key="location.id" class="location-card">
            <h3>{{ location.city }}</h3>
            <p>{{ location.vacancies }} vaga(s) disponível(is)</p>
            <NuxtLink to="/vagas" class="location-btn">Veja Vagas</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#imports';
import { useCookies } from '~/composables/useCookies';
import careersData from '~/data/carreiras.json';

// Usando o composable useCookies
const { consent, saveConsent, hasConsent } = useCookies();

// Carregando dados dinâmicos das cidades do arquivo JSON
const locations = ref(careersData.locations);

// Configuração de SEO
useHead({
  title: "Carreiras - Rick's Burgers",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "Junte-se à Rick's Burgers e faça parte de uma equipe apaixonada em Caratinga e Ipatinga.",
    },
    { hid: 'og:title', property: 'og:title', content: "Carreiras - Rick's Burgers" },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Junte-se à Rick's Burgers e faça parte de uma equipe apaixonada em Caratinga e Ipatinga.",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/careers-hero.jpg' },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;500&display=swap',
    },
  ],
});
</script>

<style scoped>
.careers-page {
  max-width: 100%;
  margin: 0;
  padding: 0;
  color: #2A4B3C;
  font-family: 'Montserrat', sans-serif;
  background: #FFFFFF;
}

/* Cabeçalho */
.careers-header {
  position: relative;
  height: 400px;
  background: url('/images/careers-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
}

.header-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  color: #fff;
  border-radius: 10px;
}

.careers-header h1 {
  font-size: 56px;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.careers-header p {
  font-size: 22px;
  font-weight: 500;
}

/* Conteúdo */
.careers-content {
  padding: 120px 60px;
}

.intro-section,
.culture-section,
.benefits-section,
.impact-section,
.testimonials-section,
.locations-section {
  max-width: 1300px;
  margin: 0 auto 120px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}

.intro-section h2,
.culture-section h2,
.benefits-section h2,
.impact-section h2,
.testimonials-section h2,
.locations-section h2 {
  font-size: 48px;
  font-weight: 700;
  font-family: 'Cormorant Garamond', serif;
  color: #2A4B3C;
  margin-bottom: 40px;
  position: relative;
}

.intro-section h2:after,
.culture-section h2:after,
.benefits-section h2:after,
.impact-section h2:after,
.testimonials-section h2:after,
.locations-section h2:after {
  content: '';
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #B22222, transparent);
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.careers-content p {
  font-size: 17px;
  line-height: 1.9;
  color: #4A4A4A;
  max-width: 1000px;
  margin: 0 auto 30px;
}

/* Valores e Benefícios */
.values-grid,
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.value-card,
.benefit-card {
  padding: 35px;
  background: linear-gradient(135deg, #FFFFFF, #F8F1E9);
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.value-card:hover,
.benefit-card:hover {
  transform: scale(1.05);
  border-color: #B22222;
}

.value-card h3,
.benefit-card h3 {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Lora', serif;
  color: #2A4B3C;
  margin-bottom: 15px;
}

.benefit-icon {
  color: #B22222;
  margin-bottom: 20px;
}

/* Impacto */
.impact-section p {
  max-width: 900px;
}

/* Depoimentos */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-top: 60px;
}

.testimonial-card {
  padding: 40px;
  background: linear-gradient(135deg, #FFFFFF, #F8F1E9);
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  text-align: left;
}

.testimonial-card p {
  font-style: italic;
  font-size: 17px;
  color: #4A4A4A;
  margin-bottom: 20px;
}

.testimonial-card span {
  font-size: 15px;
  color: #6B4E31;
}

/* Cidades */
.locations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  margin-top: 60px;
}

.location-card {
  padding: 35px;
  background: linear-gradient(135deg, #FFFFFF, #F8F1E9);
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  text-align: center;
}

.location-card h3 {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Lora', serif;
  color: #2A4B3C;
  margin-bottom: 15px;
}

.location-card p {
  font-size: 15px;
  margin-bottom: 20px;
}

.location-btn {
  display: inline-block;
  background: #B22222;
  color: #FFFFFF;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.location-btn:hover {
  background: #8F1B1B;
  transform: scale(1.05);
}

/* Animação */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  .values-grid,
  .benefits-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .locations-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .careers-header {
    height: 300px;
  }

  .careers-header h1 {
    font-size: 42px;
  }

  .careers-header p {
    font-size: 18px;
  }

  .careers-content {
    padding: 80px 30px;
  }

  .intro-section h2,
  .culture-section h2,
  .benefits-section h2,
  .impact-section h2,
  .testimonials-section h2,
  .locations-section h2 {
    font-size: 40px;
  }

  .values-grid,
  .benefits-grid,
  .testimonials-grid,
  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>