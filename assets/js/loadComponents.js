// assets/js/loadComponents.js
import { Header } from './components/Header.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Testimonial } from './components/Testimonial.js';
import { Features } from './components/Features.js';

import { AboutHeader } from './components/page-about/AboutHeader.js';
import { AboutDesc } from './components/page-about/AboutDesc.js';
import { AboutSectionOne } from './components/page-about/AboutSectionOne.js';
import { AboutSectionTwo } from './components/page-about/AboutSectionTwo.js';
import { AboutSectionThree } from './components/page-about/AboutSectionThree.js';

import { TeamSection } from './components/page-about/TeamSection.js';

import { ContactHeader } from './components/page-contact/ContactHeader.js';
import { ContactInfo } from './components/page-contact/ContactInfo.js';

import { PortfolioHeader } from './components/page-portfolio/PortfolioHeader.js';
import { PortfolioCallToAction } from './components/page-portfolio/PortfolioCallToAction.js';
import { Video } from './components/Video.js';

import { SEO } from './components/SEO.js'; // SEO componentini import ediyoruz

document.addEventListener('DOMContentLoaded', () => {
    // Componentleri ve onların yükleneceği element ID'lerini tanımla
    const components = {
        'navbar': Navbar,
        'header': Header,
        'video': Video,
        'features': Features, // Only present on index.html
        'footer': Footer,
        'testimonial': Testimonial,
        'about-header': AboutHeader, // Only present on about.html
        'about-desc': AboutDesc, 
        'about-section-one': AboutSectionOne, // Only present on about.html
        'about-section-two': AboutSectionTwo, // Only present on about.html
        'about-section-three': AboutSectionThree,
        'team-section': TeamSection, // Only present on about.html
        'contact-header': ContactHeader,
        'contact-info': ContactInfo,
        'portfolio-header': PortfolioHeader,
        'portfolio-call-to-action': PortfolioCallToAction,
    };

    // Döngü ile her bir componenti kontrol et ve DOM'a yerleştir
    Object.keys(components).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = components[id](); // Component fonksiyonunu çağır
        }
    });

    // SEO bilgilerini yükle
    const page = document.body.getAttribute('data-page');  // data-page attribute'undan sayfa adını alıyoruz

    if (page) {
        // JSON dosyasını fetch API ile yükle
        fetch('/assets/js/seoData.json') // JSON dosyasının yolu
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data[page]) {
                    const { title, description, keywords } = data[page];
                    SEO({
                        title,
                        description,
                        keywords
                    });
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
});