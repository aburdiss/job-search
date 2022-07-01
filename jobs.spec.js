/// <reference types="cypress" />

import { sites, jobs } from "./naturalist-dayton";

Object.keys(sites).forEach((location) => {
  describe(location, () => {
    it("loads " + location, () => {
      cy.visit(sites[location]);
    });
    jobs.forEach((job) => {
      it("doesn't have job " + job, () => {
        cy.get("body").contains(new RegExp(job, "i")).should("not.exist");
      });
    });
  });
});
