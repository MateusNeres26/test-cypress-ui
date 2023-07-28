

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    
    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com', {log:false});
        cy.get('#password').type('teste@teste.com', {log:false});
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('contain' , 'Minha conta')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos', () => {
    
        cy.get('#username').type('aluno_ebac@teste.com' , {log:false});
        cy.get('#password').type('teste@teste.co', {log:false});
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

    it('Deve exibir uma mensagem de email desconhecido', () => {
    
        cy.get('#username').type('aluno_@teste.com' , {log:false});
        cy.get('#password').type('teste@teste.com', {log:false});
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });


});