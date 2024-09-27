// assets/js/components/common/Navbar.js
export function Navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-ck border-bottom-ck">
      <div class="container py-2 px-5 xlarge-font">
        <a class="navbar-brand color-ck xlarge-font" href="index.html">Cüneyt Kaya WPD</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 color-ck">
            <li class="nav-item"><a class="nav-link color-ck" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link color-ck" href="about.html">About</a></li>
            <li class="nav-item"><a class="nav-link color-ck" href="portfolio.html">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link color-ck" href="contact.html">Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>
  `;
}
