// assets/js/components/page-about/AboutHeader.js
import { quotesData } from '../../quotesData.js';

export function AboutHeader() {
  // body'deki data-page attribute'unu alıyoruz
  const page = document.body.getAttribute('data-page') || 'about'; // Eğer 'data-page' yoksa, default olarak 'about' kullanılır.

  // Belirlenen sayfaya göre quote'u seçiyoruz.
  const { title, quote } = quotesData[page] || quotesData['about'];

  return `
      <header class="py-5 bg-ck-light color-ck-dark">
        <div class="container px-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3">
                  ${title}
                </h1>
                <p class="lead fw-normal text-muted mb-4">
                  ${quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
}

