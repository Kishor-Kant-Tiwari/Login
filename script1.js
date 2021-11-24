var card=document.getElementById("card");         
function openRegister()
     {
     card.style.transform = "rotateY(-180deg)";
     
     
     }	
function openLogin()
     {
         card.style.transform = "rotateY(0deg)";
         
         	
     }



var nameV;
var emailV;
var mobileV;
var passwordV; 
var randomKey=parseInt(10+(1000-10)*Math.random());
function readfom()
{
var randomKey=parseInt(10+(1000-10)*Math.random());
nameV = document.getElementById('name').value;
emailV = document.getElementById('email').value;
mobileV = document.getElementById('mobile').value;
passwordV = document.getElementById('password').value;

console.log(nameV, emailV, mobileV, passwordV);
}

// Reset Password
function ResetPassword(){
  var auth=firebase.auth();
  var resetEmail=document.getElementById('emailReset').value;
   if(resetEmail !=""){
     auth.sendPasswordResetEmail(resetEmail).then(function(){
     alert("Email has been sent !")
     }).catch(function(error){
      var errorCode= error.code;
      var errMessage=error.message;
     alert("Message:"+errMessage);
     });
   }else{
     alert("Please Enter Your Email");
   }

}
function readLoginData(){
  
  _username=document.getElementById('_email').value;
  _password=document.getElementById('_password').value;
  

  if(_username != "" && _password != ""){
   // console.log(_password+_username);
     var result = firebase.auth().signInWithEmailAndPassword(_username,_password);
     alert("you have successful login");
    
   
     result.catch(function(error){
       var errorCode= error.code;
       var errMessage=error.message;
      alert("Message:"+errMessage);
     });
  }else{
    alert("Please Enter Username & Password");
  }
}

// Register Worl

document.getElementById('Register').onclick = function() 
{
      readfom();
      
      console.log(_password+_email);
       var result = firebase.auth().createUserWithEmailAndPassword(emailV,passwordV);
       firebase.database().ref('Student/'+randomKey).set({
       name: nameV,
       email: emailV,
       mobile: mobileV,
       password: passwordV,
       
       });
       result.catch(function(error){
        var errorCode= error.code;
        var errMessage=error.message;
        alert("Message:"+errMessage);
      });
      
    
    
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("mobile").value = "";
     document.getElementById("password").value = "";
}


