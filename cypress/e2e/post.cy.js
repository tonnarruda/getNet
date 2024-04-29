describe('Testes de API usando Cypress', () => {
    it('Deve criar um novo usuário', () => {
      cy.request({
        method: 'POST',
        url: '/users',
        body: {
          name: 'John Doe',
          job: 'QA Engineer'
        }
      }).then((response) => {
        // Validar o status code
        expect(response.status).to.equal(201);
        
        // Validar os campos obrigatórios
        expect(response.body).to.have.property('name', 'John Doe');
        expect(response.body).to.have.property('job', 'QA Engineer');
        
        // Validar o contrato
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
      });
    });
  });
  
