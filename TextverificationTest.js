const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

async function testDashboard() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('');
await driver.wait(
          until.elementLocated(By.id('title')),
          10000
        );
        
        const titleText = await driver
          .findElement(By.id('title'))
          .getText();
        
        if (titleText === 'Dashboard') {
          console.log('TEST PASSED');
        } else {
          console.log('TEST FAILED');
        }
}

testDashboard();