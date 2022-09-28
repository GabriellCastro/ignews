<h1 align="center">

<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="ignews" width="100px"/>

</h1>

<p align="center">
  IGNEWS - Portal de notícias 📰🚀
  <br>
  <br>


  <a href="https://www.linkedin.com/in/eugabrielcastro/">
    <img alt="Made by GabriellCastro" src="https://img.shields.io/badge/made%20by-gabriellcastro-%237519C1">
  </a>

  <a href="https://github.com/gabriellcastro/ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabriellcastro/ignews">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/khalleb/ignews">
</p>

---


<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#demo">Demo</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;  
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;  
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; &#xa0;  
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog.<br> 
<br>
Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.



## 🎬 Demo ##
- click on img - youtube video 
[![ig.news](https://img.youtube.com/vi/2yHJ1sL2KAs/0.jpg)](https://www.youtube.com/watch?v=2yHJ1sL2KAs)


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Github OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

## :checkered_flag: Começando ##

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/gabriellcastro/ignews.git
# Entre na pasta do repositório clonado
$ cd ignews
```

```bash
# Execute yarn para instalar as dependências
$ yarn or npm install

# Na raiz do projeto crie uma copia do arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local

# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev or npm run dev

```

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

## Autor

Feito por Gabriel Castro 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eugabrielcastro/)](https://www.linkedin.com/in/eugabrielcastro/)
[![Gmail Badge](https://img.shields.io/badge/-contatodevgabriel@gmail.com-red?style=flat-square&link=mailto:contatodevgabriel@gmail.com)](mailto:contatodevgabriel@gmail.com)
