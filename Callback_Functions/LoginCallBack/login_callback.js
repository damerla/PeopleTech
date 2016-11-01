var users =["hari" ,"raju" , "mahesh"];
var passwordList =["55java","password" ,"pw"];
var isAcciss=false;

function isValidUser(userName ,password){
	for(user of users){
		if(user === userName){
			for(pw of passwordList){
				if(pw == password){
					alert("Login is success.....,!"  +"wellcome to "+userName);
					isAcciss=true;
           				location.href = "home.html";
				}
			}
		}
	}
	if(!isAcciss){
		alert("wrong credentials ......!")
	}
}
//This is the callback function
function login(name ,pw ,isValidUser){
	isValidUser(name,pw);
}

function getloginAcciss(name ,pw ){
	
	  if (typeof login === "function"){
		login(name,pw,isValidUser);
	}else{
		alert("not a function")
	}
}





