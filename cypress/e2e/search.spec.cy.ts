describe('Ensure the search function is working correctly', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001')
	})

	it('Should search with partial and full medicine name', () => {
		const inputSearch = cy.get("input[placeholder*='Pesquise seu remédio']")
		const buttonSearch = cy.get('button').contains('Pesquisar')

		inputSearch.should('be.visible')

		inputSearch.type('ACEZO')
		buttonSearch.click()

		cy.get('li').contains('ACEZO').should('be.visible')
		cy.get('li').contains('11/11/2022').should('be.visible')

		const buttonResetSearch = cy.get('button').contains('Reiniciar')
		buttonResetSearch.click()

		inputSearch.type('CILINA')
		cy.get('li').contains('AMOXICILINA SÓDICA + CLAVULANATO DE POTÁSSIO').should('be.visible')
	})

	it('Should search with partial and full medicine id', () => {
		const inputSearch = cy.get("input[placeholder*='Pesquise seu remédio']")
		const buttonSearch = cy.get('button').contains('Pesquisar')

		inputSearch.should('be.visible')

		inputSearch.type('9fd2789c-50f5-4743-857b-bbfa746ed631')
		buttonSearch.click()

		cy.get('li').find('li:contains("ACEZO")').should('not.be.exist')
		cy.get('li').contains('AMOXICILINA').should('be.visible')

		const buttonResetSearch = cy.get('button').contains('Reiniciar')
		buttonResetSearch.click()

		inputSearch.type('0566bac0-b5d5-40d7')
		buttonSearch.click()

		cy.get('li').find('li:contains("AMOXICILINA")').should('not.be.exist')
		cy.get('li').contains('INSULINA DETEMIR').should('be.visible')
	})

	it('Should search with with partial or full company name', () => {
		const inputSearch = cy.get("input[placeholder*='Pesquise seu remédio']")
		const buttonSearch = cy.get('button').contains('Pesquisar')

		inputSearch.should('be.visible')

		inputSearch.type('CAZI QUIMICA FARMACEUTICA INDUSTRIA E COMERCIO LTDA')
		buttonSearch.click()

		cy.get('li').find('li:contains("ALPRAZOLAM")').should('not.be.exist')
		cy.get('li').contains('ACFOL').should('be.visible')

		const buttonResetSearch = cy.get('button').contains('Reiniciar')
		buttonResetSearch.click()

		inputSearch.type('MULTILAB')
		buttonSearch.click()

		cy.get('li').find('li:contains("ALPRAZOLAM")').should('not.be.exist')
		cy.get('li').contains('HIDROQUINONA').should('be.visible')
	})

	it('Should display a error if the input is empty when submitted', () => {
		const buttonSearch = cy.get('button').contains('Pesquisar')

		buttonSearch.click()

		cy.get('span')
			.contains(/Campo obrigatório/i)
			.should('be.visible')
	})
})
