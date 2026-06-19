export default function FilterGroup({
  title,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div className={`filter-group ${isOpen ? 'open' : ''}`}>
      <button className="filter-group-header" type="button" onClick={onToggle}>
        <h3>{title}</h3>
        <span className="toggle-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className="filter-group-content">{children}</div>
    </div>
  );
}
