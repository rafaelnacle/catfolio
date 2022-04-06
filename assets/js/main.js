const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

// close nav menu
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);

// close nav menu when menu items are clicked on mobile

if (window.innerWidth < 1024) {
    document.querySelectorAll(".nav__menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    })
}

// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// fetches testimonials from the testimonials array
const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector('.testimonials__container');
    testimonialsContainer.innerHTML = ''

    // loop through the array and get the testimonials
    testimonials.forEach(testimonial => {
        const newTestimonial = document.createElement('article')
        newTestimonial.className = 'testimonial';
        newTestimonial.innerHTML = `
        <p>
            "${testimonial.quote}"
        </p>
        <div class="testimonial__client">
            <span class="avatar">
                <img src="./assets/images/${testimonial.avatar}.jpg">
            </span>
            <div class="testimonial__work">
                <p><b>${testimonial.name}</b></p>
                <small>${testimonial.title}</small >
            </div >
        </div >
    `

        testimonialsContainer.append(newTestimonial)
    })


}

window.addEventListener('load', fetchTestimonials)

