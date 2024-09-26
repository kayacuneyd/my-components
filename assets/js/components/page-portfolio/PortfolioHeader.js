import { projectsData } from "../../projectsData.js";

export function PortfolioHeader() {
  let projectItems = "";

  projectsData.forEach((project) => {
    projectItems += `
      <div class="col-lg-6 mb-2 mt-2">
        <div class="position-relative mb-2">
          <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" target="_blank" href="${project.url}">
            ${project.title}
          </a>
          <img class="img-fluid rounded-3 mb-3 mt-3 border border-3" src="${project.image}" alt="${project.title}" />
        </div>
        <span>${project.description}</span>
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
