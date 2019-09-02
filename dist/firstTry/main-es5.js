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

module.exports = "<div id=\"center\">\r\n<h1> Account Page </h1>\r\n\r\n<p><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\">{{username}}</p>\r\n<p><img src=\"https://img.icons8.com/cute-clipart/64/000000/birthday-cake.png\">{{birthdate}}</p>\r\n<p>Age: {{age}}</p>\r\n<p>Email:{{email}}</p>\r\n</div>\r\n\r\n<div id=\"userlist\" *ngIf = \"userlist.length\">\r\n\t<h3><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"> Users List</h3>\r\n\t\r\n\t<ul>\r\n\t\t<li *ngFor = \"let user of userlist\">{{user}}<br><button (click) = \"deleteUser(user)\">Delete this user</button><button (click) = \"promoteToGroupAdmin(user)\">Promote to Group Admin</button></li>\r\n\r\n\t</ul>\r\n</div>\r\n\r\n<div id=\"grouplist\" *ngIf=\"grouplist.length\">\r\n\t<h3><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">Your Groups</h3>\r\n\t<ul>\r\n\t\t<li *ngFor = \"let group of grouplist\"><a  (click) = \"groupDetail(group)\">{{group}}</a><div *ngIf=\"ofgroupadmin\"><button (click) = \"deleteGroup(group)\">Delete Group</button></div></li>\r\n\t</ul>\r\n</div>\r\n\r\n\r\n<div id=\"groupdetails\" *ngIf=\"detailedgroup.groupname\">\r\n\t<h1>Group Details</h1>\r\n\t<h1>{{detailedgroup.groupname}}</h1>\r\n\t<h2><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">{{detailedgroup.membercount }} members </h2>\r\n\t<ul>\r\n\t\t<li *ngFor = \"let channel of detailedgroup.channels\"><a  (click) = \"channelDetail(channel)\">{{channel}}</a><!-- <button (click) = \"deleteChannel(group)\">Delete Group</button> --></li>\r\n\t</ul>\r\n\t<img id=\"close\" (click) = \"removegroupdetails()\" src=\"https://img.icons8.com/flat_round/64/000000/delete-sign.png\">\r\n\t<div *ngIf=\"detailedgroup.isofadmin\">\r\n\t\t<button (click) = \"turn(1)\">Create a new user and add to the group</button>\r\n\t\t<button (click) = \"turn(2)\">Add an existing user to the group</button>\r\n\t\t<div *ngIf =\"createnewgroupuser\">\r\n\t\t<input type=\"text\" [(ngModel)]=\"ngroupusername\" name=\"ngroupusername\" placeholder=\"username\" ><br><br>\r\n       <input type=\"text\" [(ngModel)]=\"ngroupbirthdate\" name=\"ngroupbirthdate\" placeholder=\"birthdate\" required><br><br>\r\n        <input type=\"text\" [(ngModel)]=\"ngroupage\" name=\"ngroupage\" placeholder=\"age\" required><br><br>\r\n         <input type=\"text\" [(ngModel)]=\"ngroupemail\" name=\"ngroupemail\" placeholder=\"email\" required><br><br>\r\n         <input type=\"text\" [(ngModel)]=\"nofgroupasis\" name=\"nofgroupasis\" placeholder=\"asis role?\" required><br><br>\r\n     \t <input type=\"password\" [(ngModel)]=\"ngrouppassword\" name=\"ngrouppassword\" placeholder=\"password\" required><br><br>\r\n\t\t<button (click) = \"addNewUserToGroup()\">Create a new user and add to the group</button></div>\r\n\r\n\t<div *ngIf = \"addnewgroupuser\">\r\n\t\t<input type=\"text\" [(ngModel)]=\"groupusername\" name=\"groupusername\" placeholder=\"username\" required><br><br>\r\n       <input type=\"text\" [(ngModel)]=\"ofgroupasis\" name=\"ofgroupasis\" placeholder=\"group asis?\" required><br><br>\r\n\t\t<button (click) = \"addExistingUserToGroup()\">Add a current user to the group</button></div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"newuserform\" *ngIf=\"username == 'super'\">\r\n\t<h1> Create A New User Here<img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"></h1>\r\n\t<form>\r\n  \r\n      <input type=\"text\" [(ngModel)]=\"nusername\" name=\"nusername\" placeholder=\"username\" required><br><br>\r\n       <input type=\"text\" [(ngModel)]=\"nbirthdate\" name=\"nbirthdate\" placeholder=\"birthdate\" required><br><br>\r\n        <input type=\"text\" [(ngModel)]=\"nage\" name=\"nage\" placeholder=\"age\" required><br><br>\r\n         <input type=\"text\" [(ngModel)]=\"nemail\" name=\"nemail\" placeholder=\"email\" required><br><br>\r\n            <input type=\"text\" [(ngModel)]=\"nofgroupadmin\" name=\"nofgroupadmin\" placeholder=\"admin role?\" required><br><br>\r\n\r\n\r\n      <input type=\"password\" [(ngModel)]=\"npassword\" name=\"npassword\" placeholder=\"password\"><br><br>\r\n\r\n\r\n\r\n      <button (click) = \"createNewUser()\">Submit</button>\r\n  \r\n\r\n  </form>\r\n</div>\r\n\r\n  <div id=\"newgroupform\" *ngIf=\"ofgroupadmin\">\r\n  \t<h1> Create A New group Here<img src=\"https://img.icons8.com/dusk/64/000000/groups.png\"></h1>\r\n\t<form>\r\n  \r\n      <input type=\"text\" [(ngModel)]=\"ngroupname\" name=\"ngroupname\" placeholder=\"groupname\" ><br><br>\r\n\r\n\r\n\r\n      <button (click) = \"createNewGroup()\">Submit</button>\r\n  \r\n\r\n  </form>\r\n\r\n\r\n\r\n\r\n</div>\r\n<div id=\"logout\">\r\n<img (click) = \"logout()\" src=\"https://img.icons8.com/bubbles/50/000000/exit.png\">\r\n<button (click) = \"logout()\">Log Out</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n\r\n\r\n\t\t<li class=\"active\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li> \r\n\t\t<li> <a class=\"nav-link\" routerLink=\"/login\">login</a></li>\r\n\t\t<li><a class=\"nav-link\" routerLink=\"/account\">Account</a></li>\r\n\t\t<li><a class=\"nav-link\" routerLink=\"/profile\">Profile</a></li>\r\n\t\t<li><a class=\"nav-link\" routerLink=\"/chat\">Chat</a></li>\r\n\t</ul> \r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n\t\r\n\t<label for=\"messagecontent\">Your Message</label>\r\n\t<input type=\"text\" [(ngModel)]=\"messagecontent\" name=\"messagecontent\" id=\"messagecontent\" >\r\n\r\n\t<button (click)=\"chat(messagecontent)\">Chat</button>\r\n</form>\r\n\r\n\r\n\r\n\r\n<h1> Chat Messages</h1>\r\n<div>\r\n\t\r\n\t<ul>\r\n\t\t<li *ngFor = \"let message of messages\">{{message}}</li>\r\n\t</ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"loginForm\">\r\n  <form>\r\n  \r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"username\"><br><br>\r\n\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\"><br><br>\r\n      <button (click) = \"nav()\">Submit</button>\r\n  \r\n\r\n  </form>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"profileForm\">\r\n  <form>\r\n  \t\t<!-- Place to edit the details for a user -->\r\n  \t\t<p>Username:</p>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"{{username}}\"><br><br>\r\n\r\n      <p>Birthdate:</p>\r\n      <input type=\"text\" [(ngModel)]=\"birthdate\" name=\"birthdate\" placeholder=\"{{birthdate}}\"><br><br>\r\n\r\n\t<p>Age:</p>\t\r\n       <input type=\"text\" [(ngModel)]=\"age\" name=\"age\" placeholder=\"{{age}}\"><br><br>\r\n       <p>Email:</p>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"{{email}}\"><br><br>\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <button (click) = \"change()\">Submit</button>\r\n\r\n      <button (click) = \"goToAccount()\">Go To Account</button>\r\n  \r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#center\r\n{\r\n\twidth: 50%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto; \r\n\tz-index: -1;\r\n\tposition: absolute;\r\n\ttop: 1em;\r\n\tleft: 10em;\r\n\r\n\r\n}\r\n#userlist\r\n{\r\n\tposition: absolute;\r\n\ttop: 5em;\r\n\tright: 1em;\r\n\theight:500px;\r\n\twidth: 25%;\r\n\tborder:2px solid black;\r\n\tbox-shadow: 10px 10px 30px black;\r\n\toverflow-x: scroll;\r\n}\r\n#userlist h3\r\n{\r\n\ttext-align: center;\r\n}\r\n#userlist ul\r\n{\r\n\tlist-style: none;\r\n}\r\n#grouplist\r\n{\r\n\tposition: absolute;\r\n\twidth: 30%;\r\n\tbottom:2em;\r\n\theight: 300px;\r\n\tright: 1em;\r\n\tborder:2px solid black;\r\n\tbox-shadow: 10px 10px 30px black;\r\n\toverflow-x: scroll;\r\n\r\n}\r\n#grouplist ul\r\n{\r\n\tlist-style: none;\r\n}\r\n#grouplist ul li:hover\r\n{\r\n\tcursor: pointer;\r\n}\r\n#grouplist img\r\n{\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\r\n#grouplist h3\r\n{\r\n\ttext-align: center;\r\n}\r\n#groupdetails \r\n{\r\n\tposition: relative;\r\n\tborder:2px solid black;\r\n\tbox-shadow: 10px 10px 30px black;\r\n\toverflow-x: scroll;\r\n\twidth: 70%;\r\n\tpadding: 1em;\r\n\tmargin-bottom:  2em;\r\n}\r\n#close\r\n{\r\n\tposition: absolute;\r\n\ttop: 1em;\r\n\tright: 1em;\r\n\r\n}\r\n#close:hover\r\n{\r\n\tcursor: pointer;\r\n\r\n}\r\n#newuserform\r\n{\r\n\tbox-shadow: 10px 10px 50px grey;\r\n\toverflow-x: scroll;\r\n\twidth: 70%;\r\n\tpadding: 1em;\r\n\tmargin:2em 2em;\r\n\tborder-radius: 15px;\r\n}\r\n#newgroupform\r\n{\r\n\tbox-shadow: 10px 10px 50px grey;\r\n\toverflow-x: scroll;\r\n\twidth: 70%;\r\n\tpadding: 1em;\r\n\tmargin:2em 2em;\r\n\tborder-radius: 15px;\r\n}\r\n#logout\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 1em;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7OztBQUdYO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjtBQUdBOztDQUVDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7O0FBRW5CO0FBQ0E7O0NBRUMsZ0JBQWdCO0FBQ2pCO0FBRUE7O0NBRUMsZUFBZTtBQUNoQjtBQUVBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxrQkFBa0I7QUFDbkI7QUFHQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7O0FBRVg7QUFDQTs7Q0FFQyxlQUFlOztBQUVoQjtBQUVBOztDQUVDLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBRUE7O0NBRUMsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjZW50ZXJcclxue1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuXHR6LWluZGV4OiAtMTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxZW07XHJcblx0bGVmdDogMTBlbTtcclxuXHJcblxyXG59XHJcbiN1c2VybGlzdFxyXG57XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNWVtO1xyXG5cdHJpZ2h0OiAxZW07XHJcblx0aGVpZ2h0OjUwMHB4O1xyXG5cdHdpZHRoOiAyNSU7XHJcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCBibGFjaztcclxuXHRvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbiN1c2VybGlzdCBoM1xyXG57XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdXNlcmxpc3QgdWxcclxue1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4jZ3JvdXBsaXN0XHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRib3R0b206MmVtO1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0cmlnaHQ6IDFlbTtcclxuXHRib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xyXG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IGJsYWNrO1xyXG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHJcbn1cclxuI2dyb3VwbGlzdCB1bFxyXG57XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI2dyb3VwbGlzdCB1bCBsaTpob3ZlclxyXG57XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZ3JvdXBsaXN0IGltZ1xyXG57XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG59XHJcbiNncm91cGxpc3QgaDNcclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNncm91cGRldGFpbHMgXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCBibGFjaztcclxuXHRvdmVyZmxvdy14OiBzY3JvbGw7XHJcblx0d2lkdGg6IDcwJTtcclxuXHRwYWRkaW5nOiAxZW07XHJcblx0bWFyZ2luLWJvdHRvbTogIDJlbTtcclxufVxyXG5cclxuI2Nsb3NlXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxZW07XHJcblx0cmlnaHQ6IDFlbTtcclxuXHJcbn1cclxuI2Nsb3NlOmhvdmVyXHJcbntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4jbmV3dXNlcmZvcm1cclxue1xyXG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IGdyZXk7XHJcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0cGFkZGluZzogMWVtO1xyXG5cdG1hcmdpbjoyZW0gMmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiNuZXdncm91cGZvcm1cclxue1xyXG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IGdyZXk7XHJcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0cGFkZGluZzogMWVtO1xyXG5cdG1hcmdpbjoyZW0gMmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbiNsb2dvdXRcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDFlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




