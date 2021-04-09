describe("Play Game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a start button", () => {
    cy.get("button").contains("START");
  });

  it("starts game when start button is clicked", () => {
    cy.contains("START").click();
    cy.wait(500)
    cy.get("button").contains("ROLL");
    cy.get("button").contains("CASH OUT");
    cy.contains("REMAINING CREDITS: 10")
  });
});
