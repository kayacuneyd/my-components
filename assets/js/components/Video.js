// assets/js/components/Testimonial.js
export function Video() {

    const videoUrl = "https://www.youtube.com/embed/8IuusqEJeJE";

  return `
        <div class="d-flex justify-content-center align-items-center">
            <div id="video" class="ratio ratio-4x3" style="max-width: 600px; width: 100%; margin:15px;">
                <iframe 
                src=${videoUrl} 
                title="kayacuneyt.com Website Trailer Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                frameborder="0" 
                allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}
