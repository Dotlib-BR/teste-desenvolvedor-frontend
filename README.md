# Bulário Eletrônico

O Bulário Eletrônico é uma aplicação web que permite aos usuários pesquisar e visualizar informações sobre medicamentos, incluindo seus princípios ativos, documentos relacionados e data de publicação.

---

## Instruções de Instalação

### 1. Configuração da API

Para iniciar o servidor da API, siga estas etapas:

1. Instale o pacote `json-server` globalmente:

   ```bash
   npm install -g json-server
2. Execute o seguinte comando para iniciar o servidor da API:
   ```bash
    json-server api/dotlib.json -s ./api/public


### 2. Configuração do Website
Após configurar a API, siga estas etapas para iniciar o website:

1. Instale as dependências do projeto:
     ```bash
   npm install
   
2. Inicie o servidor de desenvolvimento:
     ```bash
    npm run dev
    
Isso iniciará o website na porta 5173 por padrão. Você pode acessar o Bulário Eletrônico em seu navegador usando o endereço http://localhost:5173.

### Funcionalidades
* Pesquisa de Medicamentos: Os usuários podem buscar medicamentos pelo nome ou pelo laboratório farmacêutico.
* Ordenação: Os resultados da pesquisa podem ser ordenados por ordem crescente ou decrescente da data de publicação.
* Paginação: Os resultados da pesquisa são exibidos em páginas, permitindo aos usuários navegar entre elas.
* Detalhes do Medicamento: Ao clicar em um medicamento na lista de resultados, os usuários podem visualizar detalhes adicionais, incluindo os princípios ativos e documentos relacionados.
## Tecnologias Usadas
* React: Biblioteca JavaScript para construção de interfaces de usuário.
* Axios: Cliente HTTP para fazer requisições à API.
* Tailwind CSS: Framework CSS para estilização rápida e responsiva.
* JSON Server: Simples servidor de API REST para desenvolvimento e prototipagem rápida.

## Figma Design

You can view the design of the Bulário Eletrônico on Figma: [Bulário Eletrônico - Figma Design](https://www.figma.com/file/3q4qZEW46lt1YbVCF29WZd/Bul%C3%A1rio?type=design&node-id=0%3A1&mode=design&t=p8hVYCIANGJExcIV-1)
