const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');
const menuList = document.querySelector('.js-menu-list');
const logoBox = document.querySelector('.js-logo-box');
const phone = document.querySelector('.js-phone');
const mainHeader = document.querySelector('.js-main-header');
const header = document.querySelector('.js-header');
const gradient = document.querySelector('.js-gradient');
const headerH = header.offsetHeight;
const mapLink = document.querySelector('.js-map-link');
const iframeMap = document.querySelector('.js-iframe-map');
const iframeBtn = document.querySelector('.js-iframe-btn');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('open');
    menu.classList.toggle('open')
    logoBox.classList.toggle('visible');
    phone.classList.toggle('no-side');
    header.classList.toggle('header-bg');
})

document.addEventListener('click', (e) => {
    const menuClick = e.composedPath().includes(menuBtn);
    if (!menuClick) {
        menuBtn.classList.remove("active");
        menu.classList.remove("open");
        menuList.classList.remove("open");
        logoBox.classList.remove('visible');
        phone.classList.remove('no-side');
        header.classList.remove('header-bg');
    }
})

mapLink.addEventListener('click', function () {
    iframeMap.classList.toggle('visible')

})

iframeBtn.addEventListener('click', function () {
    iframeMap.classList.toggle('visible')
})

const headerScroll = () => {
    if (mainHeader) {
        if (scrollY >= headerH) {
            mainHeader.classList.add('header_fixed');
        }
        else {
            mainHeader.classList.remove('header_fixed');
        }
    } else if (scrollY >= 30) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

const gradientScroll = () => {
    if (gradient) {
        const gradientH = gradient.offsetHeight;
        if (scrollY >= (gradientH - headerH)) {
            header.classList.add('header_white-theme');
        } else {
            header.classList.remove('header_white-theme');
        }
    }

}

document.addEventListener('scroll', function () {
    headerScroll();
    gradientScroll();
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