const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async login(email, password) {
    await this.driver.wait(until.elementLocated(By.id('email')), 10000);
    await this.driver.findElement(By.id('email')).sendKeys(email);
    await this.driver.findElement(By.id('password')).sendKeys(password);
    await this.driver.findElement(By.id('login')).click();
  }
}

module.exports = LoginPage;
