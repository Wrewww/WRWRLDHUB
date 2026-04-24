export async function loadIncludes() {
    const includeBlocks = document.querySelectorAll('[data-include]');

    await Promise.all([...includeBlocks].map(async (block) => {
        const file = block.getAttribute('data-include');

        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${file}`);
            }

            const html = await response.text();
            block.innerHTML = html;
        } catch (error) {
            console.error(error);
            block.innerHTML = `<div style="color:red;padding:12px;">Component load error: ${file}</div>`;
        }
    }));
}

export async function loadTemplate(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Failed to load template: ${path}`);
    }

    return response.text();
}
