

function toggleMenu() {
    var menu = document.getElementById('hiddenMenu');
    menu.classList.toggle('show-menu');
}
document.addEventListener('click', function(event) {
    var menu = document.getElementById('hiddenMenu');
    var hamburger = document.querySelector('.hamburger');

 
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show-menu');
    }
});
