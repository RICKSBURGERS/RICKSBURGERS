<template>
  <main class="terms-conditions" role="main">
    <header class="policy-header" role="banner">
      <h1>Termos e Condições de Uso – RICK'S BURGERS</h1>
      <p>Última atualização: {{ lastUpdated }}</p>
    </header>

    <section class="policy-content" role="region" aria-label="Conteúdo dos Termos e Condições">
      <h2>1. Aceitação dos Termos</h2>
      <p>
        Estes Termos e Condições de Uso ("Termos") regem o acesso e uso do site <strong>www.ricksburgers.com.br</strong>
        ("Site"), operado pela Rick's Burgers, suas afiliadas ou subsidiárias (coletivamente "Rick's Burgers"). Ao acessar
        ou utilizar o Site, você ("Usuário") concorda em cumprir integralmente estes Termos. Caso não concorde com qualquer
        disposição aqui contida, pedimos que não utilize o Site.
      </p>

      <h2>2. Uso do Site</h2>
      <p>
        O Site é disponibilizado para seu uso pessoal e não comercial. Você concorda em utilizá-lo de forma lícita e de
        acordo com estes Termos, sendo vedado:
      </p>
      <ul>
        <li>Utilizar o Site para fins ilegais ou não autorizados;</li>
        <li>Tentar acessar áreas restritas ou sistemas da Rick's Burgers sem permissão;</li>
        <li>Interferir no funcionamento do Site, incluindo a introdução de vírus ou outros códigos maliciosos;</li>
        <li>Reproduzir, distribuir ou modificar qualquer conteúdo do Site sem autorização expressa da Rick's Burgers.</li>
      </ul>
      <p>
        A Rick's Burgers reserva-se o direito de suspender ou encerrar seu acesso ao Site, a seu critério, caso detecte
        violação destes Termos.
      </p>

      <h2>3. Propriedade Intelectual</h2>
      <p>
        Todo o conteúdo disponível no Site, incluindo textos, imagens, logotipos, marcas, vídeos e design (coletivamente
        "Conteúdo"), é de propriedade da Rick's Burgers ou de terceiros licenciantes e está protegido por leis de direitos
        autorais e propriedade intelectual. Você pode visualizar e utilizar o Conteúdo apenas para fins pessoais e não
        comerciais, sendo expressamente proibido:
      </p>
      <ul>
        <li>Copiar, modificar, distribuir ou utilizar o Conteúdo para fins comerciais sem permissão por escrito;</li>
        <li>Remover avisos de direitos autorais ou marcas registradas do Conteúdo.</li>
      </ul>
      <p>
        Marcas como "Rick's Burgers", "O Melhor Hambúrguer da Cidade" e o logotipo da Rick's Burgers são propriedade
        exclusiva da Rick's Burgers e não podem ser usadas sem consentimento prévio.
      </p>

      <h2>4. Informações Fornecidas pelo Usuário</h2>
      <p>
        Qualquer informação, sugestão ou material que você envie voluntariamente ao Site (como comentários ou ideias) será
        considerado não confidencial. Ao enviar tais informações, você concede à Rick's Burgers uma licença irrestrita,
        mundial e isenta de royalties para utilizá-las, reproduzi-las ou modificá-las, exceto quando se tratar de dados
        pessoais, que serão tratados conforme nossa
        <NuxtLink to="/legal/privacidade" aria-label="Leia a Política de Privacidade da Rick's Burgers"
          >Política de Privacidade</NuxtLink
        >.
      </p>

      <h2>5. Limitação de Responsabilidade</h2>
      <p>
        O Site é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas, incluindo garantias de
        disponibilidade contínua ou ausência de erros. A Rick's Burgers não se responsabiliza por:
      </p>
      <ul>
        <li>
          Danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar o Site;
        </li>
        <li>Interrupções, falhas técnicas ou erros no funcionamento do Site;</li>
        <li>
          Prejuízos causados por vírus, ataques cibernéticos ou outros elementos danosos que possam afetar seu
          dispositivo, desde que tais eventos estejam fora do controle razoável da Rick's Burgers.
        </li>
      </ul>
      <p>
        A responsabilidade da Rick's Burgers, quando aplicável, será limitada ao valor pago por você para acessar o Site,
        conforme permitido pela legislação brasileira.
      </p>

      <h2>6. Links para Sites de Terceiros</h2>
      <p>
        O Site pode conter links para sites de terceiros, como plataformas de delivery ou redes sociais. Esses links são
        fornecidos apenas para sua conveniência, e a Rick's Burgers não endossa nem se responsabiliza pelo conteúdo,
        políticas ou práticas desses sites. O uso de sites de terceiros é de sua exclusiva responsabilidade.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        A coleta, uso e proteção de seus dados pessoais estão descritos em nossa
        <NuxtLink to="/legal/privacidade" aria-label="Leia a Política de Privacidade da Rick's Burgers"
          >Política de Privacidade</NuxtLink
        >, que complementa estes Termos. Recomendamos que você a leia atentamente.
      </p>

      <h2>8. Alterações nos Termos</h2>
      <p>
        A Rick's Burgers pode atualizar estes Termos a qualquer momento, publicando a versão revisada nesta página. A data
        de "Última atualização" será ajustada para refletir tais mudanças. Recomendamos que você consulte esta página
        periodicamente. O uso contínuo do Site após alterações implica aceitação dos novos Termos.
      </p>

      <h2>9. Legislação Aplicável e Jurisdição</h2>
      <p>
        Estes Termos são regidos pelas leis da República do Brasil. Qualquer disputa relacionada ao Site ou a estes Termos
        será submetida exclusivamente ao foro da Comarca de São Paulo, SP, Brasil, renunciando a qualquer outro, por mais
        privilegiado que seja. Se você acessar o Site de outra jurisdição, é responsável por cumprir as leis locais
        aplicáveis.
      </p>

      <h2>10. Contato</h2>
      <p>
        Para dúvidas, sugestões ou reclamações sobre estes Termos, entre em contato conosco pelo e-mail
        <a href="mailto:contato@ricksburgers.com.br" aria-label="Enviar e-mail para contato@ricksburgers.com.br"
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
  const date = new Date(policiesData.terms.lastUpdated);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
});

useHead({
  title: "Termos e Condições - RICK'S BURGERS",
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        "Leia os Termos e Condições da Rick's Burgers para entender as regras de uso do site, restrições e responsabilidades.",
    },
    { name: 'keywords', content: "termos e condições, Rick's Burgers, uso do site, propriedade intelectual" },
    { hid: 'og:title', property: 'og:title', content: "Termos e Condições - RICK'S BURGERS" },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        "Leia os Termos e Condições da Rick's Burgers para entender as regras de uso do site, restrições e responsabilidades.",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:image', property: 'og:image', content: '/images/burger-hero.jpg' },
  ],
});
</script>

<style scoped>
.terms-conditions {
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
  .terms-conditions {
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
