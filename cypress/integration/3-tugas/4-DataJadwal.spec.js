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
    cy.get('#DataJadwal').click();
    cy.url().should('include','/jadwal');
    cy.contains("Data Jadwal").should("be.visible");
    cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button.btn.btn-default.btn-sm").click()
    cy.get("#select2-hari_id-container").click().get('#hari_id').select('Senin', { force: true })

    cy.get("#jam_mulai").type("07:00")
    cy.get("#select2-kelas_id-container").click().get('#kelas_id').select('SEPULUH A', { force: true })
    cy.get("#jam_selesai").type("10:00")

    cy.get("#select2-guru_id-container").click().get('#guru_id').select('104', { force: true })

    cy.get("#select2-ruang_id-container").click().get('#ruang_id').select('Ruang 01', { force: true })

    cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.tambah-jadwal.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
   
});

});