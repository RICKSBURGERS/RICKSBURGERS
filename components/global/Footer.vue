<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-logo-wrapper">
      <NuxtImg
        src="#/images/logo/ricks-burgers.svg"
        alt="RICK'S BURGERS Logo"
        class="footer-logo"
        width="120"
        height="auto"
        loading="lazy"
      />
    </div>
    <div class="footer-container">
      <div class="footer-sections">
        <!-- Sobre a Rick's Burgers -->
        <div class="footer-section">
          <h3>Sobre a Rick's Burgers</h3>
          <ul>
            <li><NuxtLink to="/carreiras" aria-label="Carreiras">Carreiras</NuxtLink></li>
            <li><NuxtLink to="/franqueado" aria-label="Seja um Franqueado">Seja um Franqueado</NuxtLink></li>
            <li><NuxtLink to="/imprensa" aria-label="Imprensa">Imprensa</NuxtLink></li>
            <li><NuxtLink to="/nossas-lojas" aria-label="Nossas Lojas">Nossas Lojas</NuxtLink></li>
          </ul>
        </div>
        <!-- Clube do Rick -->
        <div class="footer-section">
          <h3>Clube do Rick</h3>
          <ul>
            <li><NuxtLink to="/clube-do-rick" aria-label="Clube do Rick">Clube do Rick</NuxtLink></li>
            <li><NuxtLink to="/regulamento-clube" aria-label="Regulamento do Clube">Regulamento do Clube</NuxtLink></li>
          </ul>
        </div>
        <!-- Ajuda e Suporte -->
        <div class="footer-section">
          <h3>Ajuda e Suporte</h3>
          <ul>
            <li><NuxtLink to="/central-de-ajuda" aria-label="Central de Ajuda">Central de Ajuda</NuxtLink></li>
          </ul>
        </div>
        <!-- Siga-nos -->
        <div class="footer-social">
          <h3>Siga-nos</h3>
          <div class="social-icons">
            <a
              href="https://facebook.com/ricksburgers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Facebook"
            >
              <Icon name="mdi:facebook" size="24" />
            </a>
            <a
              href="https://instagram.com/ricksburgers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
            >
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a href="https://x.com/ricks_burgers" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Twitter">
              <Icon name="mdi:twitter" size="24" />
            </a>
            <a
              href="https://linkedin.com/company/ricksburgers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no LinkedIn"
            >
              <Icon name="mdi:linkedin" size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <NuxtLink to="/legal/cookies" title="Política de Cookies" rel="nofollow" aria-label="Política de Cookies"
        >Política de Cookies</NuxtLink
      >
      <NuxtLink
        to="/legal/privacidade"
        title="Política de Privacidade"
        rel="nofollow"
        aria-label="Política de Privacidade"
        >Política de Privacidade</NuxtLink
      >
      <NuxtLink to="/legal/termos" title="Termos e Condições" rel="nofollow" aria-label="Termos e Condições"
        >Termos e Condições</NuxtLink
      >
    </div>
    <div class="footer-bottom">
      <hr />
      <p>© {{ currentYear }} RICK'S BURGERS. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: var(--primary);
  color: var(--text);
  padding: 5rem 0 2.5rem;
  position: relative;
}

.footer-logo-wrapper {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.footer-logo {
  max-width: 120px;
  height: auto;
  display: block;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-sections {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-section {
  flex: 1;
  min-width: 180px;
}

.footer-section h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.875rem;
}

.footer-section a:hover {
  color: var(--accent);
}

.footer-social h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: var(--text);
  transition: transform 0.2s;
}

.social-icons a:hover {
  transform: scale(1.1);
}

.footer-legal {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  text-align: center;
}

.footer-legal a {
  color: var(--text);
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.875rem;
  transition: color 0.3s;
}

.footer-legal a:hover {
  color: var(--accent);
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  text-align: left;
}

.footer-bottom hr {
  border: none;
  height: 1px;
  background: var(--text);
  opacity: 0.3;
  margin-bottom: 0.75rem;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: var(--text);
}

@media (max-width: 768px) {
  .footer {
    padding: 4rem 0 2rem;
  }

  .footer-logo-wrapper {
    top: -2.5rem;
  }

  .footer-logo {
    max-width: 100px;
  }

  .footer-sections {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    min-width: 100%;
  }

  .footer-section h3 {
    font-size: 0.875rem;
  }

  .footer-section a {
    font-size: 0.75rem;
  }

  .footer-social h3 {
    font-size: 0.875rem;
  }

  .social-icons a {
    font-size: 1.25rem; /* Ajustado para ícones */
  }

  .footer-legal a {
    font-size: 0.75rem;
    margin: 0 0.75rem;
  }

  .footer-bottom p {
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>