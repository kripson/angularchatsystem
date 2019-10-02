import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
import { AccountPage } from './account.po';

describe('Testing Login Page', () => {
  let page: LoginPage;
  let publicpage:AppPage;
  let accountpage:AccountPage;
 

  beforeEach(() => {
    page = new LoginPage();
    publicpage = new AppPage();
    accountpage = new AccountPage();
  });

  it('should display login as title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('should not navigate to account page', () => {
      browser.waitForAngularEnabled(false);
      page.fillwrongcredentials();
      expect(publicpage.getTitleText()).toEqual('Login');
    });

  it('should navigate to account page', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    page.fillrightcredentials();
    expect(publicpage.getTitleText()).toEqual('Account');
  });


   it('should create a new user', () => {
    browser.waitForAngularEnabled(false);
    accountpage.navigateTo();
    accountpage.createnewuser();
    expect(accountpage.getTitleText()).toEqual('User created');
  });

   it('should not create a dublicate user', () => {
    browser.waitForAngularEnabled(false);
    accountpage.navigateTo();
    accountpage.createnewuser();
    expect(accountpage.getTitleText()).toEqual('User already exists');
  });

it('should create a new group', () => {
    browser.waitForAngularEnabled(false);
    accountpage.createnewgroup();
    browser.driver.sleep(1000);
    expect(accountpage.getTitleText()).toEqual('Group created');
  });

   it('should not create a dublicate group', () => {
    browser.waitForAngularEnabled(false);
    accountpage.navigateTo();
    accountpage.createnewgroup();
    expect(accountpage.getTitleText()).toEqual('Group already exists');
  });





   




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});