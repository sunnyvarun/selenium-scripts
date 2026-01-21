const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

async function testDashboard() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://eduportal.webhostdevs.com/login.php');
await driver.wait(
          until.elementLocated(By.tagName('h2')),
          10000
        );
        
        const titleText = await driver
          .findElement(By.tagName('h2'))
          .getText();
        
        if (titleText === 'EduPortal') {
          console.log('TEST PASSED');
        } else {
          console.log('TEST FAILED');
        }
}

testDashboard();