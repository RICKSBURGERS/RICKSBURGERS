<template>
  <main class="cookie-policy" role="main">
    <header class="policy-header" role="banner">
      <h1>Política de Cookies – Rick's Burgers</h1>
      <p>Última atualização: {{ lastUpdated }}</p>
    </header>

    <section class="policy-content" role="region" aria-label="Conteúdo da Política de Cookies">
      <h2>1. O que são Cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto ou fragmentos de informação baixados em seu computador, smartphone ou
        outro dispositivo com acesso à internet quando você visita o site
        <strong>www.ricksburgers.com.br</strong> ("Site"). Eles contêm informações sobre sua navegação e ajudam o Site a
        lembrar suas preferências, melhorando a experiência de uso. Esses arquivos ocupam um espaço mínimo de memória e
        não afetam o desempenho do seu dispositivo. A maioria dos cookies é apagada ao encerrar a sessão, exceto os
        persistentes, que permanecem até expirarem ou serem excluídos.
      </p>

      <h2>2. Por que Utilizamos Cookies?</h2>
      <p>
        Na <strong>Rick's Burgers</strong>, utilizamos cookies para oferecer a melhor experiência possível no Site,
        tornando-o mais fácil e personalizado com base em suas escolhas e comportamento de navegação. Especificamente,
        os cookies nos permitem:
      </p>
      <ul>
        <li>Garantir o funcionamento básico do Site, como navegação e segurança;</li>
        <li>Analisar padrões de uso para aprimorar o desempenho e a funcionalidade;</li>
        <li>Personalizar conteúdos e exibir anúncios relevantes aos seus interesses.</li>
      </ul>

      <h2>3. Tipos de Cookies que Utilizamos</h2>
      <p>
        Utilizamos diferentes categorias de cookies para atender às necessidades do Site:
      </p>
      <ul>
        <li>
          <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do Site, como permitir a navegação entre
          páginas e o acesso a áreas seguras. Sem eles, o Site não opera corretamente. Esses cookies não requerem seu
          consentimento específico e podem incluir proteção contra ataques maliciosos ou armazenamento temporário de
          login.
        </li>
        <li>
          <strong>Cookies Analíticos:</strong> Coletam informações anônimas sobre como você utiliza o Site, como páginas
          visitadas e tempo de navegação. Usamos essas informações para melhorar a experiência geral e identificar áreas
          que precisam de manutenção. Exemplo: Google Analytics.
        </li>
        <li>
          <strong>Cookies Comportamentais:</strong> Semelhantes aos analíticos, esses cookies registram suas visitas e
          interações para oferecer conteúdo personalizado e anúncios alinhados aos seus interesses, como promoções de
          hambúrgueres ou novidades da Rick's Burgers.
        </li>
      </ul>

      <h2>4. Cookies de Terceiros</h2>
      <p>
        Além dos cookies próprios da Rick's Burgers, permitimos que parceiros confiáveis, como Google Analytics e
        plataformas de publicidade, coloquem cookies no Site. Esses cookies de terceiros ajudam a analisar o tráfego,
        medir a eficácia de campanhas e personalizar anúncios. Eles são regidos pelas políticas de privacidade desses
        provedores, e as informações coletadas não incluem dados pessoais identificáveis, como nome ou e-mail, a menos
        que você os forneça voluntariamente.
      </p>

      <h2>5. Como Gerenciar Cookies?</h2>
      <p>
        Ao acessar o Site pela primeira vez, você verá um banner de cookies onde pode aceitar todos os cookies ou
        personalizar suas preferências, escolhendo quais categorias deseja ativar. Você pode alterar essas configurações
        a qualquer momento revisitando o banner ou ajustando as opções no seu navegador. A maioria dos navegadores (como
        Chrome, Firefox, Safari) permite bloquear ou excluir cookies nas configurações de privacidade – consulte o menu
        "Ajuda" do seu navegador para instruções. Note que desativar cookies essenciais pode comprometer o funcionamento
        do Site.
      </p>

      <h2>6. Alterações a Esta Política</h2>
      <p>
        A Rick's Burgers pode revisar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas
        ou na legislação aplicável, como a Lei Geral de Proteção de Dados (LGPD). Atualizações serão publicadas nesta
        página, e a data de "Última atualização" será ajustada. Recomendamos que você a consulte regularmente.
      </p>

      <h2>7. Contato</h2>
      <p>
        Para dúvidas ou mais informações sobre nossa Política de Cookies, entre em contato pelo e-mail
        <a
          href="mailto:contato@ricksburgers.com.br"
          aria-label="Enviar e-mail para contato@ricksburgers.com.br"
          >contato@ricksburgers.com.br</a
        >.
      </p>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useHead } from '#imports';
import policiesData from '~/data/policies.json';

const lastUpdated = computed(() => {
  const date = new Date(policiesData.cookies.lastUpdated);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
});

useHead({
  title: "Política de Cookies - RICK'S BURGERS",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        "Saiba como a Rick's Burgers utiliza cookies para melhorar sua experiência no site. Leia nossa Política de Cookies.",
    },
    { name: 'keywords', content: "política de cookies, Rick's Burgers, privacidade, cookies analíticos" },
    { hid: 'og:title', property: 'og:title', content: "Política de Cookies - Rick's Burgers" },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Saiba como a Rick's Burgers utiliza cookies para melhorar sua experiência no site. Leia nossa Política de Cookies.",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/burger-hero.jpg' },
  ],
});
</script>

<style scoped>
.cookie-policy {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  color: #333;
}

.policy-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--accent);
}

.policy-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.policy-header p {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  font-style: italic;
}

.policy-content h2 {
  font-size: 28px;
  font-weight: 600;
  color: #a68a64;
  margin: 40px 0 20px;
  font-family: 'Playfair Display', serif;
}

.policy-content p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.policy-content ul {
  list-style: disc;
  padding-left: 30px;
  margin-bottom: 25px;
}

.policy-content li {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.policy-content strong {
  color: var(--primary);
  font-weight: 700;
}

.policy-content a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}

.policy-content a:hover {
  text-decoration: underline;
  color: #d97a30;
}

@media (max-width: 768px) {
  .cookie-policy {
    margin: 40px auto;
    padding: 0 15px;
  }

  .policy-header h1 {
    font-size: 36px;
  }

  .policy-header p {
    font-size: 14px;
  }

  .policy-content h2 {
    font-size: 24px;
    margin: 30px 0 15px;
  }

  .policy-content p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .policy-content ul {
    padding-left: 20px;
  }

  .policy-content li {
    font-size: 16px;
    margin-bottom: 15px;
  }
}
</style>
