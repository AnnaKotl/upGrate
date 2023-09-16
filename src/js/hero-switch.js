import Swiper from 'swiper/swiper-bundle.min.mjs';
import 'swiper/swiper-bundle.min.css';
import { fetchMk } from './api-kay-js-files/api-hero-switch';
import { iconHero, mkCard } from './partials-hero-swith';


const mkBox = document.querySelector('.swiper-wrapper');

async function renderMk() {
  try {
    const arrMk = await fetchMk();
    const markup = arrMk.map(mkCard).join('');
    mkBox.innerHTML = markup;

    const swiper = new Swiper('.swiper', {
      slidesPerGroup: 1,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 'auto',
      disableOnInteraction: false,
      direction: 'horizontal',
      rewind: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      mousewheel: {
        sensitivity: 0.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 0.65,
      speed: 1000,
      breakpoints: {
        375: {
          slidesPerView: 0.65,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 0.85,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 0.81,
          spaceBetween: 16,
        },
      },
    });

    swiper.on('slideChange', () => {
      setTimeout(() => {
        swiper.autoplay.start();
      }, 0);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

function addMkInfo() {
  renderMk();
}

addMkInfo();
