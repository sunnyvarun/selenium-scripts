const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

async function testDashboard() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('');

  await driver.findElement(By.css('[type="text"]')).sendKeys('');
          await driver.findElement(By.xpath("//input[@name='password']")).sendKeys('');
  await driver.findElement(By.id('submit')).click();

  await driver.wait(until.elementLocated(By.id('title')), 10000);
  const titleText = await driver.findElement(By.id('title')).getText();

  expect(titleText).to.equal('Dashboard');
}

testDashboard();
