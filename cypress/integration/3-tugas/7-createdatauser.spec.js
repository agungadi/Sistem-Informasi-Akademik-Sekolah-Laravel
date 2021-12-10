
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

it.only("Tambah Data User", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.wait(150);
    cy.get('#DataUser').click();
    cy.wait(1500);
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

});
});

describe("Test Login dan Edit user", function () {
    it.only("Edit User", function () {
      cy.visit("/login");;
      cy.get("#email").type("yudisolo@gmail.com");
      cy.wait(1500);
      cy.get("#password").type("12345678");
      cy.get("#btn-login").click();
      cy.contains("Dashboard").should("be.visible");
      cy.get('#btnGroupDrop1').click();
      cy.contains('My Profile').click({force:true})
      cy.contains("yudisolo").should("be.visible");

      cy.get('body > div > div.content-wrapper > section > div > div > div > div > div.col-5 > div:nth-child(1) > div > a').click();
      cy.get("#name").clear();
      cy.get("#name").type("yudijember");
      cy.get('body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button').click();
      cy.wait(5000);
      cy.contains("yudijember").should("be.visible");

      cy.get('body > div > div.content-wrapper > section > div > div > div > div > div.col-5 > div:nth-child(2) > div.card-body > table > tbody > tr:nth-child(1) > td:nth-child(3) > a').click();
      cy.get("#email").type("yudijember@gmail.com");
      cy.get('body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button').click();
      cy.get('#back').click();

      cy.get('body > div > div.content-wrapper > section > div > div > div > div > div.col-5 > div:nth-child(2) > div.card-body > table > tbody > tr:nth-child(2) > td:nth-child(3) > a').click();
      cy.get("#password-old").type("12345678");
      cy.get("#password").type("123456789");
      cy.get("#password-confirm").type("123456789");
      cy.get('body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button').click();
      cy.get('#back').click();
      
    
      cy.get('#btnGroupDrop1').click()
      cy.contains('Log Out').click({force:true})
      cy.url().should('include','/');
      
});
});

describe("Test Login updated user", function () {
    it.only("Edit User", function () {
      cy.visit("/login");;
      cy.get("#email").type("yudijember@gmail.com");
      cy.wait(1500);
      cy.get("#password").type("123456789");
      cy.get("#btn-login").click();
      cy.contains("Dashboard").should("be.visible");
      cy.get('#btnGroupDrop1').click();
      cy.contains('My Profile').click({force:true})
      cy.contains("yudijember").should("be.visible");

      
});
});


  