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

it.only("Entry Nilai", function () {
    cy.url().should('include','/');

    cy.get("#NilaiGuru").click();
    cy.get("#DesGuru").click();
    cy.url().should('include','/nilai');
    cy.contains("Deskripsi Nilai").should("be.visible");
    cy.wait(2000);
    cy.get("#kkm").type("75");
    cy.get("#predikat_a").type("Sangat Baik");
    cy.get("#predikat_b").type("Baik");
    cy.get("#predikat_c").type("Cukup");
    cy.get("#predikat_d").type("Kurang");
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button").click();
    

    cy.get("#UlanganGuru").click();
    cy.url().should('include','/ulangan');
    cy.get("#example2 > tbody > tr > td:nth-child(3) > a").click();
    cy.wait(2000);
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(3) > input").type("85");
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(4) > input").type("88");
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(5) > input").type("86");
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(6) > input").type("90");
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(7) > input").type("93");
    cy.get("#submit-1 > i").click();

    
    cy.visit("/rapot");
    cy.get("#example2 > tbody > tr > td:nth-child(3) > a").click();
    cy.get("body > div > div.content-wrapper > section > div > div > div > div > div.card-body > div > div:nth-child(2) > table > tbody > tr > td:nth-child(6) > input").type("88");
    cy.wait(2000);
    cy.get("#submit-1 > i").click();

    cy.logout();

    cy.visit('/').assertRedirect('/login');
});
});

describe("lihat rapot", function () {

    it.only("lihat rapot", function () {

    cy.visit("/login");
    cy.get('#email').type('kevin@gmail.com')
    cy.wait(1500);
    cy.get('#password').type('12345678')
    cy.get("#btn-login").click()
    cy.get("#RapotSiswa").click()
    cy.url().should('include','/rapot/siswa')
    cy.contains("Kimia").should("be.visible");


});

});