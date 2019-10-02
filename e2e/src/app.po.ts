import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
  	return browser.get('/');
    //return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
  	return element(by.css('app-root #pageheading')).getText();
    //return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
