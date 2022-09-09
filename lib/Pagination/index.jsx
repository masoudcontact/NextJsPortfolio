import React from "react";
import classes from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <nav aria-label="Page navigation example" className={classes.mypagination}>
      <ReactPaginate
        previousLabel={"«"}
        marginPagesDisplayed={2}
        pageCount={pagesCount}
        breakLabel={"..."}
        nextLabel={"»"}
        containerClassName={"pagination"}
        previousClassName={"page-item"}
        pageClassName={"page-item"}
        breakClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
        onPageChange={(data) => onPageChange(data.selected + 1)}
      />
    </nav>
  );
};

export default Pagination;
