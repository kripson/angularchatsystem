(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"center\">\n<h1> Account Page </h1>\n\n<p><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\">{{username}}</p>\n<p><img src=\"https://img.icons8.com/cute-clipart/64/000000/birthday-cake.png\">{{birthdate}}</p>\n<p>Age: {{age}}</p>\n<p>Email:{{email}}</p>\n</div>\n\n<div id=\"userlist\" *ngIf = \"userlist.length\">\n\t<h3><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"> Users List</h3>\n\t\n\t<ul>\n\t\t<li *ngFor = \"let user of userlist\">{{user}}<br><button (click) = \"deleteUser(user)\">Delete this user</button><button (click) = \"promoteToGroupAdmin(user)\">Promote to Group Admin</button></li>\n\n\t</ul>\n</div>\n\n<div id=\"grouplist\" *ngIf=\"grouplist.length\">\n\t<h3><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">Your Groups</h3>\n\t<ul>\n\t\t<li *ngFor = \"let group of grouplist\"><a  (click) = \"groupDetail(group)\">{{group}}</a><div *ngIf=\"admingrouplist.includes(group)\"><button (click) = \"deleteGroup(group)\">Delete Group</button></div></li>\n\t</ul>\n</div>\n\n\n<div id=\"groupdetails\" *ngIf=\"detailedgroup.groupname\">\n\t<h1>Group Details</h1>\n\t<h1>{{detailedgroup.groupname}}</h1>\n\t<h2><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">{{detailedgroup.membercount }} members </h2>\n\t<ul>\n\t\t<li *ngFor = \"let channel of detailedgroup.channels\"><a  (click) = \"channelDetail(channel)\">{{channel}}</a><!-- <button (click) = \"deleteChannel(group)\">Delete Group</button> --></li>\n\t</ul>\n\t<img id=\"close\" (click) = \"removegroupdetails()\" src=\"https://img.icons8.com/flat_round/64/000000/delete-sign.png\">\n\t<div *ngIf=\"detailedgroup.isofadmin\">\n\t\t<button (click) = \"turn(1)\">Create a new user and add to the group</button>\n\t\t<button (click) = \"turn(2)\">Add an existing user to the group</button>\n\t\t<div *ngIf =\"createnewgroupuser\">\n\t\t<input type=\"text\" [(ngModel)]=\"ngroupusername\" name=\"ngroupusername\" placeholder=\"username\" ><br><br>\n       <input type=\"text\" [(ngModel)]=\"ngroupbirthdate\" name=\"ngroupbirthdate\" placeholder=\"birthdate\" required><br><br>\n        <input type=\"text\" [(ngModel)]=\"ngroupage\" name=\"ngroupage\" placeholder=\"age\" required><br><br>\n         <input type=\"text\" [(ngModel)]=\"ngroupemail\" name=\"ngroupemail\" placeholder=\"email\" required><br><br>\n         <input type=\"text\" [(ngModel)]=\"nofgroupasis\" name=\"nofgroupasis\" placeholder=\"asis role?\" required><br><br>\n     \t <input type=\"password\" [(ngModel)]=\"ngrouppassword\" name=\"ngrouppassword\" placeholder=\"password\" required><br><br>\n\t\t<button (click) = \"addNewUserToGroup()\">Create a new user and add to the group</button></div>\n\n\t<div *ngIf = \"addnewgroupuser\">\n\t\t<input type=\"text\" [(ngModel)]=\"groupusername\" name=\"groupusername\" placeholder=\"username\" required><br><br>\n       <input type=\"text\" [(ngModel)]=\"ofgroupasis\" name=\"ofgroupasis\" placeholder=\"group asis?\" required><br><br>\n\t\t<button (click) = \"addExistingUserToGroup()\">Add a current user to the group</button></div>\n\n</div>\n\n</div>\n\n\n\n\n\n\n<div id=\"newuserform\" *ngIf=\"username == 'super'\">\n\t<h1> Create A New User Here<img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"></h1>\n\t<form>\n  \n      <input type=\"text\" [(ngModel)]=\"nusername\" name=\"nusername\" placeholder=\"username\" required><br><br>\n       <input type=\"text\" [(ngModel)]=\"nbirthdate\" name=\"nbirthdate\" placeholder=\"birthdate\" required><br><br>\n        <input type=\"text\" [(ngModel)]=\"nage\" name=\"nage\" placeholder=\"age\" required><br><br>\n         <input type=\"text\" [(ngModel)]=\"nemail\" name=\"nemail\" placeholder=\"email\" required><br><br>\n            <input type=\"text\" [(ngModel)]=\"nofgroupadmin\" name=\"nofgroupadmin\" placeholder=\"admin role?\" required><br><br>\n\n\n      <input type=\"password\" [(ngModel)]=\"npassword\" name=\"npassword\" placeholder=\"password\"><br><br>\n\n\n\n      <button (click) = \"createNewUser()\">Submit</button>\n  \n\n  </form>\n</div>\n\n  <div id=\"newgroupform\" *ngIf=\"ofgroupadmin\">\n  \t<h1> Create A New group Here<img src=\"https://img.icons8.com/dusk/64/000000/groups.png\"></h1>\n\t<form>\n  \n      <input type=\"text\" [(ngModel)]=\"ngroupname\" name=\"ngroupname\" placeholder=\"groupname\" ><br><br>\n\n\n\n      <button (click) = \"createNewGroup()\">Submit</button>\n  \n\n  </form>\n\n\n\n\n</div>\n<div id=\"logout\">\n<img (click) = \"logout()\" src=\"https://img.icons8.com/bubbles/50/000000/exit.png\">\n<button (click) = \"logout()\">Log Out</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n\n\n\t\t<li class=\"active\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li> \n\t\t<li> <a class=\"nav-link\" routerLink=\"/login\">login</a></li>\n\t\t<li><a class=\"nav-link\" routerLink=\"/account\">Account</a></li>\n\t\t<li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\n\t\t<li><a class=\"nav-link\" routerLink=\"/chat\">Chat</a></li>\n\t</ul> \n\n  </div>\n</nav>\n\n\n\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n\t\n\t<label for=\"messagecontent\">Your Message</label>\n\t<input type=\"text\" [(ngModel)]=\"messagecontent\" name=\"messagecontent\" id=\"messagecontent\" >\n\n\t<button (click)=\"chat(messagecontent)\">Chat</button>\n</form>\n\n\n\n\n<h1> Chat Messages</h1>\n<div>\n\t\n\t<ul>\n\t\t<li *ngFor = \"let message of messages\">{{message}}</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = \"loginForm\">\n  <form>\n  \n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"username\"><br><br>\n\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\"><br><br>\n      <button (click) = \"nav()\">Submit</button>\n  \n\n  </form>\n</div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"profileForm\">\n  <form>\n  \t\t<!-- Place to edit the details for a user -->\n  \t\t<p>Username:</p>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"{{username}}\"><br><br>\n\n      <p>Birthdate:</p>\n      <input type=\"text\" [(ngModel)]=\"birthdate\" name=\"birthdate\" placeholder=\"{{birthdate}}\"><br><br>\n\n\t<p>Age:</p>\t\n       <input type=\"text\" [(ngModel)]=\"age\" name=\"age\" placeholder=\"{{age}}\"><br><br>\n       <p>Email:</p>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"{{email}}\"><br><br>\n\n\n  \n\n\n\n\n\n\n\n\n\n\n      <button (click) = \"change()\">Submit</button>\n\n      <button (click) = \"goToAccount()\">Go To Account</button>\n  \n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#center\n{\n\twidth: 50%;\n\tmargin-left: auto;\n\tmargin-right: auto; \n\tz-index: -1;\n\tposition: absolute;\n\ttop: 1em;\n\tleft: 10em;\n\n\n}\n#userlist\n{\n\tposition: absolute;\n\ttop: 5em;\n\tright: 1em;\n\theight:500px;\n\twidth: 25%;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n}\n#userlist h3\n{\n\ttext-align: center;\n}\n#userlist ul\n{\n\tlist-style: none;\n}\n#grouplist\n{\n\tposition: absolute;\n\twidth: 30%;\n\tbottom:2em;\n\theight: 300px;\n\tright: 1em;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n\n}\n#grouplist ul\n{\n\tlist-style: none;\n}\n#grouplist ul li:hover\n{\n\tcursor: pointer;\n}\n#grouplist img\n{\n\theight: 40px;\n\twidth: 40px;\n}\n#grouplist h3\n{\n\ttext-align: center;\n}\n#groupdetails \n{\n\tposition: relative;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin-bottom:  2em;\n}\n#close\n{\n\tposition: absolute;\n\ttop: 1em;\n\tright: 1em;\n\n}\n#close:hover\n{\n\tcursor: pointer;\n\n}\n#newuserform\n{\n\tbox-shadow: 10px 10px 50px grey;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin:2em 2em;\n\tborder-radius: 15px;\n}\n#newgroupform\n{\n\tbox-shadow: 10px 10px 50px grey;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin:2em 2em;\n\tborder-radius: 15px;\n}\n#logout\n{\n\tposition: absolute;\n\ttop: 0;\n\tright: 1em;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7OztBQUdYO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjtBQUdBOztDQUVDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7O0FBRW5CO0FBQ0E7O0NBRUMsZ0JBQWdCO0FBQ2pCO0FBRUE7O0NBRUMsZUFBZTtBQUNoQjtBQUVBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxrQkFBa0I7QUFDbkI7QUFHQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7O0FBRVg7QUFDQTs7Q0FFQyxlQUFlOztBQUVoQjtBQUVBOztDQUVDLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBRUE7O0NBRUMsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY2VudGVyXG57XG5cdHdpZHRoOiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87IFxuXHR6LWluZGV4OiAtMTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDFlbTtcblx0bGVmdDogMTBlbTtcblxuXG59XG4jdXNlcmxpc3Rcbntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDVlbTtcblx0cmlnaHQ6IDFlbTtcblx0aGVpZ2h0OjUwMHB4O1xuXHR3aWR0aDogMjUlO1xuXHRib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCBibGFjaztcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4jdXNlcmxpc3QgaDNcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdXNlcmxpc3QgdWxcbntcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuXG4jZ3JvdXBsaXN0XG57XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDMwJTtcblx0Ym90dG9tOjJlbTtcblx0aGVpZ2h0OiAzMDBweDtcblx0cmlnaHQ6IDFlbTtcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggYmxhY2s7XG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcblxufVxuI2dyb3VwbGlzdCB1bFxue1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG4jZ3JvdXBsaXN0IHVsIGxpOmhvdmVyXG57XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2dyb3VwbGlzdCBpbWdcbntcblx0aGVpZ2h0OiA0MHB4O1xuXHR3aWR0aDogNDBweDtcbn1cbiNncm91cGxpc3QgaDNcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiNncm91cGRldGFpbHMgXG57XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggYmxhY2s7XG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcblx0d2lkdGg6IDcwJTtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW4tYm90dG9tOiAgMmVtO1xufVxuXG4jY2xvc2Vcbntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDFlbTtcblx0cmlnaHQ6IDFlbTtcblxufVxuI2Nsb3NlOmhvdmVyXG57XG5cdGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4jbmV3dXNlcmZvcm1cbntcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggZ3JleTtcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHR3aWR0aDogNzAlO1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjoyZW0gMmVtO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jbmV3Z3JvdXBmb3JtXG57XG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IGdyZXk7XG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcblx0d2lkdGg6IDcwJTtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW46MmVtIDJlbTtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI2xvZ291dFxue1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDFlbTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




;
;
;
let AccountComponent = class AccountComponent {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.createnewgroupuser = false;
        this.addnewgroupuser = false;
        this.username = "";
        this.birthdate = "";
        this.age = "";
        this.email = "";
        this.ofgroupadmin = false;
        this.admingrouplist = [];
        this.grouplist = [];
        this.userlist = [];
        this.nusername = "";
        this.nbirthdate = "";
        this.nage = "";
        this.nemail = "";
        this.npassword = "";
        this.nofgroupadmin = "";
        this.ngrouplist = [];
        this.nadmingrouplist = [];
        this.nvalid = true;
        this.detailedgroup = {
            groupname: "",
            isofadmin: false,
            isofasis: false,
            membercount: 0,
            channels: []
        };
        this.ngroupusername = "";
        this.ngroupbirthdate = "";
        this.ngroupage = "";
        this.ngroupemail = "";
        this.ngrouppassword = "";
        this.nofgroupasis = "";
        this.nmembergrouplist = [];
        this.ngroupvalid = true;
        this.groupusername = "";
        this.ofgroupasis = "";
        this.ngroupname = "";
    }
    ngOnInit() {
        if (typeof (Storage) !== "undefined") {
            try {
                var userdetails = JSON.parse(sessionStorage.getItem("currentUser"));
                alert(JSON.stringify(userdetails));
                this.userlist = userdetails.userlist;
                this.username = userdetails.username;
                this.birthdate = userdetails.birthdate;
                this.ofgroupadmin = userdetails.ofgroupadmin;
                this.admingrouplist = userdetails.admingrouplist;
                this.age = userdetails.age;
                this.email = userdetails.email;
                this.grouplist = userdetails.grouplist;
            }
            catch (error) {
                alert("Please Login First");
                this.router.navigateByUrl('login');
            }
        }
    }
    turn(num) {
        if (num == 1) {
            this.createnewgroupuser = true;
            this.addnewgroupuser = false;
        }
        else {
            this.addnewgroupuser = true;
            this.createnewgroupuser = false;
        }
    }
    logout() {
        sessionStorage.clear();
        this.router.navigateByUrl('login');
    }
    createNewUser() {
        if (this.nofgroupadmin != "" && this.nusername != "" && this.nage != "" && this.nbirthdate != "" && this.nemail != "" && this.npassword != "") {
            if (this.nofgroupadmin == "true") {
                this.nofgroupadmin = true;
            }
            else {
                this.nofgroupadmin = false;
            }
            var nuser = {
                username: this.nusername,
                birthdate: this.nbirthdate,
                age: this.nage,
                email: this.nemail,
                ofgroupadmin: this.nofgroupadmin,
                admingrouplist: [],
                grouplist: [],
                password: this.npassword,
                valid: this.nvalid
            };
            this.httpClient.post("http://localhost:3000/createuser", nuser).subscribe(res => {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.userlist = res.userlist;
                    alert(res.userlist);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    this.userlist = res.userlist;
                    alert((sessionStorage.getItem("currentUser")));
                }
                else {
                    alert('Cannot Create User');
                }
            });
        }
        else {
            alert("Please fill out the form completely");
        }
    }
    createNewGroup() {
        if (this.ngroupname != "") {
            var ngroup = {
                groupname: this.ngroupname,
                creator: this.username,
                admins: ['super', this.username],
                asis: ['super', this.username],
                channels: {},
                members: ['super', this.username]
            };
            if (this.username == 'super') {
                ngroup.admins.pop();
                ngroup.members.pop();
                ngroup.asis.pop();
            }
            this.httpClient.post("http://localhost:3000/creategroup", ngroup).subscribe(res => {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.grouplist = res.grouplist;
                    temp.admingrouplist = res.admingrouplist;
                    alert(res.grouplist);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    this.grouplist = res.grouplist;
                    this.admingrouplist = res.admingrouplist;
                    alert((sessionStorage.getItem("currentUser")));
                }
                else {
                    alert('Cannot Create Group');
                }
            });
        }
        else {
            alert("Please enter a group name");
        }
    }
    deleteUser(user) {
        var deluser = {
            username: user
        };
        this.httpClient.post("http://localhost:3000/deleteuser", deluser).subscribe(res => {
            if (typeof (Storage) !== "undefined") {
                var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                temp.userlist = res.userlist;
                alert(res.userlist);
                sessionStorage.setItem("currentUser", JSON.stringify(temp));
                this.userlist = res.userlist;
                alert((sessionStorage.getItem("currentUser")));
            }
            else {
                alert('Cannot Delete User');
            }
            if (this.detailedgroup.groupname) {
                this.groupDetail(this.detailedgroup.groupname);
            }
        });
    }
    deleteGroup(group) {
        if (group == this.detailedgroup.groupname) {
            this.detailedgroup = {
                groupname: "",
                isofadmin: false,
                isofasis: false,
                membercount: 0,
                channels: []
            };
        }
        var delgroup = {
            groupname: group,
            deletor: this.username
        };
        this.httpClient.post("http://localhost:3000/deletegroup", delgroup).subscribe(res => {
            if (typeof (Storage) !== "undefined") {
                var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                temp.grouplist = res.grouplist;
                alert(res.grouplist);
                sessionStorage.setItem("currentUser", JSON.stringify(temp));
                this.grouplist = res.grouplist;
                alert((sessionStorage.getItem("currentUser")));
            }
            else {
                alert('Cannot Delete User');
            }
        });
    }
    removegroupdetails() {
        this.detailedgroup = {
            groupname: "",
            isofadmin: false,
            isofasis: false,
            membercount: 0,
            channels: []
        };
    }
    groupDetail(group) {
        var getgroup = {
            requester: this.username,
            groupname: group
        };
        this.httpClient.post("http://localhost:3000/getgroupdetail", getgroup).subscribe(res => {
            if (typeof (Storage) !== "undefined") {
                this.detailedgroup.groupname = res.groupname;
                this.detailedgroup.isofadmin = res.isofadmin;
                this.detailedgroup.isofasis = res.isofasis;
                this.detailedgroup.isofadmin = res.isofadmin;
                this.detailedgroup.membercount = res.membercount;
                console.log(this.detailedgroup);
            }
            else {
                alert('Cannot get Group Detail');
            }
        });
    }
    addNewUserToGroup() {
        if (this.ngroupusername != "" && this.nofgroupasis != "" && this.ngroupage != "" && this.ngroupbirthdate != "" && this.ngroupemail != "" && this.ngrouppassword != "") {
            if (this.nofgroupasis == "true") {
                this.nofgroupasis = true;
            }
            else {
                this.nofgroupasis = false;
            }
            var newuserdetail = {
                username: this.ngroupusername,
                birthdate: this.ngroupbirthdate,
                age: this.ngroupage,
                email: this.ngroupemail,
                ofgroupadmin: false,
                ofgroupasis: this.nofgroupasis,
                grouplist: [this.detailedgroup.groupname],
                password: this.ngrouppassword,
                valid: this.ngroupvalid,
                groupname: this.detailedgroup.groupname,
                creator: this.username
            };
            this.httpClient.post("http://localhost:3000/createnewgroupuser", newuserdetail).subscribe(res => {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.userlist = res.userlist;
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    this.detailedgroup.membercount = res.membercount;
                    this.userlist = res.userlist;
                }
                else {
                    alert('Cannot Create User');
                }
                this.createnewgroupuser = false;
                this.addnewgroupuser = false;
            });
        }
        else {
            alert("Please fill out the form completely");
        }
    }
    addExistingUserToGroup() {
        if (this.groupusername != "" && this.ofgroupasis != "") {
            if (this.ofgroupasis == "true") {
                this.ofgroupasis = true;
            }
            else {
                this.ofgroupasis = false;
            }
            var newuserdetail = {
                username: this.groupusername,
                ofgroupasis: this.ofgroupasis,
                groupname: this.detailedgroup.groupname,
                creator: this.username
            };
            this.httpClient.post("http://localhost:3000/addusertogroup", newuserdetail).subscribe(res => {
                if (typeof (Storage) !== "undefined") {
                    this.detailedgroup.membercount = res.membercount;
                    this.userlist = res.userlist;
                    alert(res.notice);
                }
                else {
                    alert('Cannot add User to group');
                }
                this.createnewgroupuser = false;
                this.addnewgroupuser = false;
            });
        }
        else {
            alert("Please fill out the form properly");
        }
    }
    promoteToGroupAdmin(username) {
        if (!this.ofgroupadmin) {
            var promoteduser = {
                username: username
            };
            this.httpClient.post("http://localhost:3000/promotetogroupadmin", promoteduser).subscribe(res => {
                alert(res.notice);
            });
        }
        else {
            alert("Already a group admin");
        }
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");







const routes = [
    {
        path: "chat",
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
    },
    {
        path: "profile",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: "account",
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'firstTry';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");



let ChatComponent = class ChatComponent {
    constructor(socketService) {
        this.socketService = socketService;
        this.messagecontent = "";
        this.messages = [];
    }
    ngOnInit() {
        this.initialSetup();
    }
    initialSetup() {
        this.socketService.observable.subscribe(message => {
            this.messages.push(message);
        });
    }
    chat() {
        if (this.messagecontent) {
            this.socketService.send(this.messagecontent);
            this.messagecontent = null;
        }
        else {
            alert("Please insert a message");
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm\n{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  border-radius: 10px;\n  max-width: 400px;\n  background-color: rgba(246, 71, 71, 1);\n  box-shadow: 10px 10px 10px grey;\n}\n\n.loginForm *\n{\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkZvcm1cbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDcxLCA3MSwgMSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGdyZXk7XG59XG5cbi5sb2dpbkZvcm0gKlxue1xuICBwYWRkaW5nOiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




;
let LoginComponent = class LoginComponent {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    nav() {
        var body = {
            username: this.username,
            password: this.password
        };
        this.httpClient.post("http://localhost:3000/api/auth", body).subscribe(res => {
            alert(res.username);
            if (res.valid) {
                if (typeof (Storage) !== "undefined") {
                    var temp = res;
                    delete temp.password;
                    console.log(temp.valid);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                }
                this.router.navigateByUrl("account");
            }
            else {
                alert('Failed');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);

;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileComponent = class ProfileComponent {
    constructor(router) {
        this.router = router;
        this.username = "";
        this.birthdate = "";
        this.age = "";
        this.email = "";
    }
    ngOnInit() {
        if (typeof (Storage) !== "undefined") {
            try {
                var userDetails = JSON.parse(sessionStorage.getItem("currentUser"));
                this.username = userDetails.username;
                this.birthdate = userDetails.birthdate;
                this.age = userDetails.age;
                this.email = userDetails.email;
            }
            catch (error) {
                alert("Please Login First");
                this.router.navigateByUrl('login');
            }
        }
    }
    change() {
        if (typeof (Storage) !== "undefined") {
            var details = {
                username: this.username,
                birthdate: this.birthdate,
                age: this.age,
                email: this.email
            };
            sessionStorage.setItem("currentUser", JSON.stringify(details));
        }
        console.log(JSON.parse(sessionStorage.getItem("currentUser")));
    }
    goToAccount() {
        this.router.navigateByUrl('account');
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




let SocketService = class SocketService {
    constructor() {
        this.url = 'http://localhost:3000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.url);
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('message', (data) => observer.next(data));
        });
    }
    send(message) {
        this.socket.emit('message', message);
    }
};
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sankitmanshrestha/Sankit/angularchatsystem/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map