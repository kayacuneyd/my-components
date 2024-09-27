// assets/js/components/common/Header.js
export function Header() {
  return `
    <header class="bg-ck py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder color-ck mb-2">
              Welcome to Cüneyt Kaya's Web Development World
              </h1>
              <p class="lead fw-normal text-white-50 mb-4">
                Ready to bring your vision to life? Let's discuss your project and get started today!
              </p>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a class="btn bg-ck-light color-ck-dark fw-bold btn-lg px-4 me-sm-3" 
                href="mailto:info@kayacuneyt.com">
                Get Contacted
                </a>

              </div>
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img class="img-fluid rounded-3 my-5" 
            src="assets/images/laci-arkaplan.jpg" 
            alt="Cüneyt Kaya web development" />
          </div>
        </div>
      </div>
    </header>
  `;
}