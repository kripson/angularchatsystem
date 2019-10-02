import { browser, by, element } from 'protractor';

export class AccountPage {

  newuser = 
  {

     username: "kabindra",
    birthdate: "12-12-12",
    age: "21",
    ofgroupadmin: "false",
    grouplist: [],
    admingrouplist: [],
    email: "sankit",
    password: "user1",
    valid: true

  };

  newgroup = { groupname:"xgroup"};
   
   navigateTo() {
    return browser.get('/account');
    //return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('#testingmessage')).getText();
    //return element(by.css('app-root h1')).getText() as Promise<string>;
  }

	


  createnewuser()
  {


  	element(by.css('input[name="nusername"]')).sendKeys(this.newuser.username);
  	element(by.css('input[name="npassword"]')).sendKeys(this.newuser.password);
    element(by.css('input[name="nbirthdate"]')).sendKeys(this.newuser.username);
    element(by.css('input[name="nage"]')).sendKeys(this.newuser.password);
    element(by.css('input[name="nemail"]')).sendKeys(this.newuser.username);
    element(by.css('input[name="nofgroupadmin"]')).sendKeys(this.newuser.ofgroupadmin);
    element(by.css('input[name="npassword"]')).sendKeys(this.newuser.password);

  	element(by.css('#newuserform form button')).click();
  }

  createnewgroup()
  {


    element(by.css('input[name="ngroupname"]')).sendKeys(this.newgroup.groupname);
 
    element(by.css('#newgroupform form button')).click();
  }




}