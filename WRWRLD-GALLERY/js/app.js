import { loadIncludes } from './load-components.js';
import { initThemeToggle } from './theme-toggle.js';
import { initFilterPanel } from './filter-panel.js';
import { galleryItems } from './gallery-data.js';
import { renderGallery } from './render-gallery.js';

async function initPage() {
    await loadIncludes();
    await renderGallery('.js-gallery', './components/card.html', galleryItems);
    initThemeToggle();
    initFilterPanel();
}

document.addEventListener('DOMContentLoaded', initPage);
