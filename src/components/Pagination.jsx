import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center p-5">
      <ul className="pagination">
        <li className="page-item">
          <a onClick={previousPage} className="page-link">
            Prev
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={nextPage} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
