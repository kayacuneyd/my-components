// assets/js/components/page-portfolio/PortfolioHeader.js
import { projectsData } from "../../projectsData.js";

export function PortfolioHeader() {
  let projectItems = "";

  projectsData.forEach((project) => {
    projectItems += `
            <div class="col-lg-6">
              <div class="position-relative mb-5">
                <img class="img-fluid rounded-3 mb-3" src="${project.image}" alt="${project.title}" />
                <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="${project.url}">${project.title}</a>
              </div>
            </div>
        `;
  });

  return `
      <section class="py-5">
        <div class="container px-5 my-5">
          <div class="text-center mb-5">
            <h1 class="fw-bolder">A taste of my work</h1>
            <p class="lead fw-normal text-muted mb-0">
              <i>- previous projects I worked with - </i>
            </p>
          </div>
          <div class="row gx-5">
            ${projectItems}
          </div>
        </div>
      </section>
    `;
}
