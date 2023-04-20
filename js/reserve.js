searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
const name = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
  let message = []
  if (password.value.length <= 8){
    message.push('Password must be longer 8 characters')
  }
  if (password.value.length >= 20){
    message.push('Password must be less than 20 characters')
  }
  if (message.length > 0){
    e.preventDefault()
    errorElement.innerText = message.join(', ')
  }
})

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 500);
}

function msg(){
  let reServe = document.getElementById('reserve');
  let name = document.getElementById('name').value;
  let address = document.getElementById('address').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('number').value;
  let time = document.getElementById('time').value; 
  let date = document.getElementById('date').value;
  var location = document.getElementById('location').value;
  var people = document.getElementById('people').value;


  if(name && address && email && location && number && time && date && people){
    swal({
      icon: 'success',
      title: 'Your reservation form has been saved. Please wait for the email that will be sent to you.',
      showConfirmButton: true,
    }).then(function(){
      window.location.href = "reserve.html"; // Reload the page if 'OK' is clicked
    });
  } else {
    swal({
      icon: 'error',
      title: 'Please Fill Up The Form',
      showConfirmButton: true,
    });
  }

  // Moved the preventDefault call outside of the if-else block
  if (reServe.length > 0){
    event.preventDefault();
  }
}


