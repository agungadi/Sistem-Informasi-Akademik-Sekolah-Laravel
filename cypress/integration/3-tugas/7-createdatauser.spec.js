describe("Login Admin", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.admin.email);
        cy.wait(150);
        cy.get("#password").type(this.admin.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
        cy.contains("Admin").should("be.visible");
    });
});

it("Tambah Data User", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataUser').click();
    cy.url().should('include','/user');
    cy.contains("Data User").should("be.visible");
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click()
    cy.wait(1500);
    cy.get("#email").type("yudisolo@gmail.com")
    cy.get("#select2-role-container").click().get('#role').select('Operator', { force: true })
    cy.get("#name").type("yudisolo")
    cy.get("#password").type("12345678")
    cy.get("#password-confirm").type("12345678")
    cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-md.tambah-user.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
    cy.contains("Operator").should("be.visible");

    cy.wait(5000);
    cy.get('#btnGroupDrop1').click()
    cy.contains('Log Out').click({force:true})
    cy.url().should('include','/');

    cy.visit("/login");
      cy.url().should('include','/login');
      cy.get("#email").type("yudisolo@gmail.com");
      cy.wait(1500);
      cy.get("#password").type("12345678");
      cy.get("#btn-login").click();
      cy.contains("Dashboard").should("be.visible");
      cy.get('#btnGroupDrop1').click();
      cy.contains('My Profile').click({force:true})
      cy.contains("yudisolo").should("be.visible");
   
});
});


  