// assets/js/components/about/TeamSection.js
export function TeamSection() {
    return `
      <section class="py-5 bg-light">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="fw-bolder">My only team</h2>
            <p class="lead fw-normal text-muted mb-5">Dedicated to quality & success</p>
          </div>
          <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="text-center">
                <img class="img-fluid rounded-circle mb-4 px-4" 
                  src="https://kayacuneyt.com/img/ckfoto-4-lacibg.png" alt="Cüneyt Kaya" />
                <h5 class="fw-bolder">Cüneyt Kaya</h5>
                <div class="fst-italic text-muted">Founder &amp; CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
}