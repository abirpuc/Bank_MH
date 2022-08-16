// find the clicked btn id form js
document.getElementById('btn-login').addEventListener('click', function(){
    // step:-2 find the email form the input field
   const emailFind = document.getElementById('user-email');
   const email = emailFind.value;

   emailFind.value = '';

   // step:-3 find the password form the input field
   const passwordFind = document.getElementById('user-password');
   const password = passwordFind.value;

   passwordFind.value = '';
   
   // step:-4 validation check

   if(email === 'pro@hero.com' && password === 'hero'){
    window.location.href = 'user.html';
   }else{
    alert('User or Password is Wrong');
   }
 })