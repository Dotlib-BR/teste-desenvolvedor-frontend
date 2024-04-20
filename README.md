# Projeto API e Frontend

Este projeto foi desenvolvido como parte do teste para a vaga de Desenvolvedor Frontend na DotLib.

## Sobre o projeto

Este projeto é um aplicativo Progressive Web Application (PWA) desenvolvido em TypeScript, React e Material UI. O objetivo principal é criar um bulário eletrônico que permita aos usuários consultar e visualizar informações sobre bulas de medicamentos de forma responsiva e organizada.

## Tecnologias Utilizadas

- TypeScript: Para adicionar tipagem estática ao JavaScript e melhorar a robustez do código.

- React: Utilizado como biblioteca principal para criar interfaces de usuário dinâmicas.

- Material UI: Framework de design que fornece componentes pré-estilizados e temas para criar uma experiência de usuário consistente.

- API REST: Consumida pela aplicação para obter dados sobre os medicamentos, como nome, data de publicação, empresa fabricante, documentos e princípios ativos.

- Docker e Docker Compose: Ferramentas utilizadas para facilitar o desenvolvimento, empacotamento e implantação da aplicação em ambientes isolados e controlados por contêineres.

## Funcionalidades Implementadas

1. Recriação da Logo e Ícone:

   A logo e o ícone da aplicação foram recriados em alta resolução para melhorar as métricas de SEO e garantir uma representação visual nítida da marca.

2. Paleta de Cores Personalizada:

   Uma paleta de cores foi montada com base na identidade visual da empresa, proporcionando uma experiência visual coesa e alinhada com a marca.

3. Manifesto Personalizado para PWA:

   Foi criado um manifesto personalizado que define cores e logos específicos para transformar a aplicação em um Progressive Web App (PWA), permitindo instalação e uso offline.

4. Tema do Material UI:

   Um tema personalizado do Material UI foi implementado para garantir consistência e personalização estilística em toda a aplicação.

5. Modularização e Organização:

   Os componentes, temas e demais funcionalidades foram modularizados e organizados de forma a facilitar a manutenção e expansão do projeto.

6. Consumo de API com Axios:

   A API REST foi consumida utilizando Axios para realizar requisições HTTP de forma assíncrona e eficiente.

7. Tipagem dos Dados:

   Foram criadas tipagens TypeScript para os dados dos medicamentos, garantindo maior robustez e prevenção de erros durante o desenvolvimento.

8. Visualização Tabular dos medicamentos com React Tabulator:

   O React Tabulator foi utilizado para criar uma interface tabular dos dados dos medicamentos, oferecendo recursos avançados de visualização e interação.

9. Detalhes dos medicamentos com Modal da Material UI:

   Utilizou-se o componente Modal do Material UI para apresentar detalhes completos dos medicamentos de forma clara e responsiva.

10. Links para Visualização e Download da Bula:

Foram adicionados links para visualizar e baixar as bulas dos medicamentos, permitindo acesso rápido e conveniente às informações adicionais.

11. Gerenciamento de Scripts com Cross-Env:

Foi implementado um script customizado com cross-env para iniciar o frontend em uma porta diferente da padrão (3001 ao invés de 3000), possibilitando a execução simultânea com a API sem conflitos.

12. Simulação de API com json-server:

O json-server foi utilizado para simular a API REST durante o desenvolvimento, facilitando o teste e a prototipagem da aplicação.

13. Execução Paralela com npm-run-all:

Utilizou-se o npm-run-all para rodar a API e o frontend em paralelo através de um único script, simplificando o processo de desenvolvimento e depuração.

14. Auditoria de Performance com Lighthouse:

Uma auditoria detalhada de performance foi realizada utilizando Lighthouse, garantindo que a aplicação atenda aos padrões de desempenho e usabilidade.

15. Testes E2E e de Componentes com Cypress:

Implementou-se testes automatizados E2E utilizando Cypress para simular interações do usuário em diferentes partes da aplicação.

Desenvolveu-se testes de componentes no Cypress para verificar o funcionamento correto de unidades específicas da aplicação, isoladamente.

