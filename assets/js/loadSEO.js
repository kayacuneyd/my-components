// assets/js/loadSEO.js
import { SEO } from './components/SEO.js';  // SEO componentini çağırıyoruz

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page'); // Sayfa adını alıyoruz

    if (page) {
        fetch('/assets/js/seoData.json')  // JSON dosyasını yüklüyoruz
            .then(response => response.json())
            .then(data => {
                if (data[page]) {
                    const { title, description, keywords } = data[page];
                    SEO({ title, description, keywords });  // SEO'yu uyguluyoruz
                }
            })
            .catch(error => console.error('SEO yüklenirken hata oluştu:', error));
    }
});