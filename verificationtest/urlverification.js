const { Builder, By, until } = require('selenium-webdriver');

async function runTest (){
          let driver = await new Builder ().forBrowser('chrome').build();
          await driver.get('https://eduportal.webhostdevs.com/login.php');
          await driver.findElement(By.id('admin-card')).click();
          await driver.findElement(By.id('username')).clear();
          await driver.findElement(By.id('username')).sendKeys('sunny');
          await driver.findElement(By.xpath("//input[@name='password']")).sendKeys('sunny37');
          await driver.sleep(500);
          await driver.findElement(By.id('submit')).click();
          await driver.wait(until.elementLocated(By.className('alert')),10000);
          const msg = await driver.findElement(By.className('alert')).getText();
          console.log (msg);
          await driver.sleep(500);
          const currenturl= await driver.getCurrentUrl();
 if (currenturl.includes('login')){
          console.log('Test passed');
 }
 else {
          console.log('Test failed');
 }
}
runTest();