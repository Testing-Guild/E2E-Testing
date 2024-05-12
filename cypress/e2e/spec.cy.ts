describe('Signup Functionality', () => {
  it('should successfully create a new user', () => {
    // Arrange (Set up test data)
    const username = 'test_user';
    const password = 'secure_password';

    // Act (Perform the signup action)
    cy.visit('http://127.0.0.1:5500/frontend/index.html');

    cy.get('.username').type(username);
    cy.get('.password').type(password);
    cy.get('.btn_submit').click();

    // Additional assertions
    cy.get('.username').should('be.empty'); 
    cy.get('.password').should('be.empty'); 
    cy.on('window:alert',(t)=>{
      expect(t).to.contains("User Created Successfully!")
    })
  });

  it('should show an error for missing username', () => {
    // Arrange
    const password = 'secure_password';

    // Act
    cy.visit('http://127.0.0.1:5500/frontend/index.html');

    cy.get('.password').type(password);
    cy.get('.btn_submit').click();

    // Assert
    cy.on('window:alert',(t)=>{
      expect(t).to.contains("Please Enter Both Username or Password")
    })
  });

  it('should show an error for missing password', () => {
    // Arrange
    const username = 'test_user';

    // Act
    cy.visit('http://127.0.0.1:5500/frontend/index.html');

    cy.get('.username').type(username);
    cy.get('.btn_submit').click();

    // Assert
    cy.on('window:alert',(t)=>{
      expect(t).to.contains("Please Enter Both Username or Password")
    })
  });
});
