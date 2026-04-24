# Gallery components with JavaScript includes

## Что внутри
- `components/header.html` — отдельный header-компонент.
- `components/filter.html` — отдельный блок поиска, кнопки фильтра и панели фильтров.
- `components/card.html` — отдельный шаблон карточки.
- `js/load-components.js` — подгружает html-компоненты через `fetch()`.
- `js/render-gallery.js` — рендерит карточки из шаблона `card.html` и массива данных.
- `js/gallery-data.js` — данные карточек.
- `js/theme-toggle.js` — логика кнопки смены темы.
- `js/filter-panel.js` — логика фильтра и аккордеона.

## Как запускать
Нужно запускать через локальный сервер, потому что `fetch()` обычно не работает при открытии файла двойным кликом.

### Самый простой способ
1. Откройте проект в VS Code.
2. Установите расширение **Live Server**.
3. Нажмите правой кнопкой на `index.html`.
4. Выберите **Open with Live Server**.

## Как это соединено
В `index.html` стоят контейнеры:
- `<div data-include="./components/header.html"></div>`
- `<div data-include="./components/filter.html"></div>`

При загрузке страницы `js/app.js`:
1. подгружает html-компоненты,
2. вставляет их в DOM,
3. рендерит карточки из `components/card.html`,
4. только после этого подключает обработчики темы и фильтра.

## Как переносить компонент на другой сайт
### Header
Нужно перенести:
- `components/header.html`
- `css/header.css`
- `js/theme-toggle.js`

### Filter
Нужно перенести:
- `components/filter.html`
- `css/filter.css`
- `js/filter-panel.js`

### Card
Нужно перенести:
- `components/card.html`
- `css/card.css`
- данные или свой способ подставлять значения

## Если хотите вставлять карточки вручную
Можно не использовать `render-gallery.js`, а вставлять готовую карточку в html вручную и просто менять значения внутри.
