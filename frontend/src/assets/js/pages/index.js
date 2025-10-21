import { apiHello, apiHi  } from "@/assets/js/utils.js";
import { bindEvents } from '@/assets/js/events.js';

import Swiper from 'swiper/bundle'; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


(async () => {
  const data = await apiHello();
  console.log('API /hello:', data);


  const hi = await apiHi();
  console.log('API /hi:', hi);

  const el = document.getElementById('hello');
  if (el) el.textContent = JSON.stringify(data);


  bindEvents();
  // tu dla tej stronu js 


  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // zmiana z 'vertical', bo coverflow działa tylko w poziomie
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar', // poprawiona klasa (bez spacji)
    },
  });

  console.log(swiper);

})();
