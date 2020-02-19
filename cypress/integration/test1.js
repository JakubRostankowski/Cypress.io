describe('zdrowa dupa', function () {
	it('Registers user to Spinning classes', function () {
		cy.visit('https://rentalpark.zdrofit.pl/kalendarz-zajec')
		
		cy.get('[title="Dalej"]').click()
		
		cy.get('#scheduler > div.scrollingframe > table.calendar_table.week > tbody > tr:nth-child(2) > td:nth-child(2) > div').click()
		
		cy.contains('Zapisz się').click()
		
		cy.get('[id="Login"]')
			.type('jakubrostan@wp.pl')
		
		cy.get('[id="Password"]')
			.type('Terry699')
			
		cy.get('[id="SubmitCredentials"]').click()
		
		cy.get('#calendar-register-for-class-3733402').click()
		
		cy.get('#calendar-register-for-success')
			.should('contain', 'Gratulujemy! Jesteś już zapisany')
	
	})
})