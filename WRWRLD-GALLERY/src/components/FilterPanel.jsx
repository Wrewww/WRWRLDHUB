import FilterGroup from './FilterGroup';
import { CloseIcon } from './icons';

export default function FilterPanel({
  isOpen,
  onClose,
  accordionState,
  onToggleAccordion,
  filters,
  item,
  onChangeFilters,
  onClearFilters,
}) {
  const updateField = (field, value) => {
    onChangeFilters((prev) => ({ ...prev, [field]: value }));
  const uniqueArtists = [...new Set(galleryItems.map(item => item.artist))];
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <button className="close-filter" type="button" aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </button>

      <div className="filter-content">
        <FilterGroup
          title="ARTIST"
          isOpen={accordionState.artist}
          onToggle={() => onToggleAccordion('artist')}
        >
          <div className="custom-select">
            <select
              value={filters.artist}
              onChange={(event) => updateField('artist', event.target.value)}
            >
            <option value="">Select the artist</option>
            {uniqueArtists.map(artist => (
            <option key={artist} value={artist}>
              {artist}
            </option>
            ))}
            </select>
          </div>

        </FilterGroup>

        <FilterGroup
          title="LOCATION"
          isOpen={accordionState.location}
          onToggle={() => onToggleAccordion('location')}
        >
          <div className="custom-select">
            <select
              value={filters.location}
              onChange={(event) => updateField('location', event.target.value)}
            >
              <option value="">Select the location</option>
              <option value="LOUVRE MUSEUM">Louvre Museum</option>
              <option value="THE HERMITAGE">The Hermitage</option>
              <option value="TATE MODERN">Tate Modern</option>
            </select>
          </div>
        </FilterGroup>

        <FilterGroup
          title="YEARS"
          isOpen={accordionState.years}
          onToggle={() => onToggleAccordion('years')}
        >
          <div className="year-inputs">
            <input
              type="text"
              placeholder="From"
              value={filters.from}
              onChange={(event) => updateField('from', event.target.value)}
            />
            <span className="separator">—</span>
            <input
              type="text"
              placeholder="To"
              value={filters.to}
              onChange={(event) => updateField('to', event.target.value)}
            />
          </div>
        </FilterGroup>

        <div className="filter-footer">
          <button className="btn-show-results" type="button" onClick={onClose}>
            SHOW THE RESULTS
          </button>
          <button className="btn-clear" type="button" onClick={onClearFilters}>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}
