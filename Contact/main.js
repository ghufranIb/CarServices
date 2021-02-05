function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message =document.getElementById('message').value;
var error_message=document.getElementById('error_message')
    var text;
    
 if (message.length <= 5)
     {
         text ="Please Enter at lest 5 character";
         error_message.innerHTML = text;
         return false;
     }
    alert ("Message sent!")
    return true;
    

}

