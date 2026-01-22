const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');

async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://vpf-admin.webhostdevs.com/login');

  const loginPage = new LoginPage(driver);
  await loginPage.login('admin', 'admin@123');

  await driver.wait(until.elementLocated(By.id('title')), 10000);
  const titleText = await driver.findElement(By.id('title')).getText();

  expect(titleText).to.equal('Dashboard');
}

loginTest();
