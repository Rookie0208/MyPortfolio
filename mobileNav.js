let bars = document.querySelector(".fa-bars");
let times = document.querySelector(".fa-times");
let mobileNav = document.querySelector(".mobile-nav");


bars.addEventListener('click', function () {
    mobileNav.classList.add('open');
})
times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
})