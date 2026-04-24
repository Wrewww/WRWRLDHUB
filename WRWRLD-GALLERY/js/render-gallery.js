import { loadTemplate } from './load-components.js';

export async function renderGallery(selector, templatePath, items) {
    const container = document.querySelector(selector);
    if (!container) return;

    const template = await loadTemplate(templatePath);

    container.innerHTML = items.map((item) => {
        return template
            .replaceAll('{{image}}', item.image)
            .replaceAll('{{alt}}', item.alt)
            .replaceAll('{{title}}', item.title)
            .replaceAll('{{year}}', item.year)
            .replaceAll('{{artist}}', item.artist)
            .replaceAll('{{location}}', item.location);
    }).join('');
}
