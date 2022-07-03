const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); /* select all the nav available */

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/* toggle to each visited pagge section */
navLinks.forEach(link => { /* for evert navLinks class */
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open'); /* remover class from body */
        })
})

