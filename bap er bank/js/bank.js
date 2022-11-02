document.getElementById('login-submit').addEventListener('click', function () {
    //user email
    const fieldEmail= document.getElementById('user-email');
    const userEmail= fieldEmail.value;

    const fieldPass= document.getElementById('user-password');
    
    const userPass= fieldPass.value;
   // console.log(userPass)

    if (userEmail=='rex@gmail.com' && userPass=='rex') {
        window.location.href= 'banking.html';
    }else{
        alert(' NOT valid user');
    }



   
})


//handel deposite button 

