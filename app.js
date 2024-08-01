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
})
