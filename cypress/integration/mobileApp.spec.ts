describe("Mobile app", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openweathermap.org/data/2.5/onecall*", { fixture: "weather-data.json" }).as(
      "data-fetch"
    );
    // cy.clock(1640297914000);
    cy.viewport(375, 812);
    cy.visit("/");
  });

  it("today weather should match image snapshot", () => {
    cy.contains("Hourly");
    cy.matchImageSnapshot();
  });

  it("should pass accessibility test", () => {
    cy.wait("@data-fetch").then(() => {
      cy.injectAxe();
      cy.checkA11y(null, null, null, true);
    });
  });

  it("next days weather should match image snapshot", () => {
    cy.getByTestId("app-container").scrollTo("bottom");
    cy.contains("Friday");
    cy.matchImageSnapshot();
  });

  it("weather details should match image snapshot", () => {
    cy.getByTestId("app-container").scrollTo("bottom");
    cy.getByTestId("open-details-button-*").click();
  });
});
