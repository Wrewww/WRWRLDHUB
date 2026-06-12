import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import GalleryControls from './components/GalleryControls';
import GalleryGrid from './components/GalleryGrid';
import Pagination from './components/Pagination';
import { galleryItems } from './data/galleryItems';

const initialAccordionState = {
  artist: false,
  location: false,
  years: false,
};

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [accordionState, setAccordionState] = useState(initialAccordionState);
  const [filters, setFilters] = useState({
    artist: '',
    location: '',
    from: '',
    to: '',
  });

  useEffect(() => {
    document.body.classList.toggle('light', isLightTheme);
    return () => document.body.classList.remove('light');
  }, [isLightTheme]);

  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  const toggleAccordion = (key) => {
    setAccordionState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setFilters({ artist: '', location: '', from: '', to: '' });
    setSearchValue('');
  };

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchSearch =
        !searchValue || item.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchArtist = !filters.artist || item.artist === filters.artist;
      const matchLocation = !filters.location || item.location === filters.location;
      const year = Number(item.year);
      const from = filters.from ? Number(filters.from) : null;
      const to = filters.to ? Number(filters.to) : null;
      const matchFrom = from === null || year >= from;
      const matchTo = to === null || year <= to;

      return matchSearch && matchArtist && matchLocation && matchFrom && matchTo;
    });
  }, [filters, searchValue]);

  return (
    <>
      <Header isLightTheme={isLightTheme} onToggleTheme={toggleTheme} />

      <main>
        <GalleryControls
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          isFilterOpen={isFilterOpen}
          onOpenFilter={() => setIsFilterOpen(true)}
          onCloseFilter={() => setIsFilterOpen(false)}
          accordionState={accordionState}
          onToggleAccordion={toggleAccordion}
          filters={filters}
          onChangeFilters={setFilters}
          onClearFilters={clearFilters}
        />

        <GalleryGrid items={filteredItems} />
        <Pagination />
      </main>
    </>
  );
}
