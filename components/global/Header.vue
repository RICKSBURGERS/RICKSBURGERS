<template>
  <header class="header">
    <meta name="facebook-domain-verification" content="mszpzn6sz54z4ms7dba8s4yvimnydn" />
    <div class="header-container">
      <NuxtLink to="/" class="logo" title="RICK'S BURGERS Home" aria-label="Página inicial do Rick's Burgers">
        <span class="logo-text">RICK'S BURGERS</span>
      </NuxtLink>
      <nav class="nav">
        <ul>
          <li v-for="route in routes" :key="route.path">
            <NuxtLink :to="route.path" :aria-label="route.label">{{ route.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <a
          href="https://delivery.ricksburgers.com.br/caratinga/pedidos"
          target="_blank"
          rel="noopener noreferrer"
          class="delivery-button"
          aria-label="Pedir Delivery no Rick's Burgers"
        >
          <Icon name="mdi:cart-outline" size="20" />
          <span>Delivery</span>
        </a>
        <button
          class="menu-toggle"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Alternar menu de navegação"
        >
          <Icon :name="menuOpen ? 'mdi:close' : 'mdi:menu'" size="24" />
        </button>
      </div>
    </div>
    <Transition name="slide">
      <div v-if="menuOpen" class="mobile-menu" role="navigation" aria-label="Menu mobile">
        <ul>
          <li v-for="route in routes" :key="route.path">
            <NuxtLink :to="route.path" @click="toggleMenu" :aria-label="route.label">{{ route.label }}</NuxtLink>
          </li>
          <li>
            <a
              href="https://delivery.ricksburgers.com.br/caratinga/pedidos"
              target="_blank"
              rel="noopener noreferrer"
              class="delivery-mobile"
              @click="toggleMenu"
              aria-label="Pedir Delivery no RICK'S BURGERS"
            >
              Delivery
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const routes = [
  { path: '/', label: 'Início' },
  { path: '/cardapio', label: 'Cardápio' },
  { path: '/lancamentos', label: 'Lançamentos' },
  { path: '/nossas-lojas', label: 'Nossas Lojas' },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.header {
  background: var(--primary);
  color: var(--text);
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.logo-text:hover {
  color: var(--accent);
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--accent);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.delivery-button {
  background: var(--accent);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.delivery-button:hover {
  background: var(--hover);
  transform: scale(1.05);
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  display: none;
}

.mobile-menu {
  display: none;
  background: var(--primary);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid rgba(245, 245, 245, 0.1);
}

.mobile-menu ul {
  list-style: none;
  text-align: center;
}

.mobile-menu li {
  margin: 15px 0;
}

.mobile-menu a {
  color: var(--text);
  text-decoration: none;
  font-size: 18px;
}

.mobile-menu a:hover {
  color: var(--accent);
}

.mobile-menu .delivery-mobile {
  background: var(--accent);
  padding: 10px 20px;
  border-radius: 20px;
  display: inline-block;
}

.mobile-menu .delivery-mobile:hover {
  background: var(--hover);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .header-actions {
    gap: 10px;
  }

  .delivery-button span {
    display: none; /* Esconde o texto em mobile, mantendo apenas o ícone */
  }

  .delivery-button {
    padding: 8px;
    border-radius: 50%;
  }

  .mobile-menu {
    display: block;
  }

  .logo-text {
    font-size: 20px;
  }
}
</style>
