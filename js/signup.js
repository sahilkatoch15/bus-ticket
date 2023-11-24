// signup js
function clickit(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

  
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
    let getpasswordlength = password.length;
    let phonelength = phone.length;
    
  
    if(username.length == 0){
        alert('Please fill in your name');
  
    }
    else if(password.length == 0){
        alert('Please fill in password');
  
    }
    else if(email.length == 0 && password.length == 0){
        alert('Please fill in email and password');
  
    }
    
    else if(getpasswordlength < 7){
        alert('min of 8');
  
    }
    else if(!password.match(numbers)){
        alert('please use 1 number in password');
  
    }
    else if(!password.match(upperCaseLetters)){
        alert('please use 1 uppercase letter in password');
  
    }
    else if(!password.match(lowerCaseLetters)){
        alert('please use 1 lovercase letter in your password');
  
    }
    else if(!password.match(specialcharacter)){
      alert('please use at least 1 special character in your password');
  
    }
    else if(email.length == 0){
        alert('Please fill in email');
    
      }
      else if(phonelength == 10){
          alert('please enter valid phone number');
        
          }
    else{
  
      let clickit = JSON.parse(localStorage.getItem('formdata')) || [];
  
      const duplicate = clickit.some(data =>data.phone === phone || data.email === email);
      
      if(duplicate){
        alert('use another email or phone number');
        return;
      }
  
  
  const formdata = {
    username: username,
    email: email,
    phone: phone,
    password: password
  };
  
  
  clickit.push(formdata);
  
  localStorage.setItem('formdata', JSON.stringify(clickit));

      window.location.href = 'login.html';
        alert('Your account has been created successfully!.');
  
    }
  }
// End signup js