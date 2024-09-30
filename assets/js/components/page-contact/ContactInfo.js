// assets/js/components/page-contact/ContactInfo.js
export function ContactInfo() {
  return `
    <section class="py-5 bg-ck-light">
      <div class="container px-5">
        <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5 color-ck-dark">
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-dots"></i></div>
            <div class="h5 mb-2">Project Inquiries</div>
            <p class="text-muted mb-0">Have a project in mind? Let's discuss your ideas.</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
            <div class="h5">Freelance Services</div>
            <p class="text-muted mb-0">Offering web design, development, and consulting services.</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-circle"></i></div>
            <div class="h5">Support & Maintenance</div>
            <p class="text-muted mb-0">Ongoing support for your existing website or web application.</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone"></i></div>
            <div class="h5">Contact Me</div>
            <p class="text-muted mb-0">
              <a href="https://bit.ly/ckwb" target="_blank" class="text-primary">Send me a message on WhatsApp</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

  