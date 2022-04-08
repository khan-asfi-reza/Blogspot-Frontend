describe("Login Signup Page Test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth');
    })
    it('should change page', function () {
        // Change page to sign in
        cy.findByRole('button', {
            name: /Create account/i
        }).click();
        cy.findByText(/sign up to firebolt/i).should("be.visible")
        // Change page back to login
        cy.findByRole('button', {
            name: /Sign in/i
        }).click();
        cy.findByText(/Login to firebolt/i).should("be.visible")
    });
    it('Button should be disabled and after validation be enabled', function () {
        // Login Button Must Be Disabled
        cy.findByRole('button', {
            name: /Login/i
        }).should("be.disabled")
        // Type On Text box

        cy.findByTestId('email').type("email@email.com");
        cy.findByTestId('password').type("email@email.com");
        cy.findByRole('button', {
            name: /Login/i
        }).should("not.be.disabled")
        // Password To be Text
        cy.findByTestId('password_icon').click();
        cy.findByTestId('password').should('have.value', "email@email.com")
    });
})