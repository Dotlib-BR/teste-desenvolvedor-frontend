
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = ({ currentPage, prevPage, nextPage, disabledPrev, disabledNext }: any) => {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={disabledPrev}>
        <IoIosArrowBack />
      </button>
      <button onClick={nextPage} disabled={disabledNext}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;