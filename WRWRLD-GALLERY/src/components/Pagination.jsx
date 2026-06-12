const pages = ['1', '2', '3'];

export default function Pagination() {
  return (
    <section className="pagination" aria-label="Pagination">
      <button className="page prev" type="button" aria-label="Previous page">
        &lt;
      </button>
      {pages.map((page, index) => (
        <button
          key={page}
          className={`page ${index === 0 ? 'active' : ''}`}
          type="button"
        >
          {page}
        </button>
      ))}
      <div className="dots" aria-hidden="true">
        ...
      </div>
      <button className="page" type="button">
        9
      </button>
      <button className="page next" type="button" aria-label="Next page">
        &gt;
      </button>
    </section>
  );
}
