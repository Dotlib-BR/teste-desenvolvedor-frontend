describe('Ensure the list is working correctly', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001'),
			cy.intercept(/.*\.pdf$/, (req) => {
				const pdfName = req.url.split('/').at(-1)
				console.log('Forcing PDF download instead of opening in browser', {
					url: req.url,
					pdfName,
				})

				req.continue((res) => {
					res.headers['Content-Disposition'] = `attachment; filename=${pdfName};`
				})
			})
	})

	it('Should render the initial list component', () => {
		const medItem = cy.get('li').contains('ACEZO')
		medItem.should('be.visible')
	})

	it('Should test the list pagination', () => {
		const nextButton = cy.get('button').contains('Próxima')
		const targetItemPage1 = cy.get('li').contains('INSULINA DETEMIR')

		nextButton.click()
		const targetItemPage2 = cy.get('li').contains('p', 'FUROSEMIDA')
		targetItemPage2.should('be.visible')

		const prevButton = cy.get('button').contains('Anterior')
		prevButton.contains('Anterior').should('not.be.disabled')

		prevButton.click()
		expect(targetItemPage1).to.exist
		cy.get('button').contains('Anterior').should('be.disabled')
	})

	it('Should check the download link for medics', () => {
		const medic = cy.get('a').contains('Médico')
		medic.invoke('removeAttr', 'target')

		medic.click()
		cy.readFile('cypress/downloads/pdf_sample.pdf').should('exist')
	})

	it('Should check the download link for patients', () => {
		const medic = cy.get('a').contains('Paciente')
		medic.invoke('removeAttr', 'target')

		medic.click()
		cy.readFile('cypress/downloads/pdf_sample.pdf').should('exist')
	})
})

describe('Ensure the list sort action is working correctly', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001')
	})

	const ascDates = [
		'28/06/2018',
		'12/12/2019',
		'23/11/2020',
		'16/09/2021',
		'12/07/2022',
		'11/08/2022',
		'11/11/2022',
		'25/11/2022',
		'16/12/2022',
		'21/03/2023',
	]

	const descDates = [
		'21/03/2023',
		'16/12/2022',
		'25/11/2022',
		'11/11/2022',
		'11/08/2022',
		'12/07/2022',
		'16/09/2021',
		'23/11/2020',
		'12/12/2019',
		'28/06/2018',
	]

	it('Should make the list be sorted by date in ascending order', () => {
		const sortButton = cy.get('button').contains('▼')

		sortButton.click()
		sortButton.should('have.attr', 'data-sort', 'asc')

		const targetDates = cy.get('[data-testid="test-date"]')

		targetDates.each((date, index) => {
			cy.wrap(date).should('have.text', ascDates[index])

			cy.wrap(date).should('not.have.text', descDates[index])
		})
	})

	it('Should make the list be sorted by date in descending order', () => {
		const sortButton = cy.get('button').contains('▼')

		sortButton.click()
		sortButton.should('have.attr', 'data-sort', 'asc')

		sortButton.click()
		sortButton.should('have.attr', 'data-sort', 'desc')

		const targetDates = cy.get('[data-testid="test-date"]')

		targetDates.each((date, index) => {
			cy.wrap(date).should('have.text', descDates[index])

			cy.wrap(date).should('not.have.text', ascDates[index])
		})
	})
})
