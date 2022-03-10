describe("Mobile app", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openweathermap.org/data/2.5/onecall*", {fixture: "weather-data.json"}).as(
      "data-fetch"
    );
    // cy.clock(1640297914000);
    cy.clock(1640277914000);
    cy.viewport(375, 812);
    cy.visit("/");
  });

  it("should pass accessibility test", () => {
    cy.clock()
      .then((clock) => {
        clock.restore();
        return cy.wait("@data-fetch");
      })
      .then(() => {
        cy.injectAxe();
        cy.checkA11y(null, null, null, true);
      });
  });

  it("today weather should match image snapshot", () => {
    cy.contains("Hourly");
    cy.matchImageSnapshot();
  });

  it("location modal should match image snapshot", () => {
    cy.getByTestId("location-button").click();
    cy.matchImageSnapshot();
  });

  it("next days weather should match image snapshot", () => {
    cy.getByTestId("app-container").scrollTo("bottom");
    cy.contains("Friday");
    cy.matchImageSnapshot();
  });

  it("weather details should match image snapshot", () => {
    cy.getByTestId("app-container").scrollTo("bottom");
    cy.getByTestIdLike("open-details-button").first().click();
    cy.matchImageSnapshot();
  });
});
