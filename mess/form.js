var name = document.getElementById("name");
var contactno = document.getElementById("contactno");
var email = document.getElementById("email");
var division = document.getElementById("division");
var submit = document.getElementById("submit");
var form = document.getElementById('form')
// var errorElement = document.getElementById('error')
// var nameError = document.getElementById("name-error");
var contactnoError = document.getElementById("contactno-error");
var emailError = document.getElementById("email-error");
// var divisionError = document.getElementById("division-error");
var submitError = document.getElementById("submit-error");
var success = document.getElementById('success-msg');


   
email.onkeyup =function(){
    var checkEmail = email.value;
    validateEmail(checkEmail);
    
  
}


var emailValidationCheck = false;
function validateEmail(value) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(value)) {
        //console.log("not")
        email.style.border = "1px solid #ff0000"
        email.style.color = "#ff0000"
        email.style.backgroundColor = "#fff"
        emailValidationCheck =false;
    } else {
        email.style.border = "1px solid #00ff00"
        email.style.color = "#00ff00"
        email.style.backgroundColor = "#fff"
        emailValidationCheck =true;
    }
}
 
    var phoneValidationCheck = false;
    contactno.onkeyup = function(){
    var checkPhoneno = contactno.value;
    validatePhoneno(checkPhoneno);
}
function validatePhoneno(value) {
    var phonenoReg = /(\+88|88)?-?01[1-9]\d{8}/g;

    if(value.length <11 || value.length >11 || !phonenoReg.test(value)){
        contactno.style.border = "1px solid #ff0000" //red
        contactno.style.color = "#ff0000"
        contactno.style.backgroundColor = "#fff"
        phoneValidationCheck = false;
    }
    else{
        contactno.style.border = "1px solid #00ff00" //green
        contactno.style.color = "#00ff00"
        contactno.style.backgroundColor = "#fff";
        phoneValidationCheck= true;
    }    
}


submit.addEventListener('click', (e) =>{
        e.preventDefault();
    if (phoneValidationCheck && emailValidationCheck) {
        var name = document.getElementById("name").value;
        var contactno = document.getElementById("contactno").value;
        var email = document.getElementById("email").value;
        var division = document.getElementById("division").value;
        var msg = document.querySelector(".msg");
        var myForm = document.querySelector(".form");
        
        // console.log(email)
        //console.log(email.value)
    
        var data = new FormData;
        data.append('name', name);
        data.append('contactno', contactno);
        data.append('email', email);
        data.append('division', division);
    
        // console.log(division);
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                if (this.responseText ==200) {
                    
                    myForm.classList.add('hidden')
                }else{
                    msg.style.display = 'block';
                    //msg.classList.remove('hidden')
                }
                
            }
        };
        xhttp.open("POST", "http://localhost/mess/insert.php");
        xhttp.send(data);
    
    }else{
        alert("Data Not Valid!!")

    }


})