;
;
;
var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.createnewgroupuser = false;
        this.addnewgroupuser = false;
        this.username = "";
        this.birthdate = "";
        this.age = "";
        this.email = "";
        this.ofgroupadmin = false;
        this.grouplist = [];
        this.userlist = [];
        this.nusername = "";
        this.nbirthdate = "";
        this.nage = "";
        this.nemail = "";
        this.npassword = "";
        this.nofgroupadmin = "";
        this.ngrouplist = [];
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
    AccountComponent.prototype.ngOnInit = function () {
        if (typeof (Storage) !== "undefined") {
            try {
                var userdetails = JSON.parse(sessionStorage.getItem("currentUser"));
                alert(JSON.stringify(userdetails));
                this.userlist = userdetails.userlist;
                this.username = userdetails.username;
                this.birthdate = userdetails.birthdate;
                this.ofgroupadmin = userdetails.ofgroupadmin;
                this.age = userdetails.age;
                this.email = userdetails.email;
                this.grouplist = userdetails.grouplist;
            }
            catch (error) {
                alert("Please Login First");
                this.router.navigateByUrl('login');
            }
        }
    };
    AccountComponent.prototype.turn = function (num) {
        if (num == 1) {
            this.createnewgroupuser = true;
            this.addnewgroupuser = false;
        }
        else {
            this.addnewgroupuser = true;
            this.createnewgroupuser = false;
        }
    };
    AccountComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigateByUrl('login');
    };
    AccountComponent.prototype.createNewUser = function () {
        var _this = this;
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
                grouplist: [],
                password: this.npassword,
                valid: this.nvalid
            };
            this.httpClient.post("http://localhost:3000/createuser", nuser).subscribe(function (res) {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.userlist = res.userlist;
                    alert(res.userlist);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    _this.userlist = res.userlist;
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
    };
    AccountComponent.prototype.createNewGroup = function () {
        var _this = this;
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
            this.httpClient.post("http://localhost:3000/creategroup", ngroup).subscribe(function (res) {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.grouplist = res.grouplist;
                    alert(res.grouplist);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    _this.grouplist = res.grouplist;
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
    };
    AccountComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var deluser = {
            username: user
        };
        this.httpClient.post("http://localhost:3000/deleteuser", deluser).subscribe(function (res) {
            if (typeof (Storage) !== "undefined") {
                var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                temp.userlist = res.userlist;
                alert(res.userlist);
                sessionStorage.setItem("currentUser", JSON.stringify(temp));
                _this.userlist = res.userlist;
                alert((sessionStorage.getItem("currentUser")));
            }
            else {
                alert('Cannot Delete User');
            }
            if (_this.detailedgroup.groupname) {
                _this.groupDetail(_this.detailedgroup.groupname);
            }
        });
    };
    AccountComponent.prototype.deleteGroup = function (group) {
        var _this = this;
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
            groupname: group
        };
        this.httpClient.post("http://localhost:3000/deletegroup", delgroup).subscribe(function (res) {
            if (typeof (Storage) !== "undefined") {
                var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                temp.grouplist = res.grouplist;
                alert(res.grouplist);
                sessionStorage.setItem("currentUser", JSON.stringify(temp));
                _this.grouplist = res.grouplist;
                alert((sessionStorage.getItem("currentUser")));
            }
            else {
                alert('Cannot Delete User');
            }
        });
    };
    AccountComponent.prototype.removegroupdetails = function () {
        this.detailedgroup = {
            groupname: "",
            isofadmin: false,
            isofasis: false,
            membercount: 0,
            channels: []
        };
    };
    AccountComponent.prototype.groupDetail = function (group) {
        var _this = this;
        var getgroup = {
            requester: this.username,
            groupname: group
        };
        this.httpClient.post("http://localhost:3000/getgroupdetail", getgroup).subscribe(function (res) {
            if (typeof (Storage) !== "undefined") {
                _this.detailedgroup.groupname = res.groupname;
                _this.detailedgroup.isofadmin = res.isofadmin;
                _this.detailedgroup.isofasis = res.isofasis;
                _this.detailedgroup.isofadmin = res.isofadmin;
                _this.detailedgroup.membercount = res.membercount;
                console.log(_this.detailedgroup);
            }
            else {
                alert('Cannot get Group Detail');
            }
        });
    };
    AccountComponent.prototype.addNewUserToGroup = function () {
        var _this = this;
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
            this.httpClient.post("http://localhost:3000/createnewgroupuser", newuserdetail).subscribe(function (res) {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(sessionStorage.getItem("currentUser"));
                    temp.userlist = res.userlist;
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                    _this.detailedgroup.membercount = res.membercount;
                    _this.userlist = res.userlist;
                }
                else {
                    alert('Cannot Create User');
                }
                _this.createnewgroupuser = false;
                _this.addnewgroupuser = false;
            });
        }
        else {
            alert("Please fill out the form completely");
        }
    };
    AccountComponent.prototype.addExistingUserToGroup = function () {
        var _this = this;
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
            this.httpClient.post("http://localhost:3000/addusertogroup", newuserdetail).subscribe(function (res) {
                if (typeof (Storage) !== "undefined") {
                    _this.detailedgroup.membercount = res.membercount;
                    _this.userlist = res.userlist;
                    alert(res.notice);
                }
                else {
                    alert('Cannot add User to group');
                }
                _this.createnewgroupuser = false;
                _this.addnewgroupuser = false;
            });
        }
        else {
            alert("Please fill out the form properly");
        }
    };
    AccountComponent.prototype.promoteToGroupAdmin = function (username) {
        var promoteduser = {
            username: username
        };
        this.httpClient.post("http://localhost:3000/promotetogroupadmin", promoteduser).subscribe(function (res) {
            alert(res.notice);
        });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        })
    ], AccountComponent);
    return AccountComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");







