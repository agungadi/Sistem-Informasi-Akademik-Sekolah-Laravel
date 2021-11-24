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

it("Create Guru", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get("#DataGuru").click();
    cy.contains("Data Guru").should("be.visible");

    
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button.btn.btn-default.btn-sm").click();
    cy.wait(400);
    // const filepath = 'images/firman.jpg'
    cy.contains("Tambah Data Guru").should("be.visible");
    cy.get("#nama_guru").type("Firman");
    cy.get("#nip").type("90815511");
    cy.get("#tmp_lahir").type("Bojonegoro");
    cy.get("#select2-jk-container").click().get('#jk').select('Laki-Laki',{force: true});
    cy.get("#select2-mapel_id-container").click().get('#mapel_id').select('Kimia', { force: true })
    cy.get("#tgl_lahir").type("1998-11-11")
    cy.get("#kode").type("104");
    cy.get("#telp").type("08562817991");
    cy.get('#foto').attachFile('firman.jpg');
    cy.get('body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary').click();
    
    cy.logout();
    cy.url().should('include','/');;
    cy.wait(3000);

    cy.get('#btnGroupDrop1').click()
    cy.contains('Log Out').click()
    cy.url().should('include','/');

    cy.get('body > div > div.card > div > p.mb-0 > a').click()
    cy.url().should('include','/register');
    cy.contains("Register a new membership").should("be.visible");

    cy.get('#email').type('firman@gmail.com')
    cy.get('select').select('Guru')
    cy.get('#nomer').type('00001')
    cy.get('#password').type('12345678')
    cy.get('#password-confirm').type('12345678')
    cy.get('body > div > div.card > div > form > div.row.mb-3 > div.col-6.justify-content-end > button').click()
});

});
