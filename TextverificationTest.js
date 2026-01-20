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
        