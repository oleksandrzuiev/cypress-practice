const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space',
    setupNodeEvents(on, config) {
    },
    supportFile: false
  },
  env: {
    authUser: 'guest',
    authPassword: 'welcome2qauto',
    usernameLog: 'amaterassu88+testuser1@gmail.com',
    passwordLog: 'dd_The_giperion77'
  }
});