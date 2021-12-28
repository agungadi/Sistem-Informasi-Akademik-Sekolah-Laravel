
describe("Login Admin", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.admin.email);
        cy.wait(2000);
        cy.get("#password").type(this.admin.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
        cy.contains("Admin").should("be.visible");
    });
});

it("Tambah Data Siswa", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataSiswa').click();
    cy.url().should('include','/siswa');
    cy.contains("Data Siswa").should("be.visible");
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button.btn.btn-default.btn-sm").click()

    cy.wait(1500);
    cy.get("#no_induk").type("123456789")
    cy.get("#nis").type("987654321")
    cy.get("#nama_siswa").type("Agung Adi")
    
    cy.get("#select2-kelas_id-container").click().get('#kelas_id').select('SEPULUH A', { force: true })
    cy.get("#select2-jk-container").click().get('#jk').select('Laki-Laki', { force: true })

    cy.get("#telp").type("08528319001")
    cy.get("#tmp_lahir").type("Bojonegoro")
    cy.get("#tgl_lahir").type("1999-11-11")
    cy.get('#foto').attachFile('foto.jpg');
   cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
    cy.get("#example1 > tbody > tr > td:nth-child(3) > a").click()
    cy.wait(400);
    //// detail
});
    it("Detail Data Siswa", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataSiswa').click();
    cy.url().should('include','/siswa');
    cy.contains("Data Siswa").should("be.visible");
    cy.get('#example1 > tbody > tr > td:nth-child(3) > a').click()

    cy.contains("Agung Adi").should("be.visible");
    cy.contains("Detail").click()
    cy.contains("Details Siswa").should("be.visible");
    
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-header > a").click()
    cy.contains("Data Siswa SEPULUH A").should("be.visible");
});

it("Edit Data Siswa", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataSiswa').click();
    cy.url().should('include','/siswa');
    cy.contains("Data Siswa").should("be.visible");
    cy.get('#example1 > tbody > tr > td:nth-child(3) > a').click()


    cy.get("#example1 > tbody > tr > td:nth-child(5) > form > a.btn.btn-success.btn-sm.mt-2").click()
    cy.contains("Edit Siswa").should("be.visible");

    cy.get("#nama_siswa").type("{selectall}{backspace}Kevin Vilmos")
    cy.get("#tmp_lahir").type("{selectall}{backspace}Malang")
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button").click()

});

it("Hapus Trash Data Siswa", function () {

    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataSiswa').click();
    cy.url().should('include','/siswa');
    cy.contains("Data Siswa").should("be.visible");

    cy.get("#example1 > tbody > tr > td:nth-child(3) > a").click()
    cy.contains("Hapus").click()

    ///trash siswa
    cy.get("#ViewTrash").click()
    cy.get("#TrashSiswa").click()
    cy.contains("Trash Siswa").should("be.visible");
    cy.get("#example1 > tbody > tr > td:nth-child(6) > form > a").click()

    ///logout
    cy.logout();

    cy.visit('/').assertRedirect('/login');
    // cy.wait(4000);
    // cy.get('#btnGroupDrop1').click()
    // cy.contains('Log Out').click()
    // cy.url().should('include','/');

    
});

});
describe("Register Siswa", function () {

    it("Register Siswa", function () {

    cy.visit("/login");
    cy.get('body > div > div.card > div > p.mb-0 > a').click()
    cy.contains('Register a new membership').should("be.visible")

    //input data register siswa
    cy.get('#email').type('kevin@gmail.com')
    cy.get('select').select('Siswa')
    cy.get('#nomer').type('123456789')
    cy.get('#password').type('12345678')
    cy.get('#password-confirm').type('12345678')
    cy.get('body > div > div.card > div > form > div.row.mb-3 > div.col-6.justify-content-end > button').click()

});

});