// assets/js/components/common/Footer.js
export function Footer() {
  return `
    <footer class="bg-dark py-4 mt-auto">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0 text-white">Copyright &copy; Your Website 2023</div>
          </div>
          <div class="col-auto">
            <a class="link-light small" href="./privacy.html">Privacy</a>
            <span class="text-white mx-1">&middot;</span>
            <a class="link-light small" href="./terms.html">Terms</a>
            <span class="text-white mx-1">&middot;</span>
            <a class="link-light small" href="#!">Impress</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
