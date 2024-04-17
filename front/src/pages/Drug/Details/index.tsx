import { Box, Flex, Heading, Image, Text} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { Layout } from "../../../components/layout"
import * as api from '../../../services/module'
import { IListItemsResponse } from "../../../services/module/general/interface"
import { useEffect, useState } from "react"

const src = '//io.convertiez.com.br/m/drogalider/shop/products/images/23326/medium/nitazoxanida-eurofarma-20mgml-caixa-com-1-frasco-com-100ml-de-po-para-suspensao-de-uso-oral-seringa-dosadora_17908.jpg'

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [drug, setDrug] = useState({} as IListItemsResponse)

    const fetchData = async () => {
        if(!id) return 

        try {
            const response = await api.general.getById(id)
            setDrug(response)            
        } catch (error) {
            console.error({
                title: 'Erro',
                description: 'Erro ao buscar medicamento',
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])
    

    return (
        <Layout>
           <Flex w="80%" direction="column" align="center" justify="center" maxW="1000px">
               <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
                   <Heading as="h2" size="lg" mb={4}>
                       {drug?.name}
                   </Heading>

                <Flex w="100%" justify="space-between">

                   <Image src={src} alt={drug?.name} mb={4} />

                    <Flex flexDir='column' w="100%" alignContent='center' px={6} gap="3">
                    <Text fontSize='30px'>
                        Detalhes do medicamento
                    </Text>

                    <Text isTruncated w="400px">
                      <strong>Laboratório: </strong>  {drug?.company}
                    </Text>

                    <Text isTruncated w="400px">
                      <strong>Ativos: </strong>  {drug?.active_principles?.[0].name}   
                    </Text>

                    <Text isTruncated w="400px">
                      <strong>Tipo da bula: </strong>  {drug?.documents?.[0].type}
                    </Text>

                    <Text isTruncated w="400px" textDecoration='underline'>
                         <a href={drug?.documents?.[0].url} target="_blank" rel="noreferrer">
                        <strong>Baixe a bula aqui</strong>
                        </a>
                    </Text>

                    </Flex>
                </Flex>

                </Box>
              </Flex>
        </Layout>
    )
}

export { Details }