// assets/js/components/SEO.js
export function SEO({ title, description, keywords }) {
  // Sayfa başlığını hemen ayarlıyoruz
  document.title = title;

  // Meta description eklenmesi
  let metaDescription = document.querySelector("meta[name='description']");
  if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  // Meta keywords eklenmesi
  let metaKeywords = document.querySelector("meta[name='keywords']");
  if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute("content", keywords);
}