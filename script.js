let swiper;

function forSwiper() {
    if (window.innerWidth >= 1220) {
        if (!swiper) {
            swiper = new Swiper(".mySwiper", {
                slidesPerView: 3.2,
                spaceBetween: 20,
            });
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
}

window.addEventListener("resize", forSwiper);
window.addEventListener("load", forSwiper);

let commentText = document.querySelectorAll(".comment-item p");

commentText.forEach(el => {
    el.onclick = () => {
        el.classList.toggle('active');
    }
})

const items = document.querySelectorAll('.comment-item');
const btn = document.querySelector('.show-more-comments');
let currentIndex = 0;
const step = 3;

function showNext() {
    if (currentIndex == step) {
        items.forEach((el, ind) => {
            el.style.display = 'flex';
        })
        currentIndex = 0;
    }
    else {
        items.forEach((el, ind) => {
            if (ind < step) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'none';
            }
        })
        currentIndex = step;
    }
}

showNext();
btn.addEventListener('click', showNext);

// burger menu

const burgerBtn = document.querySelector('.burger-btn');
const burgerClose = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.onclick = () => {
    burgerMenu.classList.add('active');
    burgerClose.style.display = 'flex';
    burgerBtn.style.display = 'none';
}

burgerClose.onclick = () => {
    burgerMenu.classList.remove('active');
    burgerBtn.style.display = 'flex';
    burgerClose.style.display = 'none';
}

