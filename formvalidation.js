var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    
    if(name.length==0){
        nameError.innerHTML= 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Enter full name'
        return false
    }
    else{
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

    
}

function validateEmail(){

    var email = document.getElementById('contact-email').value;
    
    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    } 

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSubject(){

    var subject = document.getElementById('contact-subject').value;

    if(subject.length<=4){
        subjectError.innerHTML='Enter Subject';
        return false;
    }
    
    subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){

    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length


    if(message.length==0){

        messageError.innerHTML='Error'
        return false;
    }
    if(left>0){
        messageError.innerHTML= left + ' more characters required'
        return false
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

}
function validateForm(){

    if(!validateName() || !validateSubject() || !validateEmail() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Error'
        setTimeout(function(){submitError.style.display='none'}, 3000)
        return false;
    }

}

$(".submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzdqmPOq5UaJz3hPzFx8GoUiCOHfl5zqOiPD8Rx-TeL4OY7R2HUdNYmLP48T4K_C4QZZw/exec",
        data:$(".submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})