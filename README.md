# Projeto de Teste Frontend Dot.Lib

Teste técnico desenvolvido para a Dot.Lib, utilizando as seguintes tecnologias:

- **React**
- **TypeScript**
- **SASS**
- **React Router**
- **Vite**
- **Context API**
- **Axios**

## Funcionalidades

Como bônus, o projeto inclui as seguintes funcionalidades:

- Possibilidade de baixar um PDF para cada medicamento.
- Opção para copiar o ID de cada medicamento.
- Tratamento especial de imagens para evitar mudanças no layout (CLS).
- Criação de páginas dedicadas para cada medicamento (`/medicine/details?id`).

## Configuração do Projeto

### Instalação

Para executar este projeto localmente, siga os passos abaixo:

```bash
git clone https://github.com/raulluz/teste-dot-lib.git
cd teste-dot-lib
npm install
```

Executando o Projeto
Para iniciar o projeto, utilize o seguinte comando:

```bash
npm run dev
```
Acesse a aplicação em http://localhost:5173.

Para carregar a api, use o json-server:

```bash
npm install -g json-server
json-server api/dotlib.json -s ./api/public
```

Acesse os dados simulados da API em http://localhost:3000.

