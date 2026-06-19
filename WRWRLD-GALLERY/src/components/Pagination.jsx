function getVisiblePages(currentPage, totalPages) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "dots", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "dots", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "dots-left", currentPage - 1, currentPage, currentPage + 1, "dots-right", totalPages];
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <section className="pagination" aria-label="Pagination">
      <button
        className="page prev"
        type="button"
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pages.map((page, index) => {
        if (typeof page !== "number") {
          return (
            <div key={`${page}-${index}`} className="dots" aria-hidden="true">
              ...
            </div>
          );
        }

        return (
          <button
            key={page}
            className={`page ${page === currentPage ? "active" : ""}`}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className="page next"
        type="button"
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </section>
  );
}
