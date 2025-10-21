export function renderHeader() {
  const headerHTML = `
    <div class="header">
      <span class="sponsorzy">Oficjalni Sponsorzy</span>
      <div class="steam">
        <a href="https://store.steampowered.com/" target="_blank">
          <img class="steam" src="/steam.png" alt="steam">
        </a>
      </div>
      <div class="g2a">
        <a href="https://www.g2a.com/pl/" target="_blank">
          <img class="g2a" src="/g2a.png" alt="steam">
        </a>
      </div>
      <div class="menu">
        <ul>
          <li class="menu-item"><a href="/"><i class="fa-solid fa-house"></i>&nbsp; Home</a></li>
          <li class="menu-item"><a href="#onas"><i class="fa-solid fa-magnifying-glass"></i>&nbsp; O nas</a></li>
          <li class="menu-item"><a href="#produkty"><i class="fa-solid fa-shop"></i>&nbsp; Produkty</a></li>
          <li class="menu-item"><a href="#kontakt"><i class="fa-solid fa-phone"></i>&nbsp; Kontakt</a></li>
          <li class="menu-item"><a href="/login/index.html"><i class="fa-regular fa-user"></i>&nbsp; Login</a></li>
        </ul>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

export function renderFooter() {
  const footerHTML = `
    <div class="footer" id="kontakt">
      <p>Tel +48 246 954 021</p>
      <p>Email keyseller@shop.ws</p>
      <p>Telegram t.me/keyseller</p>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
