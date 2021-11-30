describe("Login Admin", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.admin.email);
        cy.get("#password").type(this.admin.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
        cy.contains("Admin").should("be.visible");
    });
});

it("Tambah Data Kelas", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataKelas').click();
    cy.url().should('include','/kelas');
    cy.contains("Data Kelas").should("be.visible");
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click()
    cy.get("#nama_kelas").type("Sepuluh A")
    cy.get('#paket_id').select('Elektronika Industri', { force: true })
    cy.get("#select2-guru_id-container").click().get('#guru_id').select('Firman', { force: true })

    cy.get("#form-kelas > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
   
});

});