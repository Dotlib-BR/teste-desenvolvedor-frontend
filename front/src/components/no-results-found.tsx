import { Flex, Text, Image } from "@chakra-ui/react";
import CheckPoint from '../assets/Check Point@2x.png'

export const NoResultsFound: React.FC = () => {
    return (
            <Flex w="100%" justify="center" minH="60vh">
              <Flex
                justify="center"
                align="center"
                objectFit="cover"
                w={["300px", "300px", "370px"]}
                h={["fit-content", "fit-content", "270px"]}
                flexDirection="column"
                gap="10px"
              >
                <Image src={CheckPoint} alt="Check Point Image" width={20} height={20} />

                <Text w="100%" textAlign="center" fontSize={["18px", "18px", "25px"]} color="#ffffff">
                  Nenhum resultado encontrado!
                </Text>
                <Text w="100%" textAlign="center" fontSize={["13px", "13px", "15px"]} color="#ffffff" px="40px">
                  Tente novamente, busque por palavras chaves e objetivas.
                </Text>
              </Flex>
            </Flex>
    )
}