import React from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Flex direction='column' align='center' justify='center'
        bg="#1a202c"
        color="white"
        h="100vh"
    >
            {children}
        </Flex>
    )
}