const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){
    menuToggle.addEventListener('click', function(){
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(){
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});