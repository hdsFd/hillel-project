const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu-list');
const logoBox = document.querySelector('.js-logo-box');
const phone = document.querySelector('.js-phone');
const header = document.querySelector('.js-header');
const headerH = header.offsetHeight;

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    menuList.classList.toggle('open');
    menu.classList.toggle('open')
    logoBox.classList.toggle('visible');
    phone.classList.toggle('no-side');
    header.classList.toggle('header-bg')
})

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(btn);
    if (!click) {
        btn.classList.remove("active");
        menu.classList.remove("open");
        menuList.classList.remove("open");
        logoBox.classList.remove('visible');
        phone.classList.remove('no-side');
        header.classList.remove('header-bg')
    }
})


document.addEventListener('scroll', function () {
    if (scrollY >= headerH) {
        header.classList.add('header_fixed')
        // logoBox.classList.replace('visible', 'hidden')
    } else {
        header.classList.remove('header_fixed')
        // logoBox.classList.remove('hidden')
    }
})

$('.js-team-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'my-dots',
    draggable: true,
    mobileFirst: true,
    zIndex: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.js-achievements-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'my-dots',
    draggable: true,
    mobileFirst: true,
    zIndex: -1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                draggable: false,
            }
        },
    ]
})