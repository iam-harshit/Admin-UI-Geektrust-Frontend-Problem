import React from "react";

function Pagination({ currentPage, totalPages, changePage }) {
  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <button
        className="page-btn"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        const isActive = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            onClick={() => changePage(pageNum)}
            className={isActive ? "active" : "page-btn"}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        className="page-btn"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
      <button
        className="page-btn"
        onClick={() => changePage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
