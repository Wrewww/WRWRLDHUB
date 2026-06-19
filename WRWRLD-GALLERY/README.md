# Gallery React + Vite

Готовый React-проект, собранный из компонентов на базе вашей HTML/CSS-версии.

## Стек
- React 18
- Vite 5
- Обычный CSS без дополнительных UI-библиотек

## Структура
- `src/components` — переиспользуемые React-компоненты
- `src/data/galleryItems.js` — данные карточек
- `src/styles` — разбитые стили
- `public/images` — изображения картин

## Компоненты
- `Header`
- `ThemeToggle`
- `GalleryControls`
- `SearchBox`
- `FilterButton`
- `FilterPanel`
- `FilterGroup`
- `GalleryGrid`
- `GalleryCard`
- `Pagination`

## Как запустить
```bash
npm install
npm run dev
```

## Как собрать билд
```bash
npm run build
npm run preview
```

## Что уже работает
- переключение тёмной и светлой темы;
- открытие и закрытие панели фильтров;
- аккордеон в панели фильтров;
- фильтрация по названию картины;
- фильтрация по artist/location/year;
- рендер карточек из массива данных;
- адаптивная сетка и hover-анимация карточек.

## Где менять данные картин
Файл:
`src/data/galleryItems.js`

## Где менять разметку компонентов
Файлы:
- `src/components/Header.jsx`
- `src/components/GalleryControls.jsx`
- `src/components/FilterPanel.jsx`
- `src/components/GalleryCard.jsx`
- и остальные в `src/components`
