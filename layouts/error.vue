<template>
  <div class="error-page">
    <header class="error-header">
      <h1>{{ statusCode }} – {{ statusCode === 404 ? 'Página Não Encontrada' : 'Erro no Servidor' }}</h1>
      <p v-if="statusCode === 404">
        Oops! Parece que você se perdeu no caminho para o sabor.
      </p>
      <p v-else>
        Desculpe-nos, algo deu errado no nosso lado. Estamos trabalhando para resolver isso!
      </p>
    </header>

    <section class="error-content">
      <NuxtImg
        src="/images/404-burger.png"
        alt="Hambúrguer perdido"
        width="300"
        height="300"
        class="error-image"
      />
      <p v-if="statusCode === 404">
        A página que você está procurando não existe ou foi devorada por um hambúrguer faminto. Que tal voltar ao cardápio ou encontrar uma de nossas lojas?
      </p>
      <p v-else>
        Tente novamente mais tarde ou entre em contato com nosso suporte.
      </p>
      <div class="error-actions">
        <NuxtLink to="/" class="cta-button">Voltar ao Início</NuxtLink>
        <NuxtLink to="/cardapio" class="cta-button">Ver Cardápio</NuxtLink>
        <NuxtLink to="/nossas-lojas" class="cta-button">Nossas Lojas</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  head() {
    const title =
      this.statusCode === 404
        ? "Página Não Encontrada - Rick's Burgers"
        : "Erro no Servidor - Rick's Burgers";
    const description =
      this.statusCode === 404
        ? "Oops! A página que você está procurando não foi encontrada no site da Rick's Burgers."
        : "Ocorreu um erro no servidor da Rick's Burgers. Tente novamente mais tarde.";
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        // Adicionados metadados Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: '/images/404-burger.png' },
      ],
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
  },
};
</script>

<style scoped>
.error-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

.error-header {
  margin-bottom: 40px;
}

.error-header h1 {
  font-size: 64px;
  font-weight: 700;
  color: #F28C38;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.error-header p {
  font-size: 20px;
  color: #A68A64;
  margin-top: 10px;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.error-image {
  max-width: 100%;
  height: auto;
}

.error-content p {
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  max-width: 600px;
}

.error-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  background: #355C47;
  color: #F5F5F5;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #2A4A38;
}

/* Media query para responsividade */
@media (max-width: 768px) {
  .error-header h1 {
    font-size: 48px;
  }

  .error-header p {
    font-size: 16px;
  }

  .error-content p {
    font-size: 16px;
  }

  .error-image {
    width: 200px;
    height: 200px;
  }

  .cta-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>