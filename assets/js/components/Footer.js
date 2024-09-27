// assets/js/components/common/Footer.js
export function Footer() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="bg-ck py-4 large-font mt-auto">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0 color-ck">
            Copyright &copy; designed & developed by 
            <a class="text-decoration-none color-ck text-ck-special" href="https://kayacuneyt.com" target="_blank">
            Cüneyt Kaya</a> ${currentYear}
            </div>
          </div>
          <div class="col-auto">
            <a class="color-ck small text-decoration-none" href="./privacy.html">Privacy</a>
            <span class="color-ck mx-1">&middot;</span>
            <a class="color-ck small text-decoration-none" href="./terms.html">Terms</a>
            <span class="text-white mx-1">&middot;</span>
            <a class="color-ck small text-decoration-none" href="./contact.html">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
