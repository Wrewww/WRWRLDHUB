import { FilterIcon } from './icons';

export default function FilterButton({ onClick }) {
  return (
    <button className="filter-btn" type="button" aria-label="Открыть фильтры" onClick={onClick}>
      <FilterIcon />
    </button>
  );
}
