describe('paypal-form', () => {
    beforeEach(() => {
        cy.visit('https://woocommerce.showcase-wallee.com/')
    })

    it('displays two todo items by default', () => {
        cy.get('.post-21 > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Kateryna')
        cy.get('#billing_last_name').type('Tkachenko')
        cy.get('#billing_address_1').type('Test')
        cy.get('#billing_postcode').type('6300')
        cy.get('#billing_city').type('Zug')
        cy.get('#billing_phone').type('123456789')
        cy.get('#billing_email').type('katryna.tkachenko@gmail.com')
        cy.get('.wc_payment_method.payment_method_wallee_2 > label').click()
        cy.wait(1000)
        cy.get('input[type="checkbox"]').eq(2).check({force: true})
        cy.wait(1000)
        cy.contains('Place order').click()
        cy.origin('https://www.sandbox.paypal.com/auth/verifychallenge', () => {
            cy.wait(7000)
            cy.get('#email').clear().type('test@wallee.com')
            cy.get('#password').type('wallee1234')
            cy.get('#btnLogin').click()
            cy.get('[data-testid="submit-button-initial"]').click()
        })
        cy.get('.wp-block-post-title').contains('Checkout').should('be.visible')
        cy.get('.woocommerce-notice').should('exist')
    })
})

