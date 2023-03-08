function validation(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if(username==""){
        alert("Username must be entered")
        return false;
    }else if(password==""){
        alert("Password must be entered")
        return false;
    }else if(password.length<5){
        alert("Password length must be of 6 characters")
        return false;
    }else{
        alert("Login Successful")
        return true;
    }
}