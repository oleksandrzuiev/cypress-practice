describe('Завдання 3', () => {
    const carInfo = {
        "carBrandId": 1,
        "carModelId": 1,
        "mileage": 144
    };

    const expenseInfo = {
        "carId": 194716,
        "reportedAt": "2021-09-17",
        "mileage": 166,
        "liters": 9000,
        "totalCost": 99999,
        "forceMileage": false
    };

    const carId = 194716;

    before(() => {
        const userInfo = {
            "email": "qasd38412+testuser5@gmail.com",
            "password": "dd_The_giperion77",
            "remember": false
        }
        cy.api({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            const cookies = response.headers["set-cookie"][0];
            const cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookiesValue));
            expect(response.status).to.eq(200);
        })
    })

    it('GET "Gets car brands"', () => {
        cy.api("GET", "/api/cars/brands").should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('POST "Creates new car"', () => {
        cy.api({method: 'POST', url: '/api/cars', body: carInfo, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('PUT "Edits existing car"', () => {
        cy.api({method: 'PUT', url: `/api/cars/${carId}`, body: carInfo, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it.skip('DELETE "Deletes existing car"', () => {
        cy.api({method: 'DELETE', url: `/api/cars/${carId}`, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('POST "Creates an expense"', () => {
        cy.api({method: 'POST', url: '/api/expenses', body: expenseInfo, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('PUT "Edit an expense"', () => {
        cy.api({method: 'PUT', url: `/api/expenses/${carId}`, body: expenseInfo, failOnStatusCode: false}).should((response) => {
            expect(response.status).to.eq(200);
        });
    });
})