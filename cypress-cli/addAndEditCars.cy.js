/// <reference types="cypress" />

import AddCarPage from "../page-objects/AddCarPage";
import AddExpensePage from "../page-objects/AddExpensePage";
import LogInPage from "../page-objects/LogInPage";

describe('Lection 20 Homework', () => {
    beforeEach(() => {
        LogInPage.open();
        LogInPage.login();
        LogInPage.verifyLoginSuccess();
    })

    it('Add car to Garage', () => {
        AddCarPage.addAndVerifyCar('Porsche', 'Cayenne', '600');
    });

    it('Add fuel expenses to created car', () => {
        AddExpensePage.addAndVerifyExpenseForCar('1000', '350', '60 000'); 
    });
})