
let error=document.getElementById("error");

function validate(){
    let user=document.getElementById("Username").value;
   let pwd=document.getElementById("password").value;
   if(user===""){
    usererror.innerHTML = "Username is mandatory ";
    usererror.style.color = "red";
    Username.focus();
    return false;
   }
   if(pwd===""){
    pwderror.innerHTML = "password is mandatory";
    pwderror.style.color = "red";
    password.focus();
    return false;
   }
    if(user==="admin" && pwd==="12345"){
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else{
       alert("username or paswrd Invalid!")
       return false;
    }
}
