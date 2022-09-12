var name = document.getElementById("username");
var contactno = document.getElementById("contactno");
var email = document.getElementById("email");
var division = document.getElementById("division");
var submit = document.getElementById("submit");
var form = document.getElementById('form')
var errorElement = document.getElementById('error')


function validateForm(){
    var name = document.getElementById('username').value;
    var contactno = document.getElementById("contactno").value;
    var email = document.getElementById("email").value;
    var division = document.getElementById("division").value;

    if(name == null || name == ''){
        alert("This cannot be empty");
        return false;
    }

}