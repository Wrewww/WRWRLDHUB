import SearchBox from './SearchBox';
import FilterButton from './FilterButton';
import FilterPanel from './FilterPanel';

export default function GalleryControls(props) {
  return (
    <>
      <section className="controls">
        <SearchBox value={props.searchValue} onChange={props.onSearchChange} />
        <FilterButton onClick={props.onOpenFilter} />
      </section>

      <FilterPanel
        isOpen={props.isFilterOpen}
        onClose={props.onCloseFilter}
        accordionState={props.accordionState}
        onToggleAccordion={props.onToggleAccordion}
        filters={props.filters}
        onChangeFilters={props.onChangeFilters}
        onClearFilters={props.onClearFilters}
      />
    </>
  );
}
