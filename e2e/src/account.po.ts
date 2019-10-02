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


  newgroupuser:any = 
  {
  
    username: "sankit",
    birthdate: "12-12-12",
    age: "21",
    email: "sankit@gmail.com",
    password: "user1",
    ofgroupasis:"true"
  };

  addgroupuser:any = 
  {
  
    username: "kabindra",
    ofgroupasis:"true"
  };
   
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
    element(by.css('input[name="nbirthdate"]')).sendKeys(this.newuser.birthdate);
    element(by.css('input[name="nage"]')).sendKeys(this.newuser.age);
    element(by.css('input[name="nemail"]')).sendKeys(this.newuser.email);
    element(by.css('input[name="nofgroupadmin"]')).sendKeys(this.newuser.ofgroupadmin);

  	element(by.css('#newuserform form button')).click();
  }

  createnewgroup()
  {


    element(by.css('input[name="ngroupname"]')).sendKeys(this.newgroup.groupname);
 
    element(by.css('#newgroupform form button')).click();
  }
   createnewgroupuser()
  {


    element(by.css('input[name ="ngroupusername"]')).sendKeys(this.newgroupuser.username);
    element(by.css('input[name="ngrouppassword"]')).sendKeys(this.newgroupuser.password);
    element(by.css('input[name="ngroupbirthdate"]')).sendKeys(this.newgroupuser.birthdate);
    element(by.css('input[name="ngroupage"]')).sendKeys(this.newgroupuser.age);
    element(by.css('input[name="ngroupemail"]')).sendKeys(this.newgroupuser.email);
    element(by.css('input[name="nofgroupasis"]')).sendKeys(this.newgroupuser.ofgroupasis);


    element(by.css('#newgroupuserbutton')).click();
  }

   addnewgroupuser()
  {


    element(by.css('input[name ="groupusername"]')).sendKeys(this.addgroupuser.username);
    element(by.css('input[name="ofgroupasis"]')).sendKeys(this.addgroupuser.ofgroupasis);


    element(by.css('#addgroupuserbutton')).click();
  }


  clickongroup()
  {
     browser.executeScript(`
      const button = document.querySelector('#grouplist ul li:first-child a');
      button.click();
      `);
  }
  getnewgroupuserform()
  {
     browser.executeScript(`
      const button = document.querySelector('#newgroupuserform');
      button.click();
      `);
  }
  getaddgroupuserform()
  {
     browser.executeScript(`
      const button = document.querySelector('#addgroupuserform');
      button.click();
      `);
  }
  deleteuser()
  {
 
      browser.executeScript(`
      const button = document.querySelector('#kabindra');
      button.click();
      `);
  }




}