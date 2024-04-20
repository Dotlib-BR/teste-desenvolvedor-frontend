import { forEach } from "cypress/types/lodash";

describe('Localhost App Test', () => {
  it('Visits the localhost app and checks the medicine table', () => {
    // Visita o seu aplicativo React em localhost
    cy.visit('http://localhost:3001');

    const headerLogo = 'img.logo';
    const headerTitle = {
      selector: 'h1',
      text: "Teste para Desenvolvedor Frontend"
    };

    const tableTitle = {
      selector: '.table_container h2',
      text: "Tabela de Medicamentos"
    };
    
    const tableSearchInput = {
      selector: '.table_container .MuiFormControl-root',
      text: "Buscar por Nome ou Laboratório"
    };
    const table = {
      selector: '.table_container .tabulator',
      collumns: ["Nome", "Publicado em", "Laboratório"]
    };

    // Asserção para garantir que a logo esteja presente
    cy.get(headerLogo).should('exist');

    // Verifica se o atributo src da logo não está vazio
    cy.get(headerLogo).should('have.attr', 'src').should('not.be.empty');

    // Asserção para garantir que o título esteja presente
    cy.get(headerTitle.selector).contains(headerTitle.text).should('exist');

    // Asserção para garantir que o título da tabela esteja presente
    cy.get(tableTitle.selector).contains(tableTitle.text).should('exist');

    // Asserção para garantir que o campo de busca da tabela esteja presente
    cy.get(tableSearchInput.selector).contains(tableSearchInput.text).should('exist');

    // Asserção para garantir que o campo de busca da tabela esteja presente
    cy.get(table.selector).should('exist');

    table.collumns.forEach(collumn => {
      cy.get(table.selector).contains(collumn).should('exist');
    });
  });
});
