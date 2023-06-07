// Mobile Menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})
