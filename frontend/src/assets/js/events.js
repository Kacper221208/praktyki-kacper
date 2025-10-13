import {$, $$} from "./utils.js"

export const bindEvents = () => {
  const buttons = $$('.add-to-cart, .add-to-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('[ADD TO CART] click', {
        text: btn.textContent?.trim(),
        element: btn,
      });
    });
  });

  console.log(`🔗 Zbindowano ${buttons.length} przycisków .add-to-cart / .add-to-card`);
}
