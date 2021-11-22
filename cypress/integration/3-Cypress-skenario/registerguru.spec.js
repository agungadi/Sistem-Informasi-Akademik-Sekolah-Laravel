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

it("Create Mapel", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get("#DataMapel").click();
    cy.contains("Data Mapel").should("be.visible");
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click();


    cy.contains("Tambah Data Mapel").should("be.visible");
    cy.wait(1500);
    cy.get("#nama_mapel").type("Kimia");
    cy.wait(1500);
    cy.get("#select2-paket_id-container").click().get('#paket_id').select('Semua',{force: true});

    cy.get("#select2-kelompok-container").click().get('#kelompok').select('Pelajaran Umum',{force: true});

    cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-md.tambah-mapel.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click();


});
});
