export function initFilterPanel() {
    const filterBtn = document.querySelector('.filter-btn');
    const filterPanel = document.querySelector('.filter-panel');
    const closeFilter = document.querySelector('.close-filter');
    const filterHeaders = document.querySelectorAll('.filter-group-header');
    const btnClear = document.querySelector('.btn-clear');
    const btnShowResults = document.querySelector('.btn-show-results');

    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', () => {
            filterPanel.classList.add('open');
            filterPanel.setAttribute('aria-hidden', 'false');
        });
    }

    if (closeFilter && filterPanel) {
        closeFilter.addEventListener('click', () => {
            filterPanel.classList.remove('open');
            filterPanel.setAttribute('aria-hidden', 'true');
        });
    }

    filterHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const group = header.closest('.filter-group');
            const plusIcon = header.querySelector('.icon-plus');
            const minusIcon = header.querySelector('.icon-minus');
            const isOpen = group.classList.toggle('open');

            header.setAttribute('aria-expanded', String(isOpen));

            if (plusIcon && minusIcon) {
                plusIcon.style.display = isOpen ? 'none' : 'block';
                minusIcon.style.display = isOpen ? 'block' : 'none';
            }
        });
    });

    if (btnClear) {
        btnClear.addEventListener('click', () => {
            document.querySelectorAll('.filter-panel select').forEach((select) => {
                select.selectedIndex = 0;
            });

            document.querySelectorAll('.filter-panel input').forEach((input) => {
                input.value = '';
            });
        });
    }

    if (btnShowResults && filterPanel) {
        btnShowResults.addEventListener('click', () => {
            filterPanel.classList.remove('open');
            filterPanel.setAttribute('aria-hidden', 'true');
        });
    }
}
