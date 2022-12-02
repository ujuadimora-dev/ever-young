function message(e) {
    e.preventDefault();
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email= document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');


    if (fname.value === '' || lname.value === '' || email.value ===  '' || msg.value === ''){
        danger.style.display = 'block';

    }  
    else{
        setTimeout(() => {
            fname.value = '';
            lname.value = '';
            email.value = '';
            msg.value = '';
        }, 2000); 
        success.style.display = 'block';
       
}
setTimeout(() => {
    danger.style.display = none;
    success.style.display = none;
}, 4000)

}