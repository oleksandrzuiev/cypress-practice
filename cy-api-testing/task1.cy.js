/// <reference types="cypress" />

describe('Завдання 1', () => {
    const credentials = {
        email: "qasd38412+testuser7@gmail.com",
        password: "dd_The_giperion77"
    };

    const carInfo = {
        "carBrandId": 1,
        "carModelId": 1,
        "mileage": 122
    };

    const carInfoForEdit = {
        "carBrandId": 1,
        "carModelId": 1,
        "mileage": 144
    };

    const carsId = 194919;

    let cookiesValue;

    const userProfile = {
        "photo": "user-1621352948859.jpg",
        "name": "Alex",
        "lastName": "Chan",
        "dateBirth": "2022-05-20T15:17:05.000Z",
        "country": "Ukraine"
    };

    const userSettings = {
        "userId": 151480,
        "currency": "uah",
        "distanceUnits": "km",
        "photoFilename": "default-user.png"
    };

    before(() => {
        const userInfo = {
            "email": "qasd38412+testuser7@gmail.com",
            "password": "dd_The_giperion77",
            "remember": false
        }
        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            const cookies = response.headers["set-cookie"][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(`Cookies Value: ${cookiesValue}`);
            expect(response.status).to.eq(200);
        })
    })

    it('GET "Gets current user cars"', () => {
        cy.request({method: 'GET', url: '/api/cars', headers: {'Cookie': cookiesValue}}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
        });
    });

    it('GET "Gets car brands"', () => {
        cy.request({method: 'GET', url: '/api/cars/brands', headers: {'Cookie': cookiesValue}}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(5);
        });
    });

    it('GET "Gets car models"', () => {
        cy.request({method: 'GET', url: '/api/cars/models', headers: {'Cookie': cookiesValue}}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.eq(23);
        });
    });

    it('GET "Gets all expenses"', () => {
        cy.request({method: 'GET', url: '/api/expenses?carId=7&page=1', headers: {'Cookie': cookiesValue}}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.currentPage).to.eq(1);
        });
    });

    it('POST "Creates new car"', () => {
        cy.request({method: 'POST', url: '/api/cars', body: carInfo, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(201);
            expect(response.body.data.brand).to.eq('Audi');
        });
    });

    it('PUT "Edits user settings"', () => {
        cy.request({method: 'PUT', url: `/api/users/settings`, body: userSettings, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.distanceUnits).to.eq('km');
        });
    });

    it('POST "Registers users in the system"', () => {
        cy.request({method: 'POST', url: '/api/auth/signin', body: credentials, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.userId).to.eq(151480);
        });
    });

    it('PUT "Edits existing car"', () => {
        cy.request({method: 'PUT', url: `/api/cars/${carsId}`, body: carInfoForEdit, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
        });
    });

    it('DELETE "Deletes existing car"', () => {
        cy.request({method: 'DELETE', url: `/api/cars/${carsId}`, headers: {'Cookie': cookiesValue}, failOnStatusCode: false}).then((response) => {
            cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
        });
    });
})