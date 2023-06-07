// Dynamic Navbar Links

var url = window.location.pathname

const homeLink = document.querySelectorAll('#home')
const sustentavelLink = document.querySelectorAll('#sustentavel')
const iaLink = document.querySelectorAll('#ia')
const modelosLink = document.querySelectorAll('#modelos')
const contatoLink = document.querySelectorAll('#contato')

console.log(url)

if (url === '/' || url === '/index.html') {
  homeLink.forEach((link) => link.classList.add('active'))
}

if (url === '../pages/sustentavel.html') {
  sustentavelLink.forEach((link) => link.classList.add('active'))
}

if (url === '../pages/ia.html') {
  iaLink.forEach((link) => link.classList.add('active'))
}

if (url === '../pages/modelos.html') {
  modelosLink.forEach((link) => link.classList.add('active'))
}

if (url === '../pages/contato.html') {
  contatoLink.forEach((link) => link.classList.add('active'))
}


// Mobile Menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})
