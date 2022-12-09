searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');

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
    errorElement.innerText = message.join(',')
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

function mySub(){
let subscribe = document.getElementById('sub');
let eMail = document.getElementById('putemail').value;
let submit = document.getElementById('submit');

subscribe.addEventListener('submit', (e) => {
  e.preventDefault()
  if(eMail){

    swal({
    icon: 'success',
    title: 'You are now subscribe to our website',
    showConfirmButton: true,
    timer: 3000
  })
}
else{
  swal({
    icon: 'error',
    title: 'Please put your email',
    showConfirmButton: true,
    timer: 3000
  })
}
})}


var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".group-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
