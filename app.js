var pass = document.getElementById('password');
var mesg = document.getElementById('message');
var str = document.getElementById('strength');



pass.addEventListener('input', () =>{

    if(pass.value.length > 0){
     mesg.style.display = "block";
    }
    else{
        mesg.style.display = "none";
    }
    if(pass.value.length < 4 ){
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        mesg.style.color = "red";
    }
    else if(pass.value.length > 4 && pass.value.length < 8 ){
        str.innerHTML = "medium";
        pass.style.borderColor = "orange";
        mesg.style.color = "orange";
    }
    else if(pass.value.length > 8){
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        mesg.style.color = "green";
    }
})
