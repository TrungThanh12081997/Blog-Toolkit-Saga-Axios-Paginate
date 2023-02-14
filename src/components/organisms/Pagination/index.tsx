/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

export interface PaginationProps {
  totalPage: number;
  pageCurrent?: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  handleChangePage?: (val: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  marginPagesDisplayed = 0,
  pageRangeDisplayed = 5,
  pageCurrent,
  handleChangePage,
}) => {
  const { pathname, search } = useLocation();
  const [pageActive, setPageActive] = useState(0);

  const handlePageClick = useCallback((currentPage: { selected: number }) => {
    const { selected } = currentPage;
    if (handleChangePage) {
      handleChangePage(selected + 1);
    }
    setPageActive(selected);
  }, [handleChangePage]);

  useEffect(() => {
    const pageEle = document.querySelectorAll(".gumac-link-page");
    if (pageEle?.length) {
      pageEle.forEach((e) => {
        if (e.textContent && e.textContent?.length === 1 && Number(e.textContent) < 10) {
          // eslint-disable-next-line no-param-reassign
          e.textContent = `0${e.textContent}`;
        }
      });
    }
  }, [pageActive]);

  useEffect(() => {
    setPageActive(pageCurrent ? pageCurrent - 1 : 0);
  }, [pageCurrent]);

  if (totalPage < 1) {
    return null;
  }

  return (
    <div className="m-pagination">
      <ReactPaginate
        previousLabel={null}
        nextLabel={null}
        breakLabel={(null)}
        pageCount={totalPage}
        forcePage={pageActive}
        onPageChange={handlePageClick}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        containerClassName="main"
        breakClassName="page break"
        previousClassName="page"
        nextClassName="page"
        pageClassName="page"
        activeClassName="active-page"
        pageLinkClassName="link-page gumac-link-page"
        breakLinkClassName="link-page link-break"
        nextLinkClassName="link-page link-next"
        previousLinkClassName="link-page link-previous"
        hrefBuilder={(pageIndex:any) => {
          const param = new URLSearchParams(search);
          param.set("page", pageIndex.toString());
          return (`${pathname}?${param}`);
        }}
        ariaLabelBuilder={(pageIndex: number, selected: number) => (selected ? `Page ${pageIndex} is your current` : `Page ${pageIndex}`)}
      />
    </div>
  );
};

Pagination.defaultProps = {
  pageCurrent: undefined,
  marginPagesDisplayed: 0,
  pageRangeDisplayed: 5,
};

export default Pagination;
