import { TableContainer, Table, Tr, Th, Thead, Td, Tbody, Flex } from "@chakra-ui/react";
import { IListItemsResponse } from "../services/module/general/interface";
import * as utils from '../utils'
import { useNavigate } from "react-router-dom";

interface IDrugListProps {
    drugs: IListItemsResponse[];
}

const DrugList = ({drugs}: IDrugListProps) => {
    const navigate = useNavigate()
    
    const handleRedirect = (id: string) => () => {
        navigate(`/drugs/${id}`)
    }

return (
    <Flex w="100%" minH="60vh">
        <TableContainer
            border='1px'
            borderColor='gray.200'
            borderRadius='md'
            w="100%"
        >
        <Table size='md'>
            <Thead>
                <Tr>
                    <Th fontSize='larger' py="2">
                        Nome
                    </Th>
                    <Th fontSize='larger' py="2">
                        Publicado em
                    </Th>
                    <Th fontSize='larger' py="2">
                        Empresa
                    </Th>
            </Tr>
            </Thead>
            <Tbody>
                {
                    drugs && drugs?.map((drug, index) => (
                        <Tr key={index} _hover={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: 'md',
                            bg: '#97a8bd88'
                        }}
                            onClick={handleRedirect(drug.id)}
                        >
                            <Td isTruncated maxW="300px">
                                {drug.name}
                            </Td>
                            <Td isTruncated maxW="300px">
                                {utils.formatters.formatDate(drug.published_at)}
                            </Td>
                            <Td isTruncated maxW="300px">
                                {drug.company}
                            </Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
        </TableContainer>
</Flex>
);
};

export default DrugList;