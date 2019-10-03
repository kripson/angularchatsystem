import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { AccountComponent } from './account.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountComponent', () => {
  let accountcomponent: AccountComponent;
  let accountfixture: ComponentFixture<AccountComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        FormsModule,RouterTestingModule,HttpClientModule
      ],
      declarations: [ AccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    accountfixture = TestBed.createComponent(AccountComponent);
    accountcomponent = accountfixture.componentInstance;
    accountfixture.detectChanges();
  });

  it('should create', () => {
    expect(accountcomponent).toBeTruthy();
  });


  it('should create a new user', (done) => {

    accountcomponent.nusername = "xxxxxx";
    accountcomponent.nbirthdate = "xxxxxx";
    accountcomponent.nage = "xxxxxx";
    accountcomponent.nemail = "xxxxxx";
    accountcomponent.npassword = "xxxxxx";
    accountcomponent.nofgroupadmin = "true";
    accountcomponent.ngrouplist = [];
    accountcomponent.nadmingrouplist = [];
    accountcomponent.nvalid = true;
    accountcomponent.createNewUser();
    setTimeout(() => {
        expect(accountcomponent.userlist.length).toBe(1);
        done();
    }, 2000);
  });

  it('should delete a user', (done) => {

    accountcomponent.deleteUser("xxxxxx");
    setTimeout(() => {
        expect(accountcomponent.userlist.length).toBe(0);
        done();
    }, 2000);
  });

  it('should create a new group', (done) => {

    accountcomponent.ngroupname = "xxxxxx";
    accountcomponent.createNewGroup();
    setTimeout(() => {
        expect(accountcomponent.grouplist.length).toBe(1);
        done();
    }, 2000);
  });

  it('should delete a group', (done) => {

  
    accountcomponent.deleteGroup('xxxxxx');
    setTimeout(() => {
        expect(accountcomponent.grouplist.length).toBe(0);
        done();
    }, 2000);
  });
});
