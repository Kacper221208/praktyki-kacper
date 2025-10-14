import 'the-new-css-reset/css/reset.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../styles/style.css"

import { apiHello, apiHi  } from "@/assets/js/utils.js";
import { bindEvents } from '@/assets/js/events.js';

(async () => {
  const data = await apiHello();
  console.log('API /hello:', data);


  const hi = await apiHi();
  console.log('API /hi:', hi);

  const el = document.getElementById('hello');
  if (el) el.textContent = JSON.stringify(data);


  bindEvents();


  // tu dla tej stronu js 
})();
