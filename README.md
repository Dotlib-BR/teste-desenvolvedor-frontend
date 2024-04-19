<h1 align="center" id="top"> Bulatório Eletrônico dot.lib </h1>

  <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/notebook.png" alt="Imagem 5"/>


> 🔎 Website para buscar bulas de remédio

## :page_facing_up: Desafio Técnico: Bulatório Eletrônico

**Visão Geral**:
Este desafio tem como objetivo testar as minhas habilidades com React, SASS, TypeScript, Context API e muito mais para a vaga de Desenvolvedor Front-end Jr na dot.lib.

**Requisitos Funcionais**:

- Possuir uma consulta por nome do medicamento ou laboratório farmacêutico e apresentar os resultados em uma listagem
- Possuir ordenação pela data de publicação do medicamento
- Possuir uma paginação de 10 em 10 items por página
- O conteúdo deverá ser lido por meio de uma api REST disponibilizada na pasta `api` deste repositório
  
## 📁 Pages

- **Home:** página principal do projeto, que tem campo de busca, opção de filtro por data, renderização de médicamentos e detalhes de cada medicamento, como por exemplo empresa, data de publlicação, logo da empresa, foto da caixa de remédio, princípio ativo e muito mais.
- **Query:** página que mostra os resultados da busca feita lá na home page.
- **Not Found:** página de erro da aplicação.

## 🎯 Steps

**Configuração Inicial**:

- Inicializei o projeto utilizando React.js, TypeScript e SASS para uma base sólida e eficiente.
- Configurei o projeto com prettier, eslint, axios, react router dom, criei as minhas pastas de componentes, pages e layout juntamente com seus respectivos arquivos para o setup inicial.

**Estrutura :**

- Criei uma estrutura organizada para facilitar a manutenção e escalabilidade do projeto.
  Dividi as pastas principais em **.github, components, context, hook, interface, layout, pages, routes, services, styles, utils**.

Este é um breve guia sobre a estrutura de pastas do projeto. Aqui está uma visão geral das pastas principais:

- **.github**: Esta pasta armazena recursos relacionados à documentação, como prints e informações adicionais sobre o funcionamento do projeto.

- **components**: Aqui estão localizados os componentes reutilizáveis do React, que são unidades independentes de interface do usuário.

- **context**: Utilizamos a Context API do React para gerenciar o estado global da aplicação. Este diretório é o hub central para o compartilhamento de dados entre componentes.

- **hook**: Nesta pasta, encontram-se os custom hooks do React, que são utilizados para reutilizar lógicas de estado e efeitos entre componentes.

- **interface**: Este diretório contém as definições de tipos, promovendo consistência nas interfaces usadas em todo o projeto.

- **layout**: Aqui estão os componentes de layout compartilhados entre várias páginas ou componentes do aplicativo.

- **pages**: Esta pasta contém o núcleo da aplicação, onde são definidas as páginas principais.

- **routes**: Neste diretório são definidas e organizadas as rotas da aplicação.

- **services**: Este diretório agrupa partes relacionadas à integração com a API, como a criação de baseUrl.

- **styles**: Aqui ficam os arquivos de estilos, como CSS, SASS ou módulos de estilos do React.

- **utils**: Armazenamos funções utilitárias e helpers neste diretório para manter o código limpo e modular.

**Implementação Inicial:**

- Na raiz do projeto, construi um aplicação funcional, para que depois eu pudesse refatorar.
- Minha ideia nesse projeto foi usar o mínimo de bibliotecas possíveis, tive como objetivo fazer a maioria das coisas na mão.
- Organizei as operações iniciais e a estrutura funcional.

**Refatoração e Organização:**

- Refatorei o código inicial, utilizando mixins no css e também adicionando novos componentes reutilizáveis.
- Simplifiquei funções
- Refatorei o acesso a api utilizando hooks e context api

**Introdução do Contexto:**

- Criei um contexto em context para gerenciar o estado global da aplicação, facilitando o acesso a api

**Estilização Responsiva:**

- Utilizando o SASS, criei breakpoints para me auxiliar na responsividade.

**Aprimoramentos Adicionais:**

- Adicionei recursos como um componente de loading para indicar carregamento de dados.
- Adicionei lógica para download de bula.
- Implementei página de erro.

## 📁 Screens Mobile

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/mobile.png" alt="Imagem 1" width="200"/>
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/mobile-2.png" alt="Imagem 2" width="200"/>
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/mobile-3.png" alt="Imagem 3" width="200"/>
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/mobile-4.png" alt="Imagem 4" width="200"/>
</div>

## 📁 Screens Desktop
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/notebook.png" alt="Imagem 5" width="500"/>
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/notebook-2.png" alt="Imagem 6" width="500"/>
    <img src="https://github.com/brunowzz/teste-desenvolvedor-frontend/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/notebook-3.png" alt="Imagem 7" width="500"/>
</div>

## 🚀 Tecnologiaas

- [React](https://react.dev)
- [Axios](https://axios-http.com/docs/intro)
- [Typescript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com)
- [React Router](https://reactrouter.com/en/main)

## :white_check_mark: Requerimento

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciar

Para carregar a api, use o [json-server](https://github.com/typicode/json-server)
Para rodar o projeto instale o [PNPM](https://pnpm.io/pt/)

```
#  Clone este projeto
$ git clone https://github.com/brunowzz/teste-desenvolvedor-frontend

## API Rest

npm install -g json-server
json-server api/dotlib.json -s ./api/public
# O servidor será inicializado em <http://localhost:3000>

## Projeto React

# Acessar
$ cd electronic-booklet
# Instalar dependências
$ pnpm i
# Execute o projeto
$ pnpm run dev
# O servidor será inicializado em <http://localhost:5174>
```


## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/brunowzz">
        <img src="https://avatars.githubusercontent.com/u/94939630?v=4" width="160px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Bruno Vinícius</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.
