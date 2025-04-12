import { ref, onMounted } from 'vue';
import { useCookie, useNuxtApp } from '#imports';

export function useCookies() {
  const { $isClient } = useNuxtApp();
  const consent = ref(null);
  const cookieConsent = useCookie('cookieConsent', {
    maxAge: 365 * 24 * 60 * 60, // 1 ano
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  const loadConsent = () => {
    if (!$isClient) return;
    const value = cookieConsent.value;
    if (value) {
      try {
        consent.value = JSON.parse(value);
        console.log('Consentimento carregado:', consent.value);
      } catch (error) {
        console.error('Erro ao parsear cookie:', error);
        consent.value = null;
      }
    }
  };

  const saveConsent = (newConsent) => {
    if (!$isClient) return;
    try {
      const consentData = { ...newConsent };
      cookieConsent.value = JSON.stringify(consentData);
      consent.value = consentData;
      console.log('Cookie salvo:', cookieConsent.value);
      console.log('Consent atualizado:', consent.value);
    } catch (error) {
      console.error('Erro ao salvar consentimento:', error);
    }
  };

  const hasConsent = (type) => {
    return consent.value?.[type] === true;
  };

  // Carregar o consentimento automaticamente no cliente
  onMounted(() => {
    if ($isClient) loadConsent();
  });

  return { consent, saveConsent, hasConsent, loadConsent };
}