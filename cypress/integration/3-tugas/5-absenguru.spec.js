describe("Login Guru", function () {
    beforeEach(function () {
    cy.fixture("guru").then(function (guru) {
        this.guru = guru;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.guru.email);
        cy.wait(2000);
        cy.get("#password").type(this.guru.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
    });
});

it("Absen Guru", function () {
    cy.url().should('include','/');



    cy.get("#AbsenGuru").click();
    cy.url().should('include','/absen/harian');
    cy.contains("Absen Harian Guru").should("be.visible");
    cy.get("#id_card").type("00001")
    cy.get("#select2-kehadiran_id-container").click().get('#kehadiran_id').select('Hadir', { force: true })
    cy.get("body > div > div.content-wrapper > section > div > div > div:nth-child(2) > div > form > div.card-footer > button").click()
    
    cy.logout();

    cy.visit('/').assertRedirect('/login');
    // cy.wait(2000);

    // cy.get('#btnGroupDrop1').click()
    // cy.contains('Log Out').click()
    // cy.url().should('include','/');

});

});

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

it("Cek Absen Guru", function () {
    cy.url().should('include','/');


    cy.get('#AbsensiGuru').click()
    cy.contains("Firman").should("be.visible")

    cy.get('#example1 > tbody > tr > td:nth-child(3) > a').click()

    });
});
