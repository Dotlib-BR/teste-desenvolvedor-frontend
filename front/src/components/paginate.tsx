import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    handlePreviousPage: () => void
    handleNextPage: () => void
    currentPage: number
    totalPages: number
  }
  
  const Paginate: React.FC<IProps> = ({ handlePreviousPage, handleNextPage, currentPage, totalPages }) => (
    <Flex justify="center" align="center" mt="2" gap="2">
      <Button onClick={handlePreviousPage} isDisabled={currentPage === 1} padding={0}>
        <ChevronLeftIcon color="black" />
      </Button>
  
      <span>
        {currentPage} de {totalPages}
      </span>
  
      <Button onClick={handleNextPage} isDisabled={currentPage === totalPages} padding={0}>
        <ChevronRightIcon color="black" />
      </Button>
    </Flex>
  )
  
  export { Paginate }