15. Integração do Docker:

Foram criados Dockerfiles específicos para os ambientes de desenvolvimento (dev) e produção (prod) para serem utilizados com o Docker Compose.

## Scripts do projeto

0. Instale as dependências necessárias (se ainda não estiverem instaladas):

```bash
  npm install
```

1. Inicie o Servidor da API e Frontend em Paralelo (portas 3000 e 3001):

```bash
   npm run start
```

1. 1. Inicie somente o Servidor frontend (porta 3001):

```bash
   npm run start-frontend
```

1. 2. Inicie somente o Servidor da API (porta 3000):

```bash
   npm run start-api
```

1. 3. Inicie servidor em produção (porta 80, somente o front, antes deve ser efetuada a build do app):

```bash
   npm run start-prod
```

2. Auditoria de Performance com Lighthouse:

```bash
   npm run audit
```

3. Compile a Aplicação para Produção:

```bash
   npm run build
```

4. Compile a Aplicação para Produção e inicie servidor em produção (porta 80, somente o front):

```bash
   npm run build-start-prod
```

5. Abra o Cypress para executar os testes:

```bash
   npm run cypress:open
```

## Rodando o Aplicativo em Docker

Este guia explica como rodar o aplicativo usando Docker em um ambiente de produção.

### Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode encontrar instruções de instalação em:

- Docker: https://docs.docker.com/get-docker/
- Docker Compose: https://docs.docker.com/compose/install/

### Passos (Desenvolvimento)

1. Rodar o Aplicativo em Docker Compose (Desenvolvimento):

```bash
   docker-compose up dev
```

### Passos (Produção)

1. Construir o Aplicativo:

```bash
   npm install # Instala as dependências
   npm run build # Compila a aplicação
```

2. Rodar o Aplicativo em Docker Compose (Produção):

```bash
   docker-compose up prod
```

3. Acessar o Aplicativo

[http://localhost](http://localhost)

## Sobre a API

Utilize os seguintes endpoints para carregar as informações:

```sh
# retorna todos os items paginados de 10 em 10
GET http://localhost:3000/data

# retorna um determinado medicamento consultado pelo id
GET http://localhost:3000/data/:id

# retorna os items paginados
GET http://localhost:3000/data?_page=:number
```

### Exemplo da resposta:

```json
{
  "id": "9fd2789c-50f5-4743-857b-bbfa746ed631",
  "name": "AMOXICILINA",
  "published_at": "2022-12-16T18:24:24.000Z",
  "company": "MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA",
  "documents": [
    {
      "id": "57a35a05-1615-491c-b5ae-48ad770cdd53",
      "expedient": "5064642229",
      "type": "PROFESSIONAL",
      "url": "http://localhost:3000/pdf_sample.pdf"
    },
    {
      "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fac",
      "expedient": "5064642229",
      "type": "PATIENT",
      "url": "http://localhost:3000/pdf_sample.pdf"
    }
  ],
  "active_principles": [
    {
      "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad574",
      "name": "HIDROQUINONA"
    }
  ]
}
```

### Dicionário de dados

| Campo                    | Descrição                                                  | Tipo     |
| ------------------------ | ---------------------------------------------------------- | -------- |
| `id`                     | identificador do medicamento                               | `string` |
| `name`                   | nome do medicamento                                        | `string` |
| `published_at`           | data de publicação                                         | `string` |
| `company`                | nome do laboratório                                        | `string` |
| `documents.id`           | identificador da bula profissional ou paciente             | `string` |
| `documents.expedient`    | registro da bula em orgãos responsáveis                    | `string` |
| `documents.type`         | tipo da bula (PROFESSIONAL ou PATIENT)                     | `string` |
| `documents.url`          | URL da bula                                                | `string` |
| `active_principles.id`   | identificador do princípio ativo encontrado no medicamento | `string` |
| `active_principles.name` | nome do princípio ativo encontrado no medicamento          | `string` |

## Contato

[Email: contato@tpereira.com.br](mailto:contato@tpereira.com.br)
[Whatsapp: (21) 98903-2187](https://wa.me/5521989032187)
