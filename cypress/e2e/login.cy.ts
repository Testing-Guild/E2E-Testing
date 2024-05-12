describe('User Registration and Login Flow', () => {
    it('allows a new user to register and login successfully', () => {
      // Test data for registration
      const firstName = 'mahdi';
      const lastName = 'mamashli';
      const email = 'mahdimamashli1383@gmail.com';
      const password = 'password123';
  
      // 1. Visit the registration page (assuming a registration endpoint exists)
      cy.visit('/register'); // Replace with your registration URL
  
      // 2. Fill out the registration form
      cy.get('#firstName').type(firstName);
      cy.get('#lastName').type(lastName);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('#confirmPassword').type(password); // Assuming confirm password field
  
      // 3. Submit the registration form
      cy.get('button[type="submit"]').click();
  
      // 4. Verify successful registration message (adjust selector and text based on your application)
      cy.get('.success-message').should('be.visible').should('contain.text', 'Registration successful');
  
      // 5. Visit the login page
      cy.visit('/login');
  
      // 6. Enter the registered email and password
      cy.get('#email').type(email);
      cy.get('#password').type(password);
  
      // 7. Submit the login form
      cy.get('button[type="submit"]').click();
  
      // 8. Verify successful login by checking for a specific element or text after login
      cy.get('.account-welcome').should('be.visible').should('contain.text', `Welcome, ${firstName}`);
    });
  });
  