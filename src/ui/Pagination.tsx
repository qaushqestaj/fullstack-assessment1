import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  // Show current page and up to the next 2 pages (total 3 upcoming)
  const pages: number[] = [];
  for (let p = currentPage; p <= Math.min(currentPage + 2, totalPages); p++) {
    pages.push(p);
  }

  return (
    <div className="pagination">
      <button
        className="arrow-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={prevDisabled}
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="arrow-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={nextDisabled}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
