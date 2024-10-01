const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    setupNodeEvents(on, config) {
    },
    supportFile: false
  },
  env: {
    authUser: 'guest',
    authPassword: 'welcome2qauto',
    usernameLog: 'qasd38412+testuser1@gmail.com',
    passwordLog: 'dd_The_giperion77'
  }
});