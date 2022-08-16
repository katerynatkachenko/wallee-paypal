Task Description: The goal is to perform an end-2-end test of a shop (woocommerce) using Paypal as Payment Method

1. Connect to website
2. Add a product to the cart
3. Proceed to checkout
4. Fill all the necessary information
5. Perform payment with Paypal
6. Redirected to a success page

Description to run the test: 

1. Clone the repo to your local machine https://github.com/katerynatkachenko/wallee-paypal.git or download the .zip project
2. Inside 'wallee' folder run npx cypress open 
3. The previous command should open cypress window
4. Choose e2e testing and pick the browser
5. Click on 'Start e2e Testing <browser> you pick'
6. Run 'paypal.cy.js' test
7. Expectation: the test run successfully, user is redirected to a 'success' checkout page
