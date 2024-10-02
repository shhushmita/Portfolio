/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle between dark and light themes
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});

// Update icon based on theme
const icon = toggleButton.querySelector('i');
function updateIcon() {
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('ti-light-bulb');
        icon.classList.add('ti-moon');
    } else {
        icon.classList.remove('ti-moon');
        icon.classList.add('ti-light-bulb');
    }
}
updateIcon();

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
