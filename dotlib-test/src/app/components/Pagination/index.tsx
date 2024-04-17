import React from "react";

import {
  ContainerPagination,
  ButtonPagination,
  TextPagination,
} from "./styles";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ContainerPagination>
      <ButtonPagination
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </ButtonPagination>
      <TextPagination style={{ color: "black" }}>
        Página {currentPage} de {totalPages}
      </TextPagination>
      <ButtonPagination
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        Próximo
      </ButtonPagination>
    </ContainerPagination>
  );
};

export default Pagination;
