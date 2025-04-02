<template>
  <div class="layout" role="document">
    <Header role="banner" />
    <main role="main" aria-label="Conteúdo principal do Rick's Burgers">
      <Suspense>
        <template #default>
          <Transition name="fade">
            <div>
              <slot />
            </div>
          </Transition>
        </template>
        <template #fallback>
          <div class="loading">Carregando...</div>
        </template>
      </Suspense>
    </main>
    <Footer role="contentinfo" />
    <client-only>
      <CookieBanner role="dialog" />
    </client-only>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('~/components/global/Header.vue'));
const Footer = defineAsyncComponent(() => import('~/components/global/Footer.vue'));
const CookieBanner = defineAsyncComponent(() => import('~/components/global/CookieBanner.vue'));
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 1.5rem;
  padding-bottom: 4rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1rem;
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
    padding-bottom: 3rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>