var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'firstTry';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService) {
        this.socketService = socketService;
        this.messagecontent = "";
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.initialSetup();
    };
    ChatComponent.prototype.initialSetup = function () {
        var _this = this;
        this.socketService.observable.subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    ChatComponent.prototype.chat = function () {
        if (this.messagecontent) {
            this.socketService.send(this.messagecontent);
            this.messagecontent = null;
        }
        else {
            alert("Please insert a message");
        }
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
    ]; };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm\r\n{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  align-content: center;\r\n  border-radius: 10px;\r\n  max-width: 400px;\r\n  background-color: rgba(246, 71, 71, 1);\r\n  box-shadow: 10px 10px 10px grey;\r\n}\r\n\r\n.loginForm *\r\n{\r\n  padding: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkZvcm1cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgNzEsIDcxLCAxKTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBncmV5O1xyXG59XHJcblxyXG4ubG9naW5Gb3JtICpcclxue1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.nav = function () {
        var _this = this;
        var body = {
            username: this.username,
            password: this.password
        };
        this.httpClient.post("http://localhost:3000/api/auth", body).subscribe(function (res) {
            alert(res.username);
            if (res.valid) {
                if (typeof (Storage) !== "undefined") {
                    var temp = res;
                    delete temp.password;
                    console.log(temp.valid);
                    sessionStorage.setItem("currentUser", JSON.stringify(temp));
                }
                _this.router.navigateByUrl("account");
            }
            else {
                alert('Failed');
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router) {
        this.router = router;
        this.username = "";
        this.birthdate = "";
        this.age = "";
        this.email = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
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
    };
    ProfileComponent.prototype.change = function () {
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
    };
    ProfileComponent.prototype.goToAccount = function () {
        this.router.navigateByUrl('account');
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.url = 'http://localhost:3000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.url);
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    }
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sframe\angularchatsystem\src\main.ts */"./src/main.ts");


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
//# sourceMappingURL=main-es5.js.map