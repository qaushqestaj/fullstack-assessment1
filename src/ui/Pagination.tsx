import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination Component
 *
 * Displays pagination controls:
 * - Previous / Next arrows
 * - Current and next two pages (max 3 buttons shown)
 *
 * Hidden when only 1 or 0 pages.
 */

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Hide pagination if only one page
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  // Show current page and up to the next 2 pages
  const pages: number[] = [];
  for (let p = currentPage; p <= Math.min(currentPage + 2, totalPages); p++) {
    pages.push(p);
  }

  return (
    <div className="pagination">
      {/* Previous button */}
      <button
        className="arrow-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={prevDisabled}
      >
        &lt;
      </button>

      {/* Page number buttons */}
      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
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
