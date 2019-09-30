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

module.exports = "<div id=\"center\">\n\t<h1> Account Page </h1>\n\t<p><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\">{{username}}</p>\n\t<p><img src=\"https://img.icons8.com/cute-clipart/64/000000/birthday-cake.png\">{{birthdate}}</p>\n\t<p>Age: {{age}}</p>\n\t<p>Email:{{email}}</p>\n </div>\n\n\n\n <div id=\"userlist\" *ngIf = \"userlist.length\">\n\t<h3><img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"> Users List</h3>\n\t<ul>\n\t   <li *ngFor = \"let user of userlist\">{{user}}<br><button (click) = \"deleteUser(user)\">Delete this user</button><button (click) = \"promoteToGroupAdmin(user)\">Promote to Group Admin</button></li>\n\t</ul>\n </div>\n\n\n <div id=\"grouplist\" *ngIf=\"grouplist.length\">\n\t<h3><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">Your Groups</h3>\n\t<ul>\n\t   <li *ngFor = \"let group of grouplist\">\n\t\t  <a  (click) = \"groupDetail(group)\">{{group}}</a>\n\t\t  <div *ngIf=\"admingrouplist.length > 0 &&  admingrouplist.includes(group)\"><button (click) = \"deleteGroup(group)\">Delete Group</button></div>\n\t   </li>\n\t</ul>\n </div>\n\n\n\n <div id=\"groupdetails\" *ngIf=\"detailedgroup.groupname\">\n\t<h1>Group Details</h1>\n\t<h1>{{detailedgroup.groupname}}</h1>\n\t<h2><img src=\"https://img.icons8.com/dusk/64/000000/groups.png\">{{detailedgroup.membercount }} member/s </h2>\n\t<ul>\n\t   <li *ngFor = \"let channel of detailedgroup.channels\"><a  (click) = \"channelDetail(channel)\">{{channel}}</a>\n\t\t  <button (click) = \"deleteChannel(channel)\" *ngIf=\"detailedgroup.isofadmin\">Delete Channel</button>\n\t   </li>\n\t</ul>\n\t<img id=\"close\" (click) = \"removegroupdetails()\" src=\"https://img.icons8.com/flat_round/64/000000/delete-sign.png\">\n\n\t<br><br>\n\t<!-- New channel form -->\n\t<div id=\"channelcreation\" *ngIf=\"detailedgroup.isofasis\" style=\"border:1px solid black;padding:1em;background-color: antiquewhite\">\n\t   <input type=\"text\" [(ngModel)]=\"nchannelname\" name=\"nchannelname\" placeholder=\"channel name\"><br><br>\n\t   <button (click) = \"createChannel()\"> Create a channel</button>\n\n\t</div>\n\t<br><br>\n\n\t<div *ngIf=\"detailedgroup.isofasis\" style=\"border:1px solid black;padding:1em;background-color: antiquewhite\">\n\t   <input type=\"text\" [(ngModel)]=\"cusername\" name=\"cusername\" placeholder=\"user name\"><br><br>\n\t   <input type=\"text\" [(ngModel)]=\"addtochannelname\" name=\"addtochannelname\" placeholder=\"channel name\"><br><br>\n\t   <button (click) = \"addUserToChannel()\"> Add user to a channel</button>\n\t</div>\n\t<br><br>\n\t<div *ngIf=\"detailedgroup.isofadmin\">\n\t   <button (click) = \"turn(1)\">Create a new user and add to the group</button>\n\t   <button (click) = \"turn(2)\">Add an existing user to the group</button><br>\n\t   <br>\n\t   <div *ngIf =\"createnewgroupuser\" style=\"border:1px solid black;padding:1em;background-color: antiquewhite\">\n\t\t  <input type=\"text\" [(ngModel)]=\"ngroupusername\" name=\"ngroupusername\" placeholder=\"username\" ><br><br>\n\t\t  <input type=\"text\" [(ngModel)]=\"ngroupbirthdate\" name=\"ngroupbirthdate\" placeholder=\"birthdate\" required><br><br>\n\t\t  <input type=\"text\" [(ngModel)]=\"ngroupage\" name=\"ngroupage\" placeholder=\"age\" required><br><br>\n\t\t  <input type=\"text\" [(ngModel)]=\"ngroupemail\" name=\"ngroupemail\" placeholder=\"email\" required><br><br>\n\t\t  <input type=\"text\" [(ngModel)]=\"nofgroupasis\" name=\"nofgroupasis\" placeholder=\"asis role?\" required><br><br>\n\t\t  <input type=\"password\" [(ngModel)]=\"ngrouppassword\" name=\"ngrouppassword\" placeholder=\"password\" required>\n\t\t  <br><br>\n\t\t  <button (click) = \"addNewUserToGroup()\">Create a new user and add to the group</button>\n\t   </div>\n\t   <br><br>\n\t   <div *ngIf = \"addnewgroupuser\" style=\"border:1px solid black;padding:1em;background-color: antiquewhite\">\n\t\t  <input type=\"text\" [(ngModel)]=\"groupusername\" name=\"groupusername\" placeholder=\"username\" required><br><br>\n\t\t  <input type=\"text\" [(ngModel)]=\"ofgroupasis\" name=\"ofgroupasis\" placeholder=\"group asis?\" required><br><br>\n\t\t  <button (click) = \"addExistingUserToGroup()\">Add a current user to the group</button>\n\t   </div>\n\n\n\t   <br><br>\n\t   <input type=\"text\" [(ngModel)]=\"rusername\" name=\"rusername\" placeholder=\"username\" ><br><br>\n\t   <button (click) = \"removeUserFromGroup()\">Remove a user from the group</button>\n\t</div>\n </div>\n\n\n <br><br>\n\n <div id=\"newuserform\" *ngIf=\"username == 'super'\">\n\t<h1> Create A New User Here<img src=\"https://img.icons8.com/bubbles/50/000000/user.png\"></h1>\n\t<form>\n\t   <input type=\"text\" [(ngModel)]=\"nusername\" name=\"nusername\" placeholder=\"username\" required><br><br>\n\t   <input type=\"text\" [(ngModel)]=\"nbirthdate\" name=\"nbirthdate\" placeholder=\"birthdate\" required><br><br>\n\t   <input type=\"text\" [(ngModel)]=\"nage\" name=\"nage\" placeholder=\"age\" required><br><br>\n\t   <input type=\"text\" [(ngModel)]=\"nemail\" name=\"nemail\" placeholder=\"email\" required><br><br>\n\t   <input type=\"text\" [(ngModel)]=\"nofgroupadmin\" name=\"nofgroupadmin\" placeholder=\"admin role?\" required><br><br>\n\t   <input type=\"password\" [(ngModel)]=\"npassword\" name=\"npassword\" placeholder=\"password\"><br><br>\n\t   <button (click) = \"createNewUser()\">Submit</button>\n\t</form>\n </div>\n\n <br><br>\n\n <div id=\"newgroupform\" *ngIf=\"ofgroupadmin\">\n\t<h1> Create A New group Here<img src=\"https://img.icons8.com/dusk/64/000000/groups.png\"></h1>\n\t<form>\n\t   <input type=\"text\" [(ngModel)]=\"ngroupname\" name=\"ngroupname\" placeholder=\"groupname\" ><br><br>\n\t   <button (click) = \"createNewGroup()\">Submit</button>\n\t</form>\n </div>\n\n\n\n\n <div id=\"logout\" >\n\t<img (click) = \"logout()\" src=\"https://img.icons8.com/bubbles/50/000000/exit.png\">\n\t<button (click) = \"logout()\">Log Out</button>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-default\">\n\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n\n\n\t\t<li class=\"active\"><a class=\"nav-link\" routerLink=\"/\">Home</a></li> \n\t\t<li> <a class=\"nav-link\" routerLink=\"/login\">login</a></li>\n\t\t<li><a class=\"nav-link\" routerLink=\"/account\">Dashboard</a></li>\n\t</ul> \n\n  </div>\n</nav>\n\n\n\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Initial login- Use \"super\" as both username and password</h1>\n<div class = \"loginForm\">\n  <form>\n  \n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"username\"><br><br>\n\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\"><br><br>\n      <button (click) = \"nav()\">Submit</button>\n  \n\n  </form>\n</div>\n  "

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n#center\n{\n\twidth: 50%;\n\tmargin-left: auto;\n\tmargin-right: auto; \n\tz-index: -1;\n\tposition: absolute;\n\ttop: 1em;\n\tleft: 10em;\n\n\n}\n#userlist\n{\n\tposition: absolute;\n\ttop: 5em;\n\tright: 1em;\n\theight:500px;\n\twidth: 25%;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n}\n#userlist h3\n{\n\ttext-align: center;\n}\n#userlist ul\n{\n\tlist-style: none;\n}\n#grouplist\n{\n\tposition: absolute;\n\twidth: 30%;\n\tbottom:2em;\n\theight: 300px;\n\tright: 1em;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n\n}\n#grouplist ul\n{\n\tlist-style: none;\n}\n#grouplist ul li:hover\n{\n\tcursor: pointer;\n}\n#grouplist img\n{\n\theight: 40px;\n\twidth: 40px;\n}\n#grouplist h3\n{\n\ttext-align: center;\n}\n#groupdetails \n{\n\tposition: relative;\n\tborder:2px solid black;\n\tbox-shadow: 10px 10px 30px black;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin-bottom:  2em;\n}\n#close\n{\n\tposition: absolute;\n\ttop: 1em;\n\tright: 1em;\n\n}\n#close:hover\n{\n\tcursor: pointer;\n\n}\n#newuserform\n{\n\tbox-shadow: 10px 10px 50px grey;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin:2em 2em;\n\tborder-radius: 15px;\n}\n#newgroupform\n{\n\tbox-shadow: 10px 10px 50px grey;\n\toverflow-x: scroll;\n\twidth: 70%;\n\tpadding: 1em;\n\tmargin:2em 2em;\n\tborder-radius: 15px;\n}\n#logout\n{\n\tposition: absolute;\n\ttop: 0;\n\tright: 1em;\n}\nbutton {\n\tbox-shadow:inset 0px 1px 3px 0px #91b8b3;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(5%, #768d87), to(#6c7c7c));\n\tbackground:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#768d87', endColorstr='#6c7c7c',GradientType=0);\n\tbackground-color:#768d87;\n\tborder-radius:5px;\n\tborder:1px solid #566963;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:11px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px -1px 0px #2b665e;\n}\nbutton:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(5%, #6c7c7c), to(#768d87));\n\tbackground:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c7c7c', endColorstr='#768d87',GradientType=0);\n\tbackground-color:#6c7c7c;\n}\nbutton:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBOztDQUVDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7OztBQUdYO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsWUFBWTtDQUNaLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjtBQUdBOztDQUVDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7O0FBRW5CO0FBQ0E7O0NBRUMsZ0JBQWdCO0FBQ2pCO0FBRUE7O0NBRUMsZUFBZTtBQUNoQjtBQUVBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxrQkFBa0I7QUFDbkI7QUFHQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7O0FBRVg7QUFDQTs7Q0FFQyxlQUFlOztBQUVoQjtBQUVBOztDQUVDLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBRUE7O0NBRUMsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7QUFDWDtBQUlBO0NBR0Msd0NBQXdDO0NBTXhDLGdHQUErRDtDQUEvRCwrREFBK0Q7Q0FDL0QsZ0hBQWdIO0NBQ2hILHdCQUF3QjtDQUd4QixpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FNQyxnR0FBK0Q7Q0FBL0QsK0RBQStEO0NBQy9ELGdIQUFnSDtDQUNoSCx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuI2NlbnRlclxue1xuXHR3aWR0aDogNTAlO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvOyBcblx0ei1pbmRleDogLTE7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxZW07XG5cdGxlZnQ6IDEwZW07XG5cblxufVxuI3VzZXJsaXN0XG57XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1ZW07XG5cdHJpZ2h0OiAxZW07XG5cdGhlaWdodDo1MDBweDtcblx0d2lkdGg6IDI1JTtcblx0Ym9yZGVyOjJweCBzb2xpZCBibGFjaztcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggYmxhY2s7XG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuI3VzZXJsaXN0IGgzXG57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3VzZXJsaXN0IHVsXG57XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuI2dyb3VwbGlzdFxue1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAzMCU7XG5cdGJvdHRvbToyZW07XG5cdGhlaWdodDogMzAwcHg7XG5cdHJpZ2h0OiAxZW07XG5cdGJvcmRlcjoycHggc29saWQgYmxhY2s7XG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IGJsYWNrO1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cbn1cbiNncm91cGxpc3QgdWxcbntcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuI2dyb3VwbGlzdCB1bCBsaTpob3Zlclxue1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNncm91cGxpc3QgaW1nXG57XG5cdGhlaWdodDogNDBweDtcblx0d2lkdGg6IDQwcHg7XG59XG4jZ3JvdXBsaXN0IGgzXG57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4jZ3JvdXBkZXRhaWxzIFxue1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJvcmRlcjoycHggc29saWQgYmxhY2s7XG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IGJsYWNrO1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdHdpZHRoOiA3MCU7XG5cdHBhZGRpbmc6IDFlbTtcblx0bWFyZ2luLWJvdHRvbTogIDJlbTtcbn1cblxuI2Nsb3NlXG57XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxZW07XG5cdHJpZ2h0OiAxZW07XG5cbn1cbiNjbG9zZTpob3Zlclxue1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuI25ld3VzZXJmb3JtXG57XG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IGdyZXk7XG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcblx0d2lkdGg6IDcwJTtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW46MmVtIDJlbTtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI25ld2dyb3VwZm9ybVxue1xuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNTBweCBncmV5O1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdHdpZHRoOiA3MCU7XG5cdHBhZGRpbmc6IDFlbTtcblx0bWFyZ2luOjJlbSAyZW07XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiNsb2dvdXRcbntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAxZW07XG59XG5cblxuXG5idXR0b24ge1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAzcHggMHB4ICM5MWI4YjM7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwcHggMXB4IDNweCAwcHggIzkxYjhiMztcblx0Ym94LXNoYWRvdzppbnNldCAwcHggMXB4IDNweCAwcHggIzkxYjhiMztcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICM3NjhkODcpLCBjb2xvci1zdG9wKDEsICM2YzdjN2MpKTtcblx0YmFja2dyb3VuZDotbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM3NjhkODcgNSUsICM2YzdjN2MgMTAwJSk7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzY4ZDg3IDUlLCAjNmM3YzdjIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM3NjhkODcgNSUsICM2YzdjN2MgMTAwJSk7XG5cdGJhY2tncm91bmQ6LW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM3NjhkODcgNSUsICM2YzdjN2MgMTAwJSk7XG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc2OGQ4NyA1JSwgIzZjN2M3YyAxMDAlKTtcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjNzY4ZDg3JywgZW5kQ29sb3JzdHI9JyM2YzdjN2MnLEdyYWRpZW50VHlwZT0wKTtcblx0YmFja2dyb3VuZC1jb2xvcjojNzY4ZDg3O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6NXB4O1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6NXB4O1xuXHRib3JkZXItcmFkaXVzOjVweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjNTY2OTYzO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xuXHRmb250LXNpemU6MTVweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0cGFkZGluZzoxMXB4IDIzcHg7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHR0ZXh0LXNoYWRvdzowcHggLTFweCAwcHggIzJiNjY1ZTtcbn1cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjA1LCAjNmM3YzdjKSwgY29sb3Itc3RvcCgxLCAjNzY4ZDg3KSk7XG5cdGJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNmM3YzdjIDUlLCAjNzY4ZDg3IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzZjN2M3YyA1JSwgIzc2OGQ4NyAxMDAlKTtcblx0YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQodG9wLCAjNmM3YzdjIDUlLCAjNzY4ZDg3IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNmM3YzdjIDUlLCAjNzY4ZDg3IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2YzdjN2MgNSUsICM3NjhkODcgMTAwJSk7XG5cdGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzZjN2M3YycsIGVuZENvbG9yc3RyPScjNzY4ZDg3JyxHcmFkaWVudFR5cGU9MCk7XG5cdGJhY2tncm91bmQtY29sb3I6IzZjN2M3Yztcbn1cbmJ1dHRvbjphY3RpdmUge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0dG9wOjFweDtcbn1cblxuIl19 */"

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
        //flags to show buttons
        this.createnewgroupuser = false;
        this.addnewgroupuser = false;
        //users login details
        this.username = "";
        this.birthdate = "";
        this.age = "";
        this.email = "";
        this.ofgroupadmin = false;
        this.admingrouplist = [];
        this.grouplist = [];
        this.userlist = [];
        // variables for storing new user data 
        this.nusername = "";
        this.nbirthdate = "";
        this.nage = "";
        this.nemail = "";
        this.npassword = "";
        this.nofgroupadmin = "";
        this.ngrouplist = [];
        this.nadmingrouplist = [];
        this.nvalid = true;
        // variables storing current veiwed group details
        this.detailedgroup = {
            groupname: "",
            isofadmin: false,
            isofasis: false,
            membercount: 0,
            channels: []
        };
        //new group user details
        this.ngroupusername = "";
        this.ngroupbirthdate = "";
        this.ngroupage = "";
        this.ngroupemail = "";
        this.ngrouppassword = "";
        this.nofgroupasis = "";
        this.nmembergrouplist = [];
        this.ngroupvalid = true;
        // for adding existing user to group
        this.groupusername = "";
        this.ofgroupasis = "";
        // new group details
        this.ngroupname = "";
        //new channel name
        this.nchannelname = "";
        //removing user
        this.rusername = "";
        //adding user to channel
        this.cusername = "";
        this.addtochannelname = "";
    }
    AccountComponent.prototype.ngOnInit = function () {
        //setting up page
        if (typeof (Storage) !== "undefined") {
            try {
                var userdetails = JSON.parse(localStorage.getItem("currentUser"));
                this.username = userdetails.username;
                this.birthdate = userdetails.birthdate;
                this.ofgroupadmin = userdetails.ofgroupadmin;
                this.admingrouplist = userdetails.admingrouplist;
                this.age = userdetails.age;
                this.email = userdetails.email;
                this.grouplist = userdetails.grouplist;
                this.getuserlist(this.username);
            }
            catch (error) {
                alert("Please Login First");
                this.router.navigateByUrl('login');
            }
        }
    };
    //function to update the userlist
    AccountComponent.prototype.getuserlist = function (username) {
        var _this = this;
        this.httpClient.post("http://localhost:3000/getuserlist", username).subscribe(function (res) {
            var userdetails = JSON.parse(localStorage.getItem("currentUser"));
            userdetails.userlist = res;
            _this.userlist = res;
            localStorage.setItem("currentUser", JSON.stringify(userdetails));
        });
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
    //User logs out and localstorage is cleared 
    AccountComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('login');
    };
    // New user creation function
    AccountComponent.prototype.createNewUser = function () {
        var _this = this;
        if (this.nofgroupadmin != "" && this.nusername != "" && this.nage != "" && this.nbirthdate != "" && this.nemail != "" && this.npassword != "" && this.nusername != "super") {
            if (this.nofgroupadmin == "true") {
                this.nofgroupadmin = true;
            }
            else {
                this.nofgroupadmin = false;
            }
            var body = {
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
            this.httpClient.post("http://localhost:3000/createuser", body).subscribe(function (res) {
                if (res.err) {
                    alert(res.err);
                }
                else {
                    alert(res.message);
                }
                _this.getuserlist(_this.username);
            });
        }
        else {
            alert("Please fill out the form completely and username cant be super");
        }
    };
    // New group creation function
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
                if (res.notice == "Done") {
                    if (typeof (Storage) !== "undefined") {
                        var temp = JSON.parse(localStorage.getItem("currentUser"));
                        temp.grouplist = res.grouplist;
                        temp.admingrouplist = res.admingrouplist;
                        localStorage.setItem("currentUser", JSON.stringify(temp));
                        _this.grouplist = res.grouplist;
                        _this.admingrouplist = res.admingrouplist;
                    }
                    else {
                        alert('Cannot Create Group');
                    }
                }
                else {
                    alert("Group Already exists");
                }
            });
        }
        else {
            alert("Please enter a group name");
        }
    };
    //deleting user function
    AccountComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var deluser = {
            username: user
        };
        this.httpClient.post("http://localhost:3000/deleteuser", deluser).subscribe(function (res) {
            if (typeof (Storage) !== "undefined") {
                if (res.userlist.length != _this.userlist.length - 1) {
                    alert("New Users have been added by other admin");
                }
                var temp = JSON.parse(localStorage.getItem("currentUser"));
                temp.userlist = res.userlist;
                localStorage.setItem("currentUser", JSON.stringify(temp));
                _this.userlist = res.userlist;
            }
            else {
                alert('Cannot Delete User');
            }
            if (_this.detailedgroup.groupname) {
                _this.groupDetail(_this.detailedgroup.groupname);
            }
        });
    };
    //deleting group function
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
            groupname: group,
            deletor: this.username
        };
        this.httpClient.post("http://localhost:3000/deletegroup", delgroup).subscribe(function (res) {
            if (typeof (Storage) !== "undefined") {
                var temp = JSON.parse(localStorage.getItem("currentUser"));
                temp.grouplist = res.grouplist;
                temp.admingrouplist = res.grouplist;
                localStorage.setItem("currentUser", JSON.stringify(temp));
                _this.grouplist = res.grouplist;
                _this.admingrouplist = res.admingrouplist;
            }
            else {
                alert('Cannot Delete User');
            }
        });
    };
    //function for removing detailed group when the close button is pressed
    AccountComponent.prototype.removegroupdetails = function () {
        this.detailedgroup = {
            groupname: "",
            isofadmin: false,
            isofasis: false,
            membercount: 0,
            channels: []
        };
    };
    //getting group details via http request when user clicks on a group to see its details
    AccountComponent.prototype.groupDetail = function (group) {
        var _this = this;
        var getgroup = {
            requester: this.username,
            groupname: group
        };
        this.httpClient.post("http://localhost:3000/getgroupdetail", getgroup).subscribe(function (res) {
            if (res.membercount) {
                if (typeof (Storage) !== "undefined") {
                    _this.detailedgroup.groupname = res.groupname;
                    _this.detailedgroup.isofadmin = res.isofadmin;
                    _this.detailedgroup.isofasis = res.isofasis;
                    _this.detailedgroup.isofadmin = res.isofadmin;
                    _this.detailedgroup.membercount = res.membercount;
                    _this.detailedgroup.channels = res.channels;
                }
                else {
                    alert('Cannot get Group Detail');
                }
            }
            else {
                alert("The group seems to be deleted");
                _this.grouplist = _this.grouplist.filter(function (value) {
                    return value != res.groupname;
                });
            }
        });
    };
    // New user creation function and adding user to the current viewing group
    AccountComponent.prototype.addNewUserToGroup = function () {
        var _this = this;
        if (this.ngroupusername != "" && this.nofgroupasis != "" && this.ngroupage != "" && this.ngroupbirthdate != "" && this.ngroupemail != "" && this.ngrouppassword != "" && this.ngroupusername != "super") {
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
                admingrouplist: [],
                password: this.ngrouppassword,
                valid: this.ngroupvalid,
                groupname: this.detailedgroup.groupname,
                creator: this.username
            };
            this.httpClient.post("http://localhost:3000/createnewgroupuser", newuserdetail).subscribe(function (res) {
                if (typeof (Storage) !== "undefined") {
                    var temp = JSON.parse(localStorage.getItem("currentUser"));
                    temp.userlist = res.userlist;
                    localStorage.setItem("currentUser", JSON.stringify(temp));
                    _this.userlist = res.userlist;
                    _this.groupDetail(_this.detailedgroup.groupname);
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
    //Adding an existing user to the current viewed group
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
                    _this.userlist = res.userlist;
                    alert(res.notice);
                    _this.groupDetail(_this.detailedgroup.groupname);
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
    //Remove the user from group
    AccountComponent.prototype.removeUserFromGroup = function () {
        var _this = this;
        var removeuser = {
            groupname: this.detailedgroup.groupname,
            username: this.rusername
        };
        this.httpClient.post("http://localhost:3000/removeuserfromgroup", removeuser).subscribe(function (res) {
            alert(res.notice);
            _this.groupDetail(_this.detailedgroup.groupname);
        });
    };
    //
    //function for promoting a user to group admin
    AccountComponent.prototype.promoteToGroupAdmin = function (username) {
        var _this = this;
        var promoteduser = {
            username: username
        };
        this.httpClient.post("http://localhost:3000/promotetogroupadmin", promoteduser).subscribe(function (res) {
            if (res.notice == "Done") {
                alert("User promoted to group admin role");
            }
            else {
                alert("User does not seem to be part of the system");
                _this.userlist = _this.userlist.filter(function (value) {
                    return value != username;
                });
            }
        });
    };
    // function  for creating new channel
    AccountComponent.prototype.createChannel = function () {
        var _this = this;
        if (this.nchannelname) {
            var newchannel = {
                groupname: this.detailedgroup.groupname,
                channelname: this.nchannelname,
                members: ["super", this.username],
                admins: ["super", this.username]
            };
            if (this.username == 'super') {
                newchannel.admins.pop();
                newchannel.members.pop();
            }
            this.httpClient.post("http://localhost:3000/createchannel", newchannel).subscribe(function (res) {
                if (res.notice == "Done") {
                    alert("Channel created");
                    _this.groupDetail(_this.detailedgroup.groupname);
                }
                else {
                    alert("Channel couldn't be created or may already exist");
                    _this.groupDetail(_this.detailedgroup.groupname);
                }
            });
        }
        else {
            alert("Please insert a channel name");
        }
    };
    //function for deleting a channel
    AccountComponent.prototype.deleteChannel = function (channel) {
        var _this = this;
        var deletechannel = {
            groupname: this.detailedgroup.groupname,
            channelname: channel,
        };
        this.httpClient.post("http://localhost:3000/deletechannel", deletechannel).subscribe(function (res) {
            if (res.notice == "Done") {
                alert("Channel deleted");
                _this.groupDetail(_this.detailedgroup.groupname);
                console.log(_this.detailedgroup.channels);
            }
            else {
                alert("Other admin has deleted the channel or the group");
                _this.groupDetail(_this.detailedgroup.groupname);
            }
        });
    };
    //Add a group member to a channel
    AccountComponent.prototype.addUserToChannel = function () {
        var _this = this;
        if (this.cusername != "" && this.addtochannelname != "") {
            var adduser = {
                username: this.cusername,
                groupname: this.detailedgroup.groupname,
                channelname: this.addtochannelname,
            };
            this.httpClient.post("http://localhost:3000/addusertochannel", adduser).subscribe(function (res) {
                alert(res.notice);
                _this.groupDetail(_this.detailedgroup.groupname);
            });
        }
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





var routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
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

module.exports = "body,html\n{\n   background: #ad5389;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: -webkit-gradient(linear, left top, right top, from(#3c1053), to(#ad5389));\n    background: linear-gradient(to right, #3c1053, #ad5389); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ2UsK0JBQStCO0lBQ2pHLHFGQUF1RDtJQUF2RCx1REFBdUQsRUFBRSxxRUFBcUU7OztBQUdsSSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxodG1sXG57XG4gICBiYWNrZ3JvdW5kOiAjYWQ1Mzg5OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2MxMDUzLCAjYWQ1Mzg5KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2MxMDUzLCAjYWQ1Mzg5KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG5cbn0iXX0= */"

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









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
            if (res.valid) {
                if (typeof (Storage) !== "undefined") {
                    var temp = res;
                    delete temp.password;
                    localStorage.setItem("currentUser", JSON.stringify(temp));
                }
                _this.router.navigateByUrl("account");
            }
            else {
                alert('Please enter valid login details');
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

module.exports = __webpack_require__(/*! /Users/sankitmanshrestha/Sankit/angularchatsystem/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map