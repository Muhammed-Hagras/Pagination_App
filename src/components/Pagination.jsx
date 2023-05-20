import React, { useEffect, useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const [myPageNumper, setmyPageNumper] = useState(0);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setmyPageNumper(currentPage);
  }, [currentPage]);
  console.log({ myPageNumper });

  return (
    <nav className="d-flex justify-content-center p-5">
      <ul className="pagination">
        <li className="page-item">
          <a onClick={previousPage} className="page-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </a>
        </li>
        {pageNumbers.slice(myPageNumper - 1, myPageNumper + 2).map((num) => (
          <li key={num} className="page-item">
            <a onClick={() => paginate(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={nextPage} className="page-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
