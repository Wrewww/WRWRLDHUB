import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import GalleryControls from "./components/GalleryControls";
import GalleryGrid from "./components/GalleryGrid";
import Pagination from "./components/Pagination";
import { galleryItems } from "./data/galleryItems";

const ITEMS_PER_PAGE = 6;
const initialAccordionState = {
  artist: false,
  location: false,
  years: false,
};

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [accordionState, setAccordionState] = useState(initialAccordionState);
  const [filters, setFilters] = useState({
    artist: "",
    location: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    document.body.classList.toggle("light", isLightTheme);
    return () => document.body.classList.remove("light");
  }, [isLightTheme]);

  const toggleTheme = () => setIsLightTheme((prev) => !prev);

  const toggleAccordion = (key) => {
    setAccordionState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setFilters({ artist: "", location: "", from: "", to: "" });
    setSearchValue("");
    setCurrentPage(1);
  };

  const artists = useMemo(
    () => [...new Set(galleryItems.map((item) => item.artist))].sort((a, b) => a.localeCompare(b)),
    [],
  );

  const locations = useMemo(
    () => [...new Set(galleryItems.map((item) => item.location))].sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return galleryItems.filter((item) => {
      const matchSearch =
        !normalizedSearch ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.artist.toLowerCase().includes(normalizedSearch) ||
        item.location.toLowerCase().includes(normalizedSearch);
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

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchValue]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

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
          artists={artists}
          locations={locations}
        />

        <GalleryGrid items={paginatedItems} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
}
