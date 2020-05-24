# Deno API! 🦕

<p align="center">
  <img src="./.github/deno-logo.svg" width=200 />
</>

<p align="center">Testanto o novo <b>runtime</b> Deno! 🦖</p>

<p align="center">
  <a href="#-sobre-o-deno">Sobre o deno</a> |
  <a href="#-tecnologias">Tecnologias</a> |
  <a href="#-projeto">Projeto</a> |
  <a href="#-instalação">Instalação</a> |
  <a href="#-como-contribuir">Como contrubuir</a> |
  <a href="#memo-licença">Licença</a>
</p>

## ❕ Sobre o Deno:

O **Deno** tem a mesma função do amado **NodeJS**, rodar JavaScript no backend, porém com algumas features a mais!

Nesse repositório, fiz um exemplo de uma API com Deno para estudar um pouco mais sobre essa nova ferramenta!

### 👀 Alguns vídeos sobre o Deno que vale a pena dar uma olhada:

- [Canal: Cod3r Cursos | Vídeo: DENO 1.0 chegou!! Testando o novo Runtime JavaScript e TypeScript!](https://www.youtube.com/watch?v=cvF9fdWYy-4);

- [Canal: Harry Wolff | Vídeo: Using Deno to Build a HTTP Server](https://www.youtube.com/watch?v=dp8eedoRpyo);

- [Canal: Program With Erik | Vídeo: Is Deno Going To Replace Node.js? An Introduction Tutorial. Created by Ryan Dahl - TypeScript/JS](https://www.youtube.com/watch?v=zFf_fcn0cI0);

## 🔨 Tecnologias:

- [Deno](https://deno.land/)
- [Oak](https://github.com/oakserver/oak)
- [Denon](https://github.com/denosaurs/denon)
- [Deno Mongo](https://github.com/manyuanrong/deno_mongo)
- [Dotenv](https://github.com/pietvanzoen/deno-dotenv)

### Resumo de cada tecnologia:

- Oak:
  Micro framework para cuidar de rotas e middlewares. É o equivalente ao _express_ para o **NodeJS**.

- Denon:
  **Muito importante:** O _denon_ serve como o _Nodemon_ para o **NodeJS**. Essa módulo observa seu projeto e quando ocorre alguma alteração, ele dá auto refresh no servidor!
  Para ver as configurações do _denon_, clique [aqui](.denon.json).

- Deno Mongo:
  Faz conexão com banco de dados MongoDB, para criar o DB, utilize o **Docker**, dando o comando:

```bash
sudo docker run --name mongodb -p 27017:27017 -d mongo
```

- Dotenv:
  Módulo para manusear variáveis de ambiente.

## 🔖 Rotas:

Para testar as rotas dessa API, clique:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Deno%20API&uri=https%3A%2F%2Fgithub.com%2Fjoaopedroasz%2Fdeno-API%2Fblob%2Fmaster%2F.github%2Froutes.json)

## 🤔 Como contribuir:

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença:

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤ por João Pedro Araújo. [Veja meu Linkedin!](https://www.linkedin.com/in/joaopedroasz/)
