import Swiper from 'swiper/bundle';
import './node_modules/swiper/swiper.scss'


import './sass/style.scss'


window.onload = () => {
  document.querySelectorAll('[data-svg]').forEach(svg => {
    fetch(svg.dataset.svg).then(res => {
      console.log(res)
      svg.innerHTML = res;
    });
  })
  console.log(Swiper)
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }    
  });
}