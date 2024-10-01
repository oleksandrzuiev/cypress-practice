/// <reference types="cypress" />

class AddExpensePage {
    get openAddExpenseModal() {
      return cy.get('.btn-success');
    }
  
    get addExpenseDate() {
      return cy.get('#addExpenseDate');
    }

    get addExpenseMileage() {
      return cy.get('#addExpenseMileage');
    }
    
    get addExpenseLiters() {
      return cy.get('#addExpenseLiters');
    }
    
    get addExpenseTotalCost() {
      return cy.get('#addExpenseTotalCost');
    }
    
    get pressExpenseButton() {
      return cy.get('app-add-expense-modal .btn-primary');
    }
    
    get expenseNotification() {
      return cy.contains('Fuel expense added');
    }
    
    addAndVerifyExpenseForCar(mileage, liters, totalCost) {
      this.openAddExpenseModal.first().click();
      this.addExpenseMileage.clear().type(mileage);
      this.addExpenseDate.clear().type('17.09.2024');
      this.addExpenseLiters.type(liters);
      this.addExpenseTotalCost.type(totalCost);
      this.pressExpenseButton.click();
      this.expenseNotification.should('be.visible');
    }
}
  
export default new AddExpensePage();