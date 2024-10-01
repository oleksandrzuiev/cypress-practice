/// <reference types="cypress" />

class AddCarPage {
    get openAddCarModal() {
      return cy.get('.btn-primary');
    }
  
    get addCarBrand() {
      return cy.get('#addCarBrand');
    }

    get addCarModel() {
      return cy.get('#addCarModel');
    }

    get addCarMileage() {
      return cy.get('#addCarMileage');
    }

    get addButton() {
      return cy.get('app-add-car-modal .btn-primary');
    }

    get addingNotification() {
      return cy.contains('Car added');
    }

    addAndVerifyCar(brand, model, mileage) {
      this.openAddCarModal.first().click();
      this.addCarBrand.select(brand);
      this.addCarModel.select(model);
      this.addCarMileage.type(mileage);
      this.addButton.click();
      this.addingNotification.should('be.visible');
    }
}
  
export default new AddCarPage();