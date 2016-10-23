var users = [];
var isSuccess = false;
var user = {
	name: "hari",
	last: "babu",
	email: "haribabu@gmail.com",
	phone: "8585948494",
	pw: "hari",
	cpw: "hari"
};
users.push(user);

function k() {
	var user_name = document.getElementById("user_name");
	var pw = document.getElementById("pw");
	for (user of users) {
		if (user.name == user_name.value && user.pw == pw.value) {
			document.getElementById("login").style.display = 'none';
			document.getElementById("welcome").style.display = 'block';
			document.getElementById("hidding").style.display = 'block';
			document.getElementById("user_Name").innerHTML = user.name + " " + user.last;
			isSuccess = true;
		}
	}
	if (!isSuccess) {
		alert("Plz enter currect value");
	}
}

function edit() {
	document.getElementById("regist").style.display = 'block';
	for (user of users) {
		var fullname = document.getElementById("user_Name").innerHTML;
		if (user.name + " " + user.last == fullname) {
			document.getElementById("regi").elements.namedItem("first_name").value = user.name;
			document.getElementById("regi").elements.namedItem("last_name").value=user.last;
			document.getElementById("regi").elements.namedItem("email").value=user.email;
			document.getElementById("regi").elements.namedItem("phone").value=user.phone;
		document.getElementById("regi").elements.namedItem("pw").value=user.pw;
		document.getElementById("regi").elements.namedItem("conf_pw").value=user.cpw;
		}
	}
}

function registration() {
	document.getElementById("login").style.display = 'none';
	document.getElementById("regist").style.display = 'block';
}

function reg() {
	user1 = {
		name: document.getElementById("regi").elements.namedItem("first_name").value,
		last: document.getElementById("regi").elements.namedItem("last_name").value,
		email: document.getElementById("regi").elements.namedItem("email").value,
		phone: document.getElementById("regi").elements.namedItem("phone").value,
		pw: document.getElementById("regi").elements.namedItem("pw").value,
		cpw: document.getElementById("regi").elements.namedItem("conf_pw").value
	}
	users.push(user1);
	alert(" registraion successfully");
	document.getElementById("login").style.display = 'block';
	document.getElementById("regist").style.display = 'none';
}