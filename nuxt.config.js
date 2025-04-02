export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google', weights: ['400', '700'] },
      { name: 'Montserrat', provider: 'google', weights: ['400', '500', '700'] },
      { name: 'Roboto', provider: 'google', weights: ['400', '500'] },
    ],
  },
  icon: {
    serverBundle: 'local',
  },
  // Ajuste para site estático
  target: 'static', // Define o Nuxt para gerar um site estático
  nitro: {
    preset: 'vercel', // Usa o preset otimizado para Vercel
  },
  components: [
    { path: '~/components/global', prefix: '' },
    { path: '~/components/UI', prefix: '' },
    '~/components',
  ],
  imports: {
    dirs: ['composables'],
  },
  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXX-Y',
      marketingPixelId: process.env.MARKETING_PIXEL_ID || '123456789',
    },
  },
  app: {
    head: {
      title: "RICK'S BURGERS - O Melhor Hambúrguer da Cidade",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            "Descubra os melhores hambúrgueres no RICK'S BURGERS. Conheça nosso cardápio, lançamentos e encontre uma loja perto de você!",
        },
        { name: 'keywords', content: "hambúrguer, RICK'S BURGERS, delivery, cardápio, franquia" },
        { name: 'robots', content: 'index, follow' },
        { hid: 'og:title', property: 'og:title', content: "RICK'S BURGERS - O Melhor Hambúrguer da Cidade" },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Descubra os melhores hambúrgueres no RICK'S BURGERS. Conheça nosso cardápio, lançamentos e encontre uma loja perto de você!",
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '/images/burger-hero.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          innerHTML: `
            window.initMap = function() {
              console.log('Google Maps API carregada com sucesso!');
            };
          `,
          type: 'text/javascript',
          tagPosition: 'head',
        },
        {
          src: process.env.GOOGLE_MAPS_API_KEY
            ? `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places&loading=async&callback=initMap`
            : '',
          type: 'text/javascript',
          skip: !process.env.GOOGLE_MAPS_API_KEY,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXX-Y'}');
          `,
          type: 'text/javascript',
          tagPosition: 'head',
          skip: (nuxtApp) => !nuxtApp.$cookies?.hasConsent?.('analytics'),
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXX-Y'}`,
          async: true,
          type: 'text/javascript',
          skip: (nuxtApp) => !nuxtApp.$cookies?.hasConsent?.('analytics'),
        },
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.MARKETING_PIXEL_ID || '123456789'}');
            fbq('track', 'PageView');
          `,
          type: 'text/javascript',
          tagPosition: 'head',
          skip: (nuxtApp) => !nuxtApp.$cookies?.hasConsent?.('marketing'),
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-03-27',
  ssr: true, // Ativa SSR para pré-renderizar HTML em um site estático
  hooks: {
    'app:created': (app) => {
      const cookies = useCookies();
      app.$cookies = cookies; // Garante que useCookies esteja disponível globalmente
    },
  },
});