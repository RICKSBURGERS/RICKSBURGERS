<template>
  <div v-if="shouldShowBanner" class="cookie-banner">
    <div class="cookie-content">
      <h2>🍪 Nós usamos cookies!</h2>
      <p>
        Utilizamos cookies para melhorar sua experiência, personalizar conteúdos e analisar o tráfego. Você pode aceitar
        todos, rejeitar todos ou configurar suas preferências.
      </p>
      <div class="cookie-actions">
        <button @click="acceptAll" class="btn btn-accept">Aceitar Todos</button>
        <button @click="customize" class="btn btn-customize">Configurar</button>
        <button @click="rejectAll" class="btn btn-reject">Rejeitar Todos</button>
      </div>
    </div>

    <div v-if="showCustomize" class="cookie-modal">
      <div class="modal-content">
        <h3>Configurar Cookies</h3>
        <div class="cookie-option">
          <label>
            <input type="checkbox" v-model="tempConsent.necessary" disabled checked />
            Cookies Necessários (sempre ativos)
          </label>
          <p>Essenciais para o funcionamento do site.</p>
        </div>
        <div class="cookie-option">
          <label>
            <input type="checkbox" v-model="tempConsent.analytics" />
            Cookies de Análise
          </label>
          <p>Nos ajudam a entender como você usa o site.</p>
        </div>
        <div class="cookie-option">
          <label>
            <input type="checkbox" v-model="tempConsent.marketing" />
            Cookies de Marketing
          </label>
          <p>Usados para oferecer anúncios personalizados.</p>
        </div>
        <div class="modal-actions">
          <button @click="savePreferences" class="btn btn-save">Salvar</button>
          <button @click="showCustomize = false" class="btn btn-cancel">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCookies } from '~/composables/useCookies';

const { consent, saveConsent, loadConsent } = useCookies();
const showCustomize = ref(false);
const tempConsent = ref({
  necessary: true,
  analytics: false,
  marketing: false,
});

// Verifica se o banner deve ser exibido
const shouldShowBanner = ref(true);

// Carrega o consentimento na montagem do componente
onMounted(() => {
  loadConsent();
  shouldShowBanner.value = consent.value === null;
});

const acceptAll = () => {
  saveConsent({
    necessary: true,
    analytics: true,
    marketing: true,
  });
  shouldShowBanner.value = false;
};

const rejectAll = () => {
  saveConsent({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  shouldShowBanner.value = false;
};

const customize = () => {
  showCustomize.value = true;
};

const savePreferences = () => {
  saveConsent({
    necessary: true,
    analytics: tempConsent.value.analytics,
    marketing: tempConsent.value.marketing,
  });
  showCustomize.value = false;
  shouldShowBanner.value = false;
};
</script>