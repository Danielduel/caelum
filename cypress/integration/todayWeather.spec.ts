describe("Today weather page", () => {

  it("should have text Hours", () => {
    cy.visit("/");
    cy.viewport(375, 812);
    cy.contains("Hourly");
  });
});
