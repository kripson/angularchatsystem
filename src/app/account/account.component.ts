import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	HttpClient
} from '@angular/common/http';


// Interfaces for reply from server after a http request
interface Users {
	userlist: any;
	notice: string;
};

interface Groups {
	grouplist: any;
	admingrouplist: any;
	notice;
};

interface Group {
	groupname: string,
		isofadmin: boolean;
	isofasis: boolean;
	membercount: number;
	channels: any;
};


interface Member {
	userlist: any;
	notice: string;
}


@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	createnewgroupuser = false;
	addnewgroupuser = false;


	username = "";
	birthdate = "";
	age = "";
	email = "";
	ofgroupadmin = false;
	admingrouplist = [];
	grouplist = [];
	userlist = [];


	nusername = "";
	nbirthdate = "";
	nage = "";
	nemail = "";
	npassword = "";
	nofgroupadmin: any = "";
	ngrouplist = [];
	nadmingrouplist = [];
	nvalid = true;


	detailedgroup = {
		groupname: "",
		isofadmin: false,
		isofasis: false,
		membercount: 0,
		channels: []
	};


	ngroupusername = "";
	ngroupbirthdate = "";
	ngroupage = "";
	ngroupemail = "";
	ngrouppassword = "";
	nofgroupasis: any = "";
	nmembergrouplist = [];
	ngroupvalid = true;

	groupusername = "";
	ofgroupasis: any = "";


	ngroupname = "";


	nchannelname = "";


	rusername = "";


	cusername = "";
	addtochannelname = "";


	constructor(private router: Router, private httpClient: HttpClient) {}

	ngOnInit() {


		if (typeof (Storage) !== "undefined") {


			try {
				var userdetails = JSON.parse(localStorage.getItem("currentUser"));
				this.userlist = userdetails.userlist;
				this.username = userdetails.username;
				this.birthdate = userdetails.birthdate;
				this.ofgroupadmin = userdetails.ofgroupadmin;
				this.admingrouplist = userdetails.admingrouplist;
				this.age = userdetails.age;
				this.email = userdetails.email;
				this.grouplist = userdetails.grouplist;


			} catch (error) {
				alert("Please Login First");
				this.router.navigateByUrl('login');
			}
		}
	}


	turn(num) {
		if (num == 1) {
			this.createnewgroupuser = true;
			this.addnewgroupuser = false;
		} else {
			this.addnewgroupuser = true;
			this.createnewgroupuser = false;
		}
	}

	logout() {
		localStorage.clear();
		this.router.navigateByUrl('login');
	}

	createNewUser() {
		if (this.nofgroupadmin != "" && this.nusername != "" && this.nage != "" && this.nbirthdate != "" && this.nemail != "" && this.npassword != "" && this.nusername != "super") {


			if (this.nofgroupadmin == "true") {
				this.nofgroupadmin = true;
			} else {
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
			}

			this.httpClient.post < Users > ("http://localhost:3000/createuser", nuser).subscribe(res => {

				if (res.notice == "user created") {

					if (typeof (Storage) !== "undefined") {
						if (res.userlist.length != this.userlist.length + 1) {
							alert("New users have been added by other admins");

						}
						var temp = JSON.parse(localStorage.getItem("currentUser"));
						temp.userlist = res.userlist;
						localStorage.setItem("currentUser", JSON.stringify(temp));
						this.userlist = res.userlist;


					} else {
						alert('Cannot Create User');
					}
				} else {
					alert("User already exists");
					var temp = JSON.parse(localStorage.getItem("currentUser"));
					temp.userlist = res.userlist;
					localStorage.setItem("currentUser", JSON.stringify(temp));
					this.userlist = res.userlist;


				}
			});
		} else {
			alert("Please fill out the form completely and username cant be super");
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

			this.httpClient.post < Groups > ("http://localhost:3000/creategroup", ngroup).subscribe(res => { 

				if (res.notice == "Done") {
					if (typeof (Storage) !== "undefined") {
						var temp = JSON.parse(localStorage.getItem("currentUser"));
						temp.grouplist = res.grouplist;
						temp.admingrouplist = res.admingrouplist;
						localStorage.setItem("currentUser", JSON.stringify(temp));
						this.grouplist = res.grouplist;
						this.admingrouplist = res.admingrouplist;
					} else {
						alert('Cannot Create Group');
					}
				} else {
					alert("Group Already exists");
				}

			});
		} else {
			alert("Please enter a group name");
		}

	}

	deleteUser(user) {
		var deluser = {
			username: user
		}
		this.httpClient.post < Users > ("http://localhost:3000/deleteuser", deluser).subscribe(res => {  


			if (typeof (Storage) !== "undefined") {
				if (res.userlist.length != this.userlist.length - 1) {
					alert("New Users have been added by other admin");
				}

				var temp = JSON.parse(localStorage.getItem("currentUser"));
				temp.userlist = res.userlist;
				localStorage.setItem("currentUser", JSON.stringify(temp));
				this.userlist = res.userlist;
			} else {
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
		}
		this.httpClient.post < Groups > ("http://localhost:3000/deletegroup", delgroup).subscribe(res => {  


			if (typeof (Storage) !== "undefined") {
				var temp = JSON.parse(localStorage.getItem("currentUser"));
				temp.grouplist = res.grouplist;
				temp.admingrouplist = res.grouplist;
				localStorage.setItem("currentUser", JSON.stringify(temp));
				this.grouplist = res.grouplist;
				this.admingrouplist = res.admingrouplist;
			} else {
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
		}
		this.httpClient.post < Group > ("http://localhost:3000/getgroupdetail", getgroup).subscribe(res => {  
			if (res.membercount) {
				if (typeof (Storage) !== "undefined") {
					this.detailedgroup.groupname = res.groupname;
					this.detailedgroup.isofadmin = res.isofadmin;
					this.detailedgroup.isofasis = res.isofasis;
					this.detailedgroup.isofadmin = res.isofadmin;
					this.detailedgroup.membercount = res.membercount;
					this.detailedgroup.channels = res.channels;

				} else {
					alert('Cannot get Group Detail');
				}
			} else {
				alert("The group seems to be deleted");
				this.grouplist = this.grouplist.filter(function (value) {

					return value != res.groupname;

				});
			}
		});


	}

	addNewUserToGroup() {
		if (this.ngroupusername != "" && this.nofgroupasis != "" && this.ngroupage != "" && this.ngroupbirthdate != "" && this.ngroupemail != "" && this.ngrouppassword != "" && this.ngroupusername != "super") {


			if (this.nofgroupasis == "true") {
				this.nofgroupasis = true;
			} else {
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
			}

			this.httpClient.post < Member > ("http://localhost:3000/createnewgroupuser", newuserdetail).subscribe(res => {  


				if (typeof (Storage) !== "undefined") {
					var temp = JSON.parse(localStorage.getItem("currentUser"));
					temp.userlist = res.userlist;
					localStorage.setItem("currentUser", JSON.stringify(temp));
					this.userlist = res.userlist;
					this.groupDetail(this.detailedgroup.groupname);
				} else {
					alert('Cannot Create User');
				}
				this.createnewgroupuser = false;
				this.addnewgroupuser = false;
			});
		} else {
			alert("Please fill out the form completely");
		}


	}

	addExistingUserToGroup() {
		if (this.groupusername != "" && this.ofgroupasis != "") {
			if (this.ofgroupasis == "true") {
				this.ofgroupasis = true;
			} else {
				this.ofgroupasis = false;
			}
			var newuserdetail = {
				username: this.groupusername,
				ofgroupasis: this.ofgroupasis,
				groupname: this.detailedgroup.groupname,
				creator: this.username
			}

			this.httpClient.post < Member > ("http://localhost:3000/addusertogroup", newuserdetail).subscribe(res => {  


				if (typeof (Storage) !== "undefined") {
					this.userlist = res.userlist;
					alert(res.notice);
					this.groupDetail(this.detailedgroup.groupname);
				} else {
					alert('Cannot add User to group');
				}
				this.createnewgroupuser = false;
				this.addnewgroupuser = false;
			});
		} else {
			alert("Please fill out the form properly");
		}


	}


	//Remove the user from group
	removeUserFromGroup() {

		var removeuser = {
			groupname: this.detailedgroup.groupname,
			username: this.rusername
		};
		this.httpClient.post < any > ("http://localhost:3000/removeuserfromgroup", removeuser).subscribe(res => {  


			alert(res.notice);
			this.groupDetail(this.detailedgroup.groupname);

		});
	}


	//


	promoteToGroupAdmin(username) {

		var promoteduser = {
			username: username

		}
		this.httpClient.post < any > ("http://localhost:3000/promotetogroupadmin", promoteduser).subscribe(res => {  

			if (res.notice == "Done") {
				alert("User promoted to group admin role");
			} else {
				alert("User does not seem to be part of the system");
				this.userlist = this.userlist.filter(function (value) {

					return value != username;

				});
			}


		});
	}

	//creating new channel
	createChannel() {

		if (this.nchannelname) {
			var newchannel = {
				groupname: this.detailedgroup.groupname,
				channelname: this.nchannelname,
				members: ["super", this.username],
				admins: ["super", this.username]
			}

			if (this.username == 'super') {
				newchannel.admins.pop();
				newchannel.members.pop();
			}

			this.httpClient.post < any > ("http://localhost:3000/createchannel", newchannel).subscribe(res => {  

				if (res.notice == "Done") {
					alert("Channel created");
					this.groupDetail(this.detailedgroup.groupname);
				} else {
					alert("Channel couldn't be created or may already exist");
					this.groupDetail(this.detailedgroup.groupname);
				}


			});
		} else {
			alert("Please insert a channel name");
		}


	}

	//Deleting a channel
	deleteChannel(channel) {

		var deletechannel = {
			groupname: this.detailedgroup.groupname,
			channelname: channel,
		}


		this.httpClient.post < any > ("http://localhost:3000/deletechannel", deletechannel).subscribe(res => {  

			if (res.notice == "Done") {
				alert("Channel deleted");
				this.groupDetail(this.detailedgroup.groupname);
				console.log(this.detailedgroup.channels);
			} else {
				alert("Other admin has deleted the channel or the group");
				this.groupDetail(this.detailedgroup.groupname);
			}


		});


	}


	//Add a group member to a channel
	addUserToChannel() {
		if (this.cusername != "" && this.addtochannelname != "") {
			var adduser = {
				username: this.cusername,
				groupname: this.detailedgroup.groupname,
				channelname: this.addtochannelname,
			}


			this.httpClient.post < any > ("http://localhost:3000/addusertochannel", adduser).subscribe(res => {  

				alert(res.notice);
				this.groupDetail(this.detailedgroup.groupname);


			});
		}


	}
}