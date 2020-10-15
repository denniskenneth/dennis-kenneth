// ==== STICKY BAR ==========
window.onscroll = () => {
    scrollFunction();
};

let navBar = document.querySelector("#navbar");
let sticky = navBar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// ==============ANIMATIONS==============
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')
const appearOptions = {
    threshold: 0.5,
    rootmargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

