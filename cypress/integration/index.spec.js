describe("Testing Pages", () => {
  it("Site Pathname", () => {
    cy.visit("http://localhost:8000");
    cy.location("pathname").should("eq", '/');
  });
});
