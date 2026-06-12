import { SearchIcon } from './icons';

export default function SearchBox({ value, onChange }) {
  return (
    <div className="search-box">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Painting title"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
