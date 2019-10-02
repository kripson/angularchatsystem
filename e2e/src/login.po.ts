import { browser, by, element } from 'protractor';

export class LoginPage {

  rightcredentials = 
  {

    username:"super",
    password:"super"

  };
   wrongcredentials = {

    username:"test",
    password:"test"
    };

	

  navigateTo() {
  	return browser.get('/login');
    //return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
  	return element(by.css('app-login h1')).getText();
    //return element(by.css('app-root h1')).getText() as Promise<string>;
  }


  fillrightcredentials()
  {
  	element(by.css('input[name="username"]')).sendKeys(this.rightcredentials.username);
  	element(by.css('input[name="password"]')).sendKeys(this.rightcredentials.password);
  	element(by.css('.loginForm form button')).click();
  }

  fillwrongcredentials()
  {
  	element(by.css('input[name="username"]')).sendKeys(this.wrongcredentials.username);
  	element(by.css('input[name="password"]')).sendKeys(this.wrongcredentials.password);
  	element(by.css('.loginForm form button')).click();
  }



}