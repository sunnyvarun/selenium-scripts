const { Builder, By, until } = require('selenium-webdriver');

async function runTest (){
          let driver = await new Builder ().forBrowser('chrome').build();
          await driver.get('https://eduportal.webhostdevs.com/login.php');
          await driver.findElement(By.css('[type="text"]')).sendKeys('Varun');
          await driver.findElement(By.xpath("//input[@name='password']")).sendKeys('varun37');
          await driver.findElement(By.id('submit')).click();
          await driver.wait(until.elementLocated(By.className('alert')),10000);
          const msg = await driver.findElement(By.className('alert')).getText();
          console.log (msg);
}
runTest();