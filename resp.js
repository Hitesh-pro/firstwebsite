burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
leftnav = document.querySelector('.leftnav')


burger.addEventListener('click', ()=> {
  rightnav.classList.toggle('vclass-resp');
  leftnav.classList.toggle('vclass-resp');
  navbar.classList.toggle('hnav-resp')
})