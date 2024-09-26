// assets/js/components/page-contact/ContactHeader.js
export function ContactHeader() {
  return `
    <section class="py-5">
      <div class="container px-5">
        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
            <h1 class="fw-bolder">Get in touch</h1>
            <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-8 col-xl-6">
              <form id="contactForm" onsubmit="generateMailtoLink(event)">
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Enter your name..." required />
                  <label for="name">Full name</label>
                  <div class="invalid-feedback">A name is required.</div>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" id="email" type="email" placeholder="name@example.com" required />
                  <label for="email">Email address</label>
                  <div class="invalid-feedback">An email is required.</div>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required />
                  <label for="phone">Phone number</label>
                  <div class="invalid-feedback">A phone number is required.</div>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="message" placeholder="Enter your message here..." style="height: 10rem" required></textarea>
                  <label for="message">Message</label>
                  <div class="invalid-feedback">A message is required.</div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Send Message</button>
                </div>
              </form>
              <input type="text" id="mailtoLink" readonly style="opacity: 0; height: 0; position: absolute;">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function generateMailtoLink(event) {
  event.preventDefault(); // Formun yeniden yüklenmesini engelle

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Mail adresine gönderilecek mail
  const to = "kayacuneyd@gmail.com"; // Kendi e-mail adresin
  const subject = `New Contact from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

  // Mailto linkini oluştur
  let mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Mailto linkini gizli input alanına ekle
  document.getElementById('mailtoLink').value = mailtoLink;
  
  // Kopyalama ve mail client açma
  window.location.href = mailtoLink;
}

function copyToClipboard() {
  const mailtoLink = document.getElementById('mailtoLink');
  mailtoLink.select();
  document.execCommand('copy');
  alert('Mailto link copied to clipboard!');